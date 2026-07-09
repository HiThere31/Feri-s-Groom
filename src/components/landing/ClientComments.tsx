import "@/styles/components/landing/client-comments.css";
import { Reveal } from "@/components/ui/Reveal";

interface ClientCommentsProps {
  className?: string;
}

interface ClientComment {
  id: string;
  text: string;
  name: string;
}

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

export function ClientComments({ className }: ClientCommentsProps) {
  return (
    <section className={`client-comments ${className ?? ""}`}>
      <div className="client-comments__wrap">
        <div className="client-comments__intro">
          <h2 className="client-comments__heading">
            Y los dueños también opinan
          </h2>
          <p className="client-comments__lead">
            Comentarios de familias que confían sus mascotas conmigo.
          </p>
        </div>

        <div className="client-comments__grid">
          {CLIENT_COMMENTS.map((comment) => (
            <figure key={comment.id} className="client-comments__card">
              <div className="client-comments__stars" aria-hidden="true">
                ★★★★★
              </div>
              <p className="client-comments__text">{comment.text}</p>
              <figcaption className="client-comments__author">
                {comment.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
