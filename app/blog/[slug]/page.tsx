import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { POSTS, CATEGORY_LABELS, getPostBySlug } from "@/lib/blog-data";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} — Biopapro Blog`,
      description: post.excerpt,
      type: "article",
      url: `/blog/${post.slug}`,
    },
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric", month: "long", year: "numeric",
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main style={{ background: "#F6F1E8", minHeight: "100vh" }}>
      {/* Back nav */}
      <div className="max-w-[800px] mx-auto px-6 md:px-12 pt-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] transition-colors duration-200 hover:text-[#4A7A3D]"
          style={{ color: "#B8A898" }}
        >
          <ArrowLeft size={11} />
          All articles
        </Link>
      </div>

      {/* Article header */}
      <header className="max-w-[800px] mx-auto px-6 md:px-12 pt-10 pb-8">
        <div className="flex items-center gap-3 mb-6">
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

        <h1
          className="font-display font-light leading-[0.95] mb-6"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#2A2118" }}
        >
          {post.title}
        </h1>

        <p
          className="font-sans font-light leading-relaxed mb-6"
          style={{ fontSize: "clamp(1rem, 1.2vw, 1.1rem)", color: "#7A6A58" }}
        >
          {post.excerpt}
        </p>

        <div className="pb-8" style={{ borderBottom: "1px solid #DDD3C5" }}>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: "#B8A898" }}>
            By {post.author}
          </span>
        </div>
      </header>

      {/* Article body */}
      <article className="max-w-[800px] mx-auto px-6 md:px-12 pb-20">
        {post.body.map((block, i) => (
          <div key={i}>
            {block.heading && (
              <h2
                className="font-display font-light leading-snug mt-10 mb-4"
                style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)", color: "#2A2118" }}
              >
                {block.heading}
              </h2>
            )}
            <p
              className="font-sans font-light leading-relaxed mb-5"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.05rem)", color: "#3A2E22" }}
            >
              {block.text}
            </p>
          </div>
        ))}
      </article>

      {/* Footer CTA */}
      <div style={{ background: "#2D5228" }}>
        <div className="max-w-[800px] mx-auto px-6 md:px-12 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] mb-1" style={{ color: "rgba(168,198,134,0.65)" }}>
              Interested in our products?
            </p>
            <p className="font-sans font-light text-sm" style={{ color: "rgba(200,230,185,0.7)" }}>
              Get in touch with our team for samples and pricing.
            </p>
          </div>
          <Link
            href="/contact"
            className="font-mono text-[11px] uppercase tracking-[0.2em] px-6 py-3 flex-shrink-0 transition-colors duration-200"
            style={{ background: "#F6F1E8", color: "#2D5228" }}
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </main>
  );
}
