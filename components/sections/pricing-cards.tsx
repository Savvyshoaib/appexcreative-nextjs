import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { GsapHoverCard, GsapStagger } from "@/components/shared/gsap-reveal";

export type PricingTier = {
  name: string;
  price: string;
  cadence?: string;
  description: string;
  features: string[];
  mostPopular?: boolean;
};

export function PricingCards({
  tiers,
  compact = false,
}: {
  tiers: PricingTier[];
  compact?: boolean;
}) {
  return (
    <GsapStagger preset="scale" className="grid gap-5 md:grid-cols-3 md:gap-6">
      {tiers.map((tier) => (
        <GsapHoverCard key={tier.name}>
          <div
            className={cn(
              "relative flex h-full flex-col rounded-2xl border p-7 transition-[border-color,box-shadow] duration-300 sm:p-8",
              tier.mostPopular
                ? "border-transparent bg-pricing-highlight shadow-surface ring-1 ring-(--pricing-ring) md:-mt-2 md:mb-2 md:pt-9"
                : "border-foreground/10 bg-card shadow-surface hover:border-(--accent-border)"
            )}
          >
            {tier.mostPopular ? (
              <Badge className="absolute -top-2.5 left-1/2 w-fit -translate-x-1/2 border-0 bg-(image:--badge-gradient) text-white shadow-sm">
                Most Popular
              </Badge>
            ) : null}
            <h3 className="text-lg font-medium text-foreground">{tier.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
            <p className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-semibold tracking-tight text-foreground">
                {tier.price}
              </span>
              {tier.cadence ? (
                <span className="text-sm text-muted-foreground">{tier.cadence}</span>
              ) : null}
            </p>
            <ul className="mt-8 flex-1 space-y-3">
              {(compact ? tier.features.slice(0, 4) : tier.features).map(
                (feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-(--hero-word-accent)" />
                    <span>{feature}</span>
                  </li>
                )
              )}
            </ul>
            <Button
              asChild
              className="mt-8 h-11"
              variant={tier.mostPopular ? "default" : "outline"}
            >
              <Link href="/contact">
                {tier.mostPopular ? "Start with Growth" : "Get Started"}
              </Link>
            </Button>
          </div>
        </GsapHoverCard>
      ))}
    </GsapStagger>
  );
}
