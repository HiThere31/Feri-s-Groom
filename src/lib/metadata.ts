import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-config";

interface PageMetaInput {
  title?: string;

  description?: string;

  path?: string;
}

export function buildMetadata({
  title = SITE_CONFIG.title,
  description = SITE_CONFIG.description,
  path = "",
}: PageMetaInput = {}): Metadata {
  const canonical = `${SITE_CONFIG.url}${path}`;

  return {
    title,
    description,
    keywords: [...SITE_CONFIG.keywords],
    metadataBase: new URL(SITE_CONFIG.url),

    alternates: {
      canonical,
    },

    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },

    icons: {
      icon: [
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
