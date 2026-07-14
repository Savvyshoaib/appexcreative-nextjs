"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GsapReveal } from "@/components/shared/gsap-reveal";

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
  photo: string;
};

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  return (
    <GsapReveal>
      <Carousel className="mx-auto w-full max-w-3xl">
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem key={item.name}>
              <figure className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-card p-8 shadow-surface sm:p-10">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-[radial-gradient(circle,var(--glow-1),transparent_70%)]"
                />
                <Quote className="relative size-7 text-(--hero-word-accent)/50" />
                <blockquote className="relative mt-5 text-left text-lg text-balance text-foreground sm:text-xl sm:leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="relative mt-8 flex items-center gap-3 border-t border-foreground/10 pt-6">
                  <div className="relative size-11 shrink-0 overflow-hidden rounded-full ring-2 ring-(--accent-border)">
                    <Image
                      src={item.photo}
                      alt={item.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-6 flex items-center justify-center gap-2">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </GsapReveal>
  );
}
