import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import RedThread from "@/components/RedThread";
import Butterfly from "@/components/Butterfly";
import styles from "./page.module.scss";

/** Page d'accueil du site Borboleta Théâtre. */
export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" className={styles.hero}>
        {/* Éléments décoratifs */}
        <RedThread className="deco-thread" />
        <Butterfly className={`deco-butterfly ${styles.butterfly1}`} size={100} />
        <Butterfly className={`deco-butterfly ${styles.butterfly2}`} size={70} />
        <Butterfly className={`deco-butterfly ${styles.butterfly3}`} size={55} />
        <Butterfly className={`deco-butterfly ${styles.butterfly4}`} size={85} />

        {/* Contenu principal */}
        <div className={styles.central}>
          <article className={styles.logoFrame}>
            <Image
              src="/images/home-page-image/image-accueil.jpeg"
              alt="Affiche Borboleta Théâtre avec papillons dorés sur fond sombre"
              width={400}
              height={400}
              priority
            />
            <h1 className={styles.titre}>Borboleta Théâtre</h1>
            <p className={styles.sousTitre}>
              Compagnie de Théâtre créée par Sidonie Vilas Boas et Romain Triouleyre
            </p>
            <Link href="/compagnie/" className={styles.btnDecouvrir}>
              Découvrir
            </Link>
          </article>
        </div>
      </main>
    </>
  );
}
