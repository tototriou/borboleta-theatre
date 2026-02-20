import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Butterfly from "@/components/Butterfly";
import RedThread from "@/components/RedThread";
import agendaData from "@/content/agenda.json";
import { AgendaYear } from "@/types";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Agenda | Borboleta Théâtre",
  description:
    "Retrouvez toutes les dates de représentation des spectacles de Borboleta Théâtre.",
  openGraph: {
    title: "Agenda | Borboleta Théâtre",
    description: "Prochaines dates des spectacles de la compagnie",
  },
};

/** Page agenda avec les dates de représentation par année. */
export default function AgendaPage() {
  const agenda = agendaData as AgendaYear[];

  return (
    <>
      <div className={styles.wrapper}>
        <RedThread className="deco-thread" />
        <Butterfly className={`deco-butterfly ${styles.butterfly1}`} size={50} />
        <Butterfly className={`deco-butterfly ${styles.butterfly2}`} size={35} />
        <Header />

        <main id="main-content">
          <div className={styles.title}>
            <h1>Agenda</h1>
          </div>

          <div className={styles.content}>
            {agenda.map((annee) => (
              <section
                key={annee.annee}
                className={styles.section}
                aria-labelledby={`annee-${annee.annee}`}
              >
                <h2 id={`annee-${annee.annee}`}>{annee.annee}</h2>
                {annee.spectacles.map((spectacle, i) => (
                  <article key={i} className={styles.ligne}>
                    <p>{spectacle.lieu}</p>
                    <p className={styles.date}>
                      <time>{spectacle.date}</time>
                    </p>
                    <Link href="/spectacles/" aria-label={`Voir le spectacle ${spectacle.lieu}`}>
                      <img src={spectacle.photo_url} alt={`Affiche ${spectacle.lieu}`} />
                    </Link>
                  </article>
                ))}
              </section>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
