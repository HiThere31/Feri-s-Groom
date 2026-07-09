import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { sectionHref } from "@/lib/sections";
import "@/styles/components/landing/hero.css";

interface HeroProps {
  className?: string;
}

const HERO_PORTRAIT_SRC =
  "https://picsum.photos/seed/feris-groomer-portrait-dog/820/900";

export function Hero({ className }: HeroProps) {
  return (
    <section className={`hero  ${className ?? ""}`}>
      <div className="hero__grid">
        <div className="hero__content">
          <span className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            Disponible para nuevos proyectos
          </span>

          <h1 className="hero__title">
            Grooming con calma, prolijo y con mucho amor.
          </h1>

          <p className="hero__subtitle">
            Más de 5 años cuidando perros y gatos. Cada mascota sale feliz,
            relajada y oliendo increíble.
          </p>

          <div className="hero__ctas">
            <Button href={sectionHref("contact")}> Hablemos</Button>
            <a href={sectionHref("gallery")} className="hero__cta-link">
              Ver transformaciones <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photo-wrap">
            <div className="hero__blob" aria-hidden="true" />
            <Image
              src={HERO_PORTRAIT_SRC}
              alt="Feri trabajando con una mascota"
              width={820}
              height={900}
              priority
              className="hero__portrait"
            />
            <div className="hero__stat-badge">
              <span className="hero__stat-number">237</span>
              <span className="hero__stat-label">mascotas este año</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
