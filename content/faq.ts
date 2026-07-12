import type { FaqItem } from "@/components/sections/faq-accordion";

export const faqCategories = [
  "General",
  "Services",
  "Pricing & Contracts",
  "Process",
  "Results & Reporting",
] as const;

export const faqs: FaqItem[] = [
  {
    category: "General",
    question: "What makes Appexcreative different from other agencies?",
    answer:
      "We run growth, brand, and product under one integrated team instead of handing you off between vendors. That means faster iteration, consistent strategy, and no finger-pointing when something underperforms.",
  },
  {
    category: "General",
    question: "What size companies do you work with?",
    answer:
      "Most clients range from Series A startups to $50M-revenue growth-stage companies. We size our engagement model to match your team's capacity and internal marketing maturity.",
  },
  {
    category: "General",
    question: "Do you work with agencies or teams we already have in place?",
    answer:
      "Yes. We regularly run alongside internal marketing teams, filling specific gaps like paid media, creative production, or web development.",
  },
  {
    category: "General",
    question: "Where is your team based?",
    answer:
      "Our core team is based in San Francisco with specialists distributed across North America and Europe, all working in overlapping hours with your team.",
  },
  {
    category: "Services",
    question: "Can I hire you for a single service instead of a full engagement?",
    answer:
      "Yes. While most clients start with an integrated engagement, we also scope single-service projects — most commonly web development, brand identity, or a CRO audit.",
  },
  {
    category: "Services",
    question: "Do you write and produce creative in-house?",
    answer:
      "Yes, we have in-house designers, editors, and a creator network for UGC production, so creative turnaround doesn't depend on a third party.",
  },
  {
    category: "Services",
    question: "Which ad platforms do you manage?",
    answer:
      "Meta, Google, TikTok, LinkedIn, and Pinterest are our core platforms, selected based on where your audience actually spends time.",
  },
  {
    category: "Services",
    question: "Do you build websites on any specific platform?",
    answer:
      "We primarily build on Next.js for performance and flexibility, with headless CMS integrations (Sanity, Contentful) for teams that need to self-manage content.",
  },
  {
    category: "Services",
    question: "What does 'AI automation' actually include?",
    answer:
      "Lead-qualification chatbots, internal workflow automation, and reporting automation — always scoped to a specific bottleneck, not AI for its own sake.",
  },
  {
    category: "Pricing & Contracts",
    question: "Do you require long-term contracts?",
    answer:
      "No. Engagements run month-to-month after an initial 90-day ramp period, which is how long most channels need to reach statistical significance.",
  },
  {
    category: "Pricing & Contracts",
    question: "Is ad spend included in the retainer?",
    answer:
      "No. Retainers cover strategy, execution, and creative production. Media spend is billed separately and managed transparently through your own ad accounts.",
  },
  {
    category: "Pricing & Contracts",
    question: "How is pricing determined for custom scopes?",
    answer:
      "Custom and enterprise scopes are priced based on channel count, creative volume, and reporting complexity — we'll always share a clear breakdown before you sign anything.",
  },
  {
    category: "Pricing & Contracts",
    question: "Can I cancel if it's not working out?",
    answer:
      "Yes, with 30 days' notice after the initial ramp period. We don't believe in trapping clients in contracts they don't want to be in.",
  },
  {
    category: "Process",
    question: "What happens in the first 30 days?",
    answer:
      "We run a full growth audit, implement tracking, and deliver a 90-day roadmap presented directly to your team — no engagement starts with guesswork.",
  },
  {
    category: "Process",
    question: "How often will we communicate?",
    answer:
      "Weekly calls for Growth and Scale tier clients, plus a shared Slack channel for day-to-day questions and async updates.",
  },
  {
    category: "Process",
    question: "Who will actually be working on my account?",
    answer:
      "A named strategist, media buyer, and creative lead — the same people every week, not a rotating pool of junior staff.",
  },
  {
    category: "Process",
    question: "How do you handle approvals for creative and campaigns?",
    answer:
      "We use a shared approval workflow with clear turnaround SLAs, so nothing launches without your sign-off but nothing gets stuck waiting on us either.",
  },
  {
    category: "Results & Reporting",
    question: "How do you report on performance?",
    answer:
      "A live dashboard updated daily, plus a written monthly summary that ties performance back to your actual business goals, not just platform metrics.",
  },
  {
    category: "Results & Reporting",
    question: "How soon should we expect results?",
    answer:
      "Paid channels typically show directional signal within 30 days and statistical confidence by day 90. SEO and content programs generally take 4-6 months to compound.",
  },
  {
    category: "Results & Reporting",
    question: "What if performance doesn't improve?",
    answer:
      "We treat flat performance as a diagnostic problem, not a reason to keep spending the same way — every quarterly review includes a explicit go/pivot/stop recommendation.",
  },
];
