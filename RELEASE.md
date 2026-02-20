# Release Notes - Borboleta Théâtre

Historique des versions du site [borboletatheatre.fr](https://borboletatheatre.fr).

Format : [Semantic Versioning](https://semver.org/lang/fr/)

---

## [1.7.1] - 2026-02-21

### Supprimé
- Bouton "Aller au contenu principal" (skip link) retiré du Header

---

## [1.7.0] - 2026-02-21

### Modifié
- Page galerie : titre affiché sans l'année (sous_titre retiré de l'affichage)
- Photos limitées à 15 maximum par spectacle
- Lightbox : affiche désormais le crédit photo (par photo ou par défaut de la catégorie)
- Thumbnails : attribut `alt` descriptif sur chaque photo (accessibilité WCAG)

### Ajouté
- Nouvelle interface `GaleriePhoto` avec champs `url`, `alt`, `credit?`
- Prop `defaultCredit` sur `LightboxModal`

### Modifié (JSON)
- `galerie.json` : photos converties en objets `{ url, alt, credit? }` au lieu de simples chemins

---

## [1.6.0] - 2026-02-21

### Modifié
- Page agenda entièrement refondée : suppression des images, layout liste
- Séparation dynamique passé/futur selon la date du navigateur (`Date.now()`)
- Dates futures groupées par spectacle (avec lien vers la page du spectacle)
- Dates passées triées par date décroissante, groupées par année
- Message "Aucune date à venir" affiché si aucun événement futur

### Ajouté
- Nouveau composant client `AgendaContent.tsx` gérant la logique de tri/groupement
- Champs `date` (ISO YYYY-MM-DD), `dateDisplay`, `spectacleName`, `slug` dans `agenda.json`

### Supprimé
- Champ `photo_url` retiré de `agenda.json` et de l'interface `AgendaEvent`
- Interface `AgendaYear` supprimée des types TypeScript

---

## [1.5.6] - 2026-02-20

### Modifié
- Refonte de la page individuelle spectacle : layout deux colonnes (infos techniques / carousel + résumé)
- Colonne gauche : titre, sous-titre, durée, public, distribution, production & soutiens, remerciements, dossier PDF
- Colonne droite : carousel photos + description du spectacle
- Section extras (affichée si remplie) : extraits/citations, articles de presse, vidéos YouTube

### Ajouté
- Nouveaux champs dans `spectacles.json` : `remerciements`, `extraits`, `presse`, `videos`
- Interfaces TypeScript `Extrait` et `ArticlePresse`
- Suppression du champ `youtube_url` remplacé par le tableau `videos`

---

## [1.5.5] - 2026-02-20

### Modifié
- Refonte de la page liste des spectacles : layout en lignes alternées (image / contenu)
- Titre de la page plus grand, spectacles séparés par une ligne
- Chaque spectacle affiche : titre, sous-titre, accroche italique, durée, public, distribution, bouton "En savoir plus"
- Nouveaux champs `accroche`, `duree`, `public` dans `spectacles.json`

### Corrigé
- Lien "← Retour aux spectacles" déplacé hors de la boîte contenu pour éviter le blocage par la police décorative

---

## [1.5.4] - 2026-02-20

### Modifié
- Section équipe artistique scindée en deux blocs : "Direction artistique" (Romain, Sidonie) et "Ils/Elles ont travaillé avec nous"
- Ajout du champ `category` (`"direction"` | `"collaboration"`) dans `compagnie.json` et l'interface `Membre`

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
