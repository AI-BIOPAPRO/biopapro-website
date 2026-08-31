import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Biopapro — Wooden Cutlery Manufacturer in India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#F6F1E8",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#6B5D50",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Biopapro · Est. 2019 · Mumbai, India
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, color: "#2C241B" }}>
            FSC-certified birchwood cutlery,
          </div>
          <div style={{ fontSize: 76, lineHeight: 1.05, color: "#8C6239" }}>
            manufactured at scale.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 40,
            fontSize: 26,
            color: "#4A3D32",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <span style={{ display: "flex" }}>100M+ units / month</span>
          <span style={{ display: "flex" }}>18+ export markets</span>
          <span style={{ display: "flex" }}>biopapro.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
