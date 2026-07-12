"use client";

import { useMemo, useState } from "react";
import { Stagger } from "@/components/shared/reveal";
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
        <TabsList variant="line" className="mx-auto flex w-fit flex-wrap gap-1">
          {industryFilters.map((filter) => (
            <TabsTrigger key={filter} value={filter} className="px-4 text-sm">
              {filter}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <Stagger key={active} className="mt-12 grid gap-6 sm:grid-cols-2">
        {filtered.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </Stagger>
    </div>
  );
}
