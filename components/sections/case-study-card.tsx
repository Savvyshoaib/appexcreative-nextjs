"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GsapHoverCard, GsapParallax } from "@/components/shared/gsap-reveal";
import { CaseStudyShowcase } from "@/components/sections/case-study-showcase";
import { cn } from "@/lib/utils";

export type CaseStudy = {
  slug: string;
  image: string;
  client: string;
  industry: string;
  metricValue: string;
  metricLabel: string;
  summary: string;
  challenge: string;
  approach: string;
  result: string;
};

export function CaseStudyCard({
  study,
  featured = false,
}: {
  study: CaseStudy;
  featured?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <GsapHoverCard>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={cn(
            "group relative flex w-full overflow-hidden rounded-2xl border border-foreground/10 bg-card text-left shadow-surface transition-[border-color,box-shadow] duration-300 hover:border-(--accent-border)",
            featured
              ? "flex-col lg:min-h-[420px] lg:flex-row"
              : "h-full flex-col"
          )}
        >
          <div
            className={cn(
              "relative overflow-hidden",
              featured
                ? "h-72 sm:h-80 lg:h-auto lg:w-[58%] lg:min-h-[420px]"
                : "h-64 sm:h-72 lg:h-80"
            )}
          >
            <GsapParallax
              speed={featured ? 28 : 36}
              className="absolute -inset-[18%]"
            >
              <Image
                src={study.image}
                alt=""
                fill
                sizes={
                  featured
                    ? "(min-width: 1024px) 55vw, 100vw"
                    : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                }
                className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                priority={featured}
              />
            </GsapParallax>
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-black/0 transition-opacity duration-500 group-hover:from-black/90 lg:group-hover:via-black/35" />

            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 sm:p-6">
              <Badge
                variant="secondary"
                className="border-0 bg-white/15 text-white backdrop-blur-sm"
              >
                {study.industry}
              </Badge>
              <span className="flex size-9 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100">
                <ArrowUpRight className="size-4" />
              </span>
            </div>

            {!featured ? (
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-sm font-medium text-white/70">{study.client}</p>
                <p className="mt-1 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {study.metricValue}
                </p>
                <p className="mt-1 text-sm text-white/80">{study.metricLabel}</p>
              </div>
            ) : (
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:hidden">
                <p className="text-sm font-medium text-white/70">{study.client}</p>
                <p className="mt-1 text-4xl font-semibold tracking-tight text-white">
                  {study.metricValue}
                </p>
              </div>
            )}
          </div>

          {featured ? (
            <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-medium tracking-wide text-(--hero-word-accent) uppercase">
                Featured engagement
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {study.client}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty">
                {study.summary}
              </p>
              <div className="mt-8 border-t border-foreground/10 pt-6">
                <p className="bg-(image:--counter-gradient) bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
                  {study.metricValue}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {study.metricLabel}
                </p>
              </div>
              <p className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                View case study
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </p>
            </div>
          ) : (
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {study.summary}
              </p>
              <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground/70 transition-colors duration-300 group-hover:text-foreground">
                View case study
                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </p>
            </div>
          )}
        </button>
      </GsapHoverCard>

      <CaseStudyShowcase
        study={study}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}
