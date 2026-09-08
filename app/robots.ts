import { MetadataRoute } from "next";
import { absoluteUrl, SITE_ORIGIN } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Only the production domain should be indexable; previews stay out of the index.
  const isProduction = SITE_ORIGIN === "https://biopapro.com";

  return {
    rules: isProduction
      ? { userAgent: "*", allow: "/", disallow: ["/studio", "/api/"] }
      : { userAgent: "*", disallow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE_ORIGIN,
  };
}
