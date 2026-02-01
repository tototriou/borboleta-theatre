import Link from "next/link";
import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titre}>
        <h1>BORBOLETA THEATRE</h1>
      </div>
      <div className={styles.logocentral}>
        <img
          src="/images/home-page-image/logo-page1.PNG"
          alt="Logo Borboleta Théâtre"
        />
      </div>
      <div className={styles.theatreTexte}>
        <p>THEATRE</p>
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href="/compagnie/">Compagnie</Link>
          </li>
          <li>
            <Link href="/spectacles/">Spectacles</Link>
          </li>
          <li>
            <Link href="/contact/">Contact</Link>
          </li>
          <li>
            <Link href="/agenda/">Agenda</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
