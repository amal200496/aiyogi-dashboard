// Weekly report data. Edit this file each week; the page renders from it.
window.REPORT = {
  owner: "Wake",
  campaign: { name: "AIYogi Growth Campaign", start: "2026-10-01", end: "2027-01-31", totalWeeks: 17 },
  contact: "marketing.aiyogi@proton.me",
  reportWeekLabel: "Week 2 report · covers 1 Oct – 10 Oct 2026",

  summary:
    "Foundation week is done. Our marketing engine (Okara) is set up for AIYogi, the X and LinkedIn profiles are live, and the first launch post is published on each. Two things hold us back: the YouTube account we were given is the wrong one, and the website is not recording visits yet, so we can't see who arrives after clicking.",

  actions: [
    {
      id: "youtube",
      priority: "high",
      title: "Send access to the correct YouTube channel",
      detail:
        "The YouTube ownership we received is for the wrong account. Please invite our marketing address as Manager on the right AIYogi channel (YouTube Studio → Settings → Permissions → Invite), or tell us which Google address to use. Thumbnails for all videos are on hold until this arrives.",
      owner: "Wake"
    },
    {
      id: "approve",
      priority: "high",
      title: "Approve next week's posts",
      detail:
        "7 X posts and 3 LinkedIn posts are drafted below. Reply 'approved' or send edits. Anything not changed within 48 hours is published as written.",
      owner: "Wake"
    },
    {
      id: "analytics",
      priority: "high",
      title: "Confirm your website analytics",
      detail:
        "Our tools show zero recorded visits on aiyogi.ai, so analytics is either missing or broken. Tell us which tool you use (Google Analytics?) and add marketing.aiyogi@proton.me as a viewer, or ask your developer to install it.",
      owner: "Wake"
    },
    {
      id: "hosting",
      priority: "medium",
      title: "Decide where blog articles will live",
      detail:
        "aiyogi.ai has no blog section. Options: (a) add articles as pages in the app through GitHub, (b) connect a simple CMS, (c) a separate /learn site. We recommend (a). We need GitHub access or your developer's contact.",
      owner: "Wake"
    },
    {
      id: "teachers",
      priority: "medium",
      title: "List what we may say about each teacher",
      detail:
        "Posts say the guides are 'inspired by' traditions. Please tell us for each named teacher whether we may use their name and in what wording. Until then we avoid implying endorsement.",
      owner: "Wake"
    },
    {
      id: "okara",
      priority: "medium",
      title: "Confirm Okara billing sits with AIYogi",
      detail:
        "Okara (Pro plan, $249 per month) runs the content engine. Please confirm the plan is billed to and owned by AIYogi, and that you are happy with the monthly review in which we decide to keep, downgrade or cancel.",
      owner: "Wake"
    }
  ],

  achieved: [
    { when: "Week 1", text: "4-month campaign plan, scope and working agreement written (1 Oct – 31 Jan)." },
    { when: "Week 1", text: "Site audit: found that aiyogi.ai loads mostly through JavaScript, so Google and AI assistants may see little of it, and that visits are not being recorded." },
    { when: "Week 1", text: "Okara AI marketing workspace created for AIYogi, with its data encrypted. Google Search Console is already connected." },
    { when: "Week 1", text: "Dedicated marketing email created: marketing.aiyogi@proton.me." },
    { when: "Week 1", text: "X account @aiyogi_ai created with profile photo and bio, connected to Okara." },
    { when: "Week 1", text: "LinkedIn company Page 'AIYogi' created (logo, tagline, About text, website link) and connected to Okara." },
    { when: "Week 1", text: "Profile kit written: bios for X, LinkedIn, YouTube, Reddit, Instagram and TikTok, tracked links, image briefs." },
    { when: "Week 2", text: "Launch posts published on X and LinkedIn (next week's plan builds on them)." },
    { when: "Week 2", text: "Okara prepared a first pool of work: 51 X ideas, 48 LinkedIn posts, 51 article topics, 96 Reddit opportunities, 85 SEO fixes and 6 gaps where AI assistants cite competitors instead of AIYogi. One article draft exists. Nothing from this pool is published without review." },
    { when: "Week 2", text: "Content safety rules set: no health or therapy claims, no implied endorsement by living teachers, no invented testimonials. Okara's first drafts broke these rules and were held back." }
  ],

  metrics: [
    { label: "X posts published", value: "1", note: "@aiyogi_ai" },
    { label: "LinkedIn posts published", value: "1", note: "AIYogi Page" },
    { label: "Followers (X / LinkedIn)", value: "0 / 0", note: "Day 1 baseline" },
    { label: "Google impressions (7 days)", value: "51", note: "from Search Console" },
    { label: "Google clicks (7 days)", value: "5", note: "9.8% click rate" },
    { label: "Visits recorded on site", value: "Not tracked", note: "analytics missing, see actions" }
  ],
  metricsNote:
    "Link clicks on X and LinkedIn can be read inside each platform's post analytics. Visits on aiyogi.ai cannot be counted until site analytics is fixed.",

  weekPlan: {
    label: "Next week · 12 – 18 Oct 2026",
    days: [
      { day: "Mon 12", items: ["X post 1 and LinkedIn post 1 go live", "Rewrite Okara workspace description and Brand Voice to enforce the safety rules"] },
      { day: "Tue 13", items: ["X post 2", "Finish Okara Article agent: review and approve content pillars"] },
      { day: "Wed 14", items: ["X post 3 and LinkedIn post 2", "Reddit account created; warm-up begins (no links)"] },
      { day: "Thu 15", items: ["X post 4", "Fix the three highest-impact page headings Okara flagged (via GitHub if access is given)"] },
      { day: "Fri 16", items: ["X post 5 and LinkedIn post 3", "Weekly report built and published"] },
      { day: "Sat 17", items: ["X post 6", "Dashboard refreshes at 12:00 am IST (Fri 2:30 pm Florida time)"] },
      { day: "Sun 18", items: ["X post 7", "Review link clicks from the week's posts"] }
    ],
    dependsOn: "Blocked until you act: YouTube thumbnails (need correct channel access), blog articles (need hosting decision), site visit reporting (need analytics)."
  },

  posts: {
    note: "Going forward we ship 7 X posts and 3 LinkedIn posts every week. All copy follows the safety rules and uses 'inspired by' wording.",
    status: "Awaiting your approval",
    x: [
      "Mon: Most spiritual apps promise you'll feel better in minutes. AIYogi refuses. Depth takes time, and the traditions it draws on never pretended otherwise.",
      "Tue: Ask the guides one honest question this week. Not 'how do I relax?' Try 'what am I avoiding?' First conversations are free. aiyogi.ai",
      "Wed: Body first. Then energy and sound. Then the nature of mind. The AIYogi path is graduated on purpose.",
      "Thu: 81 guides. 12 languages. Text or voice. One conversation at a time.",
      "Fri: AIYogi is inspired by Himalayan, Taoist and nondual traditions. It is an educational and contemplative tool, not medical or mental-health care.",
      "Sat: Silence is a technology too. Tonight: ten minutes, no input. Sit, and notice what shows up.",
      "Sun: What would change if you stopped trying to feel better and started trying to see clearly?"
    ],
    linkedin: [
      "Mon: Why we built a graduated path instead of a quick-fix app: body, then energy and sound, then the nature of mind. (Short essay, about 150 words.)",
      "Wed: How we think about AI and lineage. The guides are inspired by traditions. They don't replace a living teacher, and we say so plainly. (About 150 words.)",
      "Fri: Dharma should flow freely, but compute costs money. How AIYogi handles free access and the suggested $9 monthly support. (About 120 words.)"
    ]
  },

  reddit: {
    status: "Account not yet created. We will create it with the marketing email.",
    principles: [
      "One clearly branded team account. Affiliation disclosed in every thread.",
      "Weeks 1–2: comment helpfully with no links, to build standing.",
      "Weeks 3 onward: about 5 thoughtful replies per week, one link per ten replies at most, and only where it answers the question.",
      "Read each community's rules first. If a community bans brand accounts, we stay out.",
      "Never reply on sensitive threads (trauma, addiction, self-harm, sexual topics). Okara's automatic matches are reviewed by a person before anything is posted."
    ],
    communities: ["r/Meditation", "r/taoism", "r/Buddhism", "r/nonduality", "r/Dzogchen", "r/Yoga"],
    measure: "Replies kept (not removed), upvotes, and referral clicks once site analytics works."
  },

  okara: [
    { item: "Workspace for aiyogi.ai", status: "done" },
    { item: "Google Search Console", status: "done" },
    { item: "X agent", status: "done", note: "connected; posts need approval" },
    { item: "LinkedIn agent", status: "done", note: "connected to the Page, not a personal profile" },
    { item: "Article agent", status: "progress", note: "reading site; content pillars need review" },
    { item: "Reddit agent", status: "todo", note: "waits for the Reddit account" },
    { item: "Brand Voice and safety rules", status: "progress", note: "rewrite scheduled for 12 Oct" },
    { item: "Site analytics (Google Analytics)", status: "blocked", note: "needs your input" },
    { item: "Publishing destination for articles", status: "blocked", note: "needs your decision" },
    { item: "Competitor and AI-citation tracking", status: "progress", note: "first scan under way" }
  ],

  youtube: {
    status: "Blocked: waiting for correct channel access",
    plan: [
      "You send Manager access to the correct AIYogi channel.",
      "We list every video and its current thumbnail and views.",
      "We design a new thumbnail set in the AIYogi look (dark, gold, no faces of teachers), starting with the most-viewed videos.",
      "You approve a first batch of five. Then we roll out the rest and measure click-through."
    ]
  },

  schedule: {
    note: "This dashboard refreshes every Saturday at 12:00 am IST. Times are shown in Florida time.",
    cronUtc: { weekday: 5, hour: 18, minute: 30 } // Friday 18:30 UTC = Saturday 00:00 IST
  }
};
