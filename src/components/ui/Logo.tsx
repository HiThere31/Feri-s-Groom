import Image from "next/image";

type LogoVariant = "pink" | "white";

interface LogoProps {
  /**
   * "pink" — el PNG tal cual, para fondos claros (crema/blanco).
   * "white" — silueta blanca generada por CSS mask a partir del mismo
   * archivo (usa el canal alfa como forma), para fondos rosados/oscuros.
   * No es un archivo aparte — evita depender de un segundo export del
   * diseñador cada vez que se necesite el logo en otro color.
   */
  variant?: LogoVariant;
  className?: string;
  /** Ancho de renderizado en px. El alto se deriva del aspect ratio real del archivo. */
  width?: number;
}

const LOGO_SRC = "brand/FERIS-GROOM-LOGO.png";
// Dimensiones reales del archivo fuente: 4500 x 5625px
const LOGO_ASPECT_RATIO = 4500 / 5625;

export function Logo({ variant = "pink", className, width = 160 }: LogoProps) {
  const height = Math.round(width / LOGO_ASPECT_RATIO);

  if (variant === "white") {
    return (
      <span
        role="img"
        aria-label="Feri's Groom — petshop y grooming"
        className={className}
        style={{
          display: "inline-block",
          width,
          height,
          backgroundColor: "#fff",
          WebkitMaskImage: `url(${LOGO_SRC})`,
          maskImage: `url(${LOGO_SRC})`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />
    );
  }

  return (
    <Image
      src={LOGO_SRC}
      alt="Feri's Groom — petshop y grooming"
      width={width}
      height={height}
      className={className}
    />
  );
}
