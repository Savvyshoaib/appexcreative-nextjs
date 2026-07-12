import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/reveal";

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
    <Reveal
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg text-muted-foreground text-pretty">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
