"use client";

import { Membre } from "@/types";
import { useDialog } from "@/hooks/useDialog";
import styles from "./MemberModal.module.scss";

interface MemberModalProps {
  membre: Membre | null;
  onClose: () => void;
}

/** Modale affichant le detail d'un membre : photo, biographie, spectacles et CV. */
export default function MemberModal({ membre, onClose }: MemberModalProps) {
  const dialogRef = useDialog(!!membre, onClose);

  if (!membre) return null;

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
          <div className="text-center">
            <h2>
              {membre.prenom} {membre.nom}
            </h2>
            <p className={styles.role}>{membre.role}</p>
          </div>

          <div className={styles.photoPopup}>
            <img
              src={membre.photo_url}
              alt={`${membre.prenom} ${membre.nom}`}
            />
          </div>

          <div className="trait70percent" />
          <p className={styles.biographie}>{membre.biographie}</p>
          <div className="trait70percent" />

          <div className={styles.finModal}>
            <div className={styles.spectaclesList}>
              <h6>Spectacles :</h6>
              <ul>
                {membre.spectacles.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
              <a href="/spectacles/">
                <img
                  src="/icons/arrow-right-circle.svg"
                  alt="Voir les spectacles"
                />
              </a>
            </div>

            <div className={styles.verticalBar} />

            <a
              href={membre.cv_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cvLink}
            >
              <p>mon cv</p>
              <img src="/icons/download.svg" alt="Telecharger le CV" />
            </a>
          </div>
        </div>
      </div>
    </dialog>
  );
}
