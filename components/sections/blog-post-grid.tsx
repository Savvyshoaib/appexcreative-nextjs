"use client";

import { useMemo, useState } from "react";
import { Stagger } from "@/components/shared/reveal";
import { BlogPostCard } from "@/components/sections/blog-post-card";
import { Badge } from "@/components/ui/badge";
import { blogCategories, type FullBlogPost } from "@/content/blog";
import { cn } from "@/lib/utils";

export function BlogPostGrid({ posts }: { posts: FullBlogPost[] }) {
  const [active, setActive] = useState<(typeof blogCategories)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? posts : posts.filter((post) => post.category === active)),
    [active, posts]
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {blogCategories.map((category) => (
          <button key={category} onClick={() => setActive(category)}>
            <Badge
              variant={active === category ? "default" : "secondary"}
              className={cn(
                "cursor-pointer px-3 py-1 text-sm",
                active === category ? "" : "hover:bg-muted/80"
              )}
            >
              {category}
            </Badge>
          </button>
        ))}
      </div>

      <Stagger key={active} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </Stagger>
    </div>
  );
}
