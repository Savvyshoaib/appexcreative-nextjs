"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { GsapHoverCard, GsapParallax } from "@/components/shared/gsap-reveal";

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

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <GsapHoverCard>
        <button
          onClick={() => setOpen(true)}
          className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-card text-left shadow-surface transition-[border-color,box-shadow] duration-300 hover:border-(--accent-border)"
        >
          <div className="relative h-64 overflow-hidden sm:h-72 lg:h-80">
            <GsapParallax speed={36} className="absolute inset-[-12%] h-[124%] w-full">
              <Image
                src={study.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
            </GsapParallax>
            <div className="absolute inset-0 bg-linear-to-t from-black/88 via-black/30 to-black/0 transition-opacity duration-500 group-hover:from-black/92" />

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

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <p className="text-sm font-medium text-white/70">{study.client}</p>
              <p className="mt-1 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {study.metricValue}
              </p>
              <p className="mt-1 text-sm text-white/80">{study.metricLabel}</p>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {study.summary}
            </p>
          </div>
        </button>
      </GsapHoverCard>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <Badge variant="secondary" className="w-fit">
              {study.industry}
            </Badge>
            <DialogTitle className="mt-2 text-2xl">{study.client}</DialogTitle>
            <DialogDescription>{study.summary}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm text-muted-foreground">
            <div>
              <h4 className="font-medium text-foreground">Challenge</h4>
              <p className="mt-1">{study.challenge}</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground">Approach</h4>
              <p className="mt-1">{study.approach}</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground">Result</h4>
              <p className="mt-1">{study.result}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
