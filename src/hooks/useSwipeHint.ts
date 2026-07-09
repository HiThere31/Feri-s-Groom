"use client";

import { s } from "framer-motion/client";
import { useState, useEffect } from "react";

const STORAGE_KEY = "feris-groom:gallery-swipe-hint-seen";
const HINT_DURATION_MS = 2500;

export function useSwipeHint(isActive: boolean) {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    let alredySeen = false;
    try {
      alredySeen = localStorage.getItem(STORAGE_KEY) === "true";
    } catch {}

    if (alredySeen) return;

    setShowHint(true);
    const timeout = setTimeout(() => setShowHint(false), HINT_DURATION_MS);

    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {}

    return () => clearTimeout(timeout);
  }, [isActive]);

  const dismiss = () => setShowHint(false);

  return { showHint, dismiss };
}
