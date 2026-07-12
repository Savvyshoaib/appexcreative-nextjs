import Link from "next/link";
import {
  AlertTriangle,
  Puzzle,
  TrendingDown,
  Check,
  X,
  Sparkles,
} from "lucide-react";
import { HomeHero } from "@/components/sections/home-hero";
import { LogoMarquee } from "@/components/shared/logo-marquee";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
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

const problems = [
  {
    icon: TrendingDown,
    title: "Spend is up, results aren't",
    description:
      "You're paying more for the same (or worse) results, and nobody can tell you exactly why.",
  },
  {
    icon: Puzzle,
    title: "Five vendors, five stories",
    description:
      "Your paid, brand, and web teams don't talk to each other — so nothing feels like one strategy.",
  },
  {
    icon: AlertTriangle,
    title: "Reporting you can't trust",
    description:
      "Every dashboard tells a different story, and vanity metrics keep replacing revenue numbers.",
  },
];

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

const solutions = [
  {
    title: "One team, one roadmap",
    description:
      "Strategy, creative, media, and product sit together — accountable to the same numbers.",
  },
  {
    title: "Built for compounding growth",
    description:
      "We prioritize channels that get more efficient over time, not just ones that spend fast.",
  },
  {
    title: "AI-accelerated execution",
    description:
      "Automation handles the repetitive work so your strategist spends time on what moves revenue.",
  },
  {
    title: "Radically transparent reporting",
    description:
      "A live dashboard you can check any day, plus a monthly review that ties back to your P&L.",
  },
];

export default function Home() {
  return (
    <>
      <HomeHero />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <LogoMarquee logos={clientLogos} />
      </div>

      <section className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Problem"
            title="Growth stalls when nobody owns the whole picture."
            description="Most companies don't have a marketing problem — they have a coordination problem."
          />
          <Stagger className="mt-16 grid gap-6 sm:grid-cols-3">
            {problems.map((problem) => (
              <StaggerItem
                key={problem.title}
                className="rounded-xl border border-foreground/10 bg-card shadow-surface p-6"
              >
                <problem.icon className="size-6 text-foreground/70" />
                <h3 className="mt-4 text-lg font-medium text-foreground">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {problem.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Others Fail"
            title="Typical agencies vs. Appexcreative"
          />
          <Reveal className="mt-16 grid gap-6 overflow-hidden rounded-xl border border-foreground/10 sm:grid-cols-2">
            <div className="bg-card p-8">
              <h3 className="text-sm font-medium text-muted-foreground uppercase">
                Typical Agencies
              </h3>
              <ul className="mt-6 space-y-4">
                {comparison.others.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <X className="mt-0.5 size-4 shrink-0 text-muted-foreground/50" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-foreground/4 p-8">
              <h3 className="text-sm font-medium text-foreground uppercase">
                Appexcreative
              </h3>
              <ul className="mt-6 space-y-4">
                {comparison.ours.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-foreground/70" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Solution"
            title="An integrated team built around one number: revenue."
          />
          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => (
              <StaggerItem
                key={solution.title}
                className="rounded-xl border border-foreground/10 bg-card shadow-surface p-6"
              >
                <Sparkles className="size-5 text-foreground/60" />
                <h3 className="mt-4 text-base font-medium text-foreground">
                  {solution.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {solution.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Everything you need to grow, under one roof."
            description="15 services across growth, brand, product, and strategy — deployed as one coordinated engagement."
          />
          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 8).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </Stagger>
          <Reveal className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Our Process" title="How an engagement runs" />
          <div className="mt-16">
            <ProcessTimeline steps={processSteps} />
          </div>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Proof" title="Results our clients can point to" />
          <Reveal className="mt-16">
            <AnimatedCounterRow items={homeStats} />
          </Reveal>
          <Stagger className="mt-16 grid gap-6 sm:grid-cols-3">
            {caseStudies.slice(0, 3).map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </Stagger>
          <Reveal className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/work">View All Case Studies</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Testimonials" title="What clients say" />
          <div className="mt-16">
            <TestimonialCarousel items={testimonials} />
          </div>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pricing"
            title="Simple pricing. Serious results."
          />
          <div className="mt-16">
            <PricingCards tiers={pricingTiers} compact />
          </div>
          <Reveal className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/pricing">View Full Pricing Details</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <div className="mt-16">
            <FAQAccordion items={faqs.slice(0, 5)} />
          </div>
          <Reveal className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
