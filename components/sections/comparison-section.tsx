import { Check, X } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { GsapReveal } from "@/components/shared/gsap-reveal";
import { siteConfig } from "@/content/site-config";

const comparison = {
  others: [
    "Junior staff on your account within weeks",
    "Reporting built around platform metrics",
    "Creative and media handled by separate teams",
    "Locked into 12-month contracts",
  ],
  ours: [
    "Senior strategist on every account, every week",
    "Reporting tied directly to revenue and pipeline",
    "Creative and media built by the same integrated pod",
    "Month-to-month after a 90-day ramp",
  ],
};

export function ComparisonSection() {
  return (
    <section className="border-t border-foreground/10 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Others Fail"
          title={`Typical agencies vs. ${siteConfig.name}`}
        />
        <GsapReveal
          preset="fade-up"
          className="mt-14 overflow-hidden rounded-2xl border border-foreground/10 sm:mt-16 sm:grid sm:grid-cols-2"
        >
          <div className="border-b border-foreground/10 bg-muted/40 p-7 sm:border-b-0 sm:border-r sm:p-9">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Typical agencies
            </p>
            <ul className="mt-6 space-y-4">
              {comparison.others.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-foreground/5">
                    <X className="size-3 text-muted-foreground/70" />
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative bg-pricing-highlight p-7 sm:p-9">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--glow-1),transparent_60%)]"
            />
            <div className="relative">
              <p className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-(--hero-word-accent) uppercase">
                <span className="size-1.5 rounded-full bg-(--hero-word-accent)" />
                {siteConfig.name}
              </p>
              <ul className="mt-6 space-y-4">
                {comparison.ours.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-(--hero-word-accent)/15 ring-1 ring-(--accent-border)">
                      <Check className="size-3 text-(--hero-word-accent)" />
                    </span>
                    <span className="font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GsapReveal>
      </div>
    </section>
  );
}
