import Link from "next/link";
import { Spectacle } from "@/types";
import styles from "./SpectacleCard.module.scss";

interface SpectacleCardProps {
  spectacle: Spectacle;
}

/** Carte cliquable vers la page dédiée d'un spectacle. */
export default function SpectacleCard({ spectacle }: SpectacleCardProps) {
  return (
    <Link
      href={`/spectacles/${spectacle.slug}/`}
      className={styles.card}
      aria-label={`Voir le spectacle ${spectacle.titre}`}
    >
      <div className={styles.image}>
        <img
          src={spectacle.photo_principale}
          alt={`Affiche du spectacle ${spectacle.titre}`}
          loading="lazy"
        />
      </div>
      <div className={styles.description} aria-hidden="true" />
    </Link>
  );
}
