import type { CaseStudy } from "@/components/sections/case-study-card";

export const industryFilters = [
  "All",
  "E-commerce",
  "SaaS",
  "D2C",
  "Hospitality",
  "B2B",
] as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: "novaware",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format&q=80",
    client: "Novaware",
    industry: "SaaS",
    metricValue: "+184%",
    metricLabel: "pipeline growth in 6 months",
    summary: "Rebuilt demand generation for a B2B analytics platform.",
    challenge:
      "Novaware had a strong product but inconsistent lead flow — paid spend was scaling faster than pipeline quality.",
    approach:
      "We rebuilt their acquisition funnel around intent-based paid search, rewrote core messaging around a single value proposition, and stood up lifecycle email to nurture mid-funnel leads.",
    result:
      "Qualified pipeline grew 184% in six months while cost per opportunity dropped 37%.",
  },
  {
    slug: "haven-goods",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&auto=format&q=80",
    client: "Haven Goods",
    industry: "D2C",
    metricValue: "3.2x",
    metricLabel: "return on ad spend",
    summary: "Scaled a home goods D2C brand from $40K to $310K monthly revenue.",
    challenge:
      "Haven Goods had plateaued on Meta with rising CAC and a creative library that had gone stale.",
    approach:
      "We stood up a continuous UGC production pipeline, rebuilt their landing page for conversion, and restructured campaign architecture around creative testing velocity.",
    result:
      "Monthly revenue grew from $40K to $310K in eight months at a blended 3.2x ROAS.",
  },
  {
    slug: "orbit-fitness",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=80",
    client: "Orbit Fitness",
    industry: "E-commerce",
    metricValue: "+61%",
    metricLabel: "conversion rate lift",
    summary: "CRO and web rebuild for a fast-growing fitness equipment retailer.",
    challenge:
      "A slow, dated storefront was leaking checkout conversions despite healthy top-of-funnel traffic.",
    approach:
      "We rebuilt the storefront on a modern headless stack, ran a structured CRO testing program on product and checkout pages, and simplified the mobile purchase flow.",
    result:
      "Site speed improved 68% and conversion rate lifted 61% within the first quarter post-launch.",
  },
  {
    slug: "the-linden",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&auto=format&q=80",
    client: "The Linden",
    industry: "Hospitality",
    metricValue: "+92%",
    metricLabel: "direct booking revenue",
    summary: "Brand and booking funnel overhaul for a boutique hotel group.",
    challenge:
      "Over-reliance on OTAs was compressing margins, and the brand's digital presence didn't match its in-person experience.",
    approach:
      "We led a full brand identity refresh, rebuilt the booking site for speed and clarity, and launched a direct-booking incentive campaign across paid and email.",
    result:
      "Direct booking revenue grew 92% year-over-year, reducing OTA commission spend significantly.",
  },
  {
    slug: "fieldstack",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop&auto=format&q=80",
    client: "Fieldstack",
    industry: "B2B",
    metricValue: "412",
    metricLabel: "sales-qualified leads per quarter",
    summary: "Full-funnel demand generation for an industrial software platform.",
    challenge:
      "Fieldstack's sales team had capacity to grow but marketing wasn't producing enough qualified pipeline.",
    approach:
      "We built an ABM-style paid LinkedIn program, launched a content marketing engine targeting operations decision-makers, and implemented lead scoring tied to CRM data.",
    result:
      "SQLs grew from roughly 90 to 412 per quarter within a year, with sales cycle length dropping 18%.",
  },
  {
    slug: "verdant",
    image:
      "https://images.unsplash.com/photo-1607703703674-df96af81dffa?w=800&h=600&fit=crop&auto=format&q=80",
    client: "Verdant",
    industry: "D2C",
    metricValue: "+140%",
    metricLabel: "email-driven revenue",
    summary: "Lifecycle marketing buildout for a sustainable skincare brand.",
    challenge:
      "Verdant had a growing list but almost no lifecycle infrastructure — one-off campaigns with no flows.",
    approach:
      "We built a full flow suite (welcome, browse abandonment, post-purchase, win-back), redesigned templates to match brand identity, and implemented list segmentation.",
    result:
      "Email-attributed revenue grew 140% quarter-over-quarter and now represents 31% of total revenue.",
  },
];
