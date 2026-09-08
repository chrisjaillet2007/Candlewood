import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Candlewood Interiors — The journey to comfort starts at Candlewood.";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#1f2e36",
          padding: "80px",
          color: "#faf6ef",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "rgba(250,246,239,0.6)",
            marginBottom: 28,
            display: "flex",
          }}
        >
          Candlewood Interiors
        </div>
        <div style={{ fontSize: 66, lineHeight: 1.15, maxWidth: 900, display: "flex" }}>
          The journey to comfort starts at Candlewood.
        </div>
        <div
          style={{
            fontSize: 22,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "rgba(250,246,239,0.5)",
            marginTop: 40,
            display: "flex",
          }}
        >
          Eastern Massachusetts
        </div>
      </div>
    ),
    { ...size }
  );
}
