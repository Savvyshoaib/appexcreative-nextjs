"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
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
    <section className="relative overflow-hidden border-b border-foreground/10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] glow-mesh animate-glow-drift dark:animate-none"
      />
      <div className="mx-auto max-w-5xl px-6 py-28 text-center lg:px-8 lg:py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.12)}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-medium tracking-wide text-muted-foreground uppercase"
          >
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
              className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty"
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
