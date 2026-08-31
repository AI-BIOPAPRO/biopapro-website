import { client, sanityConfigured } from "./client";

export interface Post {
  _id: string;
  _updatedAt?: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  category: string;
  publishedAt: string;
  author?: string;
  coverImage?: { asset: { _ref: string }; alt?: string };
  body?: unknown[];
}

const POST_FIELDS = `
  _id,
  _updatedAt,
  title,
  slug,
  excerpt,
  category,
  publishedAt,
  author,
  coverImage
`;

// Published only: no drafts, must have a slug, and publishedAt not in the future.
const PUBLISHED = `_type == "post" && !(_id in path("drafts.**")) && defined(slug.current) && publishedAt <= now()`;

export async function getAllPosts(): Promise<Post[]> {
  if (!sanityConfigured) return [];
  return client.fetch(
    `*[${PUBLISHED}] | order(publishedAt desc) { ${POST_FIELDS} }`,
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!sanityConfigured) return null;
  return client.fetch(
    `*[${PUBLISHED} && slug.current == $slug][0] { ${POST_FIELDS}, body }`,
    { slug },
  );
}

export async function getLatestPosts(limit = 3): Promise<Post[]> {
  if (!sanityConfigured) return [];
  return client.fetch(
    `*[${PUBLISHED}] | order(publishedAt desc)[0...$limit] { ${POST_FIELDS} }`,
    { limit },
  );
}

export const CATEGORY_LABELS: Record<string, string> = {
  "industry-news": "Industry News",
  "sustainability": "Sustainability",
  "product-updates": "Product Updates",
  "company-news": "Company News",
  "regulations": "Regulations",
};
