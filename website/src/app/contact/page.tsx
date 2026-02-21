import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Butterfly from "@/components/Butterfly";
import RedThread from "@/components/RedThread";
import contactData from "@/content/contact.json";
import { ContactInfo } from "@/types";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Contact | Borboleta Théâtre",
  description:
    "Contactez Borboleta Théâtre par email ou téléphone. Retrouvez-nous sur Instagram et Facebook.",
  openGraph: {
    title: "Contact | Borboleta Théâtre",
    description: "Coordonnées et réseaux sociaux de la compagnie",
  },
};

/** Page de contact avec coordonnées et réseaux sociaux. */
export default function ContactPage() {
  const contact = contactData as ContactInfo;

  return (
    <>
      <div className={styles.wrapper}>
        <RedThread className="deco-thread" opacity={0.2} />
        <Butterfly className={`deco-butterfly ${styles.butterfly1}`} size={50} />
        <Butterfly className={`deco-butterfly ${styles.butterfly2}`} size={40} />
        <Header />

        <main id="main-content">
          <h1>Contactez-nous</h1>

          <section aria-label="Coordonnées">
            <address className={styles.mail}>
              {contact.email}
              <a
                href={`mailto:${contact.email}`}
                aria-label={`Envoyer un email à ${contact.email}`}
              >
                <img src="/icons/envelope.svg" alt="" aria-hidden="true" />
              </a>
            </address>

            <div className={styles.tel}>
              <p>{contact.telephone}</p>
              <div className={styles.iconTel} aria-hidden="true">
                <img src="/icons/telephone.svg" alt="" />
              </div>
            </div>
          </section>

          <section aria-label="Réseaux sociaux" className={styles.reseaux}>
            <a
              href={contact.instagram_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Borboleta Théâtre (nouvelle fenêtre)"
            >
              <img src="/icons/instagram.svg" alt="" aria-hidden="true" />
            </a>
            <a
              href={contact.facebook_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Borboleta Théâtre (nouvelle fenêtre)"
            >
              <img src="/icons/facebook.svg" alt="" aria-hidden="true" />
            </a>
          </section>

          <p className={styles.footer}>
            <em>{contact.mention_legale}</em>
          </p>
        </main>
      </div>
      <Footer />
    </>
  );
}
