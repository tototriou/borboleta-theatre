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

### Commits atomiques et workflow de branche

**Workflow obligatoire pour toute série de tâches :**

1. **Créer une branche** depuis `main` : `git checkout -b feat/nom-feature`
2. **Un commit par tâche** : chaque tâche distincte = un commit séparé
3. **Ne pas squash** lors du merge pour conserver l'historique détaillé
4. **Merger avec `--no-ff`** pour créer un commit de merge visible dans le graph
5. **Mettre à jour RELEASE.md** avant le merge final

```bash
# Workflow exemple
git checkout -b feat/responsive-a11y

# Commit 1 : première tâche
git commit -m "feat(header): ajouter navbar responsive avec menu burger"

# Commit 2 : deuxième tâche
git commit -m "a11y(header): ajouter skip link pour navigation clavier"

# Commit 3 : troisième tâche
git commit -m "a11y(global): ajouter focus visible sur éléments interactifs"

# Avant merge : mettre à jour RELEASE.md
git commit -m "docs(release): ajouter v1.5.0"

# Merge sans squash pour garder tous les commits
git checkout main
git merge --no-ff feat/responsive-a11y
git branch -d feat/responsive-a11y
```

**Principes :**
- **1 commit = 1 tâche identifiable** dans l'arbre de commits
- Chaque commit doit compiler et fonctionner indépendamment
- L'historique raconte l'évolution du code étape par étape
- Le merge `--no-ff` crée un commit de merge qui groupe visuellement les tâches
- Facilite les reverts, cherry-picks et la compréhension du projet

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
- [ ] `RELEASE.md` mis à jour si nouvelle feature ou fix

---

## Gestion des versions (RELEASE.md)

Le fichier `RELEASE.md` à la racine du projet contient l'historique des versions avec les release notes.

### Versionnement sémantique

Format : `MAJOR.MINOR.PATCH`

- **MAJOR** : changement incompatible ou refonte majeure (ex: 2.0.0)
- **MINOR** : nouvelle fonctionnalité rétrocompatible (ex: 1.3.0)
- **PATCH** : correction de bug ou amélioration mineure (ex: 1.2.1)

### Quand mettre à jour RELEASE.md

**Obligatoire** pour chaque merge sur `main` qui est de type :
- `feat` → incrémenter MINOR, reset PATCH à 0
- `fix` → incrémenter PATCH
- `refactor` (si impact visible) → incrémenter PATCH
- `style` (si impact visible) → incrémenter PATCH
- `perf` → incrémenter PATCH

**Non requis** pour :
- `docs` (documentation uniquement)
- `chore` (maintenance interne)
- `content` (sauf si nouvelle section/page)

### Format des entrées

```markdown
## [1.3.0] - 2025-02-20

### Ajouté
- Page galerie avec lightbox (#feat)
- Support des couleurs configurables pour les papillons

### Modifié
- Refonte du design system avec variables SCSS

### Corrigé
- Scroll horizontal sur les pages mobiles
```

### Catégories disponibles

- **Ajouté** : nouvelles fonctionnalités
- **Modifié** : changements dans les fonctionnalités existantes
- **Corrigé** : corrections de bugs
- **Supprimé** : fonctionnalités retirées
- **Sécurité** : corrections de vulnérabilités

---

## Règles spécifiques au projet

> Cette section est réservée aux consignes données au fil des sessions. Toute règle globale communiquée doit être ajoutée ici immédiatement.

### RELEASE.md obligatoire

**À chaque merge sur `main` contenant une feature ou un fix, le fichier `RELEASE.md` DOIT être mis à jour.**

Workflow :
1. Avant de merger sur `main`, vérifier la version actuelle dans `RELEASE.md`
2. Incrémenter la version selon le type de changement (MINOR pour feat, PATCH pour fix)
3. Ajouter une nouvelle section avec la date du jour
4. Lister les changements dans les catégories appropriées (Ajouté, Modifié, Corrigé)
5. Commiter le `RELEASE.md` mis à jour avec les autres changements

**Ne jamais oublier cette étape.** Le RELEASE.md est la documentation officielle des évolutions du site.

### Tags git de version

**Après chaque merge sur `main` avec une nouvelle version, créer un tag git annoté.**

Les tags doivent correspondre aux versions du `RELEASE.md` avec le préfixe `v` :

```bash
# Créer un tag annoté sur le commit courant
git tag -a v1.6.0 -m "Version 1.6.0 - Description courte"

# Créer un tag sur un commit spécifique (ex: commit de merge)
git tag -a v1.5.0 <commit-hash> -m "Version 1.5.0 - Description"

# Pousser les tags sur origin
git push origin --tags
```

**Règles :**
- Format : `vMAJOR.MINOR.PATCH` (ex: v1.6.0)
- Chaque version dans RELEASE.md doit avoir un tag correspondant
- Le message du tag doit résumer les changements principaux
- Toujours pousser les tags après création : `git push origin --tags`
- **IMPORTANT : Ne jamais créer de tag sans l'accord explicite de l'utilisateur.** Après le merge, attendre que l'utilisateur teste et valide avant de tagger la version.

---
