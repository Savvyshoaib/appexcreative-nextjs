import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Check } from "lucide-react";
import { StaggerItem } from "@/components/shared/reveal";
import { serviceDetails } from "@/content/service-details";

export type Service = {
  slug: string;
  category: "growth-performance" | "brand-creative" | "product-web" | "strategy-social";
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  const hasDetail = Boolean(serviceDetails[service.slug]);

  const content = (
    <StaggerItem className="group relative rounded-xl border border-foreground/10 bg-card shadow-surface p-6 transition-colors hover:border-foreground/20 hover:bg-foreground/3">
      {hasDetail ? (
        <ArrowUpRight className="absolute right-6 top-6 size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
      ) : null}
      <div className="flex size-10 items-center justify-center rounded-lg bg-(image:--chip-gradient) dark:bg-none dark:bg-foreground/10">
        <Icon className="size-5 text-foreground" />
      </div>
      <h3 className="mt-5 text-lg font-medium text-foreground">
        {service.title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        {service.description}
      </p>
      <ul className="mt-5 space-y-2">
        {service.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="mt-0.5 size-3.5 shrink-0 text-foreground/60" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </StaggerItem>
  );

  if (hasDetail) {
    return (
      <Link href={`/services/${service.slug}`} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}
