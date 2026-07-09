import type { GalleryItem } from "@/types/gallery";

/**
 * Generado por scripts/build-gallery-data.mjs a partir de las fotos
 * reales en public/img/ — width/height son las dimensiones reales de
 * cada archivo (necesarias para que el masonry y el lightbox reserven el
 * espacio correcto). El "alt" es un punto de partida sacado del nombre
 * de archivo — conviene revisarlo y escribir algo más descriptivo.
 *
 * Si agregás o sacás fotos de public/img/, volvé a correr:
 *   node scripts/build-gallery-data.mjs
 */
export const SAMPLE_GALLERY_ITEMS: GalleryItem[] = [
  { id: "g01", src: "/img/PHOTO-1.jpg", alt: "PHOTO 1", width: 1600, height: 900 },
  { id: "g02", src: "/img/PHOTO-10.jpg", alt: "PHOTO 10", width: 900, height: 1600 },
  { id: "g03", src: "/img/PHOTO-11.jpg", alt: "PHOTO 11", width: 900, height: 1600 },
  { id: "g04", src: "/img/PHOTO-12.jpg", alt: "PHOTO 12", width: 900, height: 1600 },
  { id: "g05", src: "/img/PHOTO-13.jpg", alt: "PHOTO 13", width: 900, height: 1600 },
  { id: "g06", src: "/img/PHOTO-14.jpg", alt: "PHOTO 14", width: 900, height: 1600 },
  { id: "g07", src: "/img/PHOTO-15.jpg", alt: "PHOTO 15", width: 900, height: 1600 },
  { id: "g08", src: "/img/PHOTO-16.jpg", alt: "PHOTO 16", width: 960, height: 1280 },
  { id: "g09", src: "/img/PHOTO-17.jpg", alt: "PHOTO 17", width: 1280, height: 960 },
  { id: "g10", src: "/img/PHOTO-18.jpg", alt: "PHOTO 18", width: 900, height: 1600 },
  { id: "g11", src: "/img/PHOTO-19.jpg", alt: "PHOTO 19", width: 900, height: 1600 },
  { id: "g12", src: "/img/PHOTO-2.jpg", alt: "PHOTO 2", width: 900, height: 1600 },
  { id: "g13", src: "/img/PHOTO-20.jpg", alt: "PHOTO 20", width: 900, height: 1600 },
  { id: "g14", src: "/img/PHOTO-3.jpg", alt: "PHOTO 3", width: 1200, height: 1600 },
  { id: "g15", src: "/img/PHOTO-4.jpg", alt: "PHOTO 4", width: 900, height: 1600 },
  { id: "g16", src: "/img/PHOTO-5.jpg", alt: "PHOTO 5", width: 900, height: 1600 },
  { id: "g17", src: "/img/PHOTO-6.jpg", alt: "PHOTO 6", width: 900, height: 1600 },
  { id: "g18", src: "/img/PHOTO-7.jpg", alt: "PHOTO 7", width: 900, height: 1600 },
  { id: "g19", src: "/img/PHOTO-8.jpg", alt: "PHOTO 8", width: 900, height: 1600 },
  { id: "g20", src: "/img/PHOTO-9.jpg", alt: "PHOTO 9", width: 900, height: 1600 },
];
