import styles from "./Loading.module.scss";

/** Indicateur de chargement avec animation de papillon. */
export default function Loading() {
  return (
    <div className={styles.wrapper} role="status" aria-label="Chargement en cours">
      <div className={styles.spinner}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
      <p className={styles.text}>Chargement...</p>
    </div>
  );
}
