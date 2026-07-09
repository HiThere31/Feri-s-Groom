import { readdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import { imageSize } from "image-size";

const IMG_DIR = path.join(process.cwd(), "public", "img");
const OUTPUT_FILE = path.join(
  process.cwd(),
  "src",
  "data",
  "gallery-sample.ts"
);

const VALID_EXTENSIONS = /\.(jpe?g|png|webp)$/i;

const files = readdirSync(IMG_DIR)
  .filter((file) => VALID_EXTENSIONS.test(file))
  .sort();

if (files.length === 0) {
  console.error(
    `No se encontraron imágenes (.jpg/.jpeg/.png/.webp) en ${IMG_DIR}. ` +
      "Si tus fotos son .HEIC (típico de iPhone), convertilas primero."
  );
  process.exit(1);
}

const items = files.map((file, index) => {
  const buffer = readFileSync(path.join(IMG_DIR, file));
  const { width, height } = imageSize(buffer);
  const id = `g${String(index + 1).padStart(2, "0")}`;
  const alt = file.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ");

  return { id, src: `/img/${file}`, alt, width, height };
});

const lines = items.map(
  (item) =>
    `  { id: "${item.id}", src: "${item.src}", alt: "${item.alt}", width: ${item.width}, height: ${item.height} },`
);

const fileContent = `import type { GalleryItem } from "@/types/gallery";

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
${lines.join("\n")}
];
`;

writeFileSync(OUTPUT_FILE, fileContent);
console.log(`Listo — ${items.length} fotos escritas en ${OUTPUT_FILE}`);
