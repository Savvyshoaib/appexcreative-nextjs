"use client";

import { GsapStagger } from "@/components/shared/gsap-reveal";
import { cn } from "@/lib/utils";

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

const colsByCount: Record<number, string> = {
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
};

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <GsapStagger
      stagger={0.1}
      preset="fade-up"
      distance={20}
      className={cn(
        "grid gap-6 md:gap-5",
        colsByCount[steps.length] ?? "md:grid-cols-5"
      )}
    >
      {steps.map((step, index) => (
        <div key={step.step} className="relative">
          {index < steps.length - 1 ? (
            <span
              aria-hidden
              className="absolute top-5 left-12 right-0 hidden h-px bg-linear-to-r from-(--accent-border) via-foreground/10 to-transparent md:block md:-right-2.5"
            />
          ) : null}
          <div className="flex items-start gap-4 md:flex-col md:gap-0">
            <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-(--accent-border) bg-chip font-mono text-xs font-medium text-foreground shadow-surface transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-110">
              {step.step.replace(/^0/, "")}
            </div>
            <div className="md:mt-5">
              <h3 className="text-base font-medium text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </GsapStagger>
  );
}
