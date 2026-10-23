// Weekly report data. Edit this file each week; the page renders from it.
//
// Add a new week by copying the newest object in `weeks` to the top of the array and editing it.
// Older weeks stay in the array and show up in the page's week selector.
//
// Every metric is { label, value, prev, unit, source, asOf, note }.
//   value: null means "not measured yet". The page shows that, never 0.
//   source and asOf (YYYY-MM-DD) are required whenever value is not null.
// Run `node validate.mjs` before pushing.
window.REPORT = {
  owner: "Wake",
  campaign: { name: "AIYogi Growth Campaign", start: "2026-10-01", end: "2027-01-31", totalWeeks: 17 },
  contact: "marketing.aiyogi@proton.me",

  weeks: [
    {
      id: "2026-10-23",
      number: 4,
      title: "Week 4",
      covers: "Covers 11 to 23 Oct 2026",
      status: {
        level: "ontrack",
        label: "On track",
        text: "Foundations are built and content is flowing. Nothing is waiting on you."
      },
      headline: "Nothing needed from you this week.",
      summary:
        "The blog, the first article and analytics are live, and 29 new YouTube thumbnails are up.",

      actions: [],
      decisions: [],

      /* Delivered, grouped by workstream. state: done or progress. */
      workstreams: [
        {
          name: "Website and search",
          items: [
            { text: "Blog launched at aiyogi.ai/blog", state: "done" },
            { text: "First article live: about 2,500 words, 6 FAQs, in the sitemap", state: "done" },
            { text: "Analytics tag on the homepage and on blog pages", state: "done" },
            { text: "Google Search Console connected", state: "done" },
            { text: "Site fixes Okara found (85 queued), being ranked by impact", state: "progress" }
          ]
        },
        {
          name: "Social",
          items: [
            { text: "@aiyogi_ai set up on X, with bio and link", state: "done" },
            { text: "AIYogi LinkedIn Page set up", state: "done" },
            { text: "17 posts live on X, two a day", state: "done" },
            { text: "2 posts published on the LinkedIn Page", state: "done" },
            { text: "One LinkedIn post every weekday", state: "progress" }
          ]
        },
        {
          name: "YouTube",
          items: [
            { text: "New channel set up", state: "done" },
            { text: "29 new thumbnails live on the channel", state: "done" },
            { text: "2 thumbnails that failed to update, being retried", state: "progress" },
            { text: "YouTube automation workflow, with a person approving each step", state: "progress" }
          ]
        },
        {
          name: "Marketing engine (Okara)",
          items: [
            { text: "Workspace connected to the site, search, analytics, X and LinkedIn", state: "done" },
            { text: "Content rules corrected, so every draft follows them", state: "done" },
            { text: "331 ideas and drafts queued, all reviewed by a person", state: "done" },
            { text: "Article route to the site tested end to end", state: "done" },
            { text: "Reddit account created", state: "done" }
          ]
        }
      ],

      /* Month one, counted. Plain counts of things made or run; nothing is priced or compared. */
      monthCount: [
        { n: 29, label: "YouTube thumbnails designed and live" },
        { n: 331, label: "post, article, thread and site-fix ideas drafted and reviewed" },
        { n: 19, label: "posts published on X and LinkedIn" },
        { n: 1, label: "blog built, with a 2,500 word article live" },
        { n: 6, label: "tools connected and checked" },
        { n: 4, label: "platforms set up: X, LinkedIn, YouTube, Reddit" }
      ],

      reach: [
        {
          id: "visits",
          title: "Visitors to aiyogi.ai",
          period: "Last 7 days",
          source: "Google Analytics, read through Okara",
          asOf: "2026-10-23",
          total: { value: 13, unit: "visitors" },
          bars: [
            { label: "Direct", value: 11 },
            { label: "From social", value: 2 }
          ],
          note: "Early reading. The first article drew its first visitors this week."
        },
        {
          id: "search",
          title: "Google search",
          period: "Last 7 days",
          source: "Google Search Console, read through Okara",
          asOf: "2026-10-22",
          total: { value: "6.5%", unit: "click rate" },
          bars: [
            { label: "Appearances", value: 31 },
            { label: "Clicks", value: 2 }
          ],
          note: "Searches for our name put the site between #2 and #4."
        },
        {
          id: "social",
          title: "Social reach",
          period: "Since launch",
          source: "X and LinkedIn Page analytics",
          asOf: "2026-10-23",
          bars: [
            { label: "LinkedIn impressions", value: 102 },
            { label: "X views, earliest posts", value: 14 }
          ],
          note: "Both accounts are three weeks old with no followers yet. Reach builds slowly."
        },
        {
          id: "devices",
          title: "Devices",
          period: "Last 7 days",
          source: "Google Analytics, read through Okara",
          asOf: "2026-10-23",
          share: [
            { label: "Desktop", value: 79 },
            { label: "Mobile", value: 14 },
            { label: "Tablet", value: 7 }
          ]
        }
      ],

      inProgress: {
        title: "YouTube automation set-up",
        text: "A person approves every step before anything is published.",
        steps: [
          { label: "Channel and thumbnails ready", state: "done" },
          { label: "Approval workflow", state: "now" },
          { label: "First video through it", state: "next" },
          { label: "More videos", state: "next" }
        ]
      },

      hiccups: [
        {
          what: "Okara's early drafts broke our content rules",
          fix: "We held them back, rewrote the rules, and a person now reads every draft."
        },
        {
          what: "One site publish failed on 14 Oct",
          fix: "It was a host error. The next attempt went through and the blog is live."
        },
        {
          what: "Connecting Okara to the site, through GitHub, took several tries",
          fix: "We built a private review copy of the site and tested an article end to end. A person checks every article before it reaches the live site."
        },
        {
          what: "2 of 31 thumbnails failed to upload",
          fix: "The other 29 are live. We are retrying the two that failed."
        },
        {
          what: "We can't republish the site from our own account yet",
          fix: "Releases go out in batches through your account. The blog and article are live."
        }
      ],

      northStar: {
        label: "Verified-email users per week",
        value: null,
        prev: null,
        unit: "",
        source: "Needs your app's signup data",
        asOf: null,
        note: "Counting begins once we agree a simple way to read this number."
      },

      channels: [
        {
          name: "X",
          status: "17 posts live, two a day",
          metrics: [
            { label: "Followers", value: 0, source: "X profile", asOf: "2026-10-23", note: "Our starting point." }
          ]
        },
        {
          name: "LinkedIn",
          status: "Page live with two posts",
          metrics: [
            { label: "Followers", value: 0, source: "LinkedIn Page analytics", asOf: "2026-10-21", note: "Our starting point." },
            { label: "Impressions, 30 days", value: 102, source: "LinkedIn Page analytics", asOf: "2026-10-21" }
          ]
        },
        {
          name: "Blog and Google search",
          status: "Blog and first article live",
          metrics: [
            { label: "Articles live", value: 1, source: "aiyogi.ai/blog", asOf: "2026-10-23" },
            { label: "Search clicks, 7 days", value: 2, source: "Google Search Console, via Okara", asOf: "2026-10-22" }
          ]
        },
        {
          name: "Reddit",
          status: "Account created. Listening first, then helpful comments with no links.",
          metrics: [
            { label: "Replies that stayed up", value: null, source: "Reddit", note: "Counting starts with our first reply." }
          ]
        },
        {
          name: "YouTube",
          status: "29 new thumbnails live",
          metrics: []
        },
        {
          name: "AI assistant citations",
          status: "No baseline yet.",
          metrics: [
            { label: "Times AIYogi is cited", value: null, source: "Manual checks", note: "We take a first reading once the blog has more articles." }
          ]
        }
      ],

      next: {
        label: "Next week, 26 Oct to 1 Nov",
        days: [
          { day: "Mon 26", date: "2026-10-26", items: ["Next batch of X posts goes out", "LinkedIn weekday posts begin", "Monthly invoice sent"] },
          { day: "Tue 27", date: "2026-10-27", items: ["Start helpful Reddit comments, with no links", "Set up a second guide's account"] },
          { day: "Wed 28", date: "2026-10-28", items: ["Retry the 2 thumbnails that failed"] },
          { day: "Thu 29", date: "2026-10-29", items: ["Pick and start the next article"] },
          { day: "Fri 30", date: "2026-10-30", items: ["Weekly report and dashboard refresh"] },
          { day: "Sat 31", date: "2026-10-31", items: ["X posts continue"] },
          { day: "Sun 1", date: "2026-11-01", items: ["X posts continue"] }
        ],
        dependsOn: "This plan runs without anything from you."
      },

      expect: {
        see: [
          "Two X posts a day and one LinkedIn post each weekday.",
          "A second article started, and the 2 failed thumbnails retried.",
          "Our first helpful Reddit comments, with no promotional links."
        ],
        notYet: [
          "A jump in traffic. This month is groundwork, and search results start showing from December.",
          "Promises about rankings or revenue."
        ],
        how: [
          "Message us any time. We reply within one business day.",
          "Routine posts follow the content rules we agreed. Ask us to change or pull anything, whenever you like.",
          "Anything new, we ask first: new claims, teacher names, pricing, health topics, partnerships or spending."
        ]
      },

      learnings: [
        "People already search for AIYogi by name. Next, we want it found for what it does.",
        "A person reading every Okara draft keeps quality high without slowing us down.",
        "Scheduling a week at a time beats posting day by day."
      ],

      connections: [
        {
          group: "Connected",
          state: "ok",
          items: [
            { item: "Okara workspace for aiyogi.ai", note: "Encrypted, with AIYogi's details loaded" },
            { item: "Google Search Console", note: "Search data is coming in" },
            { item: "Google Analytics", note: "Live on the homepage and blog pages" },
            { item: "X @aiyogi_ai", note: "Okara drafts, we review and schedule" },
            { item: "LinkedIn Page", note: "Posts as the AIYogi Page" },
            { item: "GitHub review copy of the site", note: "Okara hands us articles as change requests" }
          ]
        },
        {
          group: "Handled by hand",
          state: "manual",
          items: [
            { item: "YouTube", note: "Thumbnails managed in YouTube Studio" },
            { item: "Reddit", note: "A person writes and posts every reply" }
          ]
        }
      ],

      achieved: [
        { when: "Week 4", text: "Blog launched and the first article is live." },
        { when: "Week 4", text: "Analytics live on aiyogi.ai, including blog pages." },
        { when: "Week 4", text: "29 new thumbnails live on YouTube." },
        { when: "Week 4", text: "Okara rules corrected, and the Reddit account created." },
        { when: "Week 3", text: "Scheduled 14 X posts and published two LinkedIn Page posts." },
        { when: "Week 2", text: "Published our first posts on X and LinkedIn." },
        { when: "Week 2", text: "Okara drafted 331 ideas: 51 X, 48 LinkedIn, 51 article topics, 96 Reddit threads and 85 site fixes." },
        { when: "Week 1", text: "Wrote the 4-month plan, audited aiyogi.ai, and set up Okara, X, LinkedIn and the team email." }
      ]
    },

    {
      id: "2026-10-16",
      number: 2,
      title: "Weeks 1 and 2",
      covers: "Covers 1 to 10 Oct 2026",
      status: { level: "ontrack", label: "On track", text: "Set-up week. Everything planned was done." },
      summary:
        "The groundwork is done and our first posts are live on X and LinkedIn. Everything else is on our side. The one thing that needs you is below.",
      actions: [
        {
          id: "youtube",
          priority: "high",
          title: "Give us ownership of the new YouTube channel",
          detail: "In YouTube Studio, open Settings, then Permissions, then Invite, and add marketing.aiyogi@proton.me as Owner.",
          unblocks: "New thumbnails start the day access arrives."
        }
      ],
      northStar: { label: "Verified-email users per week", value: null, source: "Needs your app's signup data", note: "Not measured yet." },
      channels: [
        { name: "X", status: "First post live", metrics: [{ label: "Posts published", value: 1, source: "X", asOf: "2026-10-10" }, { label: "Followers", value: 0, source: "X analytics", asOf: "2026-10-10", note: "Our starting point." }] },
        { name: "LinkedIn", status: "First post live", metrics: [{ label: "Posts published", value: 1, source: "LinkedIn", asOf: "2026-10-10" }, { label: "Followers", value: 0, source: "LinkedIn Page analytics", asOf: "2026-10-10", note: "Our starting point." }] },
        { name: "Blog and Google search", status: "No blog yet", metrics: [{ label: "Google search, 7 days", value: "51 views, 5 clicks", source: "Google Search Console", asOf: "2026-10-10" }] }
      ],
      achieved: [
        { when: "Week 2", text: "Published our first posts on X and LinkedIn." },
        { when: "Week 2", text: "Okara drafted a first batch of ideas. Nothing goes out without our review." },
        { when: "Week 2", text: "Set our content rules." },
        { when: "Week 1", text: "Wrote the 4-month plan, audited aiyogi.ai and set up Okara, X, LinkedIn and the team email." }
      ]
    }
  ],

  /* Shared across weeks */

  tracking: {
    intro:
      "Every link we post ends with a short tag, called a UTM. When someone clicks, the tag tells Google Analytics which channel and which post sent them. That's how we'll learn which posts bring real visitors.",
    example: "https://aiyogi.ai/?utm_source=x&utm_medium=organic&utm_campaign=2026-10-weekly",
    parts: [
      { tag: "utm_source", means: "Where the click came from, such as x or linkedin" },
      { tag: "utm_medium", means: "The kind of traffic, such as an organic post, a creator or an email" },
      { tag: "utm_campaign", means: "The theme and month, such as 2026-10-weekly" }
    ],
    status:
      "The tag is live on the aiyogi.ai homepage and blog pages, so visits are being recorded.",
    meanwhile:
      "Click counts inside X and LinkedIn come from their own post stats, which we read weekly."
  },

  reddit: {
    status: "The account exists and uses the marketing email.",
    principles: [
      "One clearly labelled team account. We say who we are in every thread.",
      "To start: only helpful comments, with no links, to earn some standing.",
      "After that: about 5 thoughtful replies a week, with a link in at most one reply in ten, and only when it truly answers the question.",
      "We read each community's rules first. If brand accounts aren't welcome, we stay out.",
      "We never reply on sensitive threads such as trauma, addiction, self-harm or sexual topics. A person reviews every thread Okara suggests before we write anything."
    ],
    communities: ["r/Meditation", "r/taoism", "r/Buddhism", "r/nonduality", "r/Dzogchen", "r/Yoga"],
    measure: "Replies that stay up, upvotes, and clicks from tracked links."
  },

  posts: {
    note: "Two posts a day on X at 9:00 am and 5:00 pm Florida time, and one LinkedIn post each weekday at 8:30 am. All of it uses 'inspired by' wording and follows our content rules.",
    themes: [
      "Why the path is graduated: body first, then energy and sound, then the nature of mind",
      "Short practice prompts, such as noticing the body for two minutes",
      "How the guides are inspired by traditions and do not replace a living teacher",
      "Free first conversations, and a suggested $9 a month if it helps"
    ],
    next: "The next batch, 26 Oct to 1 Nov, is being prepared for our review."
  },

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
    billing: "We send the $500 invoice on the last Monday of each month. Once it is processed, payments usually take 2 to 3 days to show in our account.",
    note: "We report on what we deliver, not on hours. This is the planned maximum, and it can shift from week to week.",
    allocation: [
      ["Content and posting (X, LinkedIn)", "up to 6 h"],
      ["Okara set-up and management", "up to 4 h"],
      ["Site fixes and search (SEO)", "up to 3 h"],
      ["Strategy and weekly reporting", "up to 3 h"],
      ["Community and Reddit", "up to 2 h"],
      ["Creators and YouTube", "up to 2 h"]
    ]
  },

  schedule: {
    note: "This page refreshes every Friday afternoon. Times are shown in Florida time.",
    cronUtc: { weekday: 5, hour: 18, minute: 30 } // Friday 18:30 UTC
  }
};
