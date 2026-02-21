import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpectacleCard from "@/components/SpectacleCard";
import spectaclesData from "@/content/spectacles.json";
import Butterfly from "@/components/Butterfly";
import RedThread from "@/components/RedThread";
import { Spectacle } from "@/types";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Spectacles | Borboleta Théâtre",
  description:
    "Découvrez les créations de Borboleta Théâtre : Chimères, Juliet et nos prochaines productions.",
  openGraph: {
    title: "Spectacles | Borboleta Théâtre",
    description: "Les créations théâtrales de la compagnie Borboleta Théâtre",
  },
};

/** Page listant tous les spectacles de la compagnie. */
export default function SpectaclesPage() {
  const spectacles = spectaclesData.spectacles as Spectacle[];

  return (
    <>
      <main id="main-content" className={styles.wrapper}>
        <RedThread className="deco-thread" opacity={0.2} />
        <Butterfly className={`deco-butterfly ${styles.butterfly1}`} size={55} />
        <Butterfly className={`deco-butterfly ${styles.butterfly2}`} size={40} />
        <Header />
        <h1 className={styles.pageTitle}>Les spectacles</h1>
        <section className={styles.list} aria-label="Liste des spectacles">
          {spectacles.map((spectacle, i) => (
            <div key={spectacle.slug}>
              <SpectacleCard spectacle={spectacle} reversed={i % 2 !== 0} />
              {i < spectacles.length - 1 && <div className="trait70vw" />}
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
