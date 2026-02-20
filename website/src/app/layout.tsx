import type { Metadata } from "next";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://borboletatheatre.fr"),
  title: {
    default: "Borboleta Théâtre",
    template: "%s | Borboleta Théâtre",
  },
  description:
    "Borboleta Théâtre - Compagnie de théâtre contemporain fondée par Sidonie Vilas Boas et Romain Triouleyre",
  openGraph: {
    title: "Borboleta Théâtre",
    description: "Compagnie de théâtre contemporain",
    url: "https://borboletatheatre.fr",
    siteName: "Borboleta Théâtre",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/** Layout racine de l'application. */
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
