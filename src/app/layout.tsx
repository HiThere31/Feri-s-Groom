import type { ReactNode } from "react";
import { Fredoka, Nunito_Sans } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import "@/styles/globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["400", "500", "600"],
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

export const metadata = buildMetadata();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${fredoka.variable} ${nunitoSans.variable}`}>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
