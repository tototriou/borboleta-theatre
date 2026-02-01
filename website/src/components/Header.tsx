import Link from "next/link";

export default function Header() {
  return (
    <div className="retour-menu text-center">
      <Link href="/" className="link-retour-menu">
        <img
          src="/images/compagnie/images/logo-rond.PNG"
          alt="Borboleta Théâtre - Accueil"
        />
      </Link>
    </div>
  );
}
