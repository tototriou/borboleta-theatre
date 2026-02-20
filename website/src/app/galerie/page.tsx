"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LightboxModal from "@/components/LightboxModal";
import Butterfly from "@/components/Butterfly";
import RedThread from "@/components/RedThread";
import galerieData from "@/content/galerie.json";
import { GalerieCategory } from "@/types";
import styles from "./page.module.scss";

export default function GaleriePage() {
  const categories = galerieData.categories as GalerieCategory[];
  const [lightbox, setLightbox] = useState<{ photos: string[]; index: number }>({
    photos: [],
    index: -1,
  });

  function openPhoto(photos: string[], index: number) {
    setLightbox({ photos, index });
  }

  return (
    <>
      <div className={styles.wrapper}>
        <RedThread className="deco-thread" />
        <Butterfly className={`deco-butterfly ${styles.butterfly1}`} size={60} />
        <Butterfly className={`deco-butterfly ${styles.butterfly2}`} size={45} />
        <Header />
        <h1>Galerie</h1>

        {categories.map((cat, ci) => (
          <section key={ci} className={styles.section}>
            <h2>{cat.titre}</h2>
            <p className={styles.subtitle}>{cat.sous_titre}</p>

            <div className={styles.grid}>
              {cat.photos.map((photo, pi) => (
                <button
                  key={pi}
                  className={styles.thumb}
                  onClick={() => openPhoto(cat.photos, pi)}
                >
                  <img src={photo} alt={`${cat.titre} – photo ${pi + 1}`} />
                </button>
              ))}
            </div>

            <p className={styles.credit}>{cat.credit_photo}</p>
          </section>
        ))}
      </div>

      <LightboxModal
        photos={lightbox.photos}
        currentIndex={lightbox.index}
        onClose={() => setLightbox({ photos: [], index: -1 })}
        onNavigate={(i) => setLightbox((prev) => ({ ...prev, index: i }))}
      />

      <Footer />
    </>
  );
}
