import type { LucideIcon } from "lucide-react";
import { StaggerItem } from "@/components/shared/reveal";

export type Industry = {
  name: string;
  description: string;
  metricValue: string;
  metricLabel: string;
  icon: LucideIcon;
};

export function IndustryCard({ industry }: { industry: Industry }) {
  const Icon = industry.icon;

  return (
    <StaggerItem className="rounded-xl border border-foreground/10 bg-card shadow-surface p-6">
      <div className="flex size-10 items-center justify-center rounded-lg bg-(image:--chip-gradient) dark:bg-none dark:bg-foreground/10">
        <Icon className="size-5 text-foreground" />
      </div>
      <h3 className="mt-4 text-lg font-medium text-foreground">
        {industry.name}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        {industry.description}
      </p>
      <div className="mt-6 border-t border-foreground/10 pt-4">
        <p className="text-2xl font-semibold text-foreground">
          {industry.metricValue}
        </p>
        <p className="text-xs text-muted-foreground">{industry.metricLabel}</p>
      </div>
    </StaggerItem>
  );
}
