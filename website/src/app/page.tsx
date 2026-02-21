"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MemberCard from "@/components/MemberCard";
import MemberModal from "@/components/MemberModal";
import RedThread from "@/components/RedThread";
import Butterfly from "@/components/Butterfly";
import compagnieData from "@/content/compagnie.json";
import { CompagnieData, Membre } from "@/types";
import styles from "./page.module.scss";

/** Page d'accueil du site Borboleta Théâtre. */
export default function HomePage() {
  const [selectedMember, setSelectedMember] = useState<Membre | null>(null);
  const { description, membre: membres } = compagnieData as CompagnieData;

  const direction = membres.filter((m) => m.category === "direction");
  const collaborateurs = membres.filter((m) => m.category === "collaboration");

  const scrollToCompagnie = () => {
    const section = document.getElementById("compagnie");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Section Hero */}
        <section className={styles.hero}>
          <RedThread className="deco-thread" />
          <Butterfly className={`deco-butterfly ${styles.butterfly1}`} size={100} />
          <Butterfly className={`deco-butterfly ${styles.butterfly2}`} size={70} />
          <Butterfly className={`deco-butterfly ${styles.butterfly3}`} size={55} />
          <Butterfly className={`deco-butterfly ${styles.butterfly4}`} size={85} />

          <div className={styles.central}>
            <article className={styles.heroCard}>
              <div className={styles.circle}>
                <img
                  src="/images/home-page-image/image-accueil.jpeg"
                  alt="Affiche Borboleta Théâtre avec papillons dorés sur fond sombre"
                />
              </div>
              <h1 className={styles.titre}>Borboleta Théâtre</h1>
              <button
                type="button"
                className={styles.btnDecouvrir}
                onClick={scrollToCompagnie}
              >
                Découvrir
              </button>
            </article>
          </div>
        </section>

        {/* Section Compagnie */}
        <section id="compagnie" className={styles.compagnieWrapper}>
          <Butterfly className={`deco-butterfly ${styles.butterfly5}`} size={60} />
          <Butterfly className={`deco-butterfly ${styles.butterfly6}`} size={45} />

          <div className={styles.compagnieSection} aria-labelledby="compagnie-title">
            <h2 id="compagnie-title">La Compagnie</h2>
            <div className={styles.description}>
              {description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="trait70vw" />

          <div className={styles.compagnieSection} aria-labelledby="direction-title">
            <h2 id="direction-title">Direction artistique</h2>
            <div className={styles.cardGrid}>
              {direction.map((membre, i) => (
                <MemberCard
                  key={i}
                  membre={membre}
                  onClick={() => setSelectedMember(membre)}
                />
              ))}
            </div>
          </div>

          <div className="trait70vw" />

          <div className={styles.compagnieSection} aria-labelledby="collaborateurs-title">
            <h2 id="collaborateurs-title">Ils/Elles ont travaillé avec nous</h2>
            <div className={styles.cardGrid}>
              {collaborateurs.map((membre, i) => (
                <MemberCard
                  key={i}
                  membre={membre}
                  onClick={() => setSelectedMember(membre)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <MemberModal
        membre={selectedMember}
        onClose={() => setSelectedMember(null)}
      />

      <Footer />
    </>
  );
}
