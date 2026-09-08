import { MetadataRoute } from "next";
import { POSTS } from "@/lib/blog-data";
import { absoluteUrl } from "@/lib/site";

const STATIC_ROUTES: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "/", changeFrequency: "monthly", priority: 1.0 },
  { path: "/products", changeFrequency: "monthly", priority: 0.9 },
  { path: "/manufacturing", changeFrequency: "monthly", priority: 0.9 },
  { path: "/sustainability", changeFrequency: "monthly", priority: 0.8 },
  { path: "/certifications", changeFrequency: "monthly", priority: 0.8 },
  { path: "/global-presence", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const postEntries: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.publishedAt ? new Date(post.publishedAt) : now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...STATIC_ROUTES.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...postEntries,
  ];
}
