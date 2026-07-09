import { Logo } from "@/components/ui/Logo";
import "@/styles/components/landing/footer.css";

const SITE_YEAR = 2026;

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <Logo variant="white" width={200} className="footer__logo" />

        <div className="footer__info">
          <p className="footer__tagline">
            Fernanda Arias · Groomer profesional · Hecho con cariño 🐾
          </p>
          <p className="footer__tagline">
            Groomer certifica parte de la asociación canofila costarricense{" "}
          </p>
          <p className="footer__legal">
            © {SITE_YEAR} Feri&apos;s Groom®. Todos los derechos reservados.
          </p>
          <p className="footer__credit">Desarrollada por Kodafy</p>
        </div>
      </div>
    </footer>
  );
}
