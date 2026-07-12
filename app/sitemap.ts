import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";
import { serviceDetails } from "@/content/service-details";
import { blogPosts } from "@/content/blog";

const routes = [
  "",
  "/about",
  "/services",
  "/work",
  "/industries",
  "/pricing",
  "/blog",
  "/faq",
  "/contact",
  "/legal",
  ...Object.keys(serviceDetails).map((slug) => `/services/${slug}`),
  ...blogPosts.filter((post) => post.body).map((post) => `/blog/${post.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
