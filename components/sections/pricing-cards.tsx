import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { StaggerItem } from "@/components/shared/reveal";

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
    <div className="grid gap-6 md:grid-cols-3">
      {tiers.map((tier) => (
        <StaggerItem key={tier.name}>
          <div
            className={cn(
              "flex h-full flex-col rounded-xl border p-8",
              tier.mostPopular
                ? "border-transparent bg-(image:--pricing-highlight) shadow-surface ring-1 ring-(--pricing-ring) dark:bg-none dark:bg-foreground/4 dark:border-foreground/30 dark:shadow-none dark:ring-0"
                : "border-foreground/10 bg-card shadow-surface"
            )}
          >
            {tier.mostPopular ? (
              <Badge className="w-fit">Most Popular</Badge>
            ) : null}
            <h3 className="mt-4 text-lg font-medium text-foreground">
              {tier.name}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {tier.description}
            </p>
            <p className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-semibold tracking-tight text-foreground">
                {tier.price}
              </span>
              {tier.cadence ? (
                <span className="text-sm text-muted-foreground">
                  {tier.cadence}
                </span>
              ) : null}
            </p>
            <ul className="mt-8 flex-1 space-y-3">
              {(compact ? tier.features.slice(0, 4) : tier.features).map(
                (feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-foreground/70" />
                    <span>{feature}</span>
                  </li>
                )
              )}
            </ul>
            <Button
              asChild
              className="mt-8"
              variant={tier.mostPopular ? "default" : "outline"}
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </StaggerItem>
      ))}
    </div>
  );
}
