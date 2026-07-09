import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CTA_LABEL, NAV_LINKS, sectionHref } from "@/lib/sections";
import "@/styles/components/landing/navbar.css";

interface NavbarProps {
  className?: string;
}

/**
 * Navbar de desktop: ícono + marca + links + CTA "Hablemos" a #contacto.
 * Nunca abre un menú (fuera de alcance, ver ARCHITECTURE.md §0).
 *
 * El ícono (public/brand/FERIS-GROOM-NOTEXT.png) es la versión SIN texto
 * del logo, recortada limpia — a diferencia del logo completo (que no
 * entra bien acá, ver Logo.tsx), este sí cabe en una franja angosta.
 * Usa `fill` + contenedor de tamaño fijo (`.navbar__brand-icon`) en vez
 * de width/height hardcodeados, porque no conocemos la proporción real
 * del archivo de antemano.
 *
 * Server Component — no tiene estado ni efectos propios, solo compone
 * Button (que sí es cliente internamente).
 *
 * `<header>` (raíz) es full-width para el fondo/borde; `.navbar__wrap`
 * (hijo) capa el contenido a 1180px, igual que Hero/About/Gallery — para
 * que todo el sitio comparta el mismo margen respecto a los bordes de
 * pantalla en monitores grandes.
 *
 * El `display` (flex) lo controla el caller vía className (ej. "hidden
 * md:flex" desde app/page.tsx) sobre el `<header>` — el `flex
 * items-center justify-between` real que ordena marca/links/CTA vive en
 * `.navbar__wrap`, no en la raíz, así nunca compite con el toggle del caller.
 */
export function Navbar({ className }: NavbarProps) {
  return (
    <header className={`navbar ${className ?? ""}`}>
      <div className="navbar__wrap flex items-center justify-between">
        <span className="navbar__brand">
          <span className="navbar__brand-icon">
            <Image
              src="/brand/FERIS-GROOM-NOTEXT.png"
              alt=""
              fill
              sizes="158px"
              className="navbar__brand-icon-img"
            />
          </span>
          Feri&apos;s Groom
        </span>

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
