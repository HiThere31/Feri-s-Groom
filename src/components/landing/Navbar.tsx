import { Button } from "@/components/ui/Button";
import { CTA_LABEL, NAV_LINKS, sectionHref } from "@/lib/sections";
import "@/styles/components/landing/navbar.css";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <header className={`navbar ${className ?? ""}`}>
      <div className="navbar__wrap flex items-center justify-between">
        <span className="navbar__brand">Feri&apos;s Groom</span>

        <nav className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.section}
              href={sectionHref(link.section)}
              className="navbar__link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button href={sectionHref("contact")}>{CTA_LABEL}</Button>
      </div>
    </header>
  );
}
