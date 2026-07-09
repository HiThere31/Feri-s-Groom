import "@/styles/components/landing/places.css";
import { Reveal } from "@/components/ui/Reveal";

interface PlaceProps {
  className?: string;
}

const PLACES = [
  { icon: "●", name: "Clínica Veterinaria Dr.Andres Fallas Gómez. " },
  { icon: "✦", name: "Clínica Veterinaria  Pet house Dr.Floryzul Carvajal." },
  { icon: "✚", name: "Estética canina,Spa y tienda de mascotas - Image Dog." },
  { icon: "❀", name: "Firulais petshop." },
  { icon: "◆", name: "Chamelo’s grooming club." },
];

export function Places({ className }: PlaceProps) {
  return (
    <section className={`places ${className ?? ""}`}>
      <div className="places__wrap">
        <p className="places__label">Lugares donde he trabajado</p>
        <div className="places__list">
          {PLACES.map((place) => (
            <span key={place.name} className="places__place">
              <span className="places__place-icon" aia-hidden="true">
                {place.icon}
              </span>
              {place.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
