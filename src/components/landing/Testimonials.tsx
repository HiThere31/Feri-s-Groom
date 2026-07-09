import Image from "next/image";
import { SECTION_IDS } from "@/lib/sections";
import { EmployerReference } from "@/types/employer";
import "@/styles/components/landing/testimonials.css";
import { Reveal } from "@/components/ui/Reveal";

interface TestimonialsProps {
  className?: string;
}

const EMPLOYER_REFERENCES: EmployerReference[] = [
  {
    id: "mariana",
    quote:
      "Fernanda transformó por completo nuestra área de estética. En pocos meses los clientes empezaron a pedir cita con ella por su nombre.",
    name: "Mariana Estrada",
    role: "Dueña · Huellitas Spa & Pet",
    avatarSrc: "https://picsum.photos/seed/feris-ref-mariana/120/120",
  },
  {
    id: "diego",
    quote:
      "Rápida, prolija y con un trato con los animales que no se enseña. La contrataría de nuevo sin pensarlo dos veces.",
    name: "Diego Valdés",
    role: "Coordinador de estética · Bigotes & Co.",
    avatarSrc: "https://picsum.photos/seed/feris-ref-diego/120/120",
  },
  {
    id: "carolina",
    quote:
      "Manejó razas difíciles y perros muy nerviosos durante dos años sin un solo incidente. Para nosotros eso es pura confianza.",
    name: "Dra. Carolina Sepúlveda",
    role: "Veterinaria · San Roque",
    avatarSrc: "https://picsum.photos/seed/feris-ref-carolina/120/120",
  },
];

export function Testimonials({ className }: TestimonialsProps) {
  return (
    <section
      id={SECTION_IDS.testimonials}
      className={`testimonials ${className ?? ""}`}
    >
      <div className="testimonials__wrap">
        <div className="testimonials__intro">
          <span className="testimonials__eyebrow">Empleadores anteriores</span>
          <h2 className="testimonials__heading">Referencias profecionales</h2>
          <p className="testimonial__lead">
            {" "}
            Las voces de los petshops, spas y clínicas donde he trabajado.
          </p>
        </div>

        <div className="testimonials__grid">
          {EMPLOYER_REFERENCES.map((ref) => (
            <figure key={ref.id} className="testimonials__card">
              <div className="testimonials__quote-mark" aria-hidden="true">
                &ldquo;
              </div>
              <blockquote className="testimonials__quote">
                {ref.quote}
              </blockquote>
              <figcaption className="testimonials__author">
                <Image
                  src={ref.avatarSrc}
                  alt=""
                  width={50}
                  height={50}
                  className="testimonials__avatar"
                />
                <div>
                  <div className="testimonials__author-name">{ref.name}</div>
                  <div className="testimonials__author-role"></div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
