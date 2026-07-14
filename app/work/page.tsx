import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AmbientGlow } from "@/components/shared/ambient-glow";
import { SectionHeading } from "@/components/shared/section-heading";
import { GsapReveal } from "@/components/shared/gsap-reveal";
import { AnimatedCounterRow } from "@/components/shared/animated-counter";
import { CaseStudyGrid } from "@/components/sections/case-study-grid";
import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/content/case-studies";
import { workStats } from "@/content/stats";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies and results from Appexcreative's work across e-commerce, SaaS, D2C, hospitality, and B2B brands.",
};

export default function WorkPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-foreground/10">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <AmbientGlow className="h-full min-h-[360px]" intensity={0.9} />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-background to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-20 pb-14 sm:pt-24 sm:pb-16 lg:px-8 lg:pt-28 lg:pb-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-(--hero-word-accent) uppercase">
                <span
                  aria-hidden
                  className="inline-block size-1.5 rounded-full bg-(--hero-word-accent)"
                />
                Our Work
              </p>
              <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
                Results, not just deliverables.
              </h1>
              <p className="mt-5 max-w-xl text-base text-muted-foreground text-pretty sm:text-lg">
                Selected engagements where strategy, creative, and media compounded
                into measurable revenue — not vanity metrics.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:flex-col lg:items-stretch xl:flex-row">
              <Button asChild size="lg" className="h-12 w-full px-6 sm:w-auto lg:w-full xl:w-auto">
                <Link href="/contact">
                  Start a project
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 w-full border-foreground/15 bg-background/50 px-6 backdrop-blur-sm sm:w-auto lg:w-full xl:w-auto"
              >
                <Link href="/pricing">View pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-foreground/10 py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <GsapReveal>
            <AnimatedCounterRow items={workStats} />
          </GsapReveal>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CaseStudyGrid studies={caseStudies} featured />
        </div>
      </section>

      <section className="relative border-t border-foreground/10 py-20 sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-section-wash"
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <SectionHeading
            eyebrow="Next"
            title="Your brand could be next."
            description="If you’re ready for a senior team owning the whole growth picture, let’s talk."
          />
          <GsapReveal className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-11 px-6">
              <Link href="/contact">
                Book a strategy call
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-11 px-6">
              <Link href="/services">Browse services</Link>
            </Button>
          </GsapReveal>
        </div>
      </section>

      <CTASection
        title="Ready to compound growth?"
        description="Share your goals — we’ll send a focused plan within 48 hours."
      />
    </>
  );
}
