import Link from "next/link";
import Header from "@/components/Header";
import RedThread from "@/components/RedThread";
import Butterfly from "@/components/Butterfly";
import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className={styles.hero}>
        {/* Decorative elements */}
        <RedThread className="deco-thread" />
        <Butterfly className={`deco-butterfly ${styles.butterfly1}`} size={100} />
        <Butterfly className={`deco-butterfly ${styles.butterfly2}`} size={70} />
        <Butterfly className={`deco-butterfly ${styles.butterfly3}`} size={55} />
        <Butterfly className={`deco-butterfly ${styles.butterfly4}`} size={85} />

        {/* Central content */}
        <div className={styles.central}>
          <div className={styles.logoFrame}>
            <img
              src="/images/home-page-image/image-accueil.jpeg"
              alt="Borboleta Théâtre"
            />
            <h1 className={styles.titre}>Borboleta Théâtre</h1>
            <p className={styles.sousTitre}>
              Compagnie de Théâtre créée par Sidonie Vilas Boas et Romain Triouleyre
            </p>
            <Link href="/compagnie/" className={styles.btnDecouvrir}>
              Découvrir
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
