import type { Metadata } from "next";
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

/** Génère les métadonnées dynamiques pour chaque page spectacle. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const spectacles = spectaclesData.spectacles as Spectacle[];
  const spectacle = spectacles.find((s) => s.slug === slug);

  if (!spectacle) {
    return { title: "Spectacle introuvable | Borboleta Théâtre" };
  }

  return {
    title: `${spectacle.titre} | Borboleta Théâtre`,
    description: spectacle.resume.slice(0, 160),
    openGraph: {
      title: `${spectacle.titre} | Borboleta Théâtre`,
      description: spectacle.resume.slice(0, 160),
      images: [spectacle.photo_principale],
    },
  };
}

interface Props {
  params: Promise<{ slug: string }>;
}

/** Page dédiée à un spectacle. */
export default async function SpectaclePage({ params }: Props) {
  const { slug } = await params;
  const spectacles = spectaclesData.spectacles as Spectacle[];
  const spectacle = spectacles.find((s) => s.slug === slug);

  if (!spectacle) {
    return (
      <>
        <Header />
        <main className={styles.wrapper}>
          <h1>Spectacle introuvable</h1>
          <Link href="/spectacles/" className="btn-borboleta">
            Retour aux spectacles
          </Link>
        </main>
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

        <main className={styles.content}>
          <nav aria-label="Fil d'Ariane">
            <Link href="/spectacles/" className={styles.backLink}>
              &larr; Retour aux spectacles
            </Link>
          </nav>

          <article>
            <header>
              <h1
                className={styles.titre}
                style={isJuliet ? { fontFamily: "'Gochi_Hand', cursive" } : undefined}
              >
                {spectacle.titre}
              </h1>
              <p className={styles.sousTitre}>
                <em>{spectacle.sous_titre}</em>
              </p>
            </header>

            <div className="trait70percent" />

            {spectacle.youtube_url && (
              <>
                <section className={styles.youtubeWrapper} aria-label="Vidéo du spectacle">
                  <iframe
                    width="100%"
                    height="400"
                    src={`https://www.youtube.com/embed/${spectacle.youtube_url}`}
                    title={`Vidéo du spectacle ${spectacle.titre}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </section>
                <div className="trait70percent" />
              </>
            )}

            <section className={styles.infoSection} aria-label="Cadre de production">
              {spectacle.cadre.map((item, i) => (
                <div key={`cadre-${i}`} className={styles.context}>
                  {i % 2 === 0 ? <em>{item}</em> : <p><strong>{item}</strong></p>}
                </div>
              ))}
            </section>

            <div className="trait70percent" />

            <section className={styles.infoSection} aria-label="Équipe de création">
              {spectacle.creation.map((item, i) => (
                <div key={`creation-${i}`} className={styles.context}>
                  {i % 2 === 0 ? <em>{item}</em> : <p><strong>{item}</strong></p>}
                </div>
              ))}
            </section>

            <div className="trait70percent" />

            <section aria-label="Résumé">
              <h2 className="text-center">
                <em>Résumé</em>
              </h2>
              <p className={styles.resume}>{spectacle.resume}</p>
            </section>

            <ImageCarousel
              photos={spectacle.photos}
              creditPhoto={spectacle.credit_photo}
            />

            <div className="trait70percent" />

            <footer className={styles.footer}>
              <div className={styles.agendaLink}>
                <p className="text-center">Voir nos prochaines dates :</p>
                <Link href="/agenda/" className="btn btn-dark">
                  Agenda
                </Link>
              </div>
              <div className={styles.dossierComp}>
                <p className="text-center">Dossier spectacle :</p>
                <a
                  href={spectacle.dossier_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.download}
                  aria-label={`Télécharger le dossier de ${spectacle.titre}`}
                >
                  <img src="/icons/download.svg" alt="" aria-hidden="true" />
                </a>
              </div>
            </footer>
          </article>
        </main>
      </div>

      <Footer />
    </>
  );
}
