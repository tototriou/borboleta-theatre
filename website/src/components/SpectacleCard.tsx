import Image from "next/image";
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
        <Image
          src={spectacle.photo_principale}
          alt={`Affiche du spectacle ${spectacle.titre}`}
          fill
          sizes="(max-width: 576px) 100vw, (max-width: 768px) 50vw, 25em"
        />
      </div>
      <div className={styles.description} aria-hidden="true" />
    </Link>
  );
}
