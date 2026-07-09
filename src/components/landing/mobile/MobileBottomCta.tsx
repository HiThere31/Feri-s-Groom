import { Button } from "@/components/ui/Button";
import { sectionHref } from "@/lib/sections";
import "@/styles/components/landing/mobile/mobile-bottom-cta.css";

interface MobileBottomCtaProps {
  className?: string;
}

export function MobileBottomCta({ className }: MobileBottomCtaProps) {
  return (
    <div
      className={`mobile-bottom-cta fixed inset-x-0 bottom-0 z-30 px-4 pb-4 pt-3 ${
        className ?? ""
      }`}
    >
      <Button href={sectionHref("contact")} className="w-full">
        Hablemos
      </Button>
    </div>
  );
}
