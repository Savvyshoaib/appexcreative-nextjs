import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";

type LegalSection = {
  heading: string;
  body: string;
};

type LegalDocumentProps = {
  eyebrow: string;
  title: string;
  updated: string;
  sections: readonly LegalSection[];
};

export function LegalDocument({
  eyebrow,
  title,
  updated,
  sections,
}: LegalDocumentProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={updated} />

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((section) => (
              <Reveal key={section.heading}>
                <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {section.heading}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty">
                  {section.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
