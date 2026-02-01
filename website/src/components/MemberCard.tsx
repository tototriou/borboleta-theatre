"use client";

import { Membre } from "@/types";
import styles from "./MemberCard.module.scss";

interface MemberCardProps {
  membre: Membre;
  onClick: () => void;
}

export default function MemberCard({ membre, onClick }: MemberCardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.image}>
        <img src={membre.photo_url} alt={`${membre.prenom} ${membre.nom}`} />
      </div>
      <div className={styles.description}>
        <p className={styles.nomPrenom}>
          {membre.prenom} {membre.nom}
        </p>
        <p className={styles.role}>{membre.role}</p>
      </div>
    </div>
  );
}
