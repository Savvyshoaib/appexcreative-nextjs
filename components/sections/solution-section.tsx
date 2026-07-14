import {
  Bot,
  ChartNoAxesCombined,
  Layers,
  Microscope,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { GsapStagger } from "@/components/shared/gsap-reveal";

const solutions: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Layers,
    title: "One team, one roadmap",
    description:
      "Strategy, creative, media, and product sit together — accountable to the same numbers.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Built for compounding growth",
    description:
      "We prioritize channels that get more efficient over time, not just ones that spend fast.",
  },
  {
    icon: Bot,
    title: "AI-accelerated execution",
    description:
      "Automation handles the repetitive work so your strategist spends time on what moves revenue.",
  },
  {
    icon: Microscope,
    title: "Radically transparent reporting",
    description:
      "A live dashboard you can check any day, plus a monthly review that ties back to your P&L.",
  },
];

export function SolutionSection() {
  return (
    <section className="relative border-t border-foreground/10 py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-section-wash"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Solution"
          title="An integrated team built around one number: revenue."
        />
        <GsapStagger className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => (
            <article
              key={solution.title}
              className="group relative bg-card p-6 transition-colors hover:bg-accent/40 sm:p-7"
            >
              <span className="font-mono text-[11px] text-muted-foreground/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mt-4 flex size-10 items-center justify-center rounded-lg border border-(--accent-border) bg-chip">
                <solution.icon className="size-5 text-foreground" />
              </div>
              <h3 className="mt-5 text-base font-medium text-foreground">
                {solution.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {solution.description}
              </p>
            </article>
          ))}
        </GsapStagger>
      </div>
    </section>
  );
}
