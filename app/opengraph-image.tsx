import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site-config";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.12), transparent 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 10,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 26,
              height: 46,
              borderRadius: 8,
              backgroundImage: "linear-gradient(135deg, #8B5CF6, #3B82F6)",
            }}
          />
          <div
            style={{
              width: 26,
              height: 76,
              borderRadius: 8,
              backgroundImage: "linear-gradient(135deg, #8B5CF6, #3B82F6)",
            }}
          />
          <div
            style={{
              width: 26,
              height: 106,
              borderRadius: 8,
              backgroundImage: "linear-gradient(135deg, #8B5CF6, #3B82F6)",
            }}
          />
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 600,
            color: "#fafafa",
            letterSpacing: "-0.03em",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 32,
            color: "#a1a1aa",
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
