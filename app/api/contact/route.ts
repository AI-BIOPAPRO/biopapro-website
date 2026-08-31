import { NextResponse } from "next/server";

/**
 * Contact / export-inquiry endpoint.
 *
 * Delivery is handled by Resend's REST API (no SDK dependency). To enable it, set:
 *   RESEND_API_KEY     — https://resend.com/api-keys
 *   CONTACT_TO_EMAIL   — inbox that should receive inquiries (defaults to export@biopapro.com)
 *   CONTACT_FROM_EMAIL — a verified Resend sender (e.g. "Biopapro Website <website@biopapro.com>")
 *
 * When RESEND_API_KEY is absent the route responds 503 with { error: "email_not_configured" }
 * so the client can fall back to a mailto: link.
 */

export const runtime = "nodejs";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "export@biopapro.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Biopapro Website <onboarding@resend.dev>";

const MAX = { name: 120, company: 160, email: 160, phone: 40, short: 80, message: 4000, list: 2000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string),
  );
}

export async function POST(request: Request) {
  // Reject oversized payloads before parsing
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 20_000) {
    return NextResponse.json({ error: "payload_too_large" }, { status: 413 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot — real users never fill this hidden field
  if (clean(payload.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const data = {
    fullName: clean(payload.fullName, MAX.name),
    company: clean(payload.company, MAX.company),
    country: clean(payload.country, MAX.short),
    email: clean(payload.email, MAX.email),
    phone: clean(payload.phone, MAX.phone),
    products: clean(payload.products, MAX.list),
    volume: clean(payload.volume, MAX.short),
    region: clean(payload.region, MAX.short),
    timeline: clean(payload.timeline, MAX.short),
    procurement: clean(payload.procurement, MAX.list),
    message: clean(payload.message, MAX.message),
    source: clean(payload.source, MAX.short) || "website",
  };

  if (!data.fullName || !data.company || !EMAIL_RE.test(data.email)) {
    return NextResponse.json({ error: "validation_failed" }, { status: 422 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "email_not_configured" }, { status: 503 });
  }

  const rows: [string, string][] = [
    ["Name", data.fullName],
    ["Company", data.company],
    ["Country", data.country],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Products", data.products],
    ["Annual volume", data.volume],
    ["Delivery region", data.region],
    ["Timeline", data.timeline],
    ["Procurement options", data.procurement],
    ["Source", data.source],
  ];

  const html = `
    <h2>New export inquiry</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows
        .filter(([, v]) => v)
        .map(
          ([k, v]) =>
            `<tr><td style="font-weight:600;vertical-align:top">${k}</td><td>${escapeHtml(v)}</td></tr>`,
        )
        .join("")}
    </table>
    ${data.message ? `<h3>Message</h3><p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>` : ""}
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: data.email,
        subject: `Export inquiry — ${data.company} (${data.country || "—"})`,
        html,
      }),
    });

    if (!res.ok) {
      console.error("Resend error", res.status, await res.text().catch(() => ""));
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("Contact route error", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
