import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { BlogPostGrid } from "@/components/sections/blog-post-grid";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on growth marketing, brand strategy, product, and AI automation from the Appexcreative team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Insights on growth, brand, and AI-driven marketing."
        description="Notes from inside client engagements — what's working, what isn't, and why."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <BlogPostGrid posts={blogPosts} />
        </div>
      </section>

      <section className="border-t border-foreground/10 py-24">
        <Reveal className="mx-auto max-w-xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-semibold text-foreground">
            Get insights in your inbox
          </h2>
          <p className="mt-3 text-muted-foreground">
            One email a month. No fluff, no drip campaigns — just what
            we&rsquo;re learning from live client work.
          </p>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Input type="email" placeholder="you@company.com" className="h-11" />
            <Button type="submit" className="h-11 shrink-0 px-6">
              Subscribe
            </Button>
          </form>
        </Reveal>
      </section>
    </>
  );
}
