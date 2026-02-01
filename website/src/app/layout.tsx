import type { Metadata } from "next";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Borboleta Théâtre",
  description:
    "Borboleta Théâtre - Compagnie de théâtre fondée par Sidonie Vilas Boas et Romain Triouleyre",
  openGraph: {
    title: "Borboleta Théâtre",
    description: "Compagnie de théâtre contemporain",
    url: "https://borboletatheatre.fr",
    siteName: "Borboleta Théâtre",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
