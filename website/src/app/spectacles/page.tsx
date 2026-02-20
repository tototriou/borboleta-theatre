import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpectacleCard from "@/components/SpectacleCard";
import spectaclesData from "@/content/spectacles.json";
import Butterfly from "@/components/Butterfly";
import RedThread from "@/components/RedThread";
import { Spectacle } from "@/types";
import styles from "./page.module.scss";

export default function SpectaclesPage() {
  const spectacles = spectaclesData.spectacles as Spectacle[];

  return (
    <>
      <div className={styles.wrapper}>
        <RedThread className="deco-thread" />
        <Butterfly className={`deco-butterfly ${styles.butterfly1}`} size={55} />
        <Butterfly className={`deco-butterfly ${styles.butterfly2}`} size={40} />
        <Header />
        <h1>Les spectacles</h1>

        <div className={styles.cardGrid}>
          {spectacles.map((spectacle) => (
            <SpectacleCard key={spectacle.slug} spectacle={spectacle} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
