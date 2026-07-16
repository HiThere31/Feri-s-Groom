export const BUSINESS_INFO = {
  whatsappDisplay: "+506 6070 6087",
  whatsappDigits: "50660706087",
  instagramHandle: "feris.groom",
  email: "luisavela04@gmail.com",

  address: {
    addressLocality: "Villas de Ayarco",
    addressRegion: "San José",
    addressCountry: "CR",
  } as null | {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  },
  openingHours: ["Mo-Sa 10:00-19:00"] as null | string[],
} as const;
