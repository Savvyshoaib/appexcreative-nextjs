import {
  ShoppingBag,
  Cloud,
  Sparkles,
  Hotel,
  Building2,
  HeartPulse,
} from "lucide-react";
import type { Industry } from "@/components/sections/industry-card";

export const industries: Industry[] = [
  {
    name: "E-commerce",
    description:
      "Full-funnel growth for retailers scaling past their first million in revenue.",
    metricValue: "3.1x",
    metricLabel: "average ROAS across e-commerce clients",
    icon: ShoppingBag,
  },
  {
    name: "SaaS",
    description:
      "Demand generation and lifecycle programs built around trial-to-paid conversion.",
    metricValue: "+156%",
    metricLabel: "average pipeline growth in year one",
    icon: Cloud,
  },
  {
    name: "D2C",
    description:
      "Brand, content, and paid media systems for direct-to-consumer challengers.",
    metricValue: "48",
    metricLabel: "D2C brands scaled past $1M ARR",
    icon: Sparkles,
  },
  {
    name: "Hospitality",
    description:
      "Direct booking growth that reduces dependence on OTA commissions.",
    metricValue: "+74%",
    metricLabel: "average direct booking lift",
    icon: Hotel,
  },
  {
    name: "B2B",
    description:
      "ABM, content, and lifecycle programs aligned to long sales cycles.",
    metricValue: "2.4x",
    metricLabel: "average SQL volume increase",
    icon: Building2,
  },
  {
    name: "Healthcare",
    description:
      "Compliant, trust-first marketing for providers and health tech companies.",
    metricValue: "38%",
    metricLabel: "average cost-per-lead reduction",
    icon: HeartPulse,
  },
];
