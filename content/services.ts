import {
  TrendingUp,
  Search,
  MousePointerClick,
  BarChart3,
  Mail,
  Palette,
  Lightbulb,
  Video,
  PenTool,
  Users,
  Code2,
  LayoutTemplate,
  Bot,
  Compass,
  Share2,
} from "lucide-react";
import type { Service } from "@/components/sections/service-card";

export const serviceCategories = [
  { slug: "growth-performance", label: "Growth & Performance" },
  { slug: "brand-creative", label: "Brand & Creative" },
  { slug: "product-web", label: "Product & Web" },
  { slug: "strategy-social", label: "Strategy & Social" },
] as const;

export const services: Service[] = [
  {
    slug: "performance-marketing",
    category: "growth-performance",
    title: "Performance Marketing",
    description:
      "Paid acquisition engineered for payback period, not just impressions.",
    icon: TrendingUp,
    bullets: ["Meta, Google & TikTok Ads", "Creative testing at scale", "Weekly budget optimization"],
  },
  {
    slug: "seo",
    category: "growth-performance",
    title: "SEO",
    description:
      "Technical, content, and authority SEO built for compounding organic growth.",
    icon: Search,
    bullets: ["Technical audits", "Content & topical maps", "Link acquisition"],
  },
  {
    slug: "cro",
    category: "growth-performance",
    title: "Conversion Rate Optimization",
    description:
      "Turn existing traffic into more revenue with disciplined testing.",
    icon: MousePointerClick,
    bullets: ["Landing page audits", "A/B & multivariate testing", "Funnel analytics"],
  },
  {
    slug: "analytics-reporting",
    category: "growth-performance",
    title: "Analytics & Reporting",
    description:
      "One dashboard, real numbers, no vanity metrics.",
    icon: BarChart3,
    bullets: ["Unified tracking setup", "Custom dashboards", "Monthly performance reviews"],
  },
  {
    slug: "email-lifecycle",
    category: "growth-performance",
    title: "Email & Lifecycle Marketing",
    description:
      "Retention and reactivation flows that turn customers into repeat buyers.",
    icon: Mail,
    bullets: ["Flow & campaign strategy", "Segmentation", "Deliverability management"],
  },
  {
    slug: "brand-identity",
    category: "brand-creative",
    title: "Brand Identity & Design",
    description:
      "Distinct visual systems that hold up across every touchpoint.",
    icon: Palette,
    bullets: ["Logo & visual identity", "Brand guidelines", "Packaging & collateral"],
  },
  {
    slug: "creative-strategy",
    category: "brand-creative",
    title: "Creative Strategy",
    description:
      "The narrative and positioning that makes everything else convert.",
    icon: Lightbulb,
    bullets: ["Positioning workshops", "Messaging frameworks", "Campaign concepting"],
  },
  {
    slug: "ugc-content",
    category: "brand-creative",
    title: "UGC Content Production",
    description:
      "Authentic, scroll-stopping content built for paid and organic feeds.",
    icon: Video,
    bullets: ["Creator sourcing", "Script & shot lists", "Rapid turnaround editing"],
  },
  {
    slug: "content-marketing",
    category: "brand-creative",
    title: "Content Marketing",
    description:
      "Editorial and long-form content that builds authority over time.",
    icon: PenTool,
    bullets: ["Content calendars", "SEO-driven writing", "Repurposing systems"],
  },
  {
    slug: "influencer-partnerships",
    category: "brand-creative",
    title: "Influencer & Creator Partnerships",
    description:
      "Creator relationships managed end-to-end, from sourcing to reporting.",
    icon: Users,
    bullets: ["Creator vetting", "Contracting & briefs", "Performance tracking"],
  },
  {
    slug: "web-development",
    category: "product-web",
    title: "Web Design & Development",
    description:
      "Fast, conversion-focused websites built on modern infrastructure.",
    icon: Code2,
    bullets: ["Next.js builds", "Headless CMS integration", "Performance engineering"],
  },
  {
    slug: "ui-ux-design",
    category: "product-web",
    title: "UI/UX Design",
    description:
      "Interfaces designed around how people actually behave.",
    icon: LayoutTemplate,
    bullets: ["Product design sprints", "Design systems", "Usability testing"],
  },
  {
    slug: "ai-automation",
    category: "product-web",
    title: "AI Automation & Chatbots",
    description:
      "Practical AI systems that remove manual work from your funnel.",
    icon: Bot,
    bullets: ["Lead-qualification bots", "Workflow automation", "Internal tooling"],
  },
  {
    slug: "marketing-strategy",
    category: "strategy-social",
    title: "Marketing Strategy & Consulting",
    description:
      "A clear, prioritized roadmap instead of a scattershot channel list.",
    icon: Compass,
    bullets: ["Growth audits", "Channel prioritization", "Quarterly planning"],
  },
  {
    slug: "social-media-management",
    category: "strategy-social",
    title: "Social Media Management",
    description:
      "Consistent, on-brand presence across every platform that matters.",
    icon: Share2,
    bullets: ["Content calendars", "Community management", "Platform-native formats"],
  },
];
