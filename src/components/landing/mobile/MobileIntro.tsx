import Image from "next/image";
import { SECTION_IDS } from "@/lib/sections";
import "@/styles/components/landing/mobile/mobile-intro.css";
import { Reveal } from "@/components/ui/Reveal";

interface MobileIntroProps {
  className?: string;
}

const PORTRAIT_SRC = "/img/about/About-picture.jpg";

const WORK_PLACES = [
  { icon: "●", name: "Clínica Veterinaria Dr.Andres Fallas Gómez. " },
  { icon: "✦", name: "Clínica Veterinaria Pet house." },
  { icon: "✚", name: "Estética canina, Spa - Image Dog." },
  { icon: "❀", name: "Firulais petshop." },
  { icon: "◆", name: "Chamelo’s grooming club." },
];

const SPECIALTIES = [
  "Corte de raza y fantasía",
  "Grooming felino",
  "Pelo largo",
  "Primeros auxilios",
  "Tenicas de stripping",
];

const STATS = [
  { value: "5+", label: "años" },
  { value: "237", label: "este año" },
  { value: "40+", label: "razas" },
];

export function MobileIntro({ className }: MobileIntroProps) {
  return (
    <section id={SECTION_IDS.about} className={className}>
      <div className="mobile-intro__banner">
        <Image
          src={PORTRAIT_SRC}
          alt="Fernanda Ríos trabajando en Feri's Groom"
          fill
          priority
          sizes="100vw"
          className="mobile-intro__banner-image"
        />
        <div className="mobile-intro__banner-overlay" />
        <div className="mobile-intro__banner-text">
          <h1 className="mobile-intro__name">Fernanda Arias</h1>
          <p className="mobile-intro__role">Groomer profesional</p>
        </div>
      </div>

      <div className="mobile-intro__content px-6 pt-8 pb-3">
        <p className="mobile-intro__bio">
          Soy enfermera veterinaria,y groomer profesional con formación y
          certificaciones nacionales e internacionales en estética canina y
          felina. Me especializo en técnicas como stripping, mantos largos,
          corte a tijera y peluquería comercial y creativo ,siempre priorizando
          el bienestar, la seguridad y la comodidad de cada mascota. Mi
          compromiso es brindar un servicio de calidad, con profesionalismo,
          dedicación y mucho amor por los animales.
        </p>

        <div className="mobile-intro__stats">
          {STATS.map((stat) => (
            <div key={stat.label} className="mobile-intro__stat-card">
              <span className="mobile-intro__stat-value">{stat.value}</span>
              <span className="mobile-intro__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="mobile-intro__tags">
          {SPECIALTIES.map((tag) => (
            <span key={tag} className="mobile-intro__tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="mobile-intro__places-card">
          <span className="mobile-intro__places-title">He trabajado en</span>
          <div className="mobile-intro__places-list">
            {WORK_PLACES.map((place) => (
              <span key={place.name} className="mobile-intro__place">
                <span className="mobile-intro__place-icon" aria-hidden="true">
                  {place.icon}
                </span>
                {place.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
