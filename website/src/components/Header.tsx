"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/agenda/", label: "Agenda" },
  { href: "/contact/", label: "Contact" },
  { href: "/galerie/", label: "Galerie" },
];

/** Navbar responsive avec menu burger sur mobile et dropdown Spectacles. */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLLIElement>(null);

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  // Fermer le dropdown au clic extérieur
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isSpectaclesActive =
    pathname.startsWith("/spectacles") || pathname.startsWith("/travaux");

  return (
    <header>
      <nav className="navbar-dark" aria-label="Navigation principale">
        <Link
          href="/"
          className="navbar-brand"
          aria-label="Borboleta Théâtre - Accueil"
          onClick={closeAll}
        >
          <img src="/images/logo.png" alt="" aria-hidden="true" height={36} style={{ width: "auto" }} />
          <span>Borboleta Théâtre</span>
        </Link>

        {/* Bouton burger mobile */}
        <button
          className="navbar-burger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          {/* Compagnie */}
          <li>
            <Link
              href="/#compagnie"
              onClick={closeAll}
              aria-current={pathname === "/#compagnie" ? "page" : undefined}
            >
              Compagnie
            </Link>
          </li>

          {/* Dropdown Spectacles */}
          <li className="navbar-dropdown" ref={dropdownRef}>
            {/* Desktop : bouton trigger */}
            <button
              className={`navbar-dropdown-trigger${isSpectaclesActive ? " active" : ""}`}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Spectacles
            </button>

            {isDropdownOpen && (
              <ul className="navbar-dropdown-menu" role="menu">
                <li>
                  <Link
                    href="/spectacles/"
                    onClick={closeAll}
                    aria-current={pathname.startsWith("/spectacles") ? "page" : undefined}
                  >
                    Nos spectacles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/travaux/"
                    onClick={closeAll}
                    aria-current={pathname.startsWith("/travaux") ? "page" : undefined}
                  >
                    Nos autres travaux
                  </Link>
                </li>
              </ul>
            )}

            {/* Mobile : liens directs toujours visibles dans le burger */}
            <div className="navbar-dropdown-mobile">
              <Link
                href="/spectacles/"
                onClick={closeAll}
                aria-current={pathname.startsWith("/spectacles") ? "page" : undefined}
              >
                Nos spectacles
              </Link>
              <Link
                href="/travaux/"
                onClick={closeAll}
                aria-current={pathname.startsWith("/travaux") ? "page" : undefined}
              >
                Nos autres travaux
              </Link>
            </div>
          </li>

          {/* Autres liens */}
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeAll}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
