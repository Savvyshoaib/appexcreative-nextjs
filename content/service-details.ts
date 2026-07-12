export type ServiceDetail = {
  slug: string;
  title: string;
  eyebrow: string;
  heroDescription: string;
  heroImage: string;
  problem: {
    title: string;
    points: { title: string; description: string }[];
  };
  whyStruggle: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    description: string;
    points: string[];
  };
  process: { step: string; title: string; description: string }[];
  deliverables: string[];
  timeline: { phase: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedCaseStudySlugs: string[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "performance-marketing": {
    slug: "performance-marketing",
    title: "Performance Marketing",
    eyebrow: "Growth & Performance",
    heroDescription:
      "Paid acquisition engineered for payback period, not just impressions — across Meta, Google, and TikTok.",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=900&fit=crop&auto=format&q=80",
    problem: {
      title: "Spend is going up. Efficiency isn't.",
      points: [
        {
          title: "Rising CAC, flat LTV",
          description:
            "Costs climb every quarter while the quality of customers acquired stays exactly the same — or gets worse.",
        },
        {
          title: "Creative fatigue",
          description:
            "The same three ad concepts have been running for six months because there's no real production pipeline behind them.",
        },
        {
          title: "Attribution nobody trusts",
          description:
            "Platform-reported numbers and actual revenue tell two different stories, and nobody can reconcile them.",
        },
      ],
    },
    whyStruggle: {
      title: "Why most teams struggle with paid",
      description:
        "Most in-house teams and agencies treat paid media as a media-buying exercise — pick a budget, pick a platform, optimize the bids. But performance marketing is a creative and data problem wearing a media-buying costume. Without a real creative testing pipeline and clean attribution, no amount of bid optimization moves the number that matters: profitable, repeatable growth.",
    },
    solution: {
      title: "A media engine built around payback period",
      description:
        "We run performance marketing as a single integrated system — strategy, creative production, and media buying under one roof — so every lever is pulling in the same direction.",
      points: [
        "Full-funnel channel strategy across Meta, Google, and TikTok, prioritized by payback period",
        "Continuous creative testing pipeline producing 8-15 new concepts monthly",
        "Server-side tracking and first-party attribution that reconciles with actual revenue",
        "Weekly budget reallocation based on cohort-level LTV, not last-click ROAS",
      ],
    },
    process: [
      { step: "01", title: "Audit", description: "Full account, tracking, and creative audit against your unit economics." },
      { step: "02", title: "Strategy", description: "Channel and budget plan built around payback period targets." },
      { step: "03", title: "Build", description: "Tracking implementation and first creative batch production." },
      { step: "04", title: "Launch", description: "Phased launch with structured testing across audiences and creative." },
      { step: "05", title: "Scale", description: "Weekly optimization and reallocation toward what's actually working." },
    ],
    deliverables: [
      "Full-funnel paid media strategy document",
      "Server-side tracking implementation",
      "Monthly creative production (8-15 concepts)",
      "Weekly performance reporting dashboard",
      "Quarterly channel and budget reviews",
    ],
    timeline: [
      { phase: "Weeks 1-2", title: "Onboarding & audit", description: "Access setup, tracking audit, and account review." },
      { phase: "Weeks 3-4", title: "Strategy & build", description: "Channel strategy finalized, tracking implemented, first creative batch produced." },
      { phase: "Week 5", title: "Launch", description: "Campaigns go live across prioritized channels." },
      { phase: "Ongoing", title: "Optimize & scale", description: "Weekly testing, reporting, and budget reallocation." },
    ],
    faqs: [
      {
        question: "Which platforms do you manage?",
        answer:
          "Meta, Google (Search, Shopping, PMax), and TikTok are our core platforms — we add LinkedIn or Pinterest when the audience fit justifies it.",
      },
      {
        question: "Is ad spend included in your fee?",
        answer:
          "No. Our fee covers strategy, creative production, and management. Media spend is billed separately and managed transparently through your own ad accounts.",
      },
      {
        question: "How quickly will we see results?",
        answer:
          "Directional signal within 2-3 weeks of launch; statistical confidence on new campaigns typically by day 45-60.",
      },
      {
        question: "Do you produce the creative in-house?",
        answer:
          "Yes — our in-house creative and UGC team produces all testing creative, so production speed doesn't bottleneck the testing pipeline.",
      },
    ],
    relatedCaseStudySlugs: ["haven-goods", "orbit-fitness"],
  },
};
