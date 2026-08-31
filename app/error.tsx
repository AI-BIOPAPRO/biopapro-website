"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surfaced in the browser console and (in production) the server logs.
    console.error("Route error", error);
  }, [error]);

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-birch">
      <div className="max-w-md text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-muted mb-5">
          Something went wrong
        </p>
        <h1
          className="font-display font-light text-ink leading-[1.05] mb-5"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          We hit an unexpected error.
        </h1>
        <p className="font-sans font-light text-ink-light leading-relaxed mb-8">
          This has been logged. Try again in a moment, or head back to the homepage.
          {error.digest && (
            <>
              <br />
              <span className="font-mono text-[11px] text-ink-muted">
                Reference: {error.digest}
              </span>
            </>
          )}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={reset}
            className="px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white"
            style={{ background: "#4A7A3D" }}
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-ink border border-border"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
