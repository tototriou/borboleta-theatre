# Consignes pour Claude Code

## Projet

Site web de la compagnie de theatre Borboleta Theatre.
- Framework : Next.js 14 (App Router) avec TypeScript
- Styles : SCSS + Bootstrap
- Deploiement : GitHub Pages via GitHub Actions
- Contenu : fichiers JSON editables dans `website/src/content/`
- Domaine : borboletatheatre.fr

## Structure du projet

```
website/
├── public/
│   ├── images/
│   │   ├── compagnie/images/    # Photos spectacles, portraits membres
│   │   ├── compagnie/cv/        # PDFs (CVs, dossiers spectacles)
│   │   ├── home-page-image/     # Image accueil
│   │   └── spectacles/chimere/  # Photos additionnelles Chimeres
│   ├── icons/                   # SVGs (download, envelope, etc.)
│   └── fonts/                   # Catamaran, Sue Ellen Francisco, Gochi Hand
├── src/
│   ├── app/
│   │   ├── page.tsx             # Accueil
│   │   ├── compagnie/           # Page compagnie + membres
│   │   ├── spectacles/          # Liste des spectacles
│   │   ├── spectacles/[slug]/   # Pages individuelles spectacles (chimeres, juliet)
│   │   ├── galerie/             # Galerie photos
│   │   ├── agenda/              # Dates a venir
│   │   └── contact/             # Coordonnees
│   ├── components/
│   │   ├── Header.tsx           # Navbar avec logo papillon
│   │   ├── Footer.tsx           # Pied de page
│   │   ├── Butterfly.tsx        # SVG papillon decoratif
│   │   ├── RedThread.tsx        # SVG fil rouge decoratif
│   │   ├── SpectacleCard.tsx    # Carte cliquable vers page spectacle
│   │   ├── MemberCard.tsx       # Carte membre avec modale
│   │   ├── MemberModal.tsx      # Modale detail membre
│   │   ├── ImageCarousel.tsx    # Carousel photos dans page spectacle
│   │   └── LightboxModal.tsx    # Modale plein ecran galerie
│   ├── content/                 # Fichiers JSON editables
│   │   ├── spectacles.json      # Spectacles (avec slug pour URL)
│   │   ├── compagnie.json       # Description + membres
│   │   ├── agenda.json          # Evenements par annee
│   │   ├── galerie.json         # Photos par categorie
│   │   └── contact.json         # Coordonnees
│   ├── hooks/
│   │   └── useDialog.ts         # Hook pour modales <dialog>
│   ├── types/
│   │   └── index.ts             # Interfaces TypeScript pour les JSON
│   └── styles/
│       └── globals.scss         # Variables CSS, Bootstrap, styles globaux
└── next.config.ts               # Config export statique
```

## Pages et routes

| Route | Description |
|-------|-------------|
| `/` | Accueil avec image, titre, bouton Decouvrir |
| `/spectacles/` | Grille des spectacles |
| `/spectacles/chimeres/` | Page dediee Chimeres |
| `/spectacles/juliet/` | Page dediee Juliet |
| `/compagnie/` | Presentation + equipe artistique |
| `/galerie/` | Galerie photos avec lightbox |
| `/agenda/` | Prochaines dates |
| `/contact/` | Email, telephone, reseaux |

## Bonnes pratiques obligatoires

### Tester systematiquement

- Toujours executer `npm run build` dans `website/` apres toute modification pour verifier que le build passe
- Tester les pages affectees en local avec `npm run dev` quand c'est pertinent
- Verifier que les assets (images, PDFs, fonts) sont accessibles apres deplacement ou renommage

### Code clair et documente

- Ajouter des JSDoc sur les types, interfaces et composants non triviaux
- Les noms de variables, fonctions et composants doivent etre explicites
- Commenter uniquement quand la logique n'est pas evidente

### Refactorer et nettoyer

- Extraire la logique dupliquee dans des hooks (`src/hooks/`) ou des composants partages (`src/components/`)
- Garder tout le contenu textuel dans les fichiers JSON de `src/content/` (jamais de texte hardcode dans les composants)
- Privilegier les composants simples et les fichiers courts
- Supprimer les fichiers inutilises apres refactoring

### Ajouter un nouveau spectacle

1. Ajouter l'entree dans `spectacles.json` avec un `slug` unique
2. Ajouter les photos dans `public/images/`
3. Ajouter le dossier PDF dans `public/images/compagnie/cv/`
4. La page `/spectacles/[slug]/` est generee automatiquement

## Commandes utiles

```bash
cd website
npm run dev      # serveur local sur http://localhost:3000
npm run build    # build de production (genere le dossier out/)
```

## Theme visuel actuel

Palette rose/violet avec elements decoratifs :
- `--bg-primary: #f0b8d0` (rose)
- `--bg-secondary: #2d1b4e` (violet sombre)
- `--accent-gold: #d4a843` (or)
- `--accent-red: #c43c3c` (fil rouge)
- Papillons SVG et fil rouge sur chaque page
