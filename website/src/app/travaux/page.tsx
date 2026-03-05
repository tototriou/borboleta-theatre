import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpectacleCard from "@/components/SpectacleCard";
import travauxData from "@/content/travaux.json";
import Butterfly from "@/components/Butterfly";
import RedThread from "@/components/RedThread";
import { Spectacle } from "@/types";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Nos autres travaux | Borboleta Théâtre",
  description:
    "Ateliers, créations d'élèves et travaux de recherche de Borboleta Théâtre.",
  openGraph: {
    title: "Nos autres travaux | Borboleta Théâtre",
    description: "Ateliers et travaux de recherche de la compagnie Borboleta Théâtre",
  },
};

/** Page listant les autres travaux de la compagnie. */
export default function TravauxPage() {
  const travaux = travauxData.spectacles as Spectacle[];

  return (
    <>
      <main id="main-content" className={styles.wrapper}>
        <RedThread className="deco-thread" opacity={0.2} />
        <Butterfly className={`deco-butterfly ${styles.butterfly1}`} size={55} />
        <Butterfly className={`deco-butterfly ${styles.butterfly2}`} size={40} />
        <Header />
        <h1 className={styles.pageTitle}>Nos autres travaux</h1>
        <section className={styles.list} aria-label="Liste des autres travaux">
          {travaux.map((travail, i) => (
            <div key={travail.slug}>
              <SpectacleCard spectacle={travail} reversed={i % 2 !== 0} basePath="/travaux" />
              {i < travaux.length - 1 && <div className="trait70vw" />}
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
