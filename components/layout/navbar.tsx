"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Logo } from "@/components/shared/logo";
import { primaryNav, siteConfig } from "@/content/site-config";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
      initial={false}
    >
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-foreground/10 bg-background/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" aria-label={siteConfig.name}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Button asChild variant="ghost" size="sm">
              <Link href="/faq">FAQ</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/contact">Book a Call</Link>
            </Button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <SheetHeader>
                  <SheetTitle>{siteConfig.name}</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 flex flex-col gap-1 px-4">
                  {primaryNav.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-md px-3 py-3 text-base text-foreground/90 transition-colors hover:bg-accent"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/faq"
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-base text-foreground/90 transition-colors hover:bg-accent"
                  >
                    FAQ
                  </Link>
                </nav>
                <div className="mt-4 px-4">
                  <Button asChild className="w-full">
                    <Link href="/contact" onClick={() => setOpen(false)}>
                      Book a Call
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
