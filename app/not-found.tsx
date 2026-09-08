import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-birch">
      <div className="max-w-md text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-muted mb-5">
          Error 404
        </p>
        <h1
          className="font-display font-light text-ink leading-[1.05] mb-5"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          This page doesn&rsquo;t exist.
        </h1>
        <p className="font-sans font-light text-ink-light leading-relaxed mb-8">
          The link may be outdated, or the page has moved. Everything else is a click away.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white"
            style={{ background: "#4A7A3D" }}
          >
            Back to home
          </Link>
          <Link
            href="/products"
            className="px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-ink border border-border"
          >
            Browse products
          </Link>
        </div>
      </div>
    </main>
  );
}
