import Image from "next/image";
import "@/styles/components/landing/about.css";
import { Reveal } from "@/components/ui/Reveal";

interface AboutProps {
  className?: string;
}

const ABOUT_PORTRAIT_SRC = "/img/about/About-picture.jpg";

const STATS = [
  { value: "5+", label: "años de experiencia" },
  { value: "3", label: "petshops y clínicas" },
  { value: "40+", label: "razas trabajadas" },
  { value: "∞", label: "paciencia" },
];

const SPECIALTIES = [
  "Corte de raza y fantasía",
  "Grooming felino",
  "Manejo de razas de pelo largo",
  "Primeros auxilios para mascotas",
];

export function About({ className }: AboutProps) {
  return (
    <section className={`about ${className ?? ""}`} id="sobre">
      <div className="about__grid">
        <div className="about__visual">
          <div className="about__blob" aria-hidden="true" />
          <Image
            src={ABOUT_PORTRAIT_SRC}
            alt="Fernanda en su estación de grooming"
            width={900}
            height={998}
            className="about__portrait"
          />
        </div>

        <div className="about__content">
          <h2 className="about__heading">Hola soy Fernanda Arias</h2>
          <p className="about__lead">
            Soy enfermera veterinaria,y groomer profesional con formación y
            certificaciones nacionales e internacionales en estética canina y
            felina. Me especializo en técnicas como stripping, mantos largos,
            corte a tijera y peluquería comercial y creativo ,siempre
            priorizando el bienestar, la seguridad y la comodidad de cada
            mascota. Mi compromiso es brindar un servicio de calidad, con
            profesionalismo, dedicación y mucho amor por los animales.
          </p>

          <div className="about__stats">
            {STATS.map((stat) => (
              <div key={stat.label} className="about__stat">
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="about__tags">
            {SPECIALTIES.map((tag) => (
              <span key={tag} className="about__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
