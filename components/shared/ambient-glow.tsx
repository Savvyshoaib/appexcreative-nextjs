"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/lib/motion-config";
import { cn } from "@/lib/utils";

registerGsap();

/**
 * Soft, GPU-friendly radial glows that drift on an infinite loop.
 * Replaces rigid CSS background-position animation with transform/opacity.
 */
export function AmbientGlow({
  className,
  intensity = 1,
}: {
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      const root = ref.current;
      if (!root || prefersReducedMotion) return;

      const blobs = root.querySelectorAll<HTMLElement>("[data-glow]");
      const tweens = Array.from(blobs).map((blob, index) => {
        const duration = 14 + index * 3;
        const x = (index % 2 === 0 ? 1 : -1) * (4 + index * 2);
        const y = index % 2 === 0 ? -3 : 4;

        return gsap.to(blob, {
          xPercent: x,
          yPercent: y,
          scale: 1.08 + index * 0.04,
          opacity: 0.55 + index * 0.12,
          duration,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 1.2,
        });
      });

      return () => {
        tweens.forEach((t) => t.kill());
      };
    },
    { dependencies: [prefersReducedMotion, intensity], scope: ref }
  );

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ opacity: intensity }}
    >
      <div
        data-glow
        className="absolute -left-[10%] -top-[15%] h-[55%] w-[55%] rounded-full bg-[radial-gradient(circle,var(--glow-1),transparent_68%)] blur-2xl will-change-transform"
      />
      <div
        data-glow
        className="absolute -right-[12%] top-[5%] h-[48%] w-[48%] rounded-full bg-[radial-gradient(circle,var(--glow-2),transparent_68%)] blur-2xl will-change-transform"
      />
      <div
        data-glow
        className="absolute bottom-[-18%] left-[28%] h-[50%] w-[55%] rounded-full bg-[radial-gradient(circle,var(--glow-3),transparent_70%)] blur-2xl will-change-transform"
      />
      <div
        data-glow
        className="absolute left-[35%] top-[30%] h-[32%] w-[32%] rounded-full bg-[radial-gradient(circle,var(--glow-strong),transparent_72%)] opacity-40 blur-3xl will-change-transform"
      />
    </div>
  );
}
