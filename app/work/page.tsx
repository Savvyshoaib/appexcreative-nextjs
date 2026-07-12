import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { AnimatedCounterRow } from "@/components/shared/animated-counter";
import { CaseStudyGrid } from "@/components/sections/case-study-grid";
import { CTASection } from "@/components/sections/cta-section";
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
      <PageHero
        eyebrow="Our Work"
        title="Results, not just deliverables."
        description="A selection of engagements where we drove measurable revenue outcomes, not just brand awareness."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CaseStudyGrid studies={caseStudies} />
        </div>
      </section>

      <section className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="By The Numbers" title="Aggregate results" />
          <Reveal className="mt-16">
            <AnimatedCounterRow items={workStats} />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
