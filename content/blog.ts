export const blogCategories = ["All", "Growth", "Brand", "Product", "AI"] as const;

export type BlogPostBody = {
  type: "paragraph" | "heading" | "quote";
  text: string;
};

export type BlogPost = {
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  slug: string;
  author: {
    name: string;
    role: string;
    photo: string;
  };
  body?: BlogPostBody[];
};

export type FullBlogPost = BlogPost & {
  category: (typeof blogCategories)[number];
};

export const blogPosts: FullBlogPost[] = [
  {
    slug: "why-cac-is-the-wrong-metric",
    category: "Growth",
    title: "Why CAC is the wrong metric to obsess over in 2026",
    excerpt:
      "Cost per acquisition tells you what something costs, not whether it's working. Here's the framework we use instead.",
    date: "Jun 18, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=700&fit=crop&auto=format&q=80",
    author: {
      name: "David Alonso",
      role: "Head of Growth",
      photo: "https://i.pravatar.cc/150?img=65",
    },
    body: [
      {
        type: "paragraph",
        text: "Every growth meeting we've ever sat in eventually arrives at the same number: CAC. Customer acquisition cost gets treated as the north star metric — the single figure that tells you whether a channel, a campaign, or an entire marketing team is working. It isn't, and treating it that way quietly wrecks more growth strategies than any bad creative ever could.",
      },
      {
        type: "heading",
        text: "CAC answers the wrong question",
      },
      {
        type: "paragraph",
        text: "CAC tells you what you paid. It says nothing about what you got. A $40 CAC that converts into a customer worth $80 in lifetime value is a bad trade. A $140 CAC that converts into a customer worth $900 is one of the best decisions your company will make this year. Without LTV sitting next to it, CAC is a number with no context — and decisions made on numbers without context are decisions made on vibes.",
      },
      {
        type: "paragraph",
        text: "We see this most often in paid social. A campaign gets killed because CAC crept up 15% month over month, without anyone checking whether that channel was also pulling in a higher-value segment of customer. Cutting it looked like discipline. It was actually the opposite — it was optimizing for a spreadsheet cell instead of the business.",
      },
      {
        type: "heading",
        text: "What we track instead",
      },
      {
        type: "paragraph",
        text: "We build every reporting dashboard around payback period and contribution margin per channel, not raw acquisition cost. Payback period — how many months until a customer's gross margin repays what it cost to acquire them — captures both sides of the equation in one number that's actually decision-useful. A 14-month payback period is a real problem regardless of how attractive the CAC looks in isolation.",
      },
      {
        type: "quote",
        text: "If you can only look at one number, look at how fast you get your money back — not how little you spent to begin with.",
      },
      {
        type: "paragraph",
        text: "Contribution margin per channel matters just as much, especially once you're running multiple acquisition channels with genuinely different customer profiles. A channel with a slightly higher CAC but meaningfully better retention and margin will out-earn a 'cheaper' channel within two quarters, every time we've measured it.",
      },
      {
        type: "heading",
        text: "The practical shift",
      },
      {
        type: "paragraph",
        text: "None of this means ignore CAC. It's a useful input. It just isn't the metric that should decide whether a channel lives or dies. When we onboard a new client, one of the first things we do is rebuild their dashboard around payback period and 90-day contribution margin, sitting directly next to CAC — not replacing it, but finally giving it the context it needs to mean something.",
      },
    ],
  },
  {
    slug: "where-ai-automation-pays-off",
    category: "AI",
    title: "Where AI automation actually pays off in a marketing funnel",
    excerpt:
      "Not every workflow needs a chatbot. A practical breakdown of where automation creates real leverage.",
    date: "Jun 4, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=1200&h=700&fit=crop&auto=format&q=80",
    author: {
      name: "Tomas Vega",
      role: "Head of AI & Automation",
      photo: "https://i.pravatar.cc/150?img=12",
    },
  },
  {
    slug: "the-positioning-exercise",
    category: "Brand",
    title: "The positioning exercise we run with every new client",
    excerpt:
      "A simple two-hour workshop that clarifies messaging faster than a month of internal debate.",
    date: "May 22, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=700&fit=crop&auto=format&q=80",
    author: {
      name: "Naomi Field",
      role: "Creative Director",
      photo: "https://i.pravatar.cc/150?img=32",
    },
  },
  {
    slug: "landing-page-speed-is-a-conversion-feature",
    category: "Product",
    title: "Landing page speed is a conversion feature, not an engineering task",
    excerpt:
      "How we think about Core Web Vitals as a growth lever, not a checkbox for the dev team.",
    date: "May 9, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop&auto=format&q=80",
    author: {
      name: "Ravi Kapoor",
      role: "Head of Product & Web",
      photo: "https://i.pravatar.cc/150?img=68",
    },
  },
  {
    slug: "lifecycle-email-flows-for-d2c",
    category: "Growth",
    title: "The lifecycle email flows every D2C brand should have by month three",
    excerpt:
      "Welcome, browse abandonment, post-purchase, win-back — the sequencing and timing that actually moves revenue.",
    date: "Apr 27, 2026",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=700&fit=crop&auto=format&q=80",
    author: {
      name: "David Alonso",
      role: "Head of Growth",
      photo: "https://i.pravatar.cc/150?img=65",
    },
  },
  {
    slug: "creative-testing-velocity",
    category: "Brand",
    title: "Creative testing velocity matters more than creative budget",
    excerpt:
      "Why we'd rather ship 20 rough concepts a month than 3 polished ones — and how to structure the pipeline.",
    date: "Apr 11, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=1200&h=700&fit=crop&auto=format&q=80",
    author: {
      name: "Naomi Field",
      role: "Creative Director",
      photo: "https://i.pravatar.cc/150?img=32",
    },
  },
  {
    slug: "lead-qualification-bot-sales-reps-trust",
    category: "AI",
    title: "Building a lead-qualification bot that sales reps actually trust",
    excerpt:
      "The design decisions that determine whether an AI chatbot becomes a pipeline asset or a support ticket.",
    date: "Mar 30, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=700&fit=crop&auto=format&q=80",
    author: {
      name: "Tomas Vega",
      role: "Head of AI & Automation",
      photo: "https://i.pravatar.cc/150?img=12",
    },
  },
  {
    slug: "briefing-ui-ux-work-checklist",
    category: "Product",
    title: "A practical checklist for briefing UI/UX work to an agency",
    excerpt:
      "What we need from you in the first meeting to avoid three rounds of revisions later.",
    date: "Mar 14, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1200&h=700&fit=crop&auto=format&q=80",
    author: {
      name: "Ravi Kapoor",
      role: "Head of Product & Web",
      photo: "https://i.pravatar.cc/150?img=68",
    },
  },
];
