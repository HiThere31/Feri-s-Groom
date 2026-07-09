export const SECTION_IDS = {
  about: "sobre",
  gallery: "galeria",
  testimonials: "referencias",
  contact: "contato",
} as const;

export type SectionKeys = keyof typeof SECTION_IDS;

export function sectionHref(section: SectionKeys): string {
  return `#${SECTION_IDS[section]}`;
}

export const NAV_LINKS: { label: string; section: SectionKeys }[] = [
  { label: "Sobre mi", section: "about" },
  { label: "Trabajos", section: "gallery" },
  { label: "Referencias", section: "testimonials" },
  { label: "Contacto", section: "contact" },
];

export const CTA_LABEL = "Hablemos";