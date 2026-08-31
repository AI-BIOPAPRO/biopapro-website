import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getPostBySlug, getAllPosts, CATEGORY_LABELS } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/client";
import { ArrowLeft } from "lucide-react";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug.current }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Biopapro Blog`,
    description: post.excerpt,
  };
}

function formatDate(dateStr?: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-IN", {
    day: "numeric", month: "long", year: "numeric",
  });
}

const ptComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="font-sans font-light leading-relaxed mb-5" style={{ fontSize: "clamp(1rem, 1.1vw, 1.05rem)", color: "#3A2E22" }}>
        {children}
      </p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="font-display font-light leading-snug mt-10 mb-4" style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)", color: "#2A2118" }}>
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-sans font-semibold mt-8 mb-3" style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)", color: "#2A2118" }}>
        {children}
      </h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote
        className="pl-5 my-6 font-sans font-light italic leading-relaxed"
        style={{ borderLeft: "3px solid #4A7A3D", color: "#6A5A48", fontSize: "1.05rem" }}
      >
        {children}
      </blockquote>
    ),
  },
  types: {
    image: ({ value }: { value: { asset: { _ref: string }; alt?: string } }) => (
      <div className="my-8 relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <Image
          src={urlFor(value).width(1200).height(675).url()}
          alt={value.alt ?? ""}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
    ),
  },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const categoryLabel = CATEGORY_LABELS[post.category] ?? post.category;

  return (
    <main style={{ background: "#F6F1E8", minHeight: "100vh" }}>
      {/* Back nav */}
      <div className="max-w-[800px] mx-auto px-6 md:px-12 pt-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.22em] transition-colors duration-200 hover:text-[#4A7A3D]"
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
            className="font-mono text-[8px] uppercase tracking-[0.22em] px-2.5 py-1"
            style={{ background: "#EDE7DC", color: "#4A7A3D" }}
          >
            {categoryLabel}
          </span>
          <span className="font-mono text-[9px]" style={{ color: "#B8A898" }}>
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

        <div className="flex items-center gap-2 pb-8" style={{ borderBottom: "1px solid #DDD3C5" }}>
          <span className="font-mono text-[9px] uppercase tracking-[0.14em]" style={{ color: "#B8A898" }}>
            By {post.author ?? "Biopapro Team"}
          </span>
        </div>
      </header>

      {/* Cover image */}
      {post.coverImage && (
        <div className="max-w-[800px] mx-auto px-6 md:px-12 mb-10">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image
              src={urlFor(post.coverImage).width(1200).height(675).url()}
              alt={post.coverImage.alt || post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
        </div>
      )}

      {/* Article body */}
      <article className="max-w-[800px] mx-auto px-6 md:px-12 pb-20">
        {post.body && (
          <PortableText value={post.body as Parameters<typeof PortableText>[0]["value"]} components={ptComponents} />
        )}
      </article>

      {/* Footer CTA */}
      <div style={{ background: "#2D5228" }}>
        <div className="max-w-[800px] mx-auto px-6 md:px-12 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.24em] mb-1" style={{ color: "rgba(168,198,134,0.65)" }}>
              Interested in our products?
            </p>
            <p className="font-sans font-light text-sm" style={{ color: "rgba(200,230,185,0.7)" }}>
              Get in touch with our team for samples and pricing.
            </p>
          </div>
          <Link
            href="/contact"
            className="font-mono text-[9px] uppercase tracking-[0.2em] px-6 py-3 flex-shrink-0 transition-colors duration-200"
            style={{ background: "#F6F1E8", color: "#2D5228" }}
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </main>
  );
}
