"use client";

import { useState, useEffect } from "react";

export function useImageLoaded(resetKey?: string) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [resetKey]);

  function handleLoad() {
    setIsLoaded(true);
  }

  return { isLoaded, handleLoad };
}
