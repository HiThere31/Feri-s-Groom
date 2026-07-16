import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BUSINESS_INFO } from "@/lib/business-info";
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
  href: string;
}

const CONTACT_METHODS: ContactMethod[] = [
  {
    id: "whatsapp",
    icon: "📱",
    label: "WhatsApp",
    value: BUSINESS_INFO.whatsappDisplay,
    href: `https://wa.me/${BUSINESS_INFO.whatsappDigits}`,
  },
  {
    id: "instagram",
    icon: "📷",
    label: "Instagram",
    value: `@${BUSINESS_INFO.instagramHandle}`,
    href: `https://instagram.com/${BUSINESS_INFO.instagramHandle}`,
  },
  {
    id: "email",
    icon: "✉️",
    label: "Email",
    value: BUSINESS_INFO.email,
    href: `mailto:${BUSINESS_INFO.email}`,
  },
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
            href={`mailto:${BUSINESS_INFO.email}`}
            className="contact__cta w-full md:w-auto"
          >
            Hablemos
          </Button>
        </Reveal>

        <Reveal delay={0.1} className="contact__methods">
          {CONTACT_METHODS.map((method) => (
            <a
              key={method.id}
              href={method.href}
              target={method.id === "email" ? undefined : "_blank"}
              rel={method.id === "email" ? undefined : "noopener noreferrer"}
              className="contact__method"
            >
              <span className="contact__method-icon" aria-hidden="true">
                {method.icon}
              </span>
              <div>
                <div className="contact__method-label">{method.label}</div>
                <div className="contact__method-value">{method.value}</div>
              </div>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
