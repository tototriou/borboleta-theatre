import Link from "next/link";
import Butterfly from "./Butterfly";

/** Navbar sombre fixe en haut, inspiree de la maquette rose. */
export default function Header() {
  return (
    <nav className="navbar-dark">
      <Link href="/" className="navbar-brand">
        <Butterfly size={28} />
        Borboleta Théâtre
      </Link>
      <ul className="navbar-links">
        <li><Link href="/spectacles/">Spectacles</Link></li>
        <li><Link href="/compagnie/">Compagnie</Link></li>
        <li><Link href="/galerie/">Galerie</Link></li>
        <li><Link href="/agenda/">Agenda</Link></li>
        <li><Link href="/contact/">Contact</Link></li>
      </ul>
    </nav>
  );
}
