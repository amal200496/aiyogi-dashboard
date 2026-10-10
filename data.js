// Weekly report data. Edit this file each week; the page renders from it.
window.REPORT = {
  owner: "Wake",
  campaign: { name: "AIYogi Growth Campaign", start: "2026-10-01", end: "2027-01-31", totalWeeks: 17 },
  contact: "marketing.aiyogi@proton.me",
  reportWeekLabel: "Covers 1-10 Oct 2026",

  summary:
    "Setup is done and the first posts are live on X and LinkedIn. We need ownership of the new YouTube channel. Everything else is handled by our team.",

  actions: [
    {
      id: "youtube",
      priority: "high",
      title: "Grant ownership of the new YouTube channel",
      detail:
        "In YouTube Studio go to Settings → Permissions → Invite and add marketing.aiyogi@proton.me as Owner (or Manager if Owner is not offered). Thumbnails for all videos start as soon as access arrives.",
      owner: "Wake"
    }
  ],

  achieved: [
    { when: "Week 1", text: "4-month campaign plan, scope and working agreement written (1 Oct to 31 Jan)." },
    { when: "Week 1", text: "Site audit: found that aiyogi.ai loads mostly through JavaScript, so Google and AI assistants may see little of it, and that visits are not being recorded." },
    { when: "Week 1", text: "Okara AI marketing workspace created for AIYogi, with its data encrypted. Google Search Console is already connected." },
    { when: "Week 1", text: "Dedicated marketing email created: marketing.aiyogi@proton.me." },
    { when: "Week 1", text: "X account @aiyogi_ai created with profile photo and bio, connected to Okara." },
    { when: "Week 1", text: "LinkedIn company Page 'AIYogi' created (logo, tagline, About text, website link) and connected to Okara." },
    { when: "Week 1", text: "Profile kit written: bios for X, LinkedIn, YouTube, Reddit, Instagram and TikTok, tracked links, image briefs." },
    { when: "Week 2", text: "Launch posts published on X and LinkedIn." },
    { when: "Week 2", text: "Okara prepared a first pool of work: 51 X ideas, 48 LinkedIn posts, 51 article topics, 96 Reddit opportunities, 85 SEO fixes and 6 gaps where AI assistants cite competitors instead of AIYogi. One article draft exists. Nothing from this pool is published without review." },
    { when: "Week 2", text: "Content safety rules set: no health or therapy claims, no implied endorsement by living teachers, no invented testimonials. Okara's first drafts broke these rules and were held back." },
    { when: "Week 2", text: "This client dashboard published, refreshed every Saturday at 12:00 am IST." }
  ],

  metrics: [
    { label: "Posts published", value: "2", note: "1 on X, 1 on LinkedIn" },
    { label: "Followers", value: "0", note: "Starting point for both accounts" },
    { label: "Google search, last 7 days", value: "51 views, 5 clicks", note: "From Search Console" },
    { label: "Visits to aiyogi.ai", value: "Not tracked yet", note: "We are setting up analytics" }
  ],
  metricsNote:
    "Link clicks on X and LinkedIn can be read inside each platform's post analytics. Visits on aiyogi.ai cannot be counted until site analytics is connected.",

  weekPlan: {
    label: "12-18 Oct 2026",
    days: [
      { day: "Mon 12", items: ["X post 1 and LinkedIn post 1 go live", "Rewrite Okara workspace description and Brand Voice to enforce the safety rules"] },
      { day: "Tue 13", items: ["X post 2", "Finish Okara Article agent: review and approve content pillars"] },
      { day: "Wed 14", items: ["X post 3 and LinkedIn post 2", "Reddit account created; warm-up begins (no links)"] },
      { day: "Thu 15", items: ["X post 4", "Prepare ready-to-apply fixes for the three highest-impact page headings Okara flagged"] },
      { day: "Fri 16", items: ["X post 5 and LinkedIn post 3", "Weekly report built and published"] },
      { day: "Sat 17", items: ["X post 6", "Dashboard refreshes at 12:00 am IST (Fri 2:30 pm Florida time)"] },
      { day: "Sun 18", items: ["X post 7", "Review link clicks from the week's posts"] }
    ],
    dependsOn: "Waiting on you: ownership of the new YouTube channel, so thumbnails can start. Everything else in this plan runs without anything from you."
  },

  expect: {
    see: [
      "7 X posts and 3 LinkedIn posts published, Monday to Sunday.",
      "The Okara workspace rewritten so every agent follows the content rules.",
      "Article content pillars approved, and the first article ready to publish.",
      "A Reddit account live and warming up, with no promotional links.",
      "A Friday report and a refreshed dashboard (Fri 2:30 pm Florida time)."
    ],
    notYet: [
      "No traffic spike. Month 1 is foundation work, and search growth shows from December.",
      "No ranking or revenue promises. Early signals are post clicks, followers and how Reddit receives us.",
      "No visit numbers from aiyogi.ai until site analytics is connected.",
      "No YouTube thumbnails until channel ownership is granted."
    ],
    how: [
      "We reply to messages within 1 business day.",
      "Routine posts and replies follow the agreed content rules and go out without waiting on you. Ask us to change or pull anything, any time.",
      "Anything new asks you first: new claims, teacher names, pricing, health topics, partnerships or paid spend."
    ]
  },

  posts: {
    note: "Going forward we ship 7 X posts and 3 LinkedIn posts every week. All copy follows the safety rules and uses 'inspired by' wording.",
    status: "Reviewed against content rules",
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

  tracking: {
    intro:
      "Every link we post carries a short tag (a UTM) at the end of the web address. When someone clicks, the tag tells Google Analytics which post and channel sent them, so we can say which posts bring real visitors and which don't.",
    example: "https://aiyogi.ai/?utm_source=x&utm_medium=organic&utm_campaign=2026-10-launch",
    parts: [
      { tag: "utm_source", means: "Where the click came from (x, linkedin, youtube, reddit, email)" },
      { tag: "utm_medium", means: "The kind of traffic (organic post, creator, email)" },
      { tag: "utm_campaign", means: "Which campaign or theme, by month (for example 2026-10-launch)" }
    ],
    links: [
      { channel: "X", source: "x" },
      { channel: "LinkedIn", source: "linkedin" },
      { channel: "YouTube", source: "youtube" },
      { channel: "Reddit", source: "reddit" },
      { channel: "Email", source: "email" }
    ],
    status:
      "Not yet readable on the website side: aiyogi.ai is not recording visits today, so the tags are in place but nothing will show until analytics is connected. Connecting it is on our list for week 3.",
    meanwhile:
      "Until then we read clicks inside each platform: post analytics on X (link clicks) and the LinkedIn Page analytics tab (clicks). Those are reported weekly."
  },

  reddit: {
    status: "Account not yet created. We will create it with the marketing email.",
    principles: [
      "One clearly branded team account. Affiliation disclosed in every thread.",
      "Weeks 1-2: comment helpfully with no links, to build standing.",
      "Weeks 3 onward: about 5 thoughtful replies per week, one link per ten replies at most, and only where it answers the question.",
      "Read each community's rules first. If a community bans brand accounts, we stay out.",
      "Never reply on sensitive threads (trauma, addiction, self-harm, sexual topics). Okara's automatic matches are reviewed by a person before anything is posted."
    ],
    communities: ["r/Meditation", "r/taoism", "r/Buddhism", "r/nonduality", "r/Dzogchen", "r/Yoga"],
    measure: "Replies kept (not removed), upvotes, and referral clicks once site analytics works."
  },

  connections: [
    {
      group: "Connected",
      state: "done",
      items: [
        { item: "Okara workspace for aiyogi.ai", note: "Encrypted, AIYogi context loaded" },
        { item: "Google Search Console", note: "Search data is flowing in" },
        { item: "X @aiyogi_ai", note: "Drafting and posting" },
        { item: "LinkedIn Page", note: "Posts as the AIYogi Page, not a personal profile" }
      ]
    },
    {
      group: "Connecting next (our team)",
      state: "progress",
      items: [
        { item: "Brand Voice and safety rules", note: "Rewrite so every agent follows the content rules", when: "Mon 12 Oct" },
        { item: "Article agent", note: "Review content pillars and approve", when: "Tue 13 Oct" },
        { item: "Reddit agent", note: "Starts once the Reddit account exists. Okara finds threads and drafts replies; a person posts them", when: "Wed 14 Oct" },
        { item: "Google Analytics (GA4)", note: "Needs a tracking tag on aiyogi.ai first. We will set up and verify it", when: "Week 3" },
        { item: "Article publishing destination", note: "Articles are drafted in Okara; we choose and connect where they publish", when: "Week 3" },
        { item: "GitHub (site fixes)", note: "Lets Okara's coding agent hand over SEO fixes as ready-to-apply changes", when: "Week 3" }
      ]
    },
    {
      group: "Not connectable in Okara (we run these by hand)",
      state: "todo",
      items: [
        { item: "YouTube", note: "Okara has no YouTube connection. The channel is managed in YouTube Studio and thumbnails are designed separately." },
        { item: "Instagram and TikTok", note: "Okara lists both as coming soon. We can create the profiles and post by hand if you want them." }
      ]
    }
  ],

  youtube: {
    status: "Waiting for ownership of the new channel",
    plan: [
      "You grant ownership of the new AIYogi channel.",
      "We list every video with its current thumbnail and views.",
      "We design a new thumbnail set in the AIYogi look (dark, gold, no faces of teachers), starting with the most-viewed videos.",
      "We show a first batch of five. Then we roll out the rest and measure click-through."
    ]
  },

  agreement: {
    hours: "Up to 20 hours per week",
    note: "Reported by what we deliver, not by timesheets. The split below is the planned maximum, and it can shift week to week.",
    allocation: [
      ["Content and posting (X, LinkedIn)", "up to 6 h"],
      ["Okara set-up and management", "up to 4 h"],
      ["Site fixes and search (SEO)", "up to 3 h"],
      ["Strategy and weekly reporting", "up to 3 h"],
      ["Community and Reddit", "up to 2 h"],
      ["Creators and YouTube", "up to 2 h"]
    ],
    out: [
      "Paid ad spend and management",
      "App or product development",
      "Video production shoots",
      "Press and PR",
      "Translation checks for all 12 languages",
      "24/7 community moderation"
    ],
    change: "New work outside this scope is quoted in writing before it starts."
  },

  schedule: {
    note: "This dashboard refreshes every Saturday at 12:00 am IST. Times are shown in Florida time.",
    cronUtc: { weekday: 5, hour: 18, minute: 30 } // Friday 18:30 UTC = Saturday 00:00 IST
  }
};
