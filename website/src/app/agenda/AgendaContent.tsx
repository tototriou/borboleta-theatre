"use client";

import { useMemo } from "react";
import Link from "next/link";
import agendaData from "@/content/agenda.json";
import { AgendaEvent } from "@/types";
import styles from "./page.module.scss";

interface SpectacleGroup {
  spectacleName: string;
  slug?: string;
  events: AgendaEvent[];
}

interface YearGroup {
  year: string;
  events: AgendaEvent[];
}

/**
 * Contenu dynamique de la page agenda.
 *
 * Sépare les événements en futur/passé selon la date du navigateur (Date.now()).
 * - Futur : groupé par spectacle (h3), trié par date ASC.
 * - Passé : groupé par année (h3), trié par date DESC.
 */
export default function AgendaContent() {
  const { futureBySpectacle, pastByYear } = useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const future: AgendaEvent[] = [];
    const past: AgendaEvent[] = [];

    (agendaData as AgendaEvent[]).forEach((event) => {
      const eventDate = new Date(event.date);
      if (eventDate >= now) {
        future.push(event);
      } else {
        past.push(event);
      }
    });

    future.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    past.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // Grouper les futures dates par spectacle
    const spectacleGroups: SpectacleGroup[] = [];
    future.forEach((event) => {
      const existing = spectacleGroups.find(
        (g) => g.spectacleName === event.spectacleName
      );
      if (existing) {
        existing.events.push(event);
      } else {
        spectacleGroups.push({
          spectacleName: event.spectacleName,
          slug: event.slug,
          events: [event],
        });
      }
    });

    // Grouper les dates passées par année
    const yearGroups: YearGroup[] = [];
    past.forEach((event) => {
      const year = event.date.substring(0, 4);
      const existing = yearGroups.find((g) => g.year === year);
      if (existing) {
        existing.events.push(event);
      } else {
        yearGroups.push({ year, events: [event] });
      }
    });

    return { futureBySpectacle: spectacleGroups, pastByYear: yearGroups };
  }, []);

  return (
    <div className={styles.content}>
      {/* Prochaines dates */}
      <section className={styles.section} aria-labelledby="future-heading">
        <h2 id="future-heading" className={styles.sectionTitle}>
          Prochaines dates
        </h2>

        {futureBySpectacle.length === 0 ? (
          <p className={styles.noEvent}>
            Aucune date à venir pour le moment.
          </p>
        ) : (
          futureBySpectacle.map(({ spectacleName, slug, events }) => (
            <div key={spectacleName} className={styles.spectacleGroup}>
              <h3 className={styles.spectacleTitle}>
                {slug ? (
                  <Link href={`/spectacles/${slug}/`}>{spectacleName}</Link>
                ) : (
                  spectacleName
                )}
              </h3>
              <ul className={styles.eventList}>
                {events.map((event, i) => (
                  <li key={i} className={styles.ligne}>
                    <time dateTime={event.date} className={styles.date}>
                      {event.dateDisplay}
                    </time>
                    <span className={styles.lieu}>{event.lieu}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </section>

      {/* Dates passées */}
      {pastByYear.length > 0 && (
        <section className={styles.section} aria-labelledby="past-heading">
          <h2 id="past-heading" className={styles.sectionTitle}>
            Dates passées
          </h2>

          {pastByYear.map(({ year, events }) => (
            <div key={year} className={styles.yearGroup}>
              <h3
                id={`annee-${year}`}
                className={styles.yearTitle}
                aria-label={`Année ${year}`}
              >
                {year}
              </h3>
              <ul className={styles.eventList}>
                {events.map((event, i) => (
                  <li key={i} className={styles.ligne}>
                    <span className={styles.spectacleName}>
                      {event.slug ? (
                        <Link href={`/spectacles/${event.slug}/`}>
                          {event.spectacleName}
                        </Link>
                      ) : (
                        event.spectacleName
                      )}
                    </span>
                    <time dateTime={event.date} className={styles.date}>
                      {event.dateDisplay}
                    </time>
                    <span className={styles.lieu}>{event.lieu}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
