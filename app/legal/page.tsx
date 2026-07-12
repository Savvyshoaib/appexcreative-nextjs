import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { legalSections } from "@/content/legal";

export const metadata: Metadata = {
  title: "Legal",
  description: "Appexcreative's Privacy Policy and Terms of Service.",
};

export default function LegalPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy & Terms." />

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <nav className="sticky top-20 z-10 mb-16 flex justify-center gap-6 rounded-full border border-foreground/10 bg-background/80 py-3 backdrop-blur-xl">
            <a
              href="#privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </a>
          </nav>

          <div className="grid gap-24 lg:grid-cols-[minmax(0,1fr)]">
            <div id="privacy" className="scroll-mt-32">
              <Reveal>
                <h2 className="text-3xl font-semibold text-foreground">
                  {legalSections.privacy.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {legalSections.privacy.updated}
                </p>
              </Reveal>
              <div className="mt-10 space-y-8">
                {legalSections.privacy.sections.map((section) => (
                  <Reveal key={section.heading}>
                    <h3 className="text-lg font-medium text-foreground">
                      {section.heading}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{section.body}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            <div id="terms" className="scroll-mt-32">
              <Reveal>
                <h2 className="text-3xl font-semibold text-foreground">
                  {legalSections.terms.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {legalSections.terms.updated}
                </p>
              </Reveal>
              <div className="mt-10 space-y-8">
                {legalSections.terms.sections.map((section) => (
                  <Reveal key={section.heading}>
                    <h3 className="text-lg font-medium text-foreground">
                      {section.heading}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{section.body}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
