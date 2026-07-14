"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { AmbientGlow } from "@/components/shared/ambient-glow";
import { fadeUp, staggerContainer } from "@/lib/animations";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-foreground/10">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <AmbientGlow className="h-full min-h-[420px]" intensity={0.85} />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background to-transparent" />
      </div>
      <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:py-24 lg:px-8 lg:py-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.1)}
        >
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-(--hero-word-accent) uppercase"
          >
            <span
              aria-hidden
              className="inline-block size-1.5 rounded-full bg-(--hero-word-accent)"
            />
            {eyebrow}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-4 text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>
          {description ? (
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground text-pretty sm:text-lg"
            >
              {description}
            </motion.p>
          ) : null}
          {children ? (
            <motion.div variants={fadeUp} className="mt-10">
              {children}
            </motion.div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
