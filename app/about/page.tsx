import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { AnimatedCounterRow } from "@/components/shared/animated-counter";
import { CTASection } from "@/components/sections/cta-section";
import { founderStory, team, values } from "@/content/team";
import { aboutStats } from "@/content/stats";

export const metadata: Metadata = {
  title: "About",
  description:
    "Appexcreative is a full-service growth and creative agency founded in 2018. Meet the team and the values behind how we work.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Appexcreative"
        title="We're not your typical agency."
        description="One integrated team — strategy, creative, media, and product — built around a single number: your revenue."
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              {founderStory.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
              {founderStory.title}
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              {founderStory.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal
            className="relative min-h-[320px] overflow-hidden rounded-xl border border-foreground/10 shadow-surface"
            delay={0.1}
          >
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&h=1000&fit=crop&auto=format&q=80"
              alt="The Appexcreative team collaborating around a table"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="What We Believe" title="Our values" />
          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <StaggerItem
                key={value.title}
                className="rounded-xl border border-foreground/10 bg-card shadow-surface p-6"
              >
                <h3 className="text-base font-medium text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <AnimatedCounterRow items={aboutStats} />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="The Team" title="Meet the people behind the work" />
          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <StaggerItem
                key={member.name}
                className="flex items-center gap-4 rounded-xl border border-foreground/10 bg-card shadow-surface p-6"
              >
                <div className="relative size-14 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-base font-medium text-foreground">
                    {member.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection />
    </>
  );
}
