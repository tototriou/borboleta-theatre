"use client";

import { Spectacle } from "@/types";
import { useDialog } from "@/hooks/useDialog";
import ImageCarousel from "./ImageCarousel";
import styles from "./SpectacleModal.module.scss";

interface SpectacleModalProps {
  spectacle: Spectacle | null;
  onClose: () => void;
}

/**
 * Modale affichant le detail d'un spectacle :
 * video YouTube, equipe de creation, resume, carousel de photos et dossier PDF.
 */
export default function SpectacleModal({
  spectacle,
  onClose,
}: SpectacleModalProps) {
  const dialogRef = useDialog(!!spectacle, onClose);

  if (!spectacle) return null;

  const isJuliet = spectacle.titre === "JULIET";

  return (
    <dialog ref={dialogRef} className={styles.modal}>
      <div className={styles.wrapper}>
        <button
          className={styles.btnClose}
          onClick={onClose}
          aria-label="Fermer"
        >
          &times;
        </button>

        <div className={styles.body}>
          <h1
            className={styles.titreSpectacle}
            style={
              isJuliet
                ? { fontFamily: "'Gochi_Hand', cursive" }
                : undefined
            }
          >
            {spectacle.titre}
          </h1>

          <p className={styles.sousTitre}>
            <em>{spectacle.sous_titre}</em>
          </p>

          <div className="trait70percent" />

          {spectacle.youtube_url && (
            <>
              <div className={styles.youtubeWrapper}>
                <iframe
                  width="100%"
                  height="400"
                  src={`https://www.youtube.com/embed/${spectacle.youtube_url}`}
                  title={spectacle.titre}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="trait70percent" />
            </>
          )}

          {spectacle.cadre.map((item, i) => (
            <div key={`cadre-${i}`} className={styles.context}>
              {i % 2 === 0 ? <em>{item}</em> : <h6>{item}</h6>}
            </div>
          ))}

          <div className="trait70percent" />

          {spectacle.creation.map((item, i) => (
            <div key={`creation-${i}`} className={styles.context}>
              {i % 2 === 0 ? <em>{item}</em> : <h6>{item}</h6>}
            </div>
          ))}

          <div className="trait70percent" />

          <h6 className="text-center">
            <em>Résumé</em>
          </h6>
          <p className="text-justify mx-3 mb-5">{spectacle.resume}</p>

          <ImageCarousel
            photos={spectacle.photos}
            creditPhoto={spectacle.credit_photo}
          />

          <div className="trait70percent" />

          <div className={styles.footerSpectacle}>
            <div className={styles.agendaLink}>
              <h6 className="text-center">Voir nos prochaines dates :</h6>
              <a href="/agenda/">
                <button className="btn btn-dark">agenda</button>
              </a>
            </div>
            <div className={styles.dossierComp}>
              <h6 className="text-center">Dossier spectacle :</h6>
              <a
                href={spectacle.dossier_url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.download}
              >
                <img src="/icons/download.svg" alt="Télécharger le dossier" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
