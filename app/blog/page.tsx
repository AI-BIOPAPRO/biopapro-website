import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, CATEGORY_LABELS, type Post } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/client";

export const metadata: Metadata = {
  title: "Blog & News — Biopapro",
  description: "Industry news, sustainability updates, and product announcements from Biopapro — India's leading birchwood cutlery manufacturer.",
};

export const revalidate = 60;

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric", month: "long", year: "numeric",
  });
}

function PostCard({ post }: { post: Post }) {
  const categoryLabel = CATEGORY_LABELS[post.category] ?? post.category;

  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group flex flex-col"
      style={{ border: "1px solid #DDD3C5", background: "#FDFAF5" }}
    >
      {/* Cover image */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9", background: "#EDE7DC" }}>
        {post.coverImage ? (
          <Image
            src={urlFor(post.coverImage).width(800).height(450).url()}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "#B8A898" }}>
              Biopapro
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <div className="flex items-center gap-3">
          <span
            className="font-mono text-[8px] uppercase tracking-[0.22em] px-2.5 py-1"
            style={{ background: "#EDE7DC", color: "#4A7A3D" }}
          >
            {categoryLabel}
          </span>
          <span className="font-mono text-[9px]" style={{ color: "#B8A898" }}>
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
          className="font-mono text-[9px] uppercase tracking-[0.2em] mt-2 transition-colors duration-200 group-hover:text-[#4A7A3D]"
          style={{ color: "#B8A898" }}
        >
          Read article →
        </div>
      </div>
    </Link>
  );
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main style={{ background: "#F6F1E8", minHeight: "100vh" }}>
      {/* Header */}
      <section style={{ background: "#2D5228" }} className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono text-[9px] uppercase tracking-[0.32em] mb-6" style={{ color: "rgba(168,198,134,0.65)" }}>
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
            and news from India's leading birchwood cutlery manufacturer.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16">
        {posts.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] mb-3" style={{ color: "#B8A898" }}>
              No posts yet
            </p>
            <p className="font-sans font-light text-sm" style={{ color: "#B8A898" }}>
              Articles will appear here once published.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
