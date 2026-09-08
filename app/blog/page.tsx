import type { Metadata } from "next";
import Link from "next/link";
import { POSTS, CATEGORY_LABELS } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog & News — Biopapro",
  description: "Industry news, sustainability updates, and product announcements from Biopapro — India's leading birchwood cutlery manufacturer.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric", month: "long", year: "numeric",
  });
}

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

      {/* Posts grid */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col"
              style={{ border: "1px solid #DDD3C5", background: "#FDFAF5" }}
            >
              {/* Colour band instead of image */}
              <div className="w-full h-2" style={{ background: "#4A7A3D" }} />

              <div className="flex flex-col flex-1 p-6 gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className="font-mono text-[11px] uppercase tracking-[0.22em] px-2.5 py-1"
                    style={{ background: "#EDE7DC", color: "#4A7A3D" }}
                  >
                    {CATEGORY_LABELS[post.category] ?? post.category}
                  </span>
                  <span className="font-mono text-[11px]" style={{ color: "#B8A898" }}>
                    {formatDate(post.publishedAt)}
                  </span>
                </div>

                <h2
                  className="font-display font-light leading-snug transition-colors duration-200 group-hover:text-[#4A7A3D]"
                  style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)", color: "#2A2118" }}
                >
                  {post.title}
                </h2>

                <p
                  className="font-sans font-light leading-relaxed flex-1"
                  style={{ fontSize: "14px", color: "#7A6A58" }}
                >
                  {post.excerpt}
                </p>

                <div
                  className="font-mono text-[11px] uppercase tracking-[0.2em] mt-2 transition-colors duration-200 group-hover:text-[#4A7A3D]"
                  style={{ color: "#B8A898" }}
                >
                  Read article →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
