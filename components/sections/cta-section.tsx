import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { MagneticButton } from "@/components/shared/magnetic-button";

export function CTASection({
  title = "Ready to build something great?",
  description = "Tell us about your goals and we'll put together a plan within 48 hours.",
  primaryLabel = "Book a Call",
  primaryHref = "/contact",
  secondaryLabel = "View Pricing",
  secondaryHref = "/pricing",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-foreground/10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[400px] -translate-y-1/2 animate-glow-pulse bg-[radial-gradient(circle_at_50%_50%,var(--glow-strong),transparent_65%)]"
      />
      <Reveal className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground text-pretty">
          {description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MagneticButton>
            <Button asChild size="lg">
              <Link href={primaryHref}>
                {primaryLabel}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </MagneticButton>
          <Button asChild size="lg" variant="outline">
            <Link href={secondaryHref}>{secondaryLabel}</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
