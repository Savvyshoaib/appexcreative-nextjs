"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { usePrefersReducedMotion } from "@/lib/motion-config";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  decimals?: number;
};

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 1.6,
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = usePrefersReducedMotion();
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(prefersReducedMotion ? value : value);
    }
  }, [isInView, motionValue, value, prefersReducedMotion]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const formatted = decimals
          ? latest.toFixed(decimals)
          : Math.round(latest).toLocaleString();
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, prefix, suffix, decimals]);

  return (
    <div className="text-center">
      <span
        ref={ref}
        className="block bg-(image:--counter-gradient) bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl dark:bg-none dark:bg-clip-border dark:text-foreground"
      >
        {prefix}0{suffix}
      </span>
      <span className="mt-2 block text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

export function AnimatedCounterRow({
  items,
}: {
  items: AnimatedCounterProps[];
}) {
  return (
    <motion.div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {items.map((item) => (
        <AnimatedCounter key={item.label} {...item} />
      ))}
    </motion.div>
  );
}
