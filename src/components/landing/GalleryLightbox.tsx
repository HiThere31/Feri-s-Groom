"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { Skeleton } from "@/components/ui/Skeleton";
import { useSwipeHint } from "@/hooks/useSwipeHint";
import type { SwipeDirection } from "@/hooks/useGalleryLightbox";
import { lightboxBackdropVariants, lightboxImageVariants } from "@/lib/motion";
import type { GalleryItem as GalleryItemType } from "@/types/gallery";
import "@/styles/components/landing/gallery-lightbox.css";

interface GalleryLightboxProps {
  items: GalleryItemType[];
  activeIndex: number | null;
  direction: SwipeDirection;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const SWIPE_OFFSET_THRESHOLD = 60; // px arrastrados
const SWIPE_VELOCITY_THRESHOLD = 500; // px/s

export function GalleryLightbox({
  items,
  activeIndex,
  direction,
  onClose,
  onNext,
  onPrev,
}: GalleryLightboxProps) {
  const isOpen = activeIndex !== null;
  const activeItem = activeIndex !== null ? items[activeIndex] : null;
  const { showHint, dismiss } = useSwipeHint(isOpen);

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setIsImageLoaded(Boolean(imgRef.current?.complete));
  }, [activeItem?.id]);

  function handleDragEnd(_event: unknown, info: PanInfo) {
    dismiss();
    const { offset, velocity } = info;

    if (
      offset.x < -SWIPE_OFFSET_THRESHOLD ||
      velocity.x < -SWIPE_VELOCITY_THRESHOLD
    ) {
      onNext();
    } else if (
      offset.x > SWIPE_OFFSET_THRESHOLD ||
      velocity.x > SWIPE_VELOCITY_THRESHOLD
    ) {
      onPrev();
    }
  }

  return (
    <AnimatePresence>
      {isOpen && activeItem && (
        <motion.div
          className="gallery-lightbox"
          variants={lightboxBackdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <button
            type="button"
            className="gallery-lightbox__close"
            onClick={onClose}
            aria-label="Cerrar"
          >
            ✕
          </button>

          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--prev hidden md:flex"
            onClick={(event) => {
              event.stopPropagation();
              onPrev();
            }}
            aria-label="Imagen anterior"
          >
            ‹
          </button>
          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--next hidden md:flex"
            onClick={(event) => {
              event.stopPropagation();
              onNext();
            }}
            aria-label="Imagen siguiente"
          >
            ›
          </button>

          <div
            className="gallery-lightbox__stage"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="gallery-lightbox__frame">
              <AnimatePresence>
                {!isImageLoaded && (
                  <motion.div
                    key="skeleton"
                    className="gallery-lightbox__skeleton-wrap"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Skeleton className="gallery-lightbox__skeleton" />
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.img
                  ref={imgRef}
                  key={activeItem.id}
                  src={activeItem.src}
                  alt={activeItem.alt}
                  width={activeItem.width ?? 600}
                  height={activeItem.height ?? 800}
                  custom={direction}
                  variants={lightboxImageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.6}
                  onDragEnd={handleDragEnd}
                  onLoad={() => setIsImageLoaded(true)}
                  className="gallery-lightbox__image"
                />
              </AnimatePresence>
            </div>

            <AnimatePresence>
              {showHint && (
                <motion.div
                  className="gallery-lightbox__hint md:hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <span
                    className="gallery-lightbox__hint-icon"
                    aria-hidden="true"
                  >
                    ↔
                  </span>
                  Desliza para ver más
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
