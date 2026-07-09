import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fredoka, Nunito_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Feri's Groom — Grooming profesional para tu mascota",
  description:
    "Baño, corte y spa para perros y gatos. Mirá nuestros trabajos y agendá tu cita.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${fredoka.variable} ${nunitoSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
