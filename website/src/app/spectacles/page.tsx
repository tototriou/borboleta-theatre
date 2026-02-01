"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpectacleCard from "@/components/SpectacleCard";
import SpectacleModal from "@/components/SpectacleModal";
import spectaclesData from "@/content/spectacles.json";
import { Spectacle } from "@/types";
import styles from "./page.module.scss";

export default function SpectaclesPage() {
  const [selectedSpectacle, setSelectedSpectacle] = useState<Spectacle | null>(
    null
  );
  const spectacles = spectaclesData.spectacles as Spectacle[];

  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <h1>Les spectacles</h1>

        <div className={styles.cardGrid}>
          {spectacles.map((spectacle, i) => (
            <SpectacleCard
              key={i}
              spectacle={spectacle}
              onClick={() => setSelectedSpectacle(spectacle)}
            />
          ))}
        </div>
      </div>

      <SpectacleModal
        spectacle={selectedSpectacle}
        onClose={() => setSelectedSpectacle(null)}
      />

      <Footer />
    </>
  );
}
