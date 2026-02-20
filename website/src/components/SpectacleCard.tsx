import Link from "next/link";
import { Spectacle } from "@/types";
import styles from "./SpectacleCard.module.scss";

interface SpectacleCardProps {
  spectacle: Spectacle;
}

export default function SpectacleCard({ spectacle }: SpectacleCardProps) {
  return (
    <Link href={`/spectacles/${spectacle.slug}/`} className={styles.card}>
      <div className={styles.image}>
        <img
          src={spectacle.photo_principale}
          alt={spectacle.titre}
          loading="lazy"
        />
      </div>
      <div className={styles.description} />
    </Link>
  );
}
