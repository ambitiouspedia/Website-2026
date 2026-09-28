import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Site-wide social share image (used by every page that doesn't define its own).
export const alt = "Ambitious Pedia Tech and Services — Business Technology, Automation, AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const mark = await readFile(join(process.cwd(), "public/images/logo-mark.png"));
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 88px",
          background: "radial-gradient(circle at 85% 20%, #3a2600 0%, #0c0e12 55%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={markSrc} width={220} height={338} alt="" />
        <div style={{ display: "flex", flexDirection: "column", width: 760 }}>
          <div style={{ fontSize: 24, fontWeight: 700, color: "#f5ab01", letterSpacing: 3 }}>
            AMBITIOUS PEDIA TECH AND SERVICES
          </div>
          <div style={{ marginTop: 24, fontSize: 54, fontWeight: 800, lineHeight: 1.15 }}>
            Technology that simplifies operations and automates repetitive work.
          </div>
          <div style={{ marginTop: 28, fontSize: 26, color: "#a6abb5", lineHeight: 1.4 }}>
            ERP & CRM · AI Automation · Custom Software · Integrations
          </div>
        </div>
      </div>
    ),
    size
  );
}
