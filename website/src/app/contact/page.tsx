import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Butterfly from "@/components/Butterfly";
import RedThread from "@/components/RedThread";
import contactData from "@/content/contact.json";
import { ContactInfo } from "@/types";
import styles from "./page.module.scss";

export default function ContactPage() {
  const contact = contactData as ContactInfo;

  return (
    <>
      <div className={styles.wrapper}>
        <RedThread className="deco-thread" />
        <Butterfly className={`deco-butterfly ${styles.butterfly1}`} size={50} />
        <Butterfly className={`deco-butterfly ${styles.butterfly2}`} size={40} />
        <Header />
        <h1>Contactez-nous</h1>

        <p className={styles.mail}>
          {contact.email}
          <a href={`mailto:${contact.email}`}>
            <img src="/icons/envelope.svg" alt="Envoyer un mail" />
          </a>
        </p>

        <div className={styles.tel}>
          <p>{contact.telephone}</p>
          <div className={styles.iconTel}>
            <img src="/icons/telephone.svg" alt="Téléphone" />
          </div>
        </div>

        <div className={styles.reseaux}>
          <a
            href={contact.instagram_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/instagram.svg" alt="Instagram" />
          </a>
          <a
            href={contact.facebook_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/facebook.svg" alt="Facebook" />
          </a>
        </div>

        <p className={styles.footer}>
          <em>{contact.mention_legale}</em>
        </p>
      </div>
      <Footer />
    </>
  );
}
