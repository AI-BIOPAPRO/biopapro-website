import type { Metadata } from "next";
import { POSTS } from "@/lib/blog-data";
import BlogIndexClient from "@/components/blog/BlogIndexClient";

export const metadata: Metadata = {
  title: "Blog & News",
  description: "Industry news, sustainability updates, and product announcements from Biopapro — India's leading birchwood cutlery manufacturer.",
  openGraph: {
    title: "Blog & News — Biopapro",
    description: "Industry news, sustainability updates, and product announcements from India's leading birchwood cutlery manufacturer.",
    type: "website",
    url: "/blog",
  },
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main style={{ background: "#F5F0E6", minHeight: "100vh" }}>
      {/* Header */}
      <section style={{ background: "#1A4731" }} className="px-6 md:px-12 lg:px-20 pt-32 pb-20">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] mb-6" style={{ color: "rgba(245,240,230,0.45)" }}>
            Biopapro · Blog & News
          </p>
          <h1
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              color: "#F5F0E6",
              marginBottom: "1.25rem",
            }}
          >
            Industry insights
            <br />
            <span style={{ color: "#E97316" }}>& company news.</span>
          </h1>
          <p
            className="font-sans font-light leading-relaxed max-w-[520px]"
            style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", color: "rgba(245,240,230,0.55)" }}
          >
            Sustainability trends, plastic ban updates, product announcements,
            and news from India&apos;s leading birchwood cutlery manufacturer.
          </p>
        </div>
      </section>

      <BlogIndexClient posts={POSTS} />
    </main>
  );
}
