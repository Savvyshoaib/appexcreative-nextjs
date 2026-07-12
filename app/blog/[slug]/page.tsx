import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Reveal, Stagger } from "@/components/shared/reveal";
import { BlogPostCard } from "@/components/sections/blog-post-card";
import { CTASection } from "@/components/sections/cta-section";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/content/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.filter((post) => post.body).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug && p.body);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug && p.body);

  if (!post) {
    notFound();
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-foreground/10">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] glow-mesh animate-glow-drift dark:animate-none" />
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3.5" />
              Back to Insights
            </Link>
            <Badge variant="secondary" className="mt-6">
              {post.category}
            </Badge>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-3">
              <div className="relative size-10 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={post.author.photo}
                  alt={post.author.name}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {post.author.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {post.date} &middot; {post.readTime}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal className="mx-auto mt-16 max-w-4xl px-6 lg:px-8">
        <div className="relative aspect-video overflow-hidden rounded-xl border border-foreground/10 shadow-surface">
          <Image
            src={post.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </Reveal>

      <article className="mx-auto max-w-2xl px-6 py-16 lg:px-8">
        <Reveal className="space-y-6">
          {post.body?.map((block, index) => {
            if (block.type === "heading") {
              return (
                <h2
                  key={index}
                  className="pt-4 text-2xl font-semibold tracking-tight text-foreground"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote
                  key={index}
                  className="border-l-2 border-foreground/20 pl-6 text-xl text-balance text-foreground italic"
                >
                  {block.text}
                </blockquote>
              );
            }
            return (
              <p key={index} className="text-base leading-relaxed text-muted-foreground">
                {block.text}
              </p>
            );
          })}
        </Reveal>

        <Reveal className="mt-16 flex items-center gap-4 rounded-xl border border-foreground/10 bg-card shadow-surface p-6">
          <div className="relative size-12 shrink-0 overflow-hidden rounded-full">
            <Image
              src={post.author.photo}
              alt={post.author.name}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">
              Written by {post.author.name}
            </p>
            <p className="text-sm text-muted-foreground">{post.author.role} at Appexcreative</p>
          </div>
        </Reveal>
      </article>

      <section className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-foreground">
            More from the blog
          </h2>
          <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <BlogPostCard key={p.slug} post={p} />
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection
        title="Want results like this for your business?"
        description="Tell us about your goals and we'll put together a plan within 48 hours."
      />
    </>
  );
}
