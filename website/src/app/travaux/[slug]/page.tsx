import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import Butterfly from "@/components/Butterfly";
import RedThread from "@/components/RedThread";
import travauxData from "@/content/travaux.json";
import { Spectacle } from "@/types";
import styles from "./page.module.scss";

/** Génère les paramètres statiques pour chaque travail. */
export function generateStaticParams() {
  const travaux = travauxData.spectacles as Spectacle[];
  return travaux.map((s) => ({ slug: s.slug }));
}

/** Génère les métadonnées dynamiques pour chaque page travail. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const travaux = travauxData.spectacles as Spectacle[];
  const travail = travaux.find((s) => s.slug === slug);

  if (!travail) {
    return { title: "Travail introuvable | Borboleta Théâtre" };
  }

  return {
    title: `${travail.titre} | Borboleta Théâtre`,
    description: travail.resume.slice(0, 160),
    openGraph: {
      title: `${travail.titre} | Borboleta Théâtre`,
      description: travail.resume.slice(0, 160),
      images: [travail.photo_principale],
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

/** Page dédiée à un travail / atelier de la compagnie. */
export default async function TravauxSlugPage({ params }: Props) {
  const { slug } = await params;
  const travaux = travauxData.spectacles as Spectacle[];
  const travail = travaux.find((s) => s.slug === slug);

  if (!travail) {
    return (
      <>
        <Header />
        <main id="main-content" className={styles.wrapper}>
          <h1>Travail introuvable</h1>
          <Link href="/travaux/" className="btn-borboleta">
            Retour aux autres travaux
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const creationPairs = parsePairs(travail.creation);
  const cadrePairs = parsePairs(travail.cadre);
  const hasExtras =
    travail.extraits.length > 0 ||
    travail.presse.length > 0 ||
    travail.videos.length > 0;

  return (
    <>
      <div className={styles.wrapper}>
        <RedThread className="deco-thread" opacity={0.2} />
        <Butterfly className={`deco-butterfly ${styles.butterfly1}`} size={60} />
        <Butterfly className={`deco-butterfly ${styles.butterfly2}`} size={45} />
        <Header />

        <nav aria-label="Fil d'Ariane" className={styles.breadcrumb}>
          <Link href="/travaux/" className={styles.backLink}>
            &larr; Nos autres travaux
          </Link>
        </nav>

        <main id="main-content" className={styles.content}>
          <article>
            {/* Section principale : deux colonnes */}
            <div className={styles.mainSection}>
              {/* Colonne gauche : infos techniques */}
              <aside className={styles.infoColumn} aria-label="Informations techniques">
                <header>
                  <h1 className={styles.titre}>{travail.titre}</h1>
                  <p className={styles.sousTitre}>{travail.sous_titre}</p>
                </header>

                {(travail.duree || travail.public) && (
                  <div className={styles.metaBlock}>
                    {travail.duree && (
                      <p><span className={styles.metaLabel}>Durée</span> {travail.duree}</p>
                    )}
                    {travail.public && (
                      <p><span className={styles.metaLabel}>Public</span> {travail.public}</p>
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

                {travail.remerciements.length > 0 && (
                  <section aria-labelledby="remerciements-title" className={styles.infoBlock}>
                    <h2 id="remerciements-title" className={styles.blockTitle}>Remerciements</h2>
                    <ul className={styles.remerciementsList}>
                      {travail.remerciements.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </section>
                )}
              </aside>

              {/* Colonne droite : carousel + résumé + dossier */}
              <div className={styles.mediaColumn}>
                {travail.photos.length > 0 && (
                  <ImageCarousel
                    photos={travail.photos}
                    creditPhoto={travail.credit_photo}
                  />
                )}
                {travail.resume && (
                  <div className={styles.resume}>
                    {travail.resume.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                )}
                {travail.dossier_url && (
                  <div className={styles.dossierBlock}>
                    <a
                      href={travail.dossier_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.dossierBtn}
                      aria-label={`Télécharger le dossier de ${travail.titre}`}
                    >
                      <img src="/icons/download.svg" alt="" aria-hidden="true" className={styles.dossierIcon} />
                      Dossier de présentation
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Section extras : extraits, presse, vidéos */}
            {hasExtras && (
              <section className={styles.extrasSection} aria-label="Presse et médias">
                {travail.extraits.length > 0 && (
                  <div className={styles.extraitsBlock}>
                    {travail.extraits.map((extrait, i) => (
                      <blockquote key={i} className={styles.extrait}>
                        <p>&ldquo;{extrait.texte}&rdquo;</p>
                        <cite className={styles.extraitSource}>— {extrait.source}</cite>
                      </blockquote>
                    ))}
                  </div>
                )}

                {travail.presse.length > 0 && (
                  <div className={styles.presseBlock}>
                    <h2 className={styles.blockTitle}>Presse</h2>
                    <ul className={styles.presseList}>
                      {travail.presse.map((article, i) => (
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

                {travail.videos.length > 0 && (
                  <div className={styles.videosBlock}>
                    {travail.videos.map((videoId, i) => (
                      <div key={i} className={styles.videoWrapper}>
                        <iframe
                          width="100%"
                          height="400"
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={`Vidéo ${i + 1} — ${travail.titre}`}
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
