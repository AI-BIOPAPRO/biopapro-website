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
};

export default nextConfig;
