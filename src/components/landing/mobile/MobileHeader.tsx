"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { SECTION_IDS } from "@/lib/sections";
import "@/styles/components/landing/mobile/mobile-header.css";

interface MobileHeaderProps {
  className?: string;
}

const ROSA_SECTION_IDS: string[] = [
  SECTION_IDS.about,
  SECTION_IDS.testimonials,
];

const SECTION_ID_LIST = Object.values(SECTION_IDS);

export function MobileHeader({ className }: MobileHeaderProps) {
  const activeId = useActiveSection(SECTION_ID_LIST);
  const isRosa = activeId !== null && ROSA_SECTION_IDS.includes(activeId);

  return (
    <header
      className={`mobile-header ${
        isRosa ? "mobile-header--rosa" : ""
      } sticky top-0 z-40 flex items-center px-4 py-3 ${className ?? ""}`}
    >
      <span className="mobile-header__brand">Feri&apos;s Groom</span>
    </header>
  );
}
