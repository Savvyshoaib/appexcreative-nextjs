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
  distance?: number;
  delay?: number;
  duration?: number;
};

function fromVars(preset: RevealPreset, distance: number) {
  switch (preset) {
    case "fade":
      return { opacity: 0 };
    case "scale":
      return { opacity: 0, scale: 0.97 };
    case "fade-left":
      return { opacity: 0, x: -distance };
    case "fade-right":
      return { opacity: 0, x: distance };
    case "fade-up":
    default:
      return { opacity: 0, y: distance };
  }
}

export function GsapReveal({
  children,
  className,
  preset = "fade-up",
  distance = 28,
  delay = 0,
  duration = 0.75,
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

      const play = () => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration,
          delay,
          ease: "power3.out",
          overwrite: "auto",
          clearProps: "transform",
        });
      };

      gsap.set(el, fromVars(preset, distance));

      const st = ScrollTrigger.create({
        trigger: el,
        start: "top 92%",
        once: true,
        onEnter: play,
      });

      // Already in view on mount (common on Work / short viewports)
      if (ScrollTrigger.isInViewport(el, 0.05)) {
        play();
      }

      requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => {
        st.kill();
        gsap.set(el, { clearProps: "all" });
      };
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
  distance = 22,
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

      const play = () => {
        gsap.to(items, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger,
          ease: "power3.out",
          overwrite: "auto",
          clearProps: "transform",
        });
      };

      gsap.set(items, fromVars(preset, distance));

      const st = ScrollTrigger.create({
        trigger: el,
        start: "top 92%",
        once: true,
        onEnter: play,
      });

      if (ScrollTrigger.isInViewport(el, 0.05)) {
        play();
      }

      requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => {
        st.kill();
        gsap.set(items, { clearProps: "all" });
      };
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
  speed?: number;
};

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
        gsap.set(el, { clearProps: "transform" });
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
          overwrite: "auto",
        });
      };
      const onLeave = () => {
        gsap.to(el, {
          y: 0,
          scale: 1,
          duration: 0.45,
          ease: "power3.out",
          overwrite: "auto",
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
