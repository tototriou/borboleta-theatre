import Link from "next/link";
import Butterfly from "./Butterfly";

/** Navbar sombre fixe en haut avec logo papillon et liens de navigation. */
export default function Header() {
  return (
    <header>
      <nav className="navbar-dark" aria-label="Navigation principale">
        <Link href="/" className="navbar-brand" aria-label="Borboleta Théâtre - Accueil">
          <Butterfly size={28} />
          <span>Borboleta Théâtre</span>
        </Link>
        <ul className="navbar-links" role="list">
          <li><Link href="/spectacles/">Spectacles</Link></li>
          <li><Link href="/compagnie/">Compagnie</Link></li>
          <li><Link href="/galerie/">Galerie</Link></li>
          <li><Link href="/agenda/">Agenda</Link></li>
          <li><Link href="/contact/">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
