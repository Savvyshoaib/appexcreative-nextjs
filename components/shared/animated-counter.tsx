"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";
import { usePrefersReducedMotion } from "@/lib/motion-config";
import { cn } from "@/lib/utils";

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
      motionValue.set(value);
    }
  }, [isInView, motionValue, value, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion && isInView && ref.current) {
      const formatted = decimals
        ? value.toFixed(decimals)
        : Math.round(value).toLocaleString();
      ref.current.textContent = `${prefix}${formatted}${suffix}`;
      return;
    }

    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const formatted = decimals
          ? latest.toFixed(decimals)
          : Math.round(latest).toLocaleString();
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, prefix, suffix, decimals, prefersReducedMotion, isInView, value]);

  return (
    <div className="text-center">
      <span
        ref={ref}
        className={cn(
          "block text-4xl font-semibold tracking-tight sm:text-5xl",
          "bg-(image:--counter-gradient) bg-clip-text text-transparent"
        )}
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
    <div className="grid grid-cols-2 gap-8 rounded-2xl border border-foreground/10 bg-card/60 p-6 shadow-surface backdrop-blur-sm sm:grid-cols-4 sm:gap-6 sm:p-8">
      {items.map((item) => (
        <AnimatedCounter key={item.label} {...item} />
      ))}
    </div>
  );
}
