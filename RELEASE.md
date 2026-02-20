# Release Notes - Borboleta Théâtre

Historique des versions du site [borboletatheatre.fr](https://borboletatheatre.fr).

Format : [Semantic Versioning](https://semver.org/lang/fr/)

---

## [1.5.3] - 2026-02-20

### Modifié
- Fusion de la page Compagnie dans la page d'accueil (section `#compagnie`)
- Bouton "Découvrir" → scroll smooth vers la section compagnie
- Lien nav "Compagnie" → ancre `/#compagnie`

### Supprimé
- Route `/compagnie` (remplacée par section dans l'accueil)

---

## [1.5.2] - 2026-02-20

### Modifié
- Réorganisation des onglets de navigation : Compagnie → Spectacles → Agenda → Contact → Galerie

---

## [1.5.1] - 2026-02-20

### Corrigé
- Revert de la migration `next/image` qui causait des cartes surdimensionnées
- Restauration des composants à l'état v1.5.0

---

## [1.5.0] - 2026-02-20

### Ajouté
- Navbar responsive avec menu burger sur mobile
- Skip link "Aller au contenu principal" pour l'accessibilité
- Focus visible global (outline dorée sur tous les éléments interactifs)
- Attribut `aria-current="page"` sur le lien actif dans la navbar
- Media queries responsive pour MemberCard et SpectacleCard

### Modifié
- `font-display: swap` sur toutes les @font-face pour améliorer les performances
- Grilles de cartes adaptatives sur tablette et mobile

---

## [1.4.1] - 2026-02-20

### Ajouté
- Spectacle *Allô Stella* (slug : `stella`)

---

## [1.4.0] - 2025-02-20

### Ajouté
- Design system SCSS avec variables centralisées (`_variables.scss`)
- Mixins réutilisables (responsive, flex-center, page-wrapper)
- Composant Butterfly configurable (couleurs en props)
- Documentation README complète pour l'installation

### Modifié
- Migration de globals.scss vers les variables SCSS
- Uniformisation des cartes MemberCard et SpectacleCard

---

## [1.3.0] - 2025-02-20

### Corrigé
- Scroll horizontal sur les pages (overflow-x: hidden)
- Layout cassé sur la page Compagnie (z-index, structure HTML)

### Modifié
- Restructuration sémantique des pages (main comme wrapper principal)

---

## [1.2.0] - 2025-02-20

### Ajouté
- Métadonnées SEO sur toutes les pages (title, description, Open Graph)
- Fichiers sitemap.xml et robots.txt
- Attributs aria-label pour l'accessibilité
- Structure HTML sémantique (main, section, article)

---

## [1.1.0] - 2025-02-01

### Ajouté
- Page Galerie avec lightbox et navigation clavier
- Pages dédiées pour chaque spectacle (`/spectacles/[slug]/`)
- Thème rose avec papillons SVG et fil rouge décoratif
- Carousel d'images sur les pages spectacles

### Modifié
- Migration des spectacles de modales vers pages dédiées

---

## [1.0.0] - 2025-01-31

### Ajouté
- Migration complète d'Angular 17 vers Next.js 14
- Export statique pour GitHub Pages
- Pages : Accueil, Compagnie, Spectacles, Agenda, Contact
- Composants : Header, Footer, MemberCard, MemberModal, SpectacleCard
- Contenu éditable via fichiers JSON
- Déploiement automatique via GitHub Actions
