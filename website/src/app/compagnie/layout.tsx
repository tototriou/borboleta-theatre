import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Compagnie | Borboleta Théâtre",
  description:
    "Découvrez Borboleta Théâtre, compagnie de théâtre contemporain fondée par Sidonie Vilas Boas et Romain Triouleyre. Rencontrez l'équipe artistique.",
  openGraph: {
    title: "La Compagnie | Borboleta Théâtre",
    description: "Présentation de la compagnie et de l'équipe artistique",
  },
};

export default function CompagnieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
