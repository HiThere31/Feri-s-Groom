"use client";
import "@/styles/components/landing/gallery.css";
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import type { GalleryItem as GalleryItemType } from "@/types/gallery";
import { Reveal } from "@/components/ui/Reveal";

interface GalleryItemProps {
  item: GalleryItemType;
  onOpen: () => void;
}

export function GalleryItem({ item, onOpen }: GalleryItemProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="gallery-item mb-4 block w-full break-inside-avoid"
      aria-label={`Ver imagen ampliada: ${item.alt}`}
    >
      <ImageWithSkeleton
        src={item.src}
        alt={item.alt}
        width={item.width ?? 600}
        height={item.height ?? 800}
        sizes="(max-width: 640px) 50vw, 33vw, "
        className="gallery-item__image w-full h-auto"
      />
    </button>
  );
}
