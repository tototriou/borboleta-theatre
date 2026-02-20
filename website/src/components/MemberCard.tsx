"use client";

import Image from "next/image";
import { Membre } from "@/types";
import styles from "./MemberCard.module.scss";

interface MemberCardProps {
  membre: Membre;
  onClick: () => void;
}

/** Carte d'un membre de l'équipe avec photo et rôle. Clic ouvre la modale détail. */
export default function MemberCard({ membre, onClick }: MemberCardProps) {
  return (
    <button
      className={styles.card}
      onClick={onClick}
      type="button"
      aria-label={`Voir le profil de ${membre.prenom} ${membre.nom}, ${membre.role}`}
    >
      <div className={styles.image}>
        <Image
          src={membre.photo_url}
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width: 576px) 50vw, 15em"
        />
      </div>
      <div className={styles.description}>
        <p className={styles.nomPrenom}>
          {membre.prenom} {membre.nom}
        </p>
        <p className={styles.role}>{membre.role}</p>
      </div>
    </button>
  );
}
