import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";
import { SITE_CONFIG } from "@/lib/site-config";

export const alt = SITE_CONFIG.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const iconBuffer = await readFile(
    join(process.cwd(), "public", "brand", "FERIS-GROOM-NOTEXT.png")
  );
  const iconSrc = `data:image/png;base64,${iconBuffer.toString("base64")}`;

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
          background: SITE_CONFIG.backgroundColor,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -130,
            right: -130,
            width: 440,
            height: 440,
            borderRadius: "50%",
            background: "#FDEAF2",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -150,
            left: -150,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "#F7CADD",
            display: "flex",
          }}
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={iconSrc}
          width={180}
          height={177}
          style={{ marginBottom: 28 }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "#2B1A22",
          }}
        >
          Feri&apos;s Groom
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#6b5660",
            marginTop: 16,
          }}
        >
          Grooming profesional para tu mascota
        </div>
      </div>
    ),
    { width: size.width, height: size.height }
  );
}
