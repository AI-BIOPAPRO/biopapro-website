import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/sanity/queries";
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  let postEntries: MetadataRoute.Sitemap = [];
  try {
    const posts = await getAllPosts();
    postEntries = posts
      .filter((post) => post.slug?.current)
      .map((post) => ({
        url: absoluteUrl(`/blog/${post.slug.current}`),
        lastModified: post.publishedAt ? new Date(post.publishedAt) : now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }));
  } catch {
    // CMS unavailable — still return the static routes rather than failing the sitemap
  }

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
