"use client";

import { useMemo, useState } from "react";
import { GsapStagger } from "@/components/shared/gsap-reveal";
import { CaseStudyCard, type CaseStudy } from "@/components/sections/case-study-card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { industryFilters } from "@/content/case-studies";

export function CaseStudyGrid({ studies }: { studies: CaseStudy[] }) {
  const [active, setActive] = useState<(typeof industryFilters)[number]>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? studies
        : studies.filter((study) => study.industry === active),
    [active, studies]
  );

  return (
    <div>
      <Tabs
        value={active}
        onValueChange={(value) => setActive(value as (typeof industryFilters)[number])}
      >
        <TabsList
          variant="line"
          className="mx-auto flex h-auto w-full max-w-full flex-wrap justify-start gap-1 sm:w-fit sm:justify-center"
        >
          {industryFilters.map((filter) => (
            <TabsTrigger key={filter} value={filter} className="px-3 text-sm sm:px-4">
              {filter}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <GsapStagger key={active} className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6">
        {filtered.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </GsapStagger>
    </div>
  );
}
