import { Stagger, StaggerItem } from "@/components/shared/reveal";
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
    <Stagger
      stagger={0.12}
      className={cn("grid gap-8 md:gap-4", colsByCount[steps.length] ?? "md:grid-cols-5")}
    >
      {steps.map((step, index) => (
        <StaggerItem key={step.step} className="relative">
          <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-0">
            <span className="text-sm font-mono text-muted-foreground/60">
              {step.step}
            </span>
            {index < steps.length - 1 ? (
              <span
                aria-hidden
                className="hidden h-px flex-1 bg-foreground/10 md:mt-3 md:block md:w-full"
              />
            ) : null}
          </div>
          <h3 className="mt-3 text-base font-medium text-foreground">
            {step.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {step.description}
          </p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
