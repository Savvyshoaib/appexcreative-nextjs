import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { FAQExplorer } from "@/components/sections/faq-explorer";
import { Button } from "@/components/ui/button";
import { faqs } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Appexcreative's services, pricing, process, and reporting.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered."
        description="Everything we get asked before, during, and after an engagement — organized so you can find it fast."
      />

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FAQExplorer items={faqs} />
        </div>
      </section>

      <section className="border-t border-foreground/10 py-24">
        <Reveal className="mx-auto max-w-xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-semibold text-foreground">
            Still have questions?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Book a 30-minute call and we&rsquo;ll walk through exactly how an
            engagement would work for your business.
          </p>
          <Button asChild className="mt-6">
            <Link href="/contact">Book a Call</Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}
