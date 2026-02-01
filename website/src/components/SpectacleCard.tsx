"use client";

import { Spectacle } from "@/types";
import styles from "./SpectacleCard.module.scss";

interface SpectacleCardProps {
  spectacle: Spectacle;
  onClick: () => void;
}

export default function SpectacleCard({
  spectacle,
  onClick,
}: SpectacleCardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.image}>
        <img
          src={spectacle.photo_principale}
          alt={spectacle.titre}
          loading="lazy"
        />
      </div>
      <div className={styles.description} />
    </div>
  );
}
