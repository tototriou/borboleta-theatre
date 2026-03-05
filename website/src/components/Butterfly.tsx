"use client";

import { useState } from "react";

const BUTTERFLY_COUNT = 6;

interface ButterflyProps {
  className?: string;
  size?: number;
}

/**
 * Papillon décoratif — image PNG aléatoire parmi les 6 disponibles dans public/images/papillons/.
 * Le choix est stabilisé côté client pour éviter les changements au re-render.
 */
export default function Butterfly({ className, size = 80 }: ButterflyProps) {
  const [index] = useState(
    () => Math.floor(Math.random() * BUTTERFLY_COUNT) + 1
  );

  return (
    <img
      src={`/images/papillons/papillon${index}.png`}
      alt=""
      aria-hidden="true"
      className={className}
      width={size * 2}
      style={{ height: "auto" }}
    />
  );
}
