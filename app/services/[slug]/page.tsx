import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { serviceDetails } from "@/content/service-details";
import { caseStudies } from "@/content/case-studies";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = serviceDetails[slug];
  if (!detail) return {};
  return {
    title: detail.title,
    description: detail.heroDescription,
    openGraph: {
      title: detail.title,
      description: detail.heroDescription,
      images: [detail.heroImage],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = serviceDetails[slug];

  if (!detail) {
    notFound();
  }

  const relatedCaseStudies = caseStudies.filter((study) =>
    detail.relatedCaseStudySlugs.includes(study.slug)
  );

  return (
    <>
      <section className="relative overflow-hidden border-b border-foreground/10">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] glow-mesh animate-glow-drift dark:animate-none" />
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <Reveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3.5" />
              All Services
            </Link>
            <p className="mt-6 text-sm font-medium tracking-wide text-muted-foreground uppercase">
              {detail.eyebrow}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
              {detail.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
              {detail.heroDescription}
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="h-11 px-6 text-base">
                <Link href="/contact">Book a Call</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal className="mx-auto mt-16 max-w-5xl px-6 lg:px-8">
        <div className="relative aspect-video overflow-hidden rounded-xl border border-foreground/10 shadow-surface">
          <Image
            src={detail.heroImage}
            alt=""
            fill
            sizes="(min-width: 1024px) 1000px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </Reveal>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="The Problem" title={detail.problem.title} />
          <Stagger className="mt-16 grid gap-6 sm:grid-cols-3">
            {detail.problem.points.map((point) => (
              <StaggerItem
                key={point.title}
                className="rounded-xl border border-foreground/10 bg-card shadow-surface p-6"
              >
                <h3 className="text-lg font-medium text-foreground">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {point.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Why Businesses Struggle
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
              {detail.whyStruggle.title}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              {detail.whyStruggle.description}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Our Solution" title={detail.solution.title} description={detail.solution.description} />
          <Stagger className="mt-16 grid gap-4 sm:grid-cols-2">
            {detail.solution.points.map((point) => (
              <StaggerItem
                key={point}
                className="flex items-start gap-3 rounded-xl border border-foreground/10 bg-card shadow-surface p-5"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-foreground/70" />
                <span className="text-sm text-foreground">{point}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Process" title="How we run this engagement" />
          <div className="mt-16">
            <ProcessTimeline steps={detail.process} />
          </div>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Deliverables
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">
              What you get
            </h2>
            <ul className="mt-6 space-y-3">
              {detail.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-foreground/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Timeline
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">
              What to expect, and when
            </h2>
            <ol className="mt-6 space-y-6">
              {detail.timeline.map((item) => (
                <li key={item.phase} className="border-l-2 border-foreground/15 pl-4">
                  <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    {item.phase}
                  </p>
                  <p className="mt-1 text-base font-medium text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {relatedCaseStudies.length > 0 ? (
        <section className="border-t border-foreground/10 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading eyebrow="Case Studies" title="Results from this service" />
            <Stagger className="mt-16 grid gap-6 sm:grid-cols-2">
              {relatedCaseStudies.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </Stagger>
          </div>
        </section>
      ) : null}

      <section className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <div className="mt-16">
            <FAQAccordion
              items={detail.faqs.map((faq) => ({ ...faq, category: detail.title }))}
            />
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to talk ${detail.title.toLowerCase()}?`}
        description="Tell us about your goals and we'll put together a plan within 48 hours."
      />
    </>
  );
}
