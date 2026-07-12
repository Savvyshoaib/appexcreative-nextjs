import { useId } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/content/site-config";

export function LogoMark({ className }: { className?: string }) {
  const id = useId();
  const gradientId = `logo-gradient-${id}`;

  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "var(--logo-color-1)" }} />
          <stop offset="100%" style={{ stopColor: "var(--logo-color-2)" }} />
        </linearGradient>
      </defs>
      <rect x="5" y="20" width="7" height="13" rx="2.25" fill={`url(#${gradientId})`} />
      <rect x="16.5" y="12" width="7" height="21" rx="2.25" fill={`url(#${gradientId})`} />
      <rect x="28" y="4" width="7" height="29" rx="2.25" fill={`url(#${gradientId})`} />
    </svg>
  );
}

export function Logo({
  className,
  wordmarkClassName,
}: {
  className?: string;
  wordmarkClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <LogoMark className="size-6" />
      <span
        className={cn(
          "text-lg font-semibold tracking-tight text-foreground",
          wordmarkClassName
        )}
      >
        {siteConfig.name}
      </span>
    </span>
  );
}
