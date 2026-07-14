"use client";

import Link from "next/link";
import { ArrowRight, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { GsapReveal } from "@/components/shared/gsap-reveal";
import { siteConfig } from "@/content/site-config";

export function CTASection({
  title = "Ready to compound growth?",
  description = "Share your goals — we'll send a focused plan within 48 hours. No pitch decks, no junior handoffs.",
  primaryLabel = "Book a strategy call",
  primaryHref = "/contact",
  secondaryLabel = "View pricing",
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
    <section className="relative overflow-hidden border-t border-foreground/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <GsapReveal className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl">
        <div className="bg-cta-surface relative border border-white/10 px-6 py-14 text-center shadow-[0_24px_80px_-32px_rgba(0,0,0,0.55)] sm:px-12 sm:py-16 lg:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-80"
          >
            <div className="absolute -top-24 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--glow-strong),transparent_65%)] animate-glow-pulse" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(1_0_0/10%),transparent_55%)]" />
          </div>

          <div className="relative">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-medium text-(--cta-muted)">
              <CalendarClock className="size-3.5" />
              Next openings this week
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance text-(--cta-foreground) sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-(--cta-muted) text-pretty sm:text-lg">
              {description}
            </p>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <MagneticButton>
                <Button
                  asChild
                  size="lg"
                  className="h-12 w-full bg-white text-neutral-950 hover:bg-white/90 sm:w-auto dark:bg-white dark:text-neutral-950 dark:hover:bg-white/90"
                >
                  <Link href={primaryHref}>
                    {primaryLabel}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </MagneticButton>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 w-full border-white/25 bg-transparent text-(--cta-foreground) hover:bg-white/10 hover:text-(--cta-foreground) sm:w-auto"
              >
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-(--cta-muted)/80">
              Or email{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="underline decoration-white/30 underline-offset-4 transition-colors hover:text-(--cta-foreground) hover:decoration-white/60"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </GsapReveal>
    </section>
  );
}
