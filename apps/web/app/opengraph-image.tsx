import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { site } from "@/lib/data/site"

export const alt = "Marcesh Foundation. Building Communities. Creating Opportunity."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/assets/logo/marcesh-logo.jpeg")
  )
  const logo = `data:image/jpeg;base64,${logoData.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #16283f 0%, #1e3a2f 100%)",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <img
            src={logo}
            width={104}
            height={104}
            style={{ borderRadius: 999, objectFit: "cover" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 34,
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: 2,
              }}
            >
              MARCESH
            </span>
            <span
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "#e8943a",
                letterSpacing: 8,
              }}
            >
              FOUNDATION
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "#e8943a",
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            {site.tagline}
          </span>
          <span
            style={{
              fontSize: 58,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.15,
              maxWidth: 900,
            }}
          >
            Creating a Healthier, More Educated and Prosperous Society.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.18)",
            paddingTop: 28,
          }}
        >
          <span style={{ fontSize: 22, color: "rgba(255,255,255,0.72)" }}>
            {site.location}
          </span>
          <span style={{ fontSize: 22, color: "rgba(255,255,255,0.72)" }}>
            {site.email}
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
