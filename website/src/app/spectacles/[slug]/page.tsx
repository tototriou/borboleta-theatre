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

/** Utilitaire : parse un tableau alternant [label, valeur, label, valeur, ...] en paires. */
function parsePairs(arr: string[]): { label: string; valeur: string }[] {
  const pairs: { label: string; valeur: string }[] = [];
  for (let i = 0; i + 1 < arr.length; i += 2) {
    pairs.push({ label: arr[i], valeur: arr[i + 1] });
  }
  return pairs;
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
        <main id="main-content" className={styles.wrapper}>
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
  const creationPairs = parsePairs(spectacle.creation);
  const cadrePairs = parsePairs(spectacle.cadre);
  const hasExtras =
    spectacle.extraits.length > 0 ||
    spectacle.presse.length > 0 ||
    spectacle.videos.length > 0;

  return (
    <>
      <div className={styles.wrapper}>
        <RedThread className="deco-thread" opacity={0.2} />
        <Butterfly className={`deco-butterfly ${styles.butterfly1}`} size={60} />
        <Butterfly className={`deco-butterfly ${styles.butterfly2}`} size={45} />
        <Header />

        <nav aria-label="Fil d'Ariane" className={styles.breadcrumb}>
          <Link href="/spectacles/" className={styles.backLink}>
            &larr; Retour aux spectacles
          </Link>
        </nav>

        <main id="main-content" className={styles.content}>
          <article>
            {/* Section principale : deux colonnes */}
            <div className={styles.mainSection}>
              {/* Colonne gauche : infos techniques */}
              <aside className={styles.infoColumn} aria-label="Informations techniques">
                <header>
                  <h1
                    className={styles.titre}
                    style={isJuliet ? { fontFamily: "'Gochi_Hand', cursive" } : undefined}
                  >
                    {spectacle.titre}
                  </h1>
                  <p className={styles.sousTitre}>{spectacle.sous_titre}</p>
                </header>

                {(spectacle.duree || spectacle.public) && (
                  <div className={styles.metaBlock}>
                    {spectacle.duree && (
                      <p><span className={styles.metaLabel}>Durée</span> {spectacle.duree}</p>
                    )}
                    {spectacle.public && (
                      <p><span className={styles.metaLabel}>Public</span> {spectacle.public}</p>
                    )}
                  </div>
                )}

                <section aria-labelledby="distribution-title" className={styles.infoBlock}>
                  <h2 id="distribution-title" className={styles.blockTitle}>Distribution</h2>
                  <dl className={styles.pairs}>
                    {creationPairs.map(({ label, valeur }) => (
                      <div key={label} className={styles.pairRow}>
                        <dt className={styles.pairLabel}>{label}</dt>
                        <dd className={styles.pairValue}>{valeur}</dd>
                      </div>
                    ))}
                  </dl>
                </section>

                <section aria-labelledby="production-title" className={styles.infoBlock}>
                  <h2 id="production-title" className={styles.blockTitle}>Production &amp; soutiens</h2>
                  <dl className={styles.pairs}>
                    {cadrePairs.map(({ label, valeur }) => (
                      <div key={label} className={styles.pairRow}>
                        <dt className={styles.pairLabel}>{label.replace(/-/g, "")}</dt>
                        <dd className={styles.pairValue}>{valeur}</dd>
                      </div>
                    ))}
                  </dl>
                </section>

                {spectacle.remerciements.length > 0 && (
                  <section aria-labelledby="remerciements-title" className={styles.infoBlock}>
                    <h2 id="remerciements-title" className={styles.blockTitle}>Remerciements</h2>
                    <ul className={styles.remerciementsList}>
                      {spectacle.remerciements.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </section>
                )}

              </aside>

              {/* Colonne droite : carousel + résumé */}
              <div className={styles.mediaColumn}>
                {spectacle.photos.length > 0 && (
                  <ImageCarousel
                    photos={spectacle.photos}
                    creditPhoto={spectacle.credit_photo}
                  />
                )}
                {spectacle.resume && (
                  <p className={styles.resume}>{spectacle.resume}</p>
                )}
              </div>

              {/* Dossier : col gauche sur desktop, après le résumé sur mobile */}
              {spectacle.dossier_url && (
                <div className={styles.dossierBlock}>
                  <p className={styles.metaLabel}>Dossier spectacle</p>
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
              )}
            </div>

            {/* Section extras : extraits, presse, vidéos */}
            {hasExtras && (
              <section className={styles.extrasSection} aria-label="Presse et médias">
                {spectacle.extraits.length > 0 && (
                  <div className={styles.extraitsBlock}>
                    {spectacle.extraits.map((extrait, i) => (
                      <blockquote key={i} className={styles.extrait}>
                        <p>&ldquo;{extrait.texte}&rdquo;</p>
                        <cite className={styles.extraitSource}>— {extrait.source}</cite>
                      </blockquote>
                    ))}
                  </div>
                )}

                {spectacle.presse.length > 0 && (
                  <div className={styles.presseBlock}>
                    <h2 className={styles.blockTitle}>Presse</h2>
                    <ul className={styles.presseList}>
                      {spectacle.presse.map((article, i) => (
                        <li key={i}>
                          {article.url ? (
                            <a
                              href={article.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.presseLink}
                            >
                              <span className={styles.presseTitre}>{article.titre}</span>
                              <span className={styles.presseSource}>{article.source}</span>
                            </a>
                          ) : (
                            <>
                              <span className={styles.presseTitre}>{article.titre}</span>
                              <span className={styles.presseSource}>{article.source}</span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {spectacle.videos.length > 0 && (
                  <div className={styles.videosBlock}>
                    {spectacle.videos.map((videoId, i) => (
                      <div key={i} className={styles.videoWrapper}>
                        <iframe
                          width="100%"
                          height="400"
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={`Vidéo ${i + 1} — ${spectacle.titre}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )}

            {/* Footer : agenda */}
            <footer className={styles.footer}>
              <p className="text-center">Voir nos prochaines dates :</p>
              <Link href="/agenda/" className="btn btn-dark">
                Agenda
              </Link>
            </footer>
          </article>
        </main>
      </div>

      <Footer />
    </>
  );
}
