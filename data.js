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
        text: "The foundations are in place and content is going out steadily. We are not waiting on anything from you."
      },
      headline: "No action is needed from you this week.",
      summary:
        "We are pleased to report that the blog, the first article and analytics are now live, and 29 new YouTube thumbnails have been published.",

      actions: [],
      decisions: [],

      /* Delivered, grouped by workstream. state: done or progress. */
      workstreams: [
        {
          name: "Website and search",
          items: [
            { text: "Blog launched at aiyogi.ai/blog", state: "done" },
            { text: "First article published: about 2,500 words with 6 FAQs, added to the sitemap", state: "done" },
            { text: "Analytics tag installed on the homepage and blog pages", state: "done" },
            { text: "Google Search Console connected", state: "done" },
            { text: "Site fixes identified by Okara (85), being prioritised by impact", state: "progress" }
          ]
        },
        {
          name: "Social",
          items: [
            { text: "@aiyogi_ai set up on X, with bio and link", state: "done" },
            { text: "AIYogi LinkedIn Page set up", state: "done" },
            { text: "17 posts published on X, at two per day", state: "done" },
            { text: "2 posts published on the LinkedIn Page", state: "done" },
            { text: "One LinkedIn post each weekday", state: "progress" }
          ]
        },
        {
          name: "YouTube",
          items: [
            { text: "New channel set up", state: "done" },
            { text: "29 new thumbnails published on the channel", state: "done" },
            { text: "2 thumbnails that did not upload, to be retried", state: "progress" },
            { text: "YouTube automation workflow, with a person approving each step", state: "progress" }
          ]
        },
        {
          name: "Marketing engine (Okara)",
          items: [
            { text: "Workspace connected to the site, search, analytics, X and LinkedIn", state: "done" },
            { text: "Content rules corrected, so that every draft follows them", state: "done" },
            { text: "331 ideas and drafts prepared, each reviewed by a person", state: "done" },
            { text: "Article route to the site tested from start to finish", state: "done" },
            { text: "Reddit account created", state: "done" }
          ]
        }
      ],

      /* Month one, counted. Plain counts of things made or run; nothing is priced or compared. */
      monthCount: [
        { n: 29, label: "YouTube thumbnails designed and published" },
        { n: 331, label: "post, article, thread and site-fix ideas drafted and reviewed" },
        { n: 19, label: "posts published on X and LinkedIn" },
        { n: 1, label: "blog built, with a 2,500 word article live" },
        { n: 6, label: "tools connected and tested" },
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
          note: "An early reading. The first article welcomed its first visitors this week."
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
          note: "For searches of the AIYogi name, the site appears between positions 2 and 4."
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
          note: "Both accounts are about three weeks old and have no followers yet. Reach builds gradually."
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
          { label: "First video run through it", state: "next" },
          { label: "More videos", state: "next" }
        ]
      },

      hiccups: [
        {
          what: "Some early Okara drafts did not follow our content rules",
          fix: "We withheld those drafts and tightened the rules. A person now reviews every draft before it is used."
        },
        {
          what: "One site publish did not complete on 14 Oct",
          fix: "The cause was a hosting error. The next attempt succeeded and the blog is live."
        },
        {
          what: "Connecting Okara to the site through GitHub took several attempts",
          fix: "We created a private review copy of the site and tested an article from start to finish. A person checks every article before it reaches the live site."
        },
        {
          what: "2 of 31 thumbnails did not upload",
          fix: "The other 29 are published. We will retry the remaining two."
        },
        {
          what: "We cannot yet republish the site from our own account",
          fix: "Site updates are released in batches through your account. The blog and article are live."
        }
      ],

      northStar: {
        label: "Verified-email users per week",
        value: null,
        prev: null,
        unit: "",
        source: "Needs your app's signup data",
        asOf: null,
        note: "We will begin tracking this once we have agreed a simple way to read it."
      },

      channels: [
        {
          name: "X",
          status: "17 posts published, two per day",
          metrics: [
            { label: "Followers", value: 0, source: "X profile", asOf: "2026-10-23", note: "Our starting point." }
          ]
        },
        {
          name: "LinkedIn",
          status: "Page live, with two posts published",
          metrics: [
            { label: "Followers", value: 0, source: "LinkedIn Page analytics", asOf: "2026-10-21", note: "Our starting point." },
            { label: "Impressions, 30 days", value: 102, source: "LinkedIn Page analytics", asOf: "2026-10-21" }
          ]
        },
        {
          name: "Blog and Google search",
          status: "Blog and first article published",
          metrics: [
            { label: "Articles live", value: 1, source: "aiyogi.ai/blog", asOf: "2026-10-23" },
            { label: "Search clicks, 7 days", value: 2, source: "Google Search Console, via Okara", asOf: "2026-10-22" }
          ]
        },
        {
          name: "Reddit",
          status: "Account created. We will listen first, then offer helpful comments without links.",
          metrics: [
            { label: "Replies that stayed up", value: null, source: "Reddit", note: "We will begin counting once our first reply is posted." }
          ]
        },
        {
          name: "YouTube",
          status: "29 new thumbnails published",
          metrics: []
        },
        {
          name: "AI assistant citations",
          status: "No baseline yet.",
          metrics: [
            { label: "Times AIYogi is cited", value: null, source: "Manual checks", note: "We will take a first reading once the blog has more articles." }
          ]
        }
      ],

      next: {
        label: "Next week, 26 Oct to 1 Nov",
        days: [
          { day: "Mon 26", date: "2026-10-26", items: ["Next batch of X posts is published", "LinkedIn weekday posts begin", "Monthly invoice sent"] },
          { day: "Tue 27", date: "2026-10-27", items: ["Begin helpful Reddit comments, without links", "Set up the account for a second guide"] },
          { day: "Wed 28", date: "2026-10-28", items: ["Retry the 2 thumbnails that did not upload"] },
          { day: "Thu 29", date: "2026-10-29", items: ["Select and begin the next article"] },
          { day: "Fri 30", date: "2026-10-30", items: ["Weekly report and dashboard refresh"] },
          { day: "Sat 31", date: "2026-10-31", items: ["X posts continue"] },
          { day: "Sun 1", date: "2026-11-01", items: ["X posts continue"] }
        ],
        dependsOn: "This plan can proceed without any action from you."
      },

      expect: {
        see: [
          "Two X posts per day and one LinkedIn post each weekday.",
          "A second article underway, and the 2 remaining thumbnails retried.",
          "Our first helpful Reddit comments, without promotional links."
        ],
        notYet: [
          "A sharp rise in traffic. This first month is groundwork, and we expect search results to begin showing from December.",
          "Commitments about rankings or revenue, which we cannot responsibly make."
        ],
        how: [
          "Please message us at any time. We reply within one business day.",
          "Routine posts follow the content rules we agreed. You are welcome to ask us to change or withdraw anything at any time.",
          "For anything new, we will check with you first: new claims, teacher names, pricing, health topics, partnerships or spending."
        ]
      },

      learnings: [
        "People already search for AIYogi by name. Our next aim is for it to be found for what it offers.",
        "Having a person review every Okara draft keeps quality high without slowing us down.",
        "Scheduling a week at a time works better than posting day by day."
      ],

      connections: [
        {
          group: "Connected",
          state: "ok",
          items: [
            { item: "Okara workspace for aiyogi.ai", note: "Encrypted, with AIYogi's details loaded" },
            { item: "Google Search Console", note: "Search data is being received" },
            { item: "Google Analytics", note: "Active on the homepage and blog pages" },
            { item: "X @aiyogi_ai", note: "Okara drafts; we review and schedule" },
            { item: "LinkedIn Page", note: "Posts as the AIYogi Page" },
            { item: "GitHub review copy of the site", note: "Okara passes articles to us as change requests" }
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
        { when: "Week 4", text: "Blog launched and the first article published." },
        { when: "Week 4", text: "Analytics active on aiyogi.ai, including blog pages." },
        { when: "Week 4", text: "29 new thumbnails published on YouTube." },
        { when: "Week 4", text: "Okara rules corrected and the Reddit account created." },
        { when: "Week 3", text: "Scheduled 14 X posts and published two LinkedIn Page posts." },
        { when: "Week 2", text: "Published our first posts on X and LinkedIn." },
        { when: "Week 2", text: "Okara drafted 331 ideas: 51 X, 48 LinkedIn, 51 article topics, 96 Reddit threads and 85 site fixes." },
        { when: "Week 1", text: "Prepared the 4-month plan, audited aiyogi.ai, and set up Okara, X, LinkedIn and the team email." }
      ]
    },

    {
      id: "2026-10-16",
      number: 2,
      title: "Weeks 1 and 2",
      covers: "Covers 1 to 10 Oct 2026",
      status: { level: "ontrack", label: "On track", text: "A set-up period. Everything planned was completed." },
      summary:
        "The groundwork is complete and our first posts are live on X and LinkedIn. We handle everything else; there is one small request for you below.",
      actions: [
        {
          id: "youtube",
          priority: "high",
          title: "Please give us ownership of the new YouTube channel",
          detail: "In YouTube Studio, open Settings, then Permissions, then Invite, and add marketing.aiyogi@proton.me as Owner.",
          unblocks: "We can begin the new thumbnails as soon as access arrives."
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
        { when: "Week 2", text: "Okara drafted a first batch of ideas. Nothing is published without our review." },
        { when: "Week 2", text: "Set our content rules." },
        { when: "Week 1", text: "Prepared the 4-month plan, audited aiyogi.ai and set up Okara, X, LinkedIn and the team email." }
      ]
    }
  ],

  /* Shared across weeks */

  tracking: {
    intro:
      "Every link we post ends with a short tag, called a UTM. When someone clicks, the tag tells Google Analytics which channel and which post sent them. This is how we will learn which posts bring genuine visitors.",
    example: "https://aiyogi.ai/?utm_source=x&utm_medium=organic&utm_campaign=2026-10-weekly",
    parts: [
      { tag: "utm_source", means: "Where the click came from, such as x or linkedin" },
      { tag: "utm_medium", means: "The kind of traffic, such as an organic post, a creator or an email" },
      { tag: "utm_campaign", means: "The theme and month, such as 2026-10-weekly" }
    ],
    status:
      "The tag is active on the aiyogi.ai homepage and blog pages, so visits are being recorded.",
    meanwhile:
      "Click counts within X and LinkedIn come from their own post statistics, which we review weekly."
  },

  reddit: {
    status: "The account has been created and uses the marketing email.",
    principles: [
      "One clearly labelled team account. We state who we are in every thread.",
      "To begin with, we offer only helpful comments, without links, to build credibility.",
      "After that, about 5 thoughtful replies per week, with a link in at most one reply in ten, and only when it genuinely answers the question.",
      "We read each community's rules first. If brand accounts are not welcome, we do not participate.",
      "We do not reply on sensitive threads such as trauma, addiction, self-harm or sexual topics. A person reviews every thread Okara suggests before we write anything."
    ],
    communities: ["r/Meditation", "r/taoism", "r/Buddhism", "r/nonduality", "r/Dzogchen", "r/Yoga"],
    measure: "Replies that stay up, upvotes, and clicks from tracked links."
  },

  posts: {
    note: "Two posts per day on X, at 9:00 am and 5:00 pm Florida time, and one LinkedIn post each weekday at 8:30 am. All posts use 'inspired by' wording and follow our content rules.",
    themes: [
      "Why the path is graduated: body first, then energy and sound, then the nature of mind",
      "Short practice prompts, such as noticing the body for two minutes",
      "How the guides are inspired by traditions and do not replace a living teacher",
      "Free first conversations, with a suggested $9 per month for those who find it valuable"
    ],
    next: "The next batch, for 26 Oct to 1 Nov, is being prepared for our review."
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
    billing: "Our $500 invoice is sent on the last Monday of each month. Once payment has been processed, it usually takes 2 to 3 days to appear in our account. Thank you for your continued trust.",
    note: "We report on what we deliver rather than on hours. This is the planned maximum and may vary from week to week.",
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
    note: "This page is refreshed every Friday afternoon. All times are shown in Florida time.",
    cronUtc: { weekday: 5, hour: 18, minute: 30 } // Friday 18:30 UTC
  }
};
