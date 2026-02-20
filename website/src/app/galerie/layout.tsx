import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie | Borboleta Théâtre",
  description:
    "Galerie photos des spectacles de Borboleta Théâtre : Chimères, Juliet et les coulisses de la compagnie.",
  openGraph: {
    title: "Galerie | Borboleta Théâtre",
    description: "Photos des spectacles et de la compagnie",
  },
};

export default function GalerieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
