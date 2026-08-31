import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      // Product photography (Shopify CDN on the biopapro.com domain)
      { protocol: "https", hostname: "biopapro.com", pathname: "/cdn/**" },
      // Sanity image pipeline (blog)
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000, // 30 days — CDN images are versioned, safe to cache long
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
  },

  /**
   * SEO migration: the site is replacing a Shopify store. These preserve the
   * link equity of URLs Google has already indexed by 301-ing them to the
   * closest page on the new site.
   *
   * TODO before launch: export the real indexed-URL list from Google Search
   * Console (Pages report) and the old sitemaps, and add an explicit mapping
   * for every high-traffic product/collection URL — the wildcard fallbacks
   * below send them all to the catalogue, which loses per-product ranking.
   */
  async redirects() {
    return [
      { source: "/pages/about-us", destination: "/manufacturing", permanent: true },
      { source: "/pages/contact", destination: "/contact", permanent: true },
      { source: "/pages/contact-us", destination: "/contact", permanent: true },
      { source: "/pages/packaging", destination: "/products", permanent: true },
      { source: "/pages/news", destination: "/blog", permanent: true },
      { source: "/pages/:slug", destination: "/", permanent: true },
      { source: "/blogs/:blog/:article", destination: "/blog", permanent: true },
      { source: "/blogs/:blog", destination: "/blog", permanent: true },
      { source: "/products/:slug", destination: "/products", permanent: true },
      { source: "/collections/:slug/:product", destination: "/products", permanent: true },
      { source: "/collections/:slug", destination: "/products", permanent: true },
      { source: "/collections", destination: "/products", permanent: true },
      { source: "/account/:path*", destination: "/", permanent: false },
      { source: "/cart", destination: "/contact", permanent: false },
    ];
  },
};

export default nextConfig;
