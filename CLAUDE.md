# Consignes pour Claude Code — Borboleta Theatre

> **Règle méta** : Toute consigne globale donnée en cours de session doit être ajoutée à ce fichier dans la section appropriée. Ce fichier est la source de vérité du projet.

---

## Projet

Site web de la compagnie de théâtre Borboleta Theatre.

- **Framework** : Next.js 14 (App Router) + TypeScript
- **Styles** : SCSS + Bootstrap
- **Déploiement** : GitHub Pages via GitHub Actions
- **Contenu** : fichiers JSON dans `website/src/content/` — éditables sans connaissances techniques
- **Domaine** : borboletatheatre.fr

---

## Structure du projet

```
website/
├── public/
│   ├── images/
│   │   ├── compagnie/images/    # Photos spectacles, portraits membres
│   │   ├── compagnie/cv/        # PDFs (CVs, dossiers spectacles)
│   │   ├── home-page-image/     # Image accueil
│   │   └── spectacles/chimere/  # Photos additionnelles Chimères
│   ├── icons/                   # SVGs (download, envelope, etc.)
│   └── fonts/                   # Catamaran, Sue Ellen Francisco, Gochi Hand
├── src/
│   ├── app/
│   │   ├── page.tsx             # Accueil
│   │   ├── compagnie/           # Page compagnie + membres
│   │   ├── spectacles/          # Liste des spectacles
│   │   ├── spectacles/[slug]/   # Pages individuelles spectacles
│   │   ├── galerie/             # Galerie photos
│   │   ├── agenda/              # Dates à venir
│   │   └── contact/             # Coordonnées
│   ├── components/              # Composants réutilisables
│   ├── content/                 # JSON éditables (source de vérité du contenu)
│   ├── hooks/                   # Hooks React custom
│   ├── types/                   # Interfaces TypeScript
│   └── styles/
│       └── globals.scss         # Variables CSS, Bootstrap, styles globaux
└── next.config.ts               # Config export statique
```

---

## Pages et routes

| Route | Description |
|---|---|
| `/` | Accueil avec image, titre, bouton Découvrir |
| `/spectacles/` | Grille des spectacles |
| `/spectacles/chimeres/` | Page dédiée Chimères |
| `/spectacles/juliet/` | Page dédiée Juliet |
| `/compagnie/` | Présentation + équipe artistique |
| `/galerie/` | Galerie photos avec lightbox |
| `/agenda/` | Prochaines dates |
| `/contact/` | Email, téléphone, réseaux |

---

## Commandes utiles

```bash
cd website
npm run dev        # serveur local sur http://localhost:3000
npm run build      # build de production (génère out/)
npm run lint       # ESLint
npm run type-check # TypeScript strict
```

---

## Thème visuel

Palette rose/violet avec éléments décoratifs :

- `--bg-primary: #f0b8d0` (rose)
- `--bg-secondary: #2d1b4e` (violet sombre)
- `--accent-gold: #d4a843` (or)
- `--accent-red: #c43c3c` (fil rouge)
- Papillons SVG et fil rouge sur chaque page

---

## Standards de développement

### Tester systématiquement

- Toujours exécuter `npm run build` dans `website/` après toute modification
- Vérifier `npm run lint` et `npm run type-check` avant tout commit
- Tester les pages affectées en local avec `npm run dev`
- Vérifier que les assets (images, PDFs, fonts) restent accessibles après déplacement

### Code clair et maintenable

- Noms de variables, fonctions et composants explicites en anglais (code) / français (commentaires)
- JSDoc sur tous les composants non triviaux et les interfaces TypeScript
- Commenter uniquement quand la logique n'est pas évidente
- Fichiers courts : extraire dans des hooks (`src/hooks/`) ou composants partagés dès duplication
- Zéro texte hardcodé dans les composants — tout dans les JSON de `src/content/`
- Supprimer les fichiers inutilisés après refactoring

### Accessibilité (WCAG 2.1 AA minimum)

- Toujours renseigner `alt` sur les `<img>` (descriptif ou `alt=""` si décoratif)
- Contraste couleur texte/fond ≥ 4.5:1 (outil : [contrast-ratio.com](https://contrast-ratio.com))
- Navigation clavier fonctionnelle : focus visible sur tous les éléments interactifs
- Rôles ARIA explicites sur les composants custom (modales, carousels, lightbox)
- Les modales (`<dialog>`) doivent piéger le focus et se fermer avec Échap
- Pas de `<div onClick>` sans rôle — utiliser `<button>` ou `<a>` selon le contexte
- Structure de titres cohérente (`h1` unique par page, hiérarchie respectée)
- Les liens d'ancre et boutons ont un label accessible (texte visible ou `aria-label`)

### SEO

- Chaque page a un `<title>` et une `<meta name="description">` uniques et descriptifs
- Utiliser les balises sémantiques HTML5 : `<main>`, `<nav>`, `<article>`, `<section>`, `<header>`, `<footer>`
- Les images importantes ont un `alt` descriptif et incluent un mot-clé pertinent
- Métadonnées Open Graph (`og:title`, `og:description`, `og:image`) sur toutes les pages
- Générer un `sitemap.xml` et un `robots.txt` dans `public/`
- Les slugs des spectacles sont en minuscules, sans accents, avec tirets (`chimeres`, `juliet`)
- Ne pas bloquer l'indexation des pages publiques dans `robots.txt`

### Performance

- Images : utiliser le composant `<Image>` de Next.js (optimisation automatique)
- Préférer les formats WebP/AVIF pour les photos
- Pas de dépendances npm inutiles — évaluer le bundle size avant d'ajouter un package
- Les fonts sont auto-hébergées dans `public/fonts/` (déjà en place)

---

## Contenu éditable par des non-développeurs

**Principe** : tout le contenu visible sur le site doit pouvoir être modifié en éditant uniquement les fichiers JSON dans `src/content/`, sans toucher au code.

Fichiers JSON et leur rôle :

| Fichier | Contenu |
|---|---|
| `spectacles.json` | Titre, slug, description, photos, PDF dossier |
| `compagnie.json` | Texte de présentation + liste des membres |
| `agenda.json` | Événements par année (date, lieu, spectacle) |
| `galerie.json` | Photos par catégorie |
| `contact.json` | Email, téléphone, réseaux sociaux |

Règles à respecter dans le code :
- Jamais de texte en dur dans les composants `.tsx`
- Tout champ potentiellement variable (titre, lien, texte) vient d'un JSON
- Documenter le schéma de chaque JSON dans `src/types/index.ts` avec JSDoc

### Ajouter un nouveau spectacle

1. Ajouter l'entrée dans `spectacles.json` avec un `slug` unique (minuscules, sans accents)
2. Ajouter les photos dans `public/images/spectacles/<slug>/`
3. Ajouter le dossier PDF dans `public/images/compagnie/cv/`
4. La page `/spectacles/[slug]/` est générée automatiquement

---

## Conventions Git

### Messages de commit

Format : `type(scope): description courte en français`

Types acceptés :
- `feat` : nouvelle fonctionnalité
- `fix` : correction de bug
- `content` : modification de contenu (JSON, images)
- `style` : changement visuel sans impact fonctionnel
- `refactor` : réécriture sans changement de comportement
- `a11y` : amélioration accessibilité
- `seo` : amélioration référencement
- `perf` : amélioration performance
- `chore` : maintenance (dépendances, config)
- `docs` : documentation

Exemples :
```
feat(spectacles): ajouter page dédiée au spectacle Éclats
content(agenda): ajouter dates printemps 2025
fix(galerie): corriger fermeture lightbox au clic extérieur
a11y(header): ajouter aria-label sur le lien logo
```

Règles :
- Description en minuscules, sans point final
- Maximum 72 caractères
- Corps du commit pour expliquer le *pourquoi* si nécessaire
- Un commit = une intention claire

### Branches

- `main` : production (déploiement automatique) — **toujours stable et déployable**
- `feat/<nom>` : nouvelle fonctionnalité
- `fix/<nom>` : correction
- `content/<nom>` : mises à jour de contenu uniquement

### Règles de merge vers main

**Main doit être propre et fonctionnel à tout instant.** Aucun merge direct sur `main`.

Workflow obligatoire :
1. Créer une branche depuis `main` : `git checkout -b feat/nom-feature`
2. Développer et committer sur la branche
3. Avant de merger, s'assurer que la branche est à jour : `git rebase main`
4. Vérifier que `npm run build`, `npm run lint` et `npm run type-check` passent sur la branche
5. Merger avec **squash ou rebase** pour garder un historique `main` lisible :
   ```bash
   git checkout main
   git merge --squash feat/nom-feature   # un seul commit propre sur main
   git commit -m "feat(scope): description de la feature complète"
   git branch -d feat/nom-feature        # supprimer la branche après merge
   ```

Règles strictes :
- **Jamais de `git push --force` sur `main`**
- **Jamais de merge d'une branche dont le build échoue**
- Un merge sur `main` = une feature complète et testée, pas un work-in-progress
- Nommer les branches de façon explicite : `feat/page-nouveau-spectacle`, pas `feat/test` ou `feat/wip`

---

## Pre-commit hooks (Husky + lint-staged)

### Installation (à faire une seule fois)

```bash
cd website
npm install --save-dev husky lint-staged
npx husky init
```

### Configuration dans `package.json`

```json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{scss,css}": [
      "prettier --write"
    ],
    "*.json": [
      "prettier --write"
    ]
  }
}
```

### Hook pre-commit (`.husky/pre-commit`)

```sh
#!/bin/sh
# Bloquer les commits directs sur main
branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$branch" = "main" ]; then
  echo "❌ Commit direct sur main interdit."
  echo "Crée une branche : git checkout -b feat/nom-feature"
  exit 1
fi

cd website
npm run type-check
npx lint-staged
```

### Hook commit-msg (`.husky/commit-msg`)

```sh
#!/bin/sh
# Vérifie que le message de commit respecte la convention
commit_regex='^(feat|fix|content|style|refactor|a11y|seo|perf|chore|docs)(\(.+\))?: .{1,72}$'
if ! grep -qE "$commit_regex" "$1"; then
  echo "❌ Message de commit invalide."
  echo "Format attendu : type(scope): description"
  echo "Exemple : feat(spectacles): ajouter page Éclats"
  exit 1
fi
```

Ces hooks garantissent :
- Aucun code TypeScript avec erreurs de types
- Aucun code avec erreurs ESLint non corrigées
- Format de commit cohérent sur tout le projet

---

## Checklist avant chaque PR / déploiement

- [ ] `npm run build` passe sans erreur ni warning
- [ ] `npm run lint` sans erreur
- [ ] `npm run type-check` sans erreur
- [ ] Pages affectées testées en local
- [ ] Contenu uniquement dans les JSON (aucun texte hardcodé)
- [ ] Images avec `alt` renseigné
- [ ] Nouveaux composants documentés (JSDoc)
- [ ] Message(s) de commit conformes à la convention
- [ ] `CLAUDE.md` mis à jour si nouvelle règle globale

---

## Règles spécifiques au projet (à compléter)

> Cette section est réservée aux consignes données au fil des sessions. Toute règle globale communiquée doit être ajoutée ici immédiatement.

<!-- Exemple :
- 2024-01 : Les couleurs des cartes spectacles ne doivent pas être modifiées sans validation client
-->
