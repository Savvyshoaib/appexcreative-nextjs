"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Target,
  Waypoints,
  Trophy,
  X,
} from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { useGSAP } from "@gsap/react";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { gsap, registerGsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/lib/motion-config";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/components/sections/case-study-card";

registerGsap();

const storyBlocks = [
  {
    key: "challenge" as const,
    label: "Challenge",
    icon: Target,
  },
  {
    key: "approach" as const,
    label: "Approach",
    icon: Waypoints,
  },
  {
    key: "result" as const,
    label: "Result",
    icon: Trophy,
  },
];

export function CaseStudyShowcase({
  study,
  open,
  onOpenChange,
}: {
  study: CaseStudy | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (open && bodyRef.current) {
      bodyRef.current.scrollTop = 0;
    }
  }, [open, study?.slug]);

  useGSAP(
    () => {
      if (!open || !study || prefersReducedMotion || !bodyRef.current) return;

      const items = bodyRef.current.querySelectorAll("[data-showcase-item]");
      gsap.fromTo(
        items,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.06,
          ease: "power3.out",
          delay: 0.1,
          overwrite: "auto",
        }
      );
    },
    { dependencies: [open, study?.slug, prefersReducedMotion] }
  );

  if (!study) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-background/75 backdrop-blur-md dark:bg-black/75 supports-backdrop-filter:backdrop-blur-xl" />
        <DialogPrimitive.Content
          data-slot="case-study-showcase"
          className={cn(
            "fixed inset-3 z-50 flex max-h-[calc(100svh-1.5rem)] flex-col overflow-hidden outline-none",
            "rounded-2xl bg-background text-foreground shadow-[0_32px_80px_-24px_rgba(0,0,0,0.5)]",
            "ring-1 ring-foreground/10",
            "sm:inset-5 sm:max-h-[calc(100svh-2.5rem)] sm:rounded-3xl",
            "lg:inset-8 lg:max-h-[calc(100svh-4rem)]",
            "duration-300 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-[0.985] data-open:slide-in-from-bottom-2",
            "data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-[0.985]"
          )}
        >
          <DialogTitle className="sr-only">{study.client} case study</DialogTitle>
          <DialogDescription className="sr-only">
            {study.summary}
          </DialogDescription>

          <div
            ref={bodyRef}
            className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain"
          >
            <div
              data-showcase-item
              className="relative isolate min-h-[40svh] shrink-0 overflow-hidden sm:min-h-[46svh] lg:min-h-[50svh]"
            >
              <Image
                src={study.image}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-black/30" />
              <div className="absolute inset-0 bg-linear-to-r from-background/35 via-transparent to-transparent" />

              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 sm:p-6">
                <Badge className="border-0 bg-white/15 text-white backdrop-blur-md">
                  {study.industry}
                </Badge>
                <DialogClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-10 rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md hover:bg-black/45 hover:text-white"
                    aria-label="Close case study"
                  >
                    <X className="size-5" />
                  </Button>
                </DialogClose>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10">
                <p className="text-sm font-medium tracking-wide text-foreground/70 uppercase">
                  Case study
                </p>
                <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  {study.client}
                </h2>
                <p className="mt-3 max-w-2xl text-base text-muted-foreground text-pretty sm:text-lg">
                  {study.summary}
                </p>
              </div>
            </div>

            <div
              data-showcase-item
              className="border-b border-foreground/10 bg-muted/30 px-5 py-6 sm:px-8 lg:px-10"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
                <div>
                  <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    Headline result
                  </p>
                  <p className="mt-1 bg-(image:--counter-gradient) bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-6xl">
                    {study.metricValue}
                  </p>
                </div>
                <p className="max-w-sm text-base text-muted-foreground sm:text-right sm:text-lg">
                  {study.metricLabel}
                </p>
              </div>
            </div>

            <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div
                data-showcase-item
                className="grid gap-5 sm:grid-cols-3 sm:gap-5 lg:gap-6"
              >
                {storyBlocks.map(({ key, label, icon: Icon }) => (
                  <article
                    key={key}
                    className="rounded-2xl border border-foreground/10 bg-card/80 p-5 shadow-surface sm:p-6"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="flex size-9 items-center justify-center rounded-xl border border-(--accent-border) bg-chip">
                        <Icon className="size-4 text-foreground" />
                      </span>
                      <h3 className="text-sm font-medium tracking-wide text-(--hero-word-accent) uppercase">
                        {label}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                      {study[key]}
                    </p>
                  </article>
                ))}
              </div>

              <div
                data-showcase-item
                className="mt-10 flex flex-col gap-4 rounded-2xl border border-foreground/10 bg-pricing-highlight p-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:p-8"
              >
                <div>
                  <p className="text-lg font-medium text-foreground">
                    Want results like {study.client}?
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tell us your goals — we&apos;ll map a focused plan within 48
                    hours.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  <MagneticButton className="w-full sm:w-auto">
                    <Button
                      asChild
                      size="lg"
                      className="h-11 w-full px-6 sm:w-auto"
                    >
                      <Link href="/contact" onClick={() => onOpenChange(false)}>
                        Book a strategy call
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </MagneticButton>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-11 w-full px-6 sm:w-auto"
                  >
                    <Link href="/services" onClick={() => onOpenChange(false)}>
                      Explore services
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
