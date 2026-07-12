import Link from "next/link";
import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { PricingCards } from "@/components/sections/pricing-cards";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { pricingFaqs, pricingTiers } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, month-to-month pricing for Appexcreative's growth and creative engagements — Starter, Growth, and Scale tiers.",
};

const comparisonRows: { label: string; starter: boolean | string; growth: boolean | string; scale: boolean | string }[] = [
  { label: "Dedicated account lead", starter: true, growth: true, scale: true },
  { label: "Integrated channels", starter: "1", growth: "Up to 3", scale: "Unlimited" },
  { label: "Creative production", starter: "2 assets/mo", growth: "8 assets/mo", scale: "Unlimited" },
  { label: "CRO & landing pages", starter: false, growth: true, scale: true },
  { label: "Custom attribution & reporting", starter: false, growth: false, scale: true },
  { label: "AI automation & tooling", starter: false, growth: false, scale: true },
  { label: "Weekly strategy calls", starter: false, growth: true, scale: true },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple pricing. Serious results."
        description="No hidden fees, no long-term lock-in — just a clear scope matched to where your company is today."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <PricingCards tiers={pricingTiers} />
        </div>
      </section>

      <section className="border-t border-foreground/10 py-16">
        <Reveal className="mx-auto max-w-4xl rounded-xl border border-foreground/10 bg-card shadow-surface px-8 py-10 text-center lg:px-8">
          <h3 className="text-2xl font-semibold text-foreground">
            Need something custom?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Enterprise engagements with multi-brand portfolios, custom compliance
            requirements, or embedded teams are scoped individually.
          </p>
          <Button asChild className="mt-6">
            <Link href="/contact">Talk to Sales</Link>
          </Button>
        </Reveal>
      </section>

      <section className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading eyebrow="Compare Plans" title="What's included" />
          <Reveal className="mt-16 overflow-x-auto rounded-xl border border-foreground/10">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-foreground/10 bg-card shadow-surface">
                  <th className="p-4 text-left font-medium text-muted-foreground">
                    Feature
                  </th>
                  <th className="p-4 text-left font-medium text-foreground">
                    Starter
                  </th>
                  <th className="p-4 text-left font-medium text-foreground">
                    Growth
                  </th>
                  <th className="p-4 text-left font-medium text-foreground">
                    Scale
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-foreground/10 last:border-0">
                    <td className="p-4 text-muted-foreground">{row.label}</td>
                    {[row.starter, row.growth, row.scale].map((cell, i) => (
                      <td key={i} className="p-4">
                        {typeof cell === "boolean" ? (
                          cell ? (
                            <Check className="size-4 text-foreground/70" />
                          ) : (
                            <X className="size-4 text-muted-foreground/40" />
                          )
                        ) : (
                          <span className="text-foreground">{cell}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionHeading eyebrow="Pricing FAQ" title="Common questions" />
          <div className="mt-16">
            <FAQAccordion items={pricingFaqs.map((f) => ({ ...f, category: "Pricing" }))} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
