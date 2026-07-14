"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { AmbientGlow } from "@/components/shared/ambient-glow";
import { TextRotator } from "@/components/shared/text-rotator";
import { LogoMark } from "@/components/shared/logo";
import { siteConfig } from "@/content/site-config";
import { fadeUp, staggerContainer } from "@/lib/animations";

const rotatingWords = ["attention", "traffic", "clicks", "visitors", "engagement"];

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <AmbientGlow className="h-full min-h-[100svh]" intensity={0.95} />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-5xl flex-col justify-center px-6 pt-20 pb-16 text-center sm:pt-24 lg:px-8 lg:pt-28 lg:pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.1)}
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-(--accent-border) bg-chip px-4 py-1.5 text-xs font-medium text-foreground/80 shadow-surface">
              <LogoMark className="size-4" />
              <span className="font-semibold tracking-tight text-foreground">
                {siteConfig.name}
              </span>
              <span className="hidden text-muted-foreground sm:inline">·</span>
              <span className="hidden text-muted-foreground sm:inline">
                {siteConfig.tagline}
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-8 flex flex-col items-center text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            <span>We turn</span>
            <TextRotator words={rotatingWords} className="mt-1 sm:mt-2" />
            <span>into revenue.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-base text-muted-foreground text-pretty sm:text-lg"
          >
            Brand, content, performance, and AI automation — one senior team
            accountable to pipeline, not vanity metrics.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          >
            <MagneticButton className="w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="h-12 w-full px-7 text-base sm:w-auto"
              >
                <Link href="/contact">
                  Book a strategy call
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </MagneticButton>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 w-full border-foreground/15 bg-background/50 px-7 text-base backdrop-blur-sm sm:w-auto"
            >
              <Link href="/work">See client results</Link>
            </Button>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="mx-auto mt-8 flex max-w-lg list-none flex-col items-center gap-2 text-sm text-muted-foreground sm:max-w-none sm:flex-row sm:justify-center sm:gap-0"
          >
            <li className="inline-flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-(--hero-word-accent)" />
              Plan in 48 hours
            </li>
            <li
              aria-hidden
              className="mx-3 hidden size-1 rounded-full bg-foreground/20 sm:block"
            />
            <li>Month-to-month after 90 days</li>
            <li
              aria-hidden
              className="mx-3 hidden size-1 rounded-full bg-foreground/20 sm:block"
            />
            <li>Senior strategist on every account</li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
