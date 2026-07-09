import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SECTION_IDS } from "@/lib/sections";
import "@/styles/components/landing/contact.css";

interface ContactProps {
  className?: string;
}

interface ContactMethod {
  id: string;
  icon: string;
  label: string;
  value: string;
}

const WHATSAPP_NUMBER = "000 000 0000";
const INSTAGRAM_HANDLE = "@feris.groom";
const EMAIL_ADDRESS = "hola@ferisgroom.com";

const CONTACT_METHODS: ContactMethod[] = [
  { id: "whatsapp", icon: "📱", label: "WhatsApp", value: WHATSAPP_NUMBER },
  { id: "instagram", icon: "📷", label: "Instagram", value: INSTAGRAM_HANDLE },
  { id: "email", icon: "✉️", label: "Email", value: EMAIL_ADDRESS },
];

export function Contact({ className }: ContactProps) {
  return (
    <section id={SECTION_IDS.contact} className={`contact ${className ?? ""}`}>
      <div className="contact__grid">
        <Reveal>
          <h2 className="contact__heading">
            ¿Buscás una groomer de confianza?
          </h2>
          <p className="contact__lead">
            Ya sea para sumarme a tu petshop o spa, o para cuidar a tu mascota,
            escribime y coordinamos. Respondo rápido y con gusto.
          </p>
          <Button
            href={`mailto:${EMAIL_ADDRESS}`}
            className="contact__cta  w-full md:w-auto"
          >
            Hablemos
          </Button>
        </Reveal>

        <Reveal delay={0.1} className="contact__methods">
          {CONTACT_METHODS.map((method) => (
            <div key={method.id} className="contact__method">
              <span className="contact__method-icon" aria-hidden="true">
                {method.icon}
              </span>
              <div>
                <div className="contact__method-label">{method.label}</div>
                <div className="contact__method-value">{method.value}</div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
