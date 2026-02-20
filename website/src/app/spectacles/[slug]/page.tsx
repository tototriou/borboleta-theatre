import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import Butterfly from "@/components/Butterfly";
import RedThread from "@/components/RedThread";
import spectaclesData from "@/content/spectacles.json";
import { Spectacle } from "@/types";
import styles from "./page.module.scss";

/** Génère les paramètres statiques pour chaque spectacle. */
export function generateStaticParams() {
  const spectacles = spectaclesData.spectacles as Spectacle[];
  return spectacles.map((s) => ({ slug: s.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function SpectaclePage({ params }: Props) {
  const { slug } = await params;
  const spectacles = spectaclesData.spectacles as Spectacle[];
  const spectacle = spectacles.find((s) => s.slug === slug);

  if (!spectacle) {
    return (
      <>
        <Header />
        <div className={styles.wrapper}>
          <h1>Spectacle introuvable</h1>
          <Link href="/spectacles/" className="btn-borboleta">
            Retour aux spectacles
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const isJuliet = spectacle.titre === "JULIET";

  return (
    <>
      <div className={styles.wrapper}>
        <RedThread className="deco-thread" />
        <Butterfly className={`deco-butterfly ${styles.butterfly1}`} size={60} />
        <Butterfly className={`deco-butterfly ${styles.butterfly2}`} size={45} />
        <Header />

        <div className={styles.content}>
          <Link href="/spectacles/" className={styles.backLink}>
            &larr; Retour aux spectacles
          </Link>

          <h1
            className={styles.titre}
            style={isJuliet ? { fontFamily: "'Gochi_Hand', cursive" } : undefined}
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

          <div className={styles.infoSection}>
            {spectacle.cadre.map((item, i) => (
              <div key={`cadre-${i}`} className={styles.context}>
                {i % 2 === 0 ? <em>{item}</em> : <h6>{item}</h6>}
              </div>
            ))}
          </div>

          <div className="trait70percent" />

          <div className={styles.infoSection}>
            {spectacle.creation.map((item, i) => (
              <div key={`creation-${i}`} className={styles.context}>
                {i % 2 === 0 ? <em>{item}</em> : <h6>{item}</h6>}
              </div>
            ))}
          </div>

          <div className="trait70percent" />

          <h6 className="text-center">
            <em>Résumé</em>
          </h6>
          <p className={styles.resume}>{spectacle.resume}</p>

          <ImageCarousel
            photos={spectacle.photos}
            creditPhoto={spectacle.credit_photo}
          />

          <div className="trait70percent" />

          <div className={styles.footer}>
            <div className={styles.agendaLink}>
              <h6 className="text-center">Voir nos prochaines dates :</h6>
              <Link href="/agenda/" className="btn btn-dark">
                agenda
              </Link>
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

      <Footer />
    </>
  );
}
