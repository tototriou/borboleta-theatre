"use client";

import { useState } from "react";
import styles from "./ImageCarousel.module.scss";

interface ImageCarouselProps {
  photos: string[];
  creditPhoto: string;
}

/** Carousel d'images avec navigation prev/next. Utilise dans la modale spectacle. */
export default function ImageCarousel({
  photos,
  creditPhoto,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === photos.length - 1;

  return (
    <>
      <div className={styles.wrapper}>
        <button
          className={styles.navButton}
          onClick={() => setCurrentIndex(currentIndex - 1)}
          disabled={isFirst}
          aria-label="Photo précédente"
        >
          <img src="/icons/chevron-compact-left.svg" alt="" />
        </button>

        <img
          src={photos[currentIndex]}
          alt={`Photo ${currentIndex + 1} sur ${photos.length}`}
          className={styles.mainImage}
          loading="lazy"
        />

        <button
          className={styles.navButton}
          onClick={() => setCurrentIndex(currentIndex + 1)}
          disabled={isLast}
          aria-label="Photo suivante"
        >
          <img src="/icons/chevron-compact-right.svg" alt="" />
        </button>
      </div>
      <p className={styles.creditPhoto}>{creditPhoto}</p>
    </>
  );
}
