import Header from "@/components/Header";
import Footer from "@/components/Footer";
import agendaData from "@/content/agenda.json";
import { AgendaYear } from "@/types";
import styles from "./page.module.scss";

export default function AgendaPage() {
  const agenda = agendaData as AgendaYear[];

  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.title}>
          <h1>Agenda</h1>
        </div>

        <div className={styles.content}>
          {agenda.map((annee) => (
            <div key={annee.annee} className={styles.section}>
              <h2>{annee.annee}</h2>
              {annee.spectacles.map((spectacle, i) => (
                <div key={i} className={styles.ligne}>
                  <p>{spectacle.lieu}</p>
                  <p className={styles.date}>
                    <em>{spectacle.date}</em>
                  </p>
                  <a href="/spectacles/">
                    <img src={spectacle.photo_url} alt={spectacle.lieu} />
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
