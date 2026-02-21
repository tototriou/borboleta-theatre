import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Butterfly from "@/components/Butterfly";
import RedThread from "@/components/RedThread";
import AgendaContent from "./AgendaContent";
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

/** Page agenda avec les prochaines dates et l'historique des représentations. */
export default function AgendaPage() {
  return (
    <>
      <div className={styles.wrapper}>
        <RedThread className="deco-thread" opacity={0.2} />
        <Butterfly className={`deco-butterfly ${styles.butterfly1}`} size={50} />
        <Butterfly className={`deco-butterfly ${styles.butterfly2}`} size={35} />
        <Header />

        <main id="main-content">
          <div className={styles.title}>
            <h1>Agenda</h1>
          </div>

          <AgendaContent />
        </main>
      </div>
      <Footer />
    </>
  );
}
