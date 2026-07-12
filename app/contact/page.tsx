import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { LogoMarquee } from "@/components/shared/logo-marquee";
import { siteConfig } from "@/content/site-config";
import { clientLogos } from "@/content/logos";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a call with Appexcreative to talk through your growth goals, current channels, and how we could work together.",
};

const nextSteps = [
  {
    step: "1",
    title: "We review your submission",
    description: "A strategist looks at your goals and current channels within one business day.",
  },
  {
    step: "2",
    title: "We schedule a call",
    description: "A 30-minute conversation to understand your business and answer questions.",
  },
  {
    step: "3",
    title: "You get a custom proposal",
    description: "A scoped plan with services, timeline, and pricing — no obligation.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something great."
        description="Tell us about your goals and we'll put together a plan within 48 hours."
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-semibold text-foreground">
              What happens next
            </h2>
            <ol className="mt-8 space-y-8">
              {nextSteps.map((item) => (
                <li key={item.step} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-foreground/15 text-sm font-medium text-foreground">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-12 space-y-4 border-t border-foreground/10 pt-8">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="size-4" />
                {siteConfig.phone}
              </a>
              <p className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="size-4" />
                {siteConfig.address}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-foreground/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <LogoMarquee logos={clientLogos} label="" compact />
        </div>
      </section>
    </>
  );
}
