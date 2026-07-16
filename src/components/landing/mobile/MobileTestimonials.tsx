import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SECTION_IDS } from "@/lib/sections";
import "@/styles/components/landing/mobile/mobile-testimonials.css";

interface MobileTestimonialsProps {
  className?: string;
}

interface EmployerReference {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
}

const EMPLOYER_REFERENCES: EmployerReference[] = [
  {
    id: "mariana",
    quote:
      "El trabajo de Luisa en Firulais fue excelente. Durante su tiempo con nosotros, no solo le brindó un trato amable y cálido a nuestros clientes, sino que también se esmeraba en que el resultado final del grooming fuera de la más alta calidad. Incluso aconsejaba a los dueños basándose en las necesidades específicas de su mascota! Muy profesional y recomendada.",
    name: "Mariana Estrada",
    role: "Dueña · Huellitas Spa & Pet",
    avatarSrc: "https://picsum.photos/seed/feris-ref-mariana/120/120",
  },
  {
    id: "diego",
    quote:
      "Rápida, prolija y con un trato con los animales que no se enseña. La contrataría de nuevo sin pensarlo.",
    name: "Diego Valdés",
    role: "Coordinador · Bigotes & Co.",
    avatarSrc: "https://picsum.photos/seed/feris-ref-diego/120/120",
  },
  {
    id: "carolina",
    quote:
      "Manejó razas difíciles y perros muy nerviosos durante dos años sin un solo incidente.",
    name: "Dra. Carolina Sepúlveda",
    role: "Veterinaria · San Roque",
    avatarSrc: "https://picsum.photos/seed/feris-ref-carolina/120/120",
  },
];

interface ClientComment {
  id: string;
  text: string;
  name: string;
}

// Mismo contenido que ClientComments.tsx (desktop) — una sola fuente de
// verdad para el copy, solo cambia el layout/tamaño entre versiones.
const CLIENT_COMMENTS: ClientComment[] = [
  {
    id: "luciana",
    text: "Mi caniche salió hermoso y oliendo increíble. Feri tiene una paciencia de santa.",
    name: "Luciana M.",
  },
  {
    id: "andres",
    text: "Por fin alguien que entiende a mi gato. Lo dejó impecable y sin nada de estrés.",
    name: "Andrés P.",
  },
  {
    id: "romina",
    text: "Llevo a Toby cada mes. Nunca lo había visto tan tranquilo durante un baño.",
    name: "Romina T.",
  },
  {
    id: "joaquin",
    text: "Súper recomendable. Atención puntual y resultados dignos de revista.",
    name: "Joaquín B.",
  },
];

export function MobileTestimonials({ className }: MobileTestimonialsProps) {
  return (
    <section
      id={SECTION_IDS.testimonials}
      className={`mobile-testimonials ${className ?? ""}`}
    >
      <Reveal className="mobile-testimonials__intro">
        <span className="mobile-testimonials__eyebrow">
          Empleadores anteriores
        </span>
        <h1 className="mobile-testimonials__heading">
          Referencias profesionales
        </h1>
        <p className="mobile-testimonials__subtitle">
          Las voces de los petshops, spas y clínicas donde he trabajado.
        </p>
      </Reveal>

      <div className="mobile-testimonials__list">
        {EMPLOYER_REFERENCES.map((ref, index) => (
          <Reveal key={ref.id} delay={index * 0.08}>
            <figure className="mobile-testimonials__card">
              <div
                className="mobile-testimonials__quote-mark"
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <blockquote className="mobile-testimonials__quote">
                {ref.quote}
              </blockquote>
              <figcaption className="mobile-testimonials__author">
                <Image
                  src={ref.avatarSrc}
                  alt=""
                  width={42}
                  height={42}
                  className="mobile-testimonials__avatar"
                />
                <div>
                  <div className="mobile-testimonials__author-name">
                    {ref.name}
                  </div>
                  <div className="mobile-testimonials__author-role">
                    {ref.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal className="mobile-testimonials__intro mobile-testimonials__intro--tier2">
        <span className="mobile-testimonials__eyebrow">
          Referencias de clientes
        </span>
        <h1 className="mobile-testimonials__heading">
          Y los dueños también opinan
        </h1>
        <p className="mobile-testimonials__subtitle">
          Comentarios de familias que confían sus mascotas conmigo.
        </p>
      </Reveal>

      <div className="mobile-testimonials__clients-grid">
        {CLIENT_COMMENTS.map((comment, index) => (
          <Reveal key={comment.id} delay={(index % 4) * 0.07}>
            <figure className="mobile-testimonials__client-card">
              <div
                className="mobile-testimonials__client-stars"
                aria-hidden="true"
              >
                ★★★★★
              </div>
              <p className="mobile-testimonials__client-text">{comment.text}</p>
              <figcaption className="mobile-testimonials__client-author">
                {comment.name}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
