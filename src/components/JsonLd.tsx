import { SITE_CONFIG } from "@/lib/site-config";
import { BUSINESS_INFO } from "@/lib/business-info";

export function JsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}/opengraph-image`,
    telephone: `+${BUSINESS_INFO.whatsappDigits}`,
    email: BUSINESS_INFO.email,
    sameAs: [`https://instagram.com/${BUSINESS_INFO.instagramHandle}`],
    priceRange: "$$",
  };

  if (BUSINESS_INFO.address) {
    data.address = {
      "@type": "PostalAddress",
      ...(BUSINESS_INFO.address.streetAddress && {
        streetAddress: BUSINESS_INFO.address.streetAddress,
      }),
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      ...(BUSINESS_INFO.address.postalCode && {
        postalCode: BUSINESS_INFO.address.postalCode,
      }),
      addressCountry: BUSINESS_INFO.address.addressCountry,
    };
  }

  if (BUSINESS_INFO.openingHours) {
    data.openingHours = BUSINESS_INFO.openingHours;
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
