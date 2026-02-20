"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MemberCard from "@/components/MemberCard";
import MemberModal from "@/components/MemberModal";
import compagnieData from "@/content/compagnie.json";
import Butterfly from "@/components/Butterfly";
import RedThread from "@/components/RedThread";
import { CompagnieData, Membre } from "@/types";
import styles from "./page.module.scss";

export default function CompagniePage() {
  const [selectedMember, setSelectedMember] = useState<Membre | null>(null);
  const { description, membre: membres } = compagnieData as CompagnieData;

  return (
    <>
      <div className={styles.wrapper}>
        <RedThread className="deco-thread" />
        <Butterfly className={`deco-butterfly ${styles.butterfly1}`} size={60} />
        <Butterfly className={`deco-butterfly ${styles.butterfly2}`} size={45} />
        <Header />

        <div className={styles.heroImage}>
          <img
            src="/images/compagnie/images/image-compagnie.jpeg"
            alt="Borboleta Théâtre"
          />
        </div>

        <section className="text-center mx-5">
          <h1>La Compagnie</h1>
          <div className={styles.description}>
            {description.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        <div className="trait70vw" />
        <h1>L&apos;équipe Artistique</h1>

        <div className={styles.cardGrid}>
          {membres.map((membre, i) => (
            <MemberCard
              key={i}
              membre={membre}
              onClick={() => setSelectedMember(membre)}
            />
          ))}
        </div>
      </div>

      <MemberModal
        membre={selectedMember}
        onClose={() => setSelectedMember(null)}
      />

      <Footer />
    </>
  );
}
