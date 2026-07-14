"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, registerGsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/lib/motion-config";
import { cn } from "@/lib/utils";

registerGsap();

type RevealPreset = "fade-up" | "fade" | "scale" | "fade-left" | "fade-right";

type GsapRevealProps = {
  children: ReactNode;
  className?: string;
  preset?: RevealPreset;
  /** Vertical / horizontal offset in px before reveal */
  distance?: number;
  delay?: number;
  duration?: number;
};

function fromVars(preset: RevealPreset, distance: number) {
  switch (preset) {
    case "fade":
      return { autoAlpha: 0 };
    case "scale":
      return { autoAlpha: 0, scale: 0.96 };
    case "fade-left":
      return { autoAlpha: 0, x: -distance };
    case "fade-right":
      return { autoAlpha: 0, x: distance };
    case "fade-up":
    default:
      return { autoAlpha: 0, y: distance };
  }
}

export function GsapReveal({
  children,
  className,
  preset = "fade-up",
  distance = 32,
  delay = 0,
  duration = 0.8,
}: GsapRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (prefersReducedMotion) {
        gsap.set(el, { clearProps: "all" });
        return;
      }

      gsap.fromTo(el, fromVars(preset, distance), {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration,
        delay,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
          fastScrollEnd: true,
        },
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    },
    { dependencies: [prefersReducedMotion, preset, distance, delay, duration], scope: ref }
  );

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}

type GsapStaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  distance?: number;
  preset?: RevealPreset;
  childSelector?: string;
};

export function GsapStagger({
  children,
  className,
  stagger = 0.08,
  distance = 24,
  preset = "fade-up",
  childSelector = ":scope > *",
}: GsapStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const items = el.querySelectorAll(childSelector);
      if (!items.length) return;

      if (prefersReducedMotion) {
        gsap.set(items, { clearProps: "all" });
        return;
      }

      gsap.fromTo(items, fromVars(preset, distance), {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
          fastScrollEnd: true,
        },
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    },
    {
      dependencies: [prefersReducedMotion, stagger, distance, preset, childSelector],
      scope: ref,
    }
  );

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}

type GsapParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Max travel in px (positive = moves slower / upward feel) */
  speed?: number;
};

/** Subtle scroll-linked parallax for images / decorative layers. */
export function GsapParallax({
  children,
  className,
  speed = 40,
}: GsapParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion) return;

      const tween = gsap.fromTo(
        el,
        { y: -speed * 0.35 },
        {
          y: speed * 0.65,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement ?? el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { dependencies: [prefersReducedMotion, speed], scope: ref }
  );

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}

type GsapHoverCardProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Premium card micro-interaction: soft lift + scale on pointer enter.
 * Keyboard / touch-safe — no motion without pointer hover.
 */
export function GsapHoverCard({ children, className }: GsapHoverCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion) return;

      const onEnter = () => {
        gsap.to(el, {
          y: -4,
          scale: 1.01,
          duration: 0.4,
          ease: "power3.out",
        });
      };
      const onLeave = () => {
        gsap.to(el, {
          y: 0,
          scale: 1,
          duration: 0.45,
          ease: "power3.out",
        });
      };

      el.addEventListener("pointerenter", onEnter);
      el.addEventListener("pointerleave", onLeave);

      return () => {
        el.removeEventListener("pointerenter", onEnter);
        el.removeEventListener("pointerleave", onLeave);
        gsap.set(el, { clearProps: "transform" });
      };
    },
    { dependencies: [prefersReducedMotion], scope: ref }
  );

  return (
    <div ref={ref} className={cn("h-full will-change-transform", className)}>
      {children}
    </div>
  );
}
