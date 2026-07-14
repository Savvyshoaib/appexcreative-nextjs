"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/motion-config";
import { cn } from "@/lib/utils";

type TextRotatorProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  holdDuration?: number;
  pauseDuration?: number;
  className?: string;
};

export function TextRotator({
  words,
  typingSpeed = 75,
  deletingSpeed = 40,
  holdDuration = 1600,
  pauseDuration = 300,
  className,
}: TextRotatorProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [displayed, setDisplayed] = useState("");
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const phase = useRef<"typing" | "holding" | "deleting" | "pausing">("typing");

  const longestWord = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  useEffect(() => {
    if (prefersReducedMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing display text to the reduced-motion preference, which is only known after mount
      setDisplayed(words[0] ?? "");
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const currentWord = words[wordIndex.current % words.length];

      if (phase.current === "typing") {
        charIndex.current += 1;
        setDisplayed(currentWord.slice(0, charIndex.current));
        if (charIndex.current >= currentWord.length) {
          phase.current = "holding";
          timeoutId = setTimeout(tick, holdDuration);
          return;
        }
        timeoutId = setTimeout(tick, typingSpeed);
        return;
      }

      if (phase.current === "holding") {
        phase.current = "deleting";
        timeoutId = setTimeout(tick, deletingSpeed);
        return;
      }

      if (phase.current === "deleting") {
        charIndex.current -= 1;
        setDisplayed(currentWord.slice(0, charIndex.current));
        if (charIndex.current <= 0) {
          phase.current = "pausing";
          wordIndex.current += 1;
          timeoutId = setTimeout(tick, pauseDuration);
          return;
        }
        timeoutId = setTimeout(tick, deletingSpeed);
        return;
      }

      phase.current = "typing";
      timeoutId = setTimeout(tick, typingSpeed);
    };

    timeoutId = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timeoutId);
  }, [words, typingSpeed, deletingSpeed, holdDuration, pauseDuration, prefersReducedMotion]);

  return (
    <span
      className={cn("inline-flex items-center justify-center", className)}
      style={{
        minWidth: `${longestWord.length}ch`,
        height: "1.1em",
        lineHeight: 1,
      }}
    >
      <span className="bg-(image:--hero-word-gradient) bg-clip-text leading-none text-transparent">
        {displayed || "​"}
      </span>
      {!prefersReducedMotion ? (
        <span
          aria-hidden
          className="ml-0.5 inline-block h-[0.85em] w-0.75 shrink-0 animate-caret-blink bg-(--hero-word-accent)"
        />
      ) : null}
    </span>
  );
}
