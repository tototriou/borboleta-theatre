"use client";

import { useCallback, useEffect } from "react";
import { useDialog } from "@/hooks/useDialog";
import { GaleriePhoto } from "@/types";
import styles from "./LightboxModal.module.scss";

interface LightboxModalProps {
  photos: GaleriePhoto[];
  /** Crédit par défaut affiché si la photo n'a pas de crédit spécifique */
  defaultCredit?: string;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

/** Modale plein écran pour afficher une photo avec navigation prev/next, crédit et clavier. */
export default function LightboxModal({
  photos,
  defaultCredit,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  const isOpen = currentIndex >= 0;
  const dialogRef = useDialog(isOpen, onClose);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) onNavigate(currentIndex - 1);
  }, [currentIndex, onNavigate]);

  const goNext = useCallback(() => {
    if (currentIndex < photos.length - 1) onNavigate(currentIndex + 1);
  }, [currentIndex, photos.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, goPrev, goNext]);

  if (!isOpen) return null;

  const photo = photos[currentIndex];
  const credit = photo.credit || defaultCredit;

  return (
    <dialog
      ref={dialogRef}
      className={styles.lightbox}
      onClose={onClose}
      aria-label="Visualisation photo en plein écran"
      role="dialog"
      aria-modal="true"
    >
      <button
        className={styles.closeBtn}
        onClick={onClose}
        aria-label="Fermer la galerie"
        type="button"
      >
        &times;
      </button>

      {currentIndex > 0 && (
        <button
          className={styles.navBtn}
          data-dir="prev"
          onClick={goPrev}
          aria-label="Photo précédente"
          type="button"
        >
          &#8249;
        </button>
      )}

      <img
        src={photo.url}
        alt={photo.alt}
        className={styles.photo}
      />

      {currentIndex < photos.length - 1 && (
        <button
          className={styles.navBtn}
          data-dir="next"
          onClick={goNext}
          aria-label="Photo suivante"
          type="button"
        >
          &#8250;
        </button>
      )}

      <div className={styles.footer}>
        <span className={styles.counter} aria-live="polite">
          {currentIndex + 1} / {photos.length}
        </span>
        {credit && <span className={styles.credit}>{credit}</span>}
      </div>
    </dialog>
  );
}
