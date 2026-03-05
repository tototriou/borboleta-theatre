"use client";

import { useState } from "react";

const BUTTERFLIES = [1, 3, 4, 5, 6];

interface ButterflyProps {
  className?: string;
  size?: number;
}

/**
 * Papillon décoratif — image PNG aléatoire parmi les fichiers disponibles dans public/images/papillons/.
 * Taille aléatoire entre x2 et x3 de la taille de base.
 * Le choix est stabilisé côté client pour éviter les changements au re-render.
 */
export default function Butterfly({ className, size = 80 }: ButterflyProps) {
  const [id] = useState(
    () => BUTTERFLIES[Math.floor(Math.random() * BUTTERFLIES.length)]
  );
  const [scale] = useState(() => 2 + Math.random());

  return (
    <img
      src={`/images/papillons/papillon${id}.png`}
      alt=""
      aria-hidden="true"
      className={className}
      width={Math.round(size * scale)}
      style={{ height: "auto" }}
    />
  );
}
