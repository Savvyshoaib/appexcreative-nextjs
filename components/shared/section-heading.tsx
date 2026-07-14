import { cn } from "@/lib/utils";
import { GsapReveal } from "@/components/shared/gsap-reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <GsapReveal
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" ? "text-center" : "text-left mx-0",
        className
      )}
    >
      {eyebrow ? (
        <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-(--hero-word-accent) uppercase">
          <span
            aria-hidden
            className="inline-block size-1.5 rounded-full bg-(--hero-word-accent)"
          />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-muted-foreground text-pretty sm:text-lg">
          {description}
        </p>
      ) : null}
    </GsapReveal>
  );
}
