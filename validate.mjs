// Checks dashboard/data.js before pushing. Run: node validate.mjs
// Fails on: metrics without a source or date, copy that breaks the content rules,
// plan days whose weekday label does not match the date, and unknown week fields.
import { readFileSync } from "node:fs";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const dir = dirname(fileURLToPath(import.meta.url));
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(readFileSync(join(dir, "data.js"), "utf8"), ctx);
const R = ctx.window.REPORT;

const errors = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);

// Copy rules (CLAUDE.md and handover/08). Patterns run on every string in the data.
const banned = [
  [/—|–/, "em or en dash"],
  [/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u, "emoji"],
  [/(^|\s)#[A-Za-z]/, "hashtag"],
  [/!/, "exclamation mark"],
  [/\b(heal(s|ing|ed)?|cure[sd]?|therap\w+|diagnos\w+|tinnitus|menopause|kundalini crisis|alcohol withdrawal)\b/i, "health claim"],
  [/\b(dalai lama|mantak chia|khenpo gelek|yogi vinod)\b/i, "living teacher named"],
  [/\b(15|fifteen)\s*(h|hrs?|hours)\b/i, "internal hours"],
  [/internal (plan|operator)|🔒|operator plan|\bcredits?\b/i, "internal wording"],
  [/\bno catch\b|\bnothing locked\b|\bno paywall\b|\bdeeper modules\b/i, "banned offer wording"],
  [/\b(guaranteed?|skyrocket|unlock your potential)\b/i, "hype wording"]
];
// Paths where a banned word is the point (for example the Reddit safety rule).
const allowAt = [[/^reddit\.principles/, /health claim/]];

function walkStrings(v, path, fn) {
  if (typeof v === "string") fn(v, path);
  else if (Array.isArray(v)) v.forEach((x, i) => walkStrings(x, `${path}[${i}]`, fn));
  else if (v && typeof v === "object") for (const k of Object.keys(v)) walkStrings(v[k], path ? `${path}.${k}` : k, fn);
}
walkStrings(R, "", (str, path) => {
  for (const [re, name] of banned) {
    if (!re.test(str)) continue;
    if (allowAt.some(([p, n]) => p.test(path) && n.test(name))) continue;
    if (name === "health claim" && /no health or therapy claims/i.test(str)) continue; // describes the rule itself
    err(path, `${name}: "${str.slice(0, 70)}"`);
  }
});

const isNum = (v) => typeof v === "number" && Number.isFinite(v);
const dateOk = (s) => typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(s));

function checkMetric(m, where) {
  if (!m.label) err(where, "metric has no label");
  if (m.value === null || m.value === undefined) {
    if (!m.note && !m.source) err(where, "empty metric needs a note or source so the page can say why");
    return;
  }
  if (!m.source) err(where, `"${m.label}" has a value but no source`);
  if (!dateOk(m.asOf)) err(where, `"${m.label}" has a value but no valid asOf date`);
  if (m.prev !== undefined && m.prev !== null && !isNum(m.prev)) err(where, `"${m.label}" prev must be a number`);
  if (m.value === 0 && m.source === undefined) err(where, `"${m.label}" shows 0 without a source`);
}

const ids = new Set();
R.weeks.forEach((w, i) => {
  const at = `weeks[${i}] (${w.id})`;
  if (ids.has(w.id)) err(at, "duplicate id");
  ids.add(w.id);
  for (const k of ["id", "number", "title", "covers", "summary", "status", "actions", "channels", "achieved"]) if (w[k] === undefined) err(at, `missing ${k}`);
  if (w.status && !["ontrack", "watch", "atrisk"].includes(w.status.level)) err(at, "status.level must be ontrack, watch or atrisk");
  if (i > 0 && w.number >= R.weeks[i - 1].number) err(at, "weeks must be newest first with falling numbers");
  if (w.northStar) checkMetric(w.northStar, `${at}.northStar`);
  (w.funnel?.stages || []).forEach((m, j) => checkMetric(m, `${at}.funnel.stages[${j}]`));
  (w.channels || []).forEach((c, j) => (c.metrics || []).forEach((m, k) => checkMetric(m, `${at}.channels[${j}].metrics[${k}]`)));
  (w.reach || []).forEach((p, j) => {
    const at2 = `${at}.reach[${j}]`;
    if (!p.title || !p.source) err(at2, "panel needs a title and source");
    if (!dateOk(p.asOf)) err(at2, "panel needs a valid asOf date");
    [...(p.bars || []), ...(p.share || [])].forEach((b) => { if (!isNum(b.value)) err(at2, `"${b.label}" needs a numeric value`); });
    if (p.share) { const sum = p.share.reduce((s, b) => s + b.value, 0); if (Math.abs(sum - 100) > 1) err(at2, `shares add up to ${sum}, not 100`); }
  });
  (w.workstreams || []).forEach((g, j) => g.items.forEach((x, k) => {
    if (!["done", "progress"].includes(x.state)) err(`${at}.workstreams[${j}].items[${k}]`, "state must be done or progress");
  }));
  (w.hiccups || []).forEach((x, j) => { if (!x.what || !x.fix) err(`${at}.hiccups[${j}]`, "needs what and fix"); });
  (w.actions || []).forEach((a, j) => {
    if (!["high", "normal"].includes(a.priority)) err(`${at}.actions[${j}]`, "priority must be high or normal");
    if (!a.unblocks) err(`${at}.actions[${j}]`, "say what it unblocks");
  });
  (w.shipped || []).forEach((x, j) => {
    if (!["done", "waiting", "moved", "dropped"].includes(x.state)) err(`${at}.shipped[${j}]`, "bad state");
    if (x.state !== "done" && !x.reason) err(`${at}.shipped[${j}]`, "anything not done needs a reason");
  });
  (w.next?.days || []).forEach((d, j) => {
    if (!dateOk(d.date)) return err(`${at}.next.days[${j}]`, "needs a date");
    const real = new Date(d.date + "T12:00:00Z").toLocaleDateString("en-US", { weekday: "short", timeZone: "UTC" });
    if (!d.day.startsWith(real)) err(`${at}.next.days[${j}]`, `label "${d.day}" but ${d.date} is a ${real}`);
  });
});

if (!R.agreement.hours || !/up to 20 hours/i.test(R.agreement.hours)) err("agreement.hours", 'must say "up to 20 hours a week"');
if (!/^[^@\s]+@[^@\s]+$/.test(R.contact)) err("contact", "not an email");

if (errors.length) {
  console.error(`\n${errors.length} problem${errors.length === 1 ? "" : "s"} found:\n`);
  errors.forEach((e) => console.error(" - " + e));
  process.exit(1);
}
console.log(`OK: ${R.weeks.length} weeks checked, no problems.`);
