"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Butterfly from "./Butterfly";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/#compagnie", label: "Compagnie" },
  { href: "/spectacles/", label: "Spectacles" },
  { href: "/agenda/", label: "Agenda" },
  { href: "/contact/", label: "Contact" },
  { href: "/galerie/", label: "Galerie" },
];

/** Navbar responsive avec menu burger sur mobile. */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Skip link pour accessibilité */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      <header>
        <nav className="navbar-dark" aria-label="Navigation principale">
          <Link
            href="/"
            className="navbar-brand"
            aria-label="Borboleta Théâtre - Accueil"
            onClick={closeMenu}
          >
            <Butterfly size={28} />
            <span>Borboleta Théâtre</span>
          </Link>

          {/* Bouton burger mobile */}
          <button
            className="navbar-burger"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="navbar-menu"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span className={`burger-line ${isMenuOpen ? "open" : ""}`} />
            <span className={`burger-line ${isMenuOpen ? "open" : ""}`} />
            <span className={`burger-line ${isMenuOpen ? "open" : ""}`} />
          </button>

          {/* Menu de navigation */}
          <ul
            id="navbar-menu"
            className={`navbar-links ${isMenuOpen ? "open" : ""}`}
            role="list"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
