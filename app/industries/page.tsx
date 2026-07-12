import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Stagger } from "@/components/shared/reveal";
import { IndustryCard } from "@/components/sections/industry-card";
import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { industries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Appexcreative builds category-specific growth playbooks for e-commerce, SaaS, D2C, hospitality, B2B, and healthcare brands.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for your category, not a generic playbook."
        description="Every industry converts differently. We build strategy around how your specific buyers actually decide."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <IndustryCard key={industry.name} industry={industry} />
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-muted-foreground">
            Want to see the results behind these numbers?
          </p>
          <Button asChild variant="outline" className="mt-4">
            <Link href="/work">Browse Case Studies</Link>
          </Button>
        </div>
      </section>

      <CTASection />
    </>
  );
}
