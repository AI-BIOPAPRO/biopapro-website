/**
 * Single source of truth for the site's public origin.
 *
 * Priority:
 *   1. NEXT_PUBLIC_SITE_URL          — set this per environment (production, preview)
 *   2. VERCEL_PROJECT_PRODUCTION_URL — Vercel's production domain (build-time)
 *   3. VERCEL_URL                     — the current deployment URL (preview/branch)
 *   4. https://biopapro.com          — final fallback
 *
 * Use `siteUrl` for metadataBase, canonicals, sitemap, robots, and OG URLs so a
 * preview deployment never claims production URLs.
 */
function resolveOrigin(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const prod = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (prod) return `https://${prod}`;

  const deployment = process.env.VERCEL_URL;
  if (deployment) return `https://${deployment}`;

  return "https://biopapro.com";
}

export const SITE_ORIGIN = resolveOrigin();
export const siteUrl = new URL(SITE_ORIGIN);

/** Absolute URL for a path on this site. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_ORIGIN).toString();
}

export const SITE = {
  name: "Biopapro",
  /** Legal + display */
  legalName: "Biopapro Private Limited",
  foundedYear: "2019",
  contactEmail: "export@biopapro.com",
  contactPhone: "+91 70211 03763",
  exportCountries: 18,
} as const;
