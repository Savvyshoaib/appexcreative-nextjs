import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { GsapStagger } from "@/components/shared/gsap-reveal";
import { ServiceCard } from "@/components/sections/service-card";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { CTASection } from "@/components/sections/cta-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { services, serviceCategories } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "15 services across growth & performance, brand & creative, product & web, and strategy & social — deployed as one coordinated engagement.",
};

const scopingSteps = [
  {
    step: "01",
    title: "Discovery call",
    description: "30 minutes to understand your goals, channels, and current bottlenecks.",
  },
  {
    step: "02",
    title: "Custom proposal",
    description: "A scoped plan with services, timeline, and pricing tailored to your goals.",
  },
  {
    step: "03",
    title: "Kickoff",
    description: "Access setup, tracking implementation, and a 90-day roadmap.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything you need to grow, under one roof."
        description="15 services across four disciplines, coordinated by one team instead of scattered across vendors."
      />

      <Reveal className="mx-auto mt-16 max-w-6xl px-6 lg:px-8">
        <div className="relative h-64 overflow-hidden rounded-xl border border-foreground/10 shadow-surface sm:h-80">
          <Image
            src="https://images.unsplash.com/photo-1590650046871-92c887180603?w=1600&h=700&fit=crop&auto=format&q=80"
            alt="A Appexcreative strategist meeting with a client team"
            fill
            sizes="(min-width: 1024px) 1150px, 100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
          <p className="absolute bottom-6 left-6 max-w-md text-xl font-medium text-white text-balance drop-shadow-sm sm:text-2xl">
            One team, every discipline — scoped around your specific goals.
          </p>
        </div>
      </Reveal>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mx-auto flex w-fit flex-wrap">
                <TabsTrigger value="all">All</TabsTrigger>
                {serviceCategories.map((category) => (
                  <TabsTrigger key={category.slug} value={category.slug} id={category.slug}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="all" className="mt-12">
                <GsapStagger className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                  {services.map((service) => (
                    <ServiceCard key={service.slug} service={service} />
                  ))}
                </GsapStagger>
              </TabsContent>

              {serviceCategories.map((category) => (
                <TabsContent key={category.slug} value={category.slug} className="mt-12">
                  <GsapStagger className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                    {services
                      .filter((service) => service.category === category.slug)
                      .map((service) => (
                        <ServiceCard key={service.slug} service={service} />
                      ))}
                  </GsapStagger>
                </TabsContent>
              ))}
            </Tabs>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Getting Started"
            title="How we scope an engagement"
          />
          <div className="mt-16">
            <ProcessTimeline steps={scopingSteps} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
