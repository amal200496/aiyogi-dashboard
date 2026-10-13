// Weekly report data. Edit this file each week; the page renders from it.
window.REPORT = {
  owner: "Wake",
  campaign: { name: "AIYogi Growth Campaign", start: "2026-10-01", end: "2027-01-31", totalWeeks: 17 },
  contact: "marketing.aiyogi@proton.me",
  reportWeekLabel: "Covers 1-10 Oct 2026",

  summary:
    "The groundwork is done and our first posts are live on X and LinkedIn. Everything else is on our side. The one thing that needs you is below.",

  actions: [
    {
      id: "youtube",
      priority: "high",
      title: "Give us ownership of the new YouTube channel",
      detail:
        "In YouTube Studio, open Settings, then Permissions, then Invite, and add marketing.aiyogi@proton.me as Owner (Manager works if Owner isn't offered). New thumbnails start the day access arrives.",
      owner: "Wake"
    }
  ],

  achieved: [
    { when: "Week 1", text: "Wrote the 4-month plan and our working agreement (1 Oct to 31 Jan)." },
    { when: "Week 1", text: "Audited aiyogi.ai. Two findings: the site loads mostly through JavaScript, so Google and AI assistants may see very little of it, and it isn't recording visits." },
    { when: "Week 1", text: "Set up Okara, our AI marketing tool, for AIYogi. Your data is encrypted and Search Console is already connected." },
    { when: "Week 1", text: "Created marketing.aiyogi@proton.me as the team's email." },
    { when: "Week 1", text: "Set up @aiyogi_ai on X with a photo and bio, and connected it to Okara." },
    { when: "Week 1", text: "Set up the AIYogi LinkedIn Page with logo, tagline, About text and website link, and connected it to Okara." },
    { when: "Week 1", text: "Wrote bios for X, LinkedIn, YouTube, Reddit, Instagram and TikTok, plus tracked links and image briefs." },
    { when: "Week 2", text: "Published our first posts on X and LinkedIn." },
    { when: "Week 2", text: "Okara drafted a first batch: 51 X ideas, 48 LinkedIn posts, 51 article topics, 96 Reddit opportunities and 85 site fixes. Nothing goes out without our review." },
    { when: "Week 2", text: "Set our content rules: no health or therapy claims, no implied endorsement by living teachers, no invented testimonials. Okara's first drafts broke them, so we held those back." },
    { when: "Week 2", text: "Published this dashboard. It refreshes every Saturday at 12:00 am IST." }
  ],

  metrics: [
    { label: "Posts published", value: "2", note: "1 on X, 1 on LinkedIn" },
    { label: "Followers", value: "0", note: "Our starting point on both accounts" },
    { label: "Google search, last 7 days", value: "51 views, 5 clicks", note: "From Search Console" },
    { label: "Visits to aiyogi.ai", value: "Not tracked yet", note: "We're fixing this" }
  ],
  metricsNote:
    "Link clicks show up in X's and LinkedIn's own post stats. We can't count visits to aiyogi.ai until site analytics is connected.",

  weekPlan: {
    label: "The week of 12 Oct",
    days: [
      { day: "Mon 12", items: ["Our first X and LinkedIn posts of the week go out", "Rewrite Okara's brand voice so every draft follows our content rules"] },
      { day: "Tue 13", items: ["X post 2", "Finish setting up Okara's article writer and approve its topics"] },
      { day: "Wed 14", items: ["X post 3 and LinkedIn post 2", "Create our Reddit account and start listening, with no links yet"] },
      { day: "Thu 15", items: ["X post 4", "Prepare fixes for the three page headings Okara flagged as most important"] },
      { day: "Fri 16", items: ["X post 5 and LinkedIn post 3", "Send the weekly report"] },
      { day: "Sat 17", items: ["X post 6", "This dashboard refreshes at 12:00 am IST (Friday 2:30 pm in Florida)"] },
      { day: "Sun 18", items: ["X post 7", "Check how many people clicked this week's links"] }
    ],
    dependsOn: "The only thing waiting on you is YouTube access. Everything else in this plan runs without anything from you."
  },

  expect: {
    see: [
      "7 posts on X and 3 on LinkedIn, spread through the week.",
      "Okara's brand voice rewritten, so every draft follows our content rules.",
      "Article topics approved, and the first article ready to publish.",
      "A Reddit account, quietly warming up with no promotional links.",
      "A weekly report and a refreshed dashboard on Friday afternoon, Florida time."
    ],
    notYet: [
      "A jump in traffic. This month is groundwork, and search results start showing from December.",
      "Promises about rankings or revenue. Early signs are post clicks, followers and how Reddit receives us.",
      "Visit numbers for aiyogi.ai. We need analytics connected first.",
      "New YouTube thumbnails. Those begin once we have channel ownership."
    ],
    how: [
      "Message us any time. We reply within one business day.",
      "Routine posts and replies follow the content rules we agreed, so they go out without waiting for you. Ask us to change or pull anything, whenever you like.",
      "Anything new, we ask first: new claims, teacher names, pricing, health topics, partnerships or spending."
    ]
  },

  posts: {
    note: "Every week: 7 posts on X and 3 on LinkedIn. All of it uses 'inspired by' wording and follows our content rules.",
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
      "Every link we post ends with a short tag, called a UTM. When someone clicks, the tag tells Google Analytics which channel and which post sent them. That's how we'll learn which posts bring real visitors.",
    example: "https://aiyogi.ai/?utm_source=x&utm_medium=organic&utm_campaign=2026-10-launch",
    parts: [
      { tag: "utm_source", means: "Where the click came from, such as x or linkedin" },
      { tag: "utm_medium", means: "The kind of traffic, such as an organic post, a creator or an email" },
      { tag: "utm_campaign", means: "The theme and month, such as 2026-10-launch" }
    ],
    links: [
      { channel: "X", source: "x" },
      { channel: "LinkedIn", source: "linkedin" },
      { channel: "YouTube", source: "youtube" },
      { channel: "Reddit", source: "reddit" },
      { channel: "Email", source: "email" }
    ],
    status:
      "Right now aiyogi.ai isn't recording visits, so the tags are in place but nothing shows yet. Connecting analytics is on our list for week 3.",
    meanwhile:
      "Until then, we read clicks inside X (post analytics) and LinkedIn (Page analytics) and report them weekly."
  },

  reddit: {
    status: "We haven't created the account yet. It will use the marketing email.",
    principles: [
      "One clearly labelled team account. We say who we are in every thread.",
      "Weeks 1 and 2: we only comment helpfully, with no links, to earn some standing.",
      "From week 3: about 5 thoughtful replies a week, with a link in at most one reply in ten, and only when it truly answers the question.",
      "We read each community's rules first. If brand accounts aren't welcome, we stay out.",
      "We never reply on sensitive threads such as trauma, addiction, self-harm or sexual topics. A person reviews every thread Okara suggests before we write anything."
    ],
    communities: ["r/Meditation", "r/taoism", "r/Buddhism", "r/nonduality", "r/Dzogchen", "r/Yoga"],
    measure: "Replies that stay up, upvotes, and clicks once analytics is connected."
  },

  connections: [
    {
      group: "Connected",
      state: "done",
      items: [
        { item: "Okara workspace for aiyogi.ai", note: "Encrypted, with AIYogi's details loaded" },
        { item: "Google Search Console", note: "Search data is coming in" },
        { item: "X @aiyogi_ai", note: "Okara drafts, we review and post" },
        { item: "LinkedIn Page", note: "Posts as the AIYogi Page, not a personal profile" }
      ]
    },
    {
      group: "We're connecting next",
      state: "progress",
      items: [
        { item: "Brand voice and content rules", note: "Rewrite so every draft follows our content rules", when: "Mon 12 Oct" },
        { item: "Article writer", note: "Review its topics and approve them", when: "Tue 13 Oct" },
        { item: "Reddit", note: "Starts once the Reddit account exists. Okara finds threads and drafts replies, and a person posts them", when: "Wed 14 Oct" },
        { item: "Google Analytics", note: "Needs a tracking tag on aiyogi.ai first. We'll set it up and check it", when: "Week 3" },
        { item: "Where articles get published", note: "Okara writes the articles. We'll choose where they go live and connect it", when: "Week 3" },
        { item: "GitHub", note: "Lets Okara hand us site fixes ready to apply", when: "Week 3" }
      ]
    },
    {
      group: "Okara can't connect these, so we do them by hand",
      state: "todo",
      items: [
        { item: "YouTube", note: "We manage the channel in YouTube Studio and design thumbnails separately." },
        { item: "Instagram and TikTok", note: "Okara lists both as coming soon. We can set up profiles and post by hand if you'd like them." }
      ]
    }
  ],

  youtube: {
    status: "Waiting on channel ownership",
    plan: [
      "You give us ownership of the new AIYogi channel.",
      "We list every video with its current thumbnail and views.",
      "We design a new thumbnail set in the AIYogi look: dark, gold, no teachers' faces. We start with the most-viewed videos.",
      "We show you a first batch of five, then roll out the rest and watch click-through."
    ]
  },

  agreement: {
    hours: "Up to 20 hours a week",
    note: "We report on what we deliver, not on hours. This is the planned maximum, and it can shift from week to week.",
    allocation: [
      ["Content and posting (X, LinkedIn)", "up to 6 h"],
      ["Okara set-up and management", "up to 4 h"],
      ["Site fixes and search (SEO)", "up to 3 h"],
      ["Strategy and weekly reporting", "up to 3 h"],
      ["Community and Reddit", "up to 2 h"],
      ["Creators and YouTube", "up to 2 h"]
    ],
    out: [
      "Paid ads and ad spend",
      "Building or changing the app",
      "Video shoots",
      "Press and PR",
      "Checking translations in all 12 languages",
      "Round-the-clock community moderation"
    ],
    change: "If something falls outside this list, we'll quote it in writing before we start."
  },

  schedule: {
    note: "This page refreshes every Saturday at 12:00 am IST. Times are shown in Florida time.",
    cronUtc: { weekday: 5, hour: 18, minute: 30 } // Friday 18:30 UTC = Saturday 00:00 IST
  }
};
