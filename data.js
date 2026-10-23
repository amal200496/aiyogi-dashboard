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
        level: "watch",
        label: "Watch",
        text: "The groundwork is on track. The first article and YouTube thumbnails are held up by two things only you can unlock."
      },
      summary:
        "The blog is live, analytics is recording visits, and our X posts are scheduled through 23 Oct. The first article is written and waiting for a site republish.",

      actions: [
        {
          id: "youtube",
          priority: "high",
          title: "Give us ownership of the new YouTube channel",
          detail:
            "In YouTube Studio, open Settings, then Permissions, then Invite, and add marketing.aiyogi@proton.me as Owner (Manager works if Owner isn't offered).",
          unblocks: "New thumbnails start the day access arrives."
        },
        {
          id: "republish",
          priority: "high",
          title: "Approve Publisher access for our Replit account",
          detail:
            "Replit shows our account a 'Request Publisher access' message. Approving it lets us republish the site ourselves. If you would rather do it yourself, click Republish in Tools, then Publishing.",
          unblocks: "The first article goes live and analytics starts counting visits to blog pages."
        },
        {
          id: "analytics-owner",
          priority: "normal",
          title: "Tell us which Google account owns your Analytics",
          detail:
            "The site's tag is G-1DJSWB8W28. We need to confirm that the numbers we read belong to that property.",
          unblocks: "We can trust and report visit numbers."
        },
        {
          id: "teachers",
          priority: "normal",
          title: "Confirm in writing which living teachers we may name",
          detail:
            "Until we hear, our posts and articles will not name living teachers or imply their endorsement.",
          unblocks: "We can use their names where you want them used."
        },
        {
          id: "verified",
          priority: "normal",
          title: "Send us a weekly count of new verified emails",
          detail:
            "This is our main number, and it lives in your app rather than in Google Analytics. A one-line email each Friday is enough.",
          unblocks: "We can show our main number and its trend."
        }
      ],

      decisions: [
        {
          id: "social",
          question: "What should we do with the existing social accounts?",
          context: "x.com/AiYogiAi, @AiYogiAi on YouTube, Instagram and Facebook already exist next to the new accounts.",
          options: ["Hand them over to us", "Merge into the new accounts", "Leave them as they are"]
        },
        {
          id: "price",
          question: "Which price should we state for voice?",
          context: "The site shows $9.97 for voice. Our copy says a suggested $9 a month.",
          options: ["Change the site to $9", "We quote $9.97 for voice", "Keep both and explain"]
        }
      ],

      northStar: {
        label: "Verified-email users per week",
        value: null,
        prev: null,
        unit: "",
        source: "Needs your app's signup data",
        asOf: null,
        note: "We can't see this yet. Once you send a weekly count, this shows the number and a trend line."
      },

      funnel: {
        note: "Only stages we can measure are filled in. The rest say so.",
        stages: [
          {
            label: "Visits to aiyogi.ai",
            value: 13,
            prev: null,
            unit: "last 7 days",
            source: "Okara's Google Analytics view",
            asOf: "2026-10-23",
            note: "Early reading. We are confirming the Analytics property."
          },
          { label: "Intro conversations", value: null, source: "Your app", note: "Not measured yet." },
          { label: "Verified emails", value: null, source: "Your app", note: "Not measured yet." },
          { label: "Supporters", value: null, source: "Your app", note: "Not measured yet." }
        ]
      },

      channels: [
        {
          name: "X",
          status: "14 posts scheduled for 17 to 23 Oct, two a day",
          metrics: [
            { label: "Followers", value: null, source: "X analytics", note: "We add this from X's own stats next update." }
          ]
        },
        {
          name: "LinkedIn",
          status: "Page live. Weekday posts start next week.",
          metrics: [
            { label: "Followers", value: null, source: "LinkedIn Page analytics", note: "We add this from LinkedIn's own stats next update." }
          ]
        },
        {
          name: "Blog and Google search",
          status: "Blog live at aiyogi.ai/blog. First article waiting for a republish.",
          metrics: [
            { label: "Articles live", value: 0, prev: null, unit: "of 1 ready", source: "aiyogi.ai/blog", asOf: "2026-10-23" },
            {
              label: "Google search, 7 days",
              value: "51 views, 5 clicks",
              source: "Google Search Console",
              asOf: "2026-10-10",
              note: "Our latest reading. We refresh it next update."
            }
          ]
        },
        {
          name: "Reddit",
          status: "Account created. Next is listening, then helpful comments with no links.",
          metrics: [
            { label: "Replies that stayed up", value: null, source: "Reddit", note: "Counting starts with our first reply." }
          ]
        },
        {
          name: "YouTube",
          status: "Waiting on channel ownership. Thumbnails start once we have it.",
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

      shipped: [
        { state: "done", text: "14 X posts scheduled, 17 to 23 Oct" },
        { state: "done", text: "LinkedIn Page post published on 21 Oct" },
        { state: "done", text: "Blog launched at aiyogi.ai/blog" },
        { state: "done", text: "First article written and tested (about 2,500 words, with 6 FAQs)" },
        { state: "done", text: "Analytics tag live on the homepage, and Okara connected to Google Analytics" },
        { state: "done", text: "Okara's Reddit and article rules corrected" },
        { state: "done", text: "Reddit account created" },
        { state: "done", text: "Article route to the site tested with a private review copy and a trial change request" },
        { state: "waiting", text: "First article live", reason: "Needs a site republish." },
        { state: "waiting", text: "Analytics tag on blog pages", reason: "Goes live with the same republish." },
        { state: "waiting", text: "YouTube thumbnails", reason: "Needs channel ownership." },
        { state: "moved", text: "LinkedIn weekday posts", reason: "Start next week, once we have checked a full batch." }
      ],

      next: {
        label: "Next week, 26 Oct to 1 Nov",
        days: [
          { day: "Mon 26", date: "2026-10-26", items: ["Next batch of X posts goes out", "LinkedIn weekday posts begin"] },
          { day: "Tue 27", date: "2026-10-27", items: ["Read each Reddit community's rules and start helpful comments, with no links"] },
          { day: "Wed 28", date: "2026-10-28", items: ["Read our first full set of Google Analytics numbers"] },
          { day: "Thu 29", date: "2026-10-29", items: ["Review Okara's next article topics and pick the next one to write"] },
          { day: "Fri 30", date: "2026-10-30", items: ["Weekly report", "This dashboard refreshes at 2:30 pm Florida time"] },
          { day: "Sat 31", date: "2026-10-31", items: ["X posts continue"] },
          { day: "Sun 1 Nov", date: "2026-11-01", items: ["X posts continue", "US clocks go back. Our posting times stay the same in Florida time."] }
        ],
        dependsOn:
          "Two items need you: YouTube ownership and Replit access. The rest of this plan runs without anything from you."
      },

      expect: {
        see: [
          "Two X posts a day and one LinkedIn post each weekday.",
          "The first article live, as soon as the site is republished.",
          "A first full set of visit numbers for aiyogi.ai.",
          "Our first helpful Reddit comments, with no promotional links.",
          "A weekly report and a refreshed dashboard on Friday afternoon, Florida time."
        ],
        notYet: [
          "A jump in traffic. This month is groundwork, and search results start showing from December.",
          "Promises about rankings or revenue.",
          "Our main number, verified emails per week. We need your weekly count first.",
          "New YouTube thumbnails. Those begin once we have channel ownership."
        ],
        how: [
          "Message us any time. We reply within one business day.",
          "Routine posts and replies follow the content rules we agreed, so they go out without waiting for you. Ask us to change or pull anything, whenever you like.",
          "Anything new, we ask first: new claims, teacher names, pricing, health topics, partnerships or spending."
        ]
      },

      learnings: [
        "Okara drafts fast, but not always inside our content rules, so a person reads every draft before it goes out.",
        "Scheduling a week at a time works better than posting day by day.",
        "Anything that needs a site republish waits on access, which is why that request matters."
      ],

      connections: [
        {
          group: "Connected",
          state: "ok",
          items: [
            { item: "Okara workspace for aiyogi.ai", note: "Encrypted, with AIYogi's details loaded" },
            { item: "Google Search Console", note: "Search data is coming in" },
            { item: "Google Analytics", note: "Tag is on the homepage and Okara reads the data. Owner to be confirmed." },
            { item: "X @aiyogi_ai", note: "Okara drafts, we review and schedule" },
            { item: "LinkedIn Page", note: "Posts as the AIYogi Page, not a personal profile" },
            { item: "GitHub review copy of the site", note: "Okara can hand us an article as a change request, and we tested it" }
          ]
        },
        {
          group: "Waiting",
          state: "wait",
          items: [
            { item: "Analytics on blog pages", note: "Built. Goes live with the next republish." },
            { item: "First article on the blog", note: "Built. Goes live with the next republish." },
            { item: "YouTube", note: "Needs channel ownership." }
          ]
        },
        {
          group: "Okara can't connect these, so we do them by hand",
          state: "manual",
          items: [
            { item: "Reddit", note: "Account created. A person writes and posts every reply." },
            { item: "Instagram and TikTok", note: "Okara lists both as coming soon. We can set up profiles and post by hand if you'd like them." }
          ]
        }
      ],

      achieved: [
        { when: "Week 4", text: "Blog launched at aiyogi.ai/blog, and the first article is written and ready." },
        { when: "Week 4", text: "Analytics tag live on aiyogi.ai, with Okara reading the data." },
        { when: "Week 4", text: "Okara's Reddit and article rules corrected, and the Reddit account created." },
        { when: "Week 4", text: "Tested the route that takes an article from Okara to the site." },
        { when: "Week 3", text: "Scheduled 14 X posts and published a LinkedIn Page post." },
        { when: "Week 2", text: "Published our first posts on X and LinkedIn." },
        { when: "Week 2", text: "Okara drafted a first batch: 51 X ideas, 48 LinkedIn posts, 51 article topics, 96 Reddit opportunities and 85 site fixes. Nothing goes out without our review." },
        { when: "Week 2", text: "Set our content rules: no health or therapy claims, no implied endorsement by living teachers, no invented testimonials. We held back drafts that broke them." },
        { when: "Week 2", text: "Published this dashboard." },
        { when: "Week 1", text: "Wrote the 4-month plan and our working agreement (1 Oct to 31 Jan)." },
        { when: "Week 1", text: "Audited aiyogi.ai. Two findings: the site loads mostly through JavaScript, so Google and AI assistants may see very little of it, and it wasn't recording visits." },
        { when: "Week 1", text: "Set up Okara, our AI marketing tool, for AIYogi. Your data is encrypted and Search Console is already connected." },
        { when: "Week 1", text: "Created marketing.aiyogi@proton.me as the team's email." },
        { when: "Week 1", text: "Set up @aiyogi_ai on X and the AIYogi LinkedIn Page, and connected both to Okara." },
        { when: "Week 1", text: "Wrote bios for X, LinkedIn, YouTube, Reddit, Instagram and TikTok, plus tracked links and image briefs." }
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
      "The tag is on the aiyogi.ai homepage, so visits are being recorded. Blog pages join after the next site republish.",
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
    note: "This page refreshes every Friday afternoon. Times are shown in Florida time.",
    cronUtc: { weekday: 5, hour: 18, minute: 30 } // Friday 18:30 UTC
  }
};
