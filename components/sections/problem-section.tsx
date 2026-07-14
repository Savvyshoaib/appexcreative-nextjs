import { AlertTriangle, Puzzle, TrendingDown, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { GsapStagger } from "@/components/shared/gsap-reveal";

const problems: {
  icon: LucideIcon;
  title: string;
  description: string;
  signal: string;
}[] = [
  {
    icon: TrendingDown,
    title: "Spend is up, results aren't",
    description:
      "You're paying more for the same (or worse) results, and nobody can tell you exactly why.",
    signal: "01",
  },
  {
    icon: Puzzle,
    title: "Five vendors, five stories",
    description:
      "Your paid, brand, and web teams don't talk to each other — so nothing feels like one strategy.",
    signal: "02",
  },
  {
    icon: AlertTriangle,
    title: "Reporting you can't trust",
    description:
      "Every dashboard tells a different story, and vanity metrics keep replacing revenue numbers.",
    signal: "03",
  },
];

export function ProblemSection() {
  return (
    <section className="relative border-t border-foreground/10 py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-section-wash"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Problem"
          title="Growth stalls when nobody owns the whole picture."
          description="Most companies don't have a marketing problem — they have a coordination problem."
        />
        <GsapStagger className="mt-14 grid gap-4 sm:mt-16 sm:gap-6 md:grid-cols-3">
          {problems.map((problem) => (
            <article
              key={problem.title}
              className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-card/80 p-6 shadow-surface backdrop-blur-sm sm:p-8"
            >
              <div
                aria-hidden
                className="absolute -right-6 -top-6 size-28 rounded-full bg-[radial-gradient(circle,var(--glow-1),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex size-11 items-center justify-center rounded-xl border border-(--accent-border) bg-chip">
                  <problem.icon className="size-5 text-foreground" />
                </div>
                <span className="font-mono text-xs text-muted-foreground/50">
                  {problem.signal}
                </span>
              </div>
              <h3 className="relative mt-5 text-lg font-medium text-foreground">
                {problem.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {problem.description}
              </p>
            </article>
          ))}
        </GsapStagger>
      </div>
    </section>
  );
}
