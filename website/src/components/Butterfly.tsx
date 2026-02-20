interface ButterflyProps {
  className?: string;
  size?: number;
  /** Couleur principale des ailes */
  colorPrimary?: string;
  /** Couleur secondaire (motifs, sous-ailes) */
  colorSecondary?: string;
  /** Couleur des détails (corps, antennes) */
  colorDetail?: string;
}

/**
 * Papillon decoratif en SVG.
 * Inspire des papillons de nuit / gravures anciennes.
 * Les couleurs sont configurables pour s'adapter au theme.
 */
export default function Butterfly({
  className,
  size = 80,
  colorPrimary = "#2a2a2a",
  colorSecondary = "#444",
  colorDetail = "#1a1a1a",
}: ButterflyProps) {
  // Couleur intermédiaire pour les traits
  const colorStroke = colorSecondary;
  // Couleur sous-ailes légèrement différente
  const colorSubWing = "#333";

  return (
    <svg
      className={className}
      width={size}
      height={size * 0.65}
      viewBox="0 0 120 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Aile gauche */}
      <path
        d="M60 39 C45 10, 15 0, 5 20 S10 50, 30 55 S50 45, 60 39Z"
        fill={colorPrimary}
        opacity="0.85"
      />
      <path
        d="M60 39 C50 30, 25 5, 10 22"
        stroke={colorStroke}
        strokeWidth="0.5"
        fill="none"
      />
      {/* Motif aile gauche */}
      <ellipse cx="32" cy="28" rx="10" ry="7" fill={colorSecondary} opacity="0.6" />
      <ellipse cx="28" cy="45" rx="6" ry="4" fill={colorSecondary} opacity="0.5" />

      {/* Aile droite */}
      <path
        d="M60 39 C75 10, 105 0, 115 20 S110 50, 90 55 S70 45, 60 39Z"
        fill={colorPrimary}
        opacity="0.85"
      />
      <path
        d="M60 39 C70 30, 95 5, 110 22"
        stroke={colorStroke}
        strokeWidth="0.5"
        fill="none"
      />
      {/* Motif aile droite */}
      <ellipse cx="88" cy="28" rx="10" ry="7" fill={colorSecondary} opacity="0.6" />
      <ellipse cx="92" cy="45" rx="6" ry="4" fill={colorSecondary} opacity="0.5" />

      {/* Sous-ailes */}
      <path
        d="M60 39 C48 50, 25 65, 20 60 S30 50, 45 50 S55 44, 60 39Z"
        fill={colorSubWing}
        opacity="0.7"
      />
      <path
        d="M60 39 C72 50, 95 65, 100 60 S90 50, 75 50 S65 44, 60 39Z"
        fill={colorSubWing}
        opacity="0.7"
      />

      {/* Corps */}
      <ellipse cx="60" cy="39" rx="2.5" ry="14" fill={colorDetail} />

      {/* Antennes */}
      <path
        d="M59 26 C55 15, 50 10, 47 8"
        stroke={colorDetail}
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M61 26 C65 15, 70 10, 73 8"
        stroke={colorDetail}
        strokeWidth="1"
        fill="none"
      />
      <circle cx="47" cy="8" r="1.5" fill={colorDetail} />
      <circle cx="73" cy="8" r="1.5" fill={colorDetail} />
    </svg>
  );
}
