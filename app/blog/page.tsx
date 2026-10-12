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
    <main style={{ background: "#F6F1E8", minHeight: "100vh" }}>
      {/* Header */}
      <section style={{ background: "#2D5228" }} className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] mb-6" style={{ color: "rgba(168,198,134,0.65)" }}>
            Biopapro · Blog & News
          </p>
          <h1
            className="font-display font-light leading-[0.92] mb-6"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.4rem)", color: "#F6F1E8" }}
          >
            Industry insights
            <br />
            <em style={{ color: "#A8C686", fontStyle: "italic" }}>& company news.</em>
          </h1>
          <p
            className="font-sans font-light leading-relaxed max-w-[520px]"
            style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", color: "rgba(200,230,185,0.65)" }}
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
