export function LogoMarquee({
  logos,
  label = "Trusted by ambitious brands",
  compact = false,
}: {
  logos: string[];
  label?: string;
  compact?: boolean;
}) {
  const items = [...logos, ...logos];

  return (
    <div className={compact ? "py-8" : "py-16"}>
      {label ? (
        <p className="mb-8 text-center text-sm font-medium tracking-wide text-muted-foreground uppercase">
          {label}
        </p>
      ) : null}
      <div
        aria-hidden="true"
        className="group relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="flex w-max animate-marquee gap-16 group-hover:paused">
          {items.map((logo, index) => (
            <span
              key={`${logo}-${index}`}
              className="flex shrink-0 items-center text-xl font-semibold tracking-tight text-muted-foreground/50 grayscale"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
