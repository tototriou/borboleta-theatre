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

const MAX_PHOTOS = 15;

/** Page galerie avec photos organisées par catégorie et lightbox. */
export default function GaleriePage() {
  const categories = galerieData.categories as GalerieCategory[];
  const [lightbox, setLightbox] = useState<{
    photos: GalerieCategory["photos"];
    defaultCredit: string;
    index: number;
  }>({ photos: [], defaultCredit: "", index: -1 });

  function openPhoto(cat: GalerieCategory, index: number) {
    setLightbox({
      photos: cat.photos.slice(0, MAX_PHOTOS),
      defaultCredit: cat.credit_photo,
      index,
    });
  }

  return (
    <>
      <div className={styles.wrapper}>
        <RedThread className="deco-thread" opacity={0.2} />
        <Butterfly className={`deco-butterfly ${styles.butterfly1}`} size={60} />
        <Butterfly className={`deco-butterfly ${styles.butterfly2}`} size={45} />
        <Header />

        <main id="main-content">
          <h1>Galerie</h1>

          {categories.map((cat, ci) => {
            const photos = cat.photos.slice(0, MAX_PHOTOS);
            return (
              <section
                key={ci}
                className={styles.section}
                aria-labelledby={`galerie-${cat.titre.toLowerCase()}`}
              >
                <h2 id={`galerie-${cat.titre.toLowerCase()}`}>{cat.titre}</h2>

                <div className={styles.grid} role="list" aria-label={`Photos de ${cat.titre}`}>
                  {photos.map((photo, pi) => (
                    <button
                      key={pi}
                      className={styles.thumb}
                      onClick={() => openPhoto(cat, pi)}
                      aria-label={`Voir en plein écran : ${photo.alt}`}
                      type="button"
                    >
                      <img src={photo.url} alt={photo.alt} />
                    </button>
                  ))}
                </div>

                <p className={styles.credit}>{cat.credit_photo}</p>
              </section>
            );
          })}
        </main>
      </div>

      <LightboxModal
        photos={lightbox.photos}
        defaultCredit={lightbox.defaultCredit}
        currentIndex={lightbox.index}
        onClose={() => setLightbox({ photos: [], defaultCredit: "", index: -1 })}
        onNavigate={(i) => setLightbox((prev) => ({ ...prev, index: i }))}
      />

      <Footer />
    </>
  );
}
