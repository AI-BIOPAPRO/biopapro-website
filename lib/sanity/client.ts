import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

// @sanity/image-url's named export isn't exposed on a stable path in v2/v3, and
// the default export triggers a deprecation log only when actually invoked with
// a client instance — calling it with an explicit config (below) avoids that.
type SanityImageSource = Parameters<ReturnType<typeof createImageUrlBuilder>["image"]>[0];

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01";

/** True only when the CMS is configured. Routes should degrade gracefully when false. */
export const sanityConfigured = Boolean(projectId && dataset);

if (!sanityConfigured && process.env.NODE_ENV !== "production") {
  console.warn(
    "[sanity] NEXT_PUBLIC_SANITY_PROJECT_ID / NEXT_PUBLIC_SANITY_DATASET not set — blog content will be empty.",
  );
}

export const client = createClient({
  projectId: projectId ?? "missing-project-id",
  dataset: dataset ?? "production",
  apiVersion,
  useCdn: true,
  perspective: "published",
});

const builder = createImageUrlBuilder({ projectId: projectId ?? "", dataset: dataset ?? "" });

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
