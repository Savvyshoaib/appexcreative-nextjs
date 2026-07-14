import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Check } from "lucide-react";
import { GsapHoverCard } from "@/components/shared/gsap-reveal";
import { serviceDetails } from "@/content/service-details";

export type Service = {
  slug: string;
  category:
    | "growth-performance"
    | "brand-creative"
    | "product-web"
    | "strategy-social";
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  const hasDetail = Boolean(serviceDetails[service.slug]);

  const content = (
    <GsapHoverCard>
      <article className="group relative flex h-full flex-col rounded-2xl border border-foreground/10 bg-card p-6 shadow-surface transition-[border-color,background-color] duration-300 hover:border-(--accent-border) hover:bg-accent/30 sm:p-7">
        {hasDetail ? (
          <ArrowUpRight className="absolute right-5 top-5 size-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
        ) : null}
        <div className="flex size-11 items-center justify-center rounded-xl border border-(--accent-border) bg-chip transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
          <Icon className="size-5 text-foreground" />
        </div>
        <h3 className="mt-5 text-lg font-medium text-foreground">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <ul className="mt-5 space-y-2">
          {service.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <Check className="mt-0.5 size-3.5 shrink-0 text-(--hero-word-accent)" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </article>
    </GsapHoverCard>
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
