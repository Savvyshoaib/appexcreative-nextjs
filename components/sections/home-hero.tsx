"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { TextRotator } from "@/components/shared/text-rotator";
import { fadeUp, staggerContainer } from "@/lib/animations";

const rotatingWords = ["attention", "traffic", "clicks", "visitors", "engagement"];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] glow-mesh animate-glow-drift dark:animate-none"
      />
      <div className="mx-auto max-w-5xl px-6 pt-28 pb-20 text-center lg:px-8 lg:pt-36 lg:pb-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.12)}
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center rounded-full border border-foreground/15 bg-(image:--chip-gradient) px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-[0_1px_2px_rgba(76,40,130,0.08)] dark:bg-none dark:bg-foreground/3 dark:shadow-none">
              Full-service growth &amp; creative agency
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-8 flex flex-col items-center text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            <span>We turn</span>
            <TextRotator words={rotatingWords} className="flex justify-center" />
            <span>into revenue.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground text-pretty"
          >
            Appexcreative fuses brand strategy, content, performance marketing,
            and AI automation into one integrated team — so you scale
            predictably instead of juggling five disconnected vendors.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <MagneticButton>
              <Button asChild size="lg" className="h-11 px-6 text-base">
                <Link href="/contact">
                  Book a Call
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </MagneticButton>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 px-6 text-base"
            >
              <Link href="/work">View Our Work</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
