"use client";

import Image from "next/image";
import { useActiveSection } from "@/hooks/useActiveSection";
import { SECTION_IDS } from "@/lib/sections";
import "@/styles/components/landing/mobile/mobile-header.css";

interface MobileHeaderProps {
  className?: string;
}

// Secciones que usan el tema rosa en el header — el resto usa crema/tinta.
const ROSA_SECTION_IDS: string[] = [
  SECTION_IDS.about,
  SECTION_IDS.testimonials,
];

const SECTION_ID_LIST = Object.values(SECTION_IDS);

const ICON_SRC = "/brand/FERIS-GROOM-NOTEXT.png";
// Proporción real del archivo recortado: 2341x2298 (≈1:1).
const ICON_WIDTH = 36;
const ICON_HEIGHT = 35;

export function MobileHeader({ className }: MobileHeaderProps) {
  const activeId = useActiveSection(SECTION_ID_LIST);
  const isRosa = activeId !== null && ROSA_SECTION_IDS.includes(activeId);

  return (
    <header
      className={`mobile-header ${
        isRosa ? "mobile-header--rosa" : ""
      } sticky top-0 z-40 flex items-center justify-center px-4 py-3 ${
        className ?? ""
      }`}
    >
      <span className="mobile-header__brand">
        {isRosa ? (
          <span
            aria-hidden="true"
            className="mobile-header__brand-icon mobile-header__brand-icon--mask"
            style={{
              width: ICON_WIDTH,
              height: ICON_HEIGHT,
              WebkitMaskImage: `url(${ICON_SRC})`,
              maskImage: `url(${ICON_SRC})`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />
        ) : (
          <Image
            src={ICON_SRC}
            alt=""
            width={ICON_WIDTH}
            height={ICON_HEIGHT}
            className="mobile-header__brand-icon"
          />
        )}
        Feri&apos;s Groom
      </span>
    </header>
  );
}
