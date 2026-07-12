import type { PricingTier } from "@/components/sections/pricing-cards";

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$4,500",
    cadence: "/mo",
    description: "For early-stage companies validating channels.",
    features: [
      "One core growth channel",
      "Monthly strategy call",
      "Performance dashboard",
      "Creative production (2 assets/mo)",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "$9,500",
    cadence: "/mo",
    description: "For scaling companies ready for a full-funnel team.",
    mostPopular: true,
    features: [
      "Up to 3 integrated channels",
      "Weekly strategy calls",
      "Dedicated account & creative lead",
      "Creative production (8 assets/mo)",
      "CRO & landing page support",
      "Priority Slack support",
    ],
  },
  {
    name: "Scale",
    price: "$18,000",
    cadence: "/mo",
    description: "For established brands running complex, multi-channel programs.",
    features: [
      "Unlimited channel integration",
      "Dedicated pod (strategy, media, creative)",
      "Weekly & quarterly business reviews",
      "Unlimited creative production",
      "Custom reporting & attribution",
      "AI automation & tooling included",
    ],
  },
];

export const pricingFaqs = [
  {
    question: "Do you require long-term contracts?",
    answer:
      "No. Engagements run month-to-month after an initial 90-day ramp period, which is how long most channels need to reach statistical significance.",
  },
  {
    question: "What does onboarding look like?",
    answer:
      "Onboarding takes 1-2 weeks and includes a growth audit, access setup, tracking implementation, and a 90-day roadmap presented to your team.",
  },
  {
    question: "Can I cancel at any time?",
    answer:
      "Yes, with 30 days' notice after the initial ramp period. We don't believe in trapping clients in contracts they don't want to be in.",
  },
  {
    question: "What's included in ad spend?",
    answer:
      "Retainer fees cover strategy, execution, and creative production. Media spend is billed separately and managed transparently through your own ad accounts.",
  },
];
