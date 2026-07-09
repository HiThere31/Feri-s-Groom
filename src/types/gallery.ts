export const GALLERY_CATEGORIES = [
  "baño",
  "corte",
  "spa",
  "cachorros",
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category?: GalleryCategory;
  width?: number;
  height?: number;
}
