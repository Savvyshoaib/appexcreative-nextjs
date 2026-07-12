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
import { Reveal } from "@/components/shared/reveal";

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
    <Reveal>
      <Carousel className="mx-auto w-full max-w-3xl">
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem key={item.name}>
              <div className="rounded-xl border border-foreground/10 bg-card shadow-surface p-10 text-center">
                <Quote className="mx-auto size-6 text-muted-foreground/50" />
                <p className="mt-6 text-xl text-balance text-foreground">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-8 flex items-center justify-center gap-3">
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={item.photo}
                      alt={item.name}
                      fill
                      sizes="40px"
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
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="static mt-6 mr-2 translate-y-0" />
        <CarouselNext className="static mt-6 translate-y-0" />
      </Carousel>
    </Reveal>
  );
}
