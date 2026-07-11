export const SITE_CONFIG = {
  name: "Feri's Groom",
  /** Título completo — se usa como default y en Open Graph/Twitter */
  title: "Feri's Groom — Grooming profesional para tu mascota",
  /** Template para títulos de páginas internas futuras: "Galería | Feri's Groom" */
  titleTemplate: "%s | Feri's Groom",
  description:
    "Baño, corte y spa profesional para perros y gatos. Groomer con más de 5 años de experiencia cuidando mascotas con paciencia y mucho cariño. Agendá tu cita.",
  /** Sin barra final — url + path se concatenan directo */
  url: "https://ferisgroom.kodafy.tech",
  locale: "es_CR",
  keywords: [
    "grooming",
    "peluquería canina",
    "baño de perros",
    "estética canina",
    "spa para mascotas",
    "groomer",
    "Costa Rica",
  ],
  /** Usado en opengraph-image.tsx para mantener consistencia de marca */
  themeColor: "#F472A8", // --color-rosa
  backgroundColor: "#FFF8F3", // --color-crema
} as const;
