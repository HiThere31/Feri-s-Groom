"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { GalleryItem } from "@/components/landing/GalleryItem";
import { GalleryLightbox } from "@/components/landing/GalleryLightbox";
import { Reveal } from "@/components/ui/Reveal";
import { useGalleryLightbox } from "@/hooks/useGalleryLightbox";
import { useGalleryVisibleItems } from "@/hooks/useGalleryVisibleItems";
import { SECTION_IDS } from "@/lib/sections";
import type { GalleryItem as GalleryItemType } from "@/types/gallery";
import "@/styles/components/landing/gallery.css";

interface GalleryProps {
  items: GalleryItemType[];
  className?: string;

  initialVisibleCount?: number;

  incrementCount?: number;
}

export function Gallery({
  items,
  className,
  initialVisibleCount = 12,
  incrementCount = 8,
}: GalleryProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const { visibleCount, hasMore, canPaginate, toggle } = useGalleryVisibleItems(
    {
      totalCount: items.length,
      initialCount: initialVisibleCount,
      incrementCount,
    }
  );

  const visibleItems = items.slice(0, visibleCount);
  const lightbox = useGalleryLightbox(visibleItems.length);

  function handleToggle() {
    const wasShowingMore = !hasMore;
    toggle();
    if (wasShowingMore) {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <section
      ref={sectionRef}
      id={SECTION_IDS.gallery}
      className={`gallery ${className ?? ""}`}
    >
      <div className="gallery__wrap">
        {/* Header desktop: eyebrow + heading + leyenda */}
        <div className="hidden md:block mb-9">
          <span className="gallery__eyebrow">Portafolio</span>
          <h2 className="gallery__heading">El trabajo habla solo</h2>
          <p className="gallery__lead">
            Baños, cortes y colas felices. Una muestra del día a día en la mesa
            de grooming.
          </p>
        </div>

        {/* Header mobile: mismo patrón eyebrow+heading+subtitle que desktop
            (centrado), más el contador "X trabajos con amor" que es
            exclusivo de mobile */}
        <div className="md:hidden mb-6 text-center">
          <span className="gallery__eyebrow">Portafolio</span>
          <h2 className="gallery__heading gallery__heading--mobile">
            El trabajo habla solo
          </h2>
          <p className="gallery__lead gallery__lead--center">
            Baños, cortes y colas felices. Una muestra del día a día en la mesa
            de grooming.
          </p>
          <span className="gallery__count">
            {items.length} trabajos con amor
          </span>
        </div>

        <div className="gallery__grid columns-2 sm:columns-3 gap-4">
          {visibleItems.map((item, index) => (
            <Reveal
              key={item.id}
              delay={(index % 6) * 0.05}
              className="mb-4 w-full break-inside-avoid"
            >
              <GalleryItem item={item} onOpen={() => lightbox.open(index)} />
            </Reveal>
          ))}
        </div>

        {canPaginate && (
          <div className="flex justify-center mt-8">
            <Button onClick={handleToggle}>
              {hasMore ? "Mostrar más" : "Mostrar menos"}
            </Button>
          </div>
        )}
      </div>

      <GalleryLightbox
        items={visibleItems}
        activeIndex={lightbox.activeIndex}
        direction={lightbox.direction}
        onClose={lightbox.close}
        onNext={lightbox.next}
        onPrev={lightbox.prev}
      />
    </section>
  );
}
