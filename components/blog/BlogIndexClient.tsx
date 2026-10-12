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
            background: activeCategory === null ? "#4A7A3D" : "#EDE7DC",
            color: activeCategory === null ? "#F6F1E8" : "#4A7A3D",
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
                background: active ? "#4A7A3D" : "#EDE7DC",
                color: active ? "#F6F1E8" : "#4A7A3D",
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
            style={{ border: "1px solid #DDD3C5", background: "#FDFAF5" }}
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
                  style={{ background: "#EDE7DC", color: "#4A7A3D" }}
                >
                  {CATEGORY_LABELS[post.category] ?? post.category}
                </span>
                <span className="font-mono text-[11px]" style={{ color: "#B8A898" }}>
                  {formatDate(post.publishedAt)}
                </span>
                <span className="font-mono text-[11px]" style={{ color: "#B8A898" }}>
                  · {estimateReadingMinutes(post)} min read
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

      {filtered.length === 0 && (
        <p className="font-sans text-sm" style={{ color: "#B8A898" }}>
          No posts in this category yet.
        </p>
      )}
    </section>
  );
}
