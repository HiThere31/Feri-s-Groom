"use client";

import { useState, useCallback, useEffect } from "react";

export type SwipeDirection = 1 | -1;

export function useGalleryLightbox(itemsLenght: number) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<SwipeDirection>(1);

  const isOpen = activeIndex !== null;

  const open = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const close = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % itemsLenght
    );
  }, [itemsLenght]);

  const prev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + itemsLenght) % itemsLenght
    );
  }, [itemsLenght]);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [close, next, prev, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  return {
    activeIndex,
    direction,
    isOpen,
    open,
    close,
    next,
    prev,
  };
}
