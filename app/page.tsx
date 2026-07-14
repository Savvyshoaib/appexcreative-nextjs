import Link from "next/link";
import { HomeHero } from "@/components/sections/home-hero";
import { ProblemSection } from "@/components/sections/problem-section";
import { ComparisonSection } from "@/components/sections/comparison-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { LogoMarquee } from "@/components/shared/logo-marquee";
import { SectionHeading } from "@/components/shared/section-heading";
import { GsapReveal, GsapStagger } from "@/components/shared/gsap-reveal";
import { ServiceCard } from "@/components/sections/service-card";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { AnimatedCounterRow } from "@/components/shared/animated-counter";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { PricingCards } from "@/components/sections/pricing-cards";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { clientLogos } from "@/content/logos";
import { services } from "@/content/services";
import { processSteps } from "@/content/process";
import { homeStats } from "@/content/stats";
import { caseStudies } from "@/content/case-studies";
import { testimonials } from "@/content/testimonials";
import { pricingTiers } from "@/content/pricing";
import { faqs } from "@/content/faq";

export default function Home() {
  return (
    <>
      <HomeHero />

      <div className="border-b border-foreground/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <LogoMarquee logos={clientLogos} />
        </div>
      </div>

      <ProblemSection />
      <ComparisonSection />
      <SolutionSection />

      <section className="border-t border-foreground/10 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Everything you need to grow, under one roof."
            description="15 services across growth, brand, product, and strategy — deployed as one coordinated engagement."
          />
          <GsapStagger
            preset="scale"
            className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6"
          >
            {services.slice(0, 8).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </GsapStagger>
          <GsapReveal className="mt-10 text-center">
            <Button asChild variant="outline" size="lg" className="h-11 px-6">
              <Link href="/services">View all services</Link>
            </Button>
          </GsapReveal>
        </div>
      </section>

      <section className="relative border-t border-foreground/10 py-20 sm:py-24 lg:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-section-wash"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="How an engagement runs"
            description="A clear path from audit to compounding results — with senior owners at every step."
          />
          <div className="mt-14 sm:mt-16">
            <ProcessTimeline steps={processSteps} />
          </div>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Proof"
            title="Results our clients can point to"
            description="Revenue, retention, and ROAS — the metrics that show up in the board deck."
          />
          <GsapReveal preset="scale" className="mt-14 sm:mt-16">
            <AnimatedCounterRow items={homeStats} />
          </GsapReveal>
          <GsapStagger className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {caseStudies.slice(0, 3).map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </GsapStagger>
          <GsapReveal className="mt-10 text-center">
            <Button asChild variant="outline" size="lg" className="h-11 px-6">
              <Link href="/work">View all case studies</Link>
            </Button>
          </GsapReveal>
        </div>
      </section>

      <section className="relative border-t border-foreground/10 py-20 sm:py-24 lg:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-section-wash"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Testimonials" title="What clients say" />
          <div className="mt-14 sm:mt-16">
            <TestimonialCarousel items={testimonials} />
          </div>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pricing"
            title="Simple pricing. Serious results."
            description="Pick a lane that matches your stage — upgrade anytime as growth compounds."
          />
          <div className="mt-14 sm:mt-16">
            <PricingCards tiers={pricingTiers} compact />
          </div>
          <GsapReveal className="mt-10 text-center">
            <Button asChild variant="outline" size="lg" className="h-11 px-6">
              <Link href="/pricing">Compare full pricing details</Link>
            </Button>
          </GsapReveal>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <GsapReveal className="mt-14 sm:mt-16">
            <FAQAccordion items={faqs.slice(0, 5)} />
          </GsapReveal>
          <GsapReveal className="mt-10 text-center">
            <Button asChild variant="outline" size="lg" className="h-11 px-6">
              <Link href="/faq">View all FAQs</Link>
            </Button>
          </GsapReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
