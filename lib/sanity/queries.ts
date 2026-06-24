import { client } from "./client";

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  category: string;
  publishedAt: string;
  author: string;
  coverImage?: { asset: { _ref: string } };
  body?: unknown[];
}

const POST_FIELDS = `
  _id,
  title,
  slug,
  excerpt,
  category,
  publishedAt,
  author,
  coverImage
`;

export async function getAllPosts(): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) { ${POST_FIELDS} }`
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] { ${POST_FIELDS}, body }`,
    { slug }
  );
}

export async function getLatestPosts(limit = 3): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc)[0...$limit] { ${POST_FIELDS} }`,
    { limit }
  );
}

export const CATEGORY_LABELS: Record<string, string> = {
  "industry-news": "Industry News",
  "sustainability": "Sustainability",
  "product-updates": "Product Updates",
  "company-news": "Company News",
  "regulations": "Regulations",
};
