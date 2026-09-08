"use client";

import { useEffect } from "react";

// Catches errors thrown in the root layout itself. Must render <html>/<body>.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F6F1E8",
          color: "#2C241B",
          fontFamily: "Inter, system-ui, sans-serif",
          padding: "24px",
        }}
      >
        <div style={{ maxWidth: 420, textAlign: "center" }}>
          <h1 style={{ fontWeight: 300, fontSize: "2rem", marginBottom: "1rem" }}>
            Something went wrong
          </h1>
          <p style={{ color: "#4A3D32", lineHeight: 1.6, marginBottom: "1.5rem" }}>
            The page failed to load. Please refresh to try again.
          </p>
          <button
            onClick={reset}
            style={{
              padding: "12px 20px",
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "#fff",
              background: "#4A7A3D",
              border: "none",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
