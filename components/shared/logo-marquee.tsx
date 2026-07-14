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
    <div className={compact ? "py-6" : "py-10 sm:py-14"}>
      {label ? (
        <p className="mb-6 text-center text-xs font-medium tracking-wide text-muted-foreground uppercase sm:mb-8">
          {label}
        </p>
      ) : null}
      <div
        aria-hidden="true"
        className="group relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <div className="flex w-max animate-marquee gap-12 group-hover:paused sm:gap-16">
          {items.map((logo, index) => (
            <span
              key={`${logo}-${index}`}
              className="flex shrink-0 items-center text-lg font-semibold tracking-tight text-muted-foreground/45 transition-colors group-hover:text-muted-foreground/70 sm:text-xl"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
