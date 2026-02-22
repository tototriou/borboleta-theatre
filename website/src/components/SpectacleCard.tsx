import Link from "next/link";
import { Spectacle } from "@/types";
import styles from "./SpectacleCard.module.scss";

interface SpectacleCardProps {
  spectacle: Spectacle;
  /** Si true, l'image est à droite et le contenu à gauche */
  reversed?: boolean;
}

/**
 * Présentation d'un spectacle en mode ligne : image d'un côté, contenu de l'autre.
 * Le côté de l'image alterne selon la prop `reversed`.
 */
export default function SpectacleCard({ spectacle, reversed = false }: SpectacleCardProps) {
  // Parse du tableau création : alternance [rôle, noms, rôle, noms, ...]
  const creationPairs: { role: string; noms: string }[] = [];
  for (let i = 0; i + 1 < spectacle.creation.length; i += 2) {
    creationPairs.push({ role: spectacle.creation[i], noms: spectacle.creation[i + 1] });
  }

  return (
    <article className={`${styles.row} ${reversed ? styles.reversed : ""}`}>
      <div className={styles.imageWrapper}>
        <Link
          href={`/spectacles/${spectacle.slug}/`}
          className={styles.imageLink}
          aria-label={`Voir le spectacle ${spectacle.titre}`}
        >
          <img
            src={spectacle.photo_principale}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
        </Link>
      </div>

      <div className={styles.content}>
        <h2 className={styles.titre}>{spectacle.titre}</h2>
        <p className={styles.sousTitre}>{spectacle.sous_titre}</p>

        {spectacle.accroche && (
          <p className={styles.accroche}>{spectacle.accroche}</p>
        )}

        {(spectacle.duree || spectacle.public) && (
          <p className={styles.meta}>
            {spectacle.duree && <span>{spectacle.duree}</span>}
            {spectacle.duree && spectacle.public && <span className={styles.sep}>·</span>}
            {spectacle.public && <span>{spectacle.public}</span>}
          </p>
        )}

        {creationPairs.length > 0 && (
          <dl className={styles.distribution}>
            {creationPairs.map(({ role, noms }) => (
              <div key={role} className={styles.distributionRow}>
                <dt className={styles.role}>{role}</dt>
                <dd>{noms}</dd>
              </div>
            ))}
          </dl>
        )}

        <Link
          href={`/spectacles/${spectacle.slug}/`}
          className={styles.btn}
          aria-label={`En savoir plus sur ${spectacle.titre}`}
        >
          En savoir plus
        </Link>
      </div>
    </article>
  );
}
