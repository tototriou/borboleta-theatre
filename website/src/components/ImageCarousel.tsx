"use client";

import { useState, useRef, useCallback } from "react";
import styles from "./ImageCarousel.module.scss";

interface ImageCarouselProps {
  photos: string[];
  creditPhoto: string;
}

/** Carousel d'images : flèches sur desktop, swipe sur mobile. */
export default function ImageCarousel({
  photos,
  creditPhoto,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= photos.length) return;
      setCurrentIndex(index);
      if (trackRef.current) {
        trackRef.current.scrollTo({
          left: index * trackRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
    },
    [photos.length]
  );

  const handleScroll = useCallback(() => {
    if (!trackRef.current) return;
    const index = Math.round(
      trackRef.current.scrollLeft / trackRef.current.offsetWidth
    );
    setCurrentIndex((prev) => (prev !== index ? index : prev));
  }, []);

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === photos.length - 1;

  return (
    <>
      <div className={styles.wrapper}>
        <button
          className={styles.navButton}
          onClick={() => goTo(currentIndex - 1)}
          disabled={isFirst}
          aria-label="Photo précédente"
        >
          <img src="/icons/chevron-compact-left.svg" alt="" />
        </button>

        <div
          ref={trackRef}
          className={styles.track}
          onScroll={handleScroll}
          aria-label={`Galerie photos — ${photos.length} images`}
        >
          {photos.map((photo, i) => (
            <img
              key={i}
              src={photo}
              alt={`Photo ${i + 1} sur ${photos.length}`}
              className={styles.slide}
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>

        <button
          className={styles.navButton}
          onClick={() => goTo(currentIndex + 1)}
          disabled={isLast}
          aria-label="Photo suivante"
        >
          <img src="/icons/chevron-compact-right.svg" alt="" />
        </button>
      </div>

      {photos.length > 1 && (
        <div className={styles.dots} role="tablist" aria-label="Navigation photos">
          {photos.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={`Photo ${i + 1}`}
              className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}

      <p className={styles.creditPhoto}>{creditPhoto}</p>
    </>
  );
}
