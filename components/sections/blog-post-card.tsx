import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { GsapHoverCard, GsapParallax } from "@/components/shared/gsap-reveal";
import type { BlogPost } from "@/content/blog";

export function BlogPostCard({ post }: { post: BlogPost }) {
  const isLinkable = Boolean(post.slug && post.body);

  const card = (
    <GsapHoverCard>
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-card shadow-surface transition-[border-color] duration-300 hover:border-(--accent-border)">
        <div className="relative h-40 overflow-hidden">
          <GsapParallax speed={28} className="absolute inset-[-10%] h-[120%] w-full">
            <Image
              src={post.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
          </GsapParallax>
          <Badge variant="secondary" className="absolute left-3 top-3">
            {post.category}
          </Badge>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-medium text-foreground">{post.title}</h3>
          <p className="mt-2 flex-1 text-sm text-muted-foreground">
            {post.excerpt}
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
            <span>{post.date}</span>
            <span aria-hidden>&middot;</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </article>
    </GsapHoverCard>
  );

  if (isLinkable) {
    return (
      <Link href={`/blog/${post.slug}`} className="block h-full">
        {card}
      </Link>
    );
  }

  return card;
}
