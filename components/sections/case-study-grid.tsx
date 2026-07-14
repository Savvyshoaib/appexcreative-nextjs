"use client";

import { useMemo, useState } from "react";
import { GsapReveal, GsapStagger } from "@/components/shared/gsap-reveal";
import { CaseStudyCard, type CaseStudy } from "@/components/sections/case-study-card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { industryFilters } from "@/content/case-studies";
import { cn } from "@/lib/utils";

export function CaseStudyGrid({
  studies,
  featured = true,
}: {
  studies: CaseStudy[];
  /** First matching study shown as a large featured card */
  featured?: boolean;
}) {
  const [active, setActive] = useState<(typeof industryFilters)[number]>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? studies
        : studies.filter((study) => study.industry === active),
    [active, studies]
  );

  const heroStudy = featured && filtered.length > 0 ? filtered[0] : null;
  const rest = heroStudy
    ? filtered.filter((s) => s.slug !== heroStudy.slug)
    : filtered;

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-md">
          <p className="text-sm font-medium tracking-wide text-(--hero-word-accent) uppercase">
            Portfolio
          </p>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Filter by industry — every engagement is built around revenue outcomes.
          </p>
        </div>

        <Tabs
          value={active}
          onValueChange={(value) =>
            setActive(value as (typeof industryFilters)[number])
          }
          className="w-full sm:w-auto"
        >
          <TabsList
            variant="line"
            className={cn(
              "flex h-auto w-full max-w-full flex-wrap justify-start gap-1",
              "sm:w-fit sm:justify-end"
            )}
          >
            {industryFilters.map((filter) => (
              <TabsTrigger
                key={filter}
                value={filter}
                className="px-3 text-sm sm:px-4"
              >
                {filter}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {filtered.length === 0 ? (
        <GsapReveal className="mt-14 rounded-2xl border border-dashed border-foreground/15 px-6 py-16 text-center">
          <p className="text-base font-medium text-foreground">
            No case studies in this category yet
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try another filter, or view the full portfolio.
          </p>
        </GsapReveal>
      ) : (
        <div className="mt-10 space-y-5 sm:mt-12 sm:space-y-6">
          {heroStudy ? (
            <GsapReveal preset="scale" key={`hero-${heroStudy.slug}-${active}`}>
              <CaseStudyCard study={heroStudy} featured />
            </GsapReveal>
          ) : null}

          {rest.length > 0 ? (
            <GsapStagger
              key={`grid-${active}`}
              preset="fade-up"
              className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
            >
              {rest.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </GsapStagger>
          ) : null}
        </div>
      )}
    </div>
  );
}
