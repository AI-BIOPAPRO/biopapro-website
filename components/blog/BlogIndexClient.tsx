"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Post, CATEGORY_LABELS, estimateReadingMinutes, getCoverImageSrc } from "@/lib/blog-data";
import BlogCover from "@/components/blog/BlogCover";

function PostCover({ post }: { post: Post }) {
  const src = getCoverImageSrc(post);
  if (src) {
    return (
      <Image
        src={src}
        alt={post.title}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
    );
  }
  return <BlogCover category={post.category} />;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric", month: "long", year: "numeric",
  });
}

export default function BlogIndexClient({ posts }: { posts: Post[] }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const seen = new Set(posts.map((p) => p.category));
    return Object.keys(CATEGORY_LABELS).filter((c) => seen.has(c));
  }, [posts]);

  const filtered = activeCategory ? posts.filter((p) => p.category === activeCategory) : posts;

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16">
      {/* Category filter chips */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActiveCategory(null)}
          className="font-mono text-[11px] uppercase tracking-[0.18em] px-3.5 py-2 transition-colors duration-200"
          style={{
            background: activeCategory === null ? "#1A4731" : "#EDE5D4",
            color: activeCategory === null ? "#EDE5D4" : "#1A4731",
          }}
        >
          All ({posts.length})
        </button>
        {categories.map((cat) => {
          const count = posts.filter((p) => p.category === cat).length;
          const active = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(active ? null : cat)}
              className="font-mono text-[11px] uppercase tracking-[0.18em] px-3.5 py-2 transition-colors duration-200"
              style={{
                background: active ? "#1A4731" : "#EDE5D4",
                color: active ? "#EDE5D4" : "#1A4731",
              }}
            >
              {CATEGORY_LABELS[cat] ?? cat} ({count})
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden"
            style={{ border: "1px solid rgba(26,71,49,0.12)", background: "#F5F0E6" }}
          >
            <div className="w-full overflow-hidden relative" style={{ aspectRatio: "4 / 3" }}>
              <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.06] relative">
                <PostCover post={post} />
              </div>
            </div>

            <div className="flex flex-col flex-1 p-6 gap-3">
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className="font-mono text-[11px] uppercase tracking-[0.22em] px-2.5 py-1"
                  style={{ background: "#EDE5D4", color: "#1A4731" }}
                >
                  {CATEGORY_LABELS[post.category] ?? post.category}
                </span>
                <span className="font-mono text-[11px]" style={{ color: "#7A6B54" }}>
                  {formatDate(post.publishedAt)}
                </span>
                <span className="font-mono text-[11px]" style={{ color: "#7A6B54" }}>
                  · {estimateReadingMinutes(post)} min read
                </span>
              </div>

              <h2
                style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)", lineHeight: 0.92, letterSpacing: "-0.035em", color: "#1A1208" }}
              >
                {post.title}
              </h2>

              <p
                className="font-sans font-light leading-relaxed flex-1"
                style={{ fontSize: "14px", color: "#7A6B54" }}
              >
                {post.excerpt}
              </p>

              <div
                className="font-mono text-[11px] uppercase tracking-[0.2em] mt-2 transition-colors duration-200 group-hover:text-[#1A4731]"
                style={{ color: "#7A6B54" }}
              >
                Read article →
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="font-sans text-sm" style={{ color: "#7A6B54" }}>
          No posts in this category yet.
        </p>
      )}
    </section>
  );
}
