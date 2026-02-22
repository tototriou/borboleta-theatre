# TODO - Borboleta Théâtre

---

## Features à livrer

### `feat/spectacles-list-refinements` *(EPIC 6 — dépend de feat/spectacles-list-layout)*
- [ ] Couleur de l'année de création : utiliser `--accent-gold` pour qu'elle ressorte
- [ ] Image cliquable → navigation vers `/spectacles/[slug]`
- [ ] `cursor: pointer` sur l'image
- [ ] `aria-label="Voir le spectacle [titre]"` sur le lien image

### `feat/spectacle-page-fullwidth` *(EPIC 7 — dépend de feat/spectacle-page-layout)*
- [ ] Supprimer les conteneurs encadrés (fond blanc, ombre, `border-radius`) sur la page spectacle
- [ ] Contenu pleine largeur dans les marges normales
- [ ] Vérifier la hiérarchie visuelle et la lisibilité mobile sans les cadres

### `feat/agenda-inline-rows` *(EPIC 8 — dépend de feat/agenda-layout)*
- [ ] Supprimer tous les conteneurs de type card dans la page agenda
- [ ] Chaque date sur une ligne : `Spectacle — Date — Lieu, Ville (Département)`
- [ ] Séparateur léger entre les lignes (bordure fine, pas de card)
- [ ] Ajouter champ `department` ou `city` dans `agenda.json` si absent
- [ ] Mettre à jour `src/types/index.ts`

### `feat/galerie-refinements` *(EPIC 9 — dépend de feat/galerie-layout)*
- [ ] Réduire la limite à **10 photos** par spectacle (au lieu de 15)
- [ ] Supprimer l'affichage de l'année de création
- [ ] Titre du spectacle intégré à la grille (vertical latéral ou première cellule) — pas au-dessus
- [ ] Crédit photo fonctionnel en lightbox

---

## Responsive
- [ ] Adapter les éléments décoratifs (papillons) sur mobile
- [ ] Tester sur différentes tailles d'écran (320px, 768px, 1024px)

## Performance
- [ ] Migrer les `<img>` vers `next/image`
- [ ] Convertir les images en WebP/AVIF (56 images JPG/PNG dans `public/images/`)
- [ ] Ajouter `<link rel="preload">` pour les fonts critiques dans `layout.tsx`

## SEO
- [ ] Ajouter `og:image` sur toutes les pages (accueil, spectacles, agenda, galerie, contact)
- [ ] Ajouter `metadata` sur la page d'accueil (`page.tsx` est `"use client"` — extraire dans un wrapper server component)
- [ ] Ajouter `metadata` sur la page galerie (même problème `"use client"`)
- [ ] Données structurées JSON-LD : schema `Organization` (compagnie), `Event` (agenda), `CreativeWork` (spectacles)
- [ ] Ajouter favicon, `apple-touch-icon` et `manifest.json` dans `public/`
- [ ] Optimiser les priorités du `sitemap.xml` (compagnie : 0.8 → 0.9)

## Priorité basse
- [ ] `feat/home-red-thread-scroll` : prolonger le fil rouge dans la section compagnie
- [ ] Copyright footer : remplacer "2024" par année dynamique
- [ ] Corriger icône téléphone dans contact : ajouter `aria-hidden="true"` (`contact/page.tsx` ligne 49)
- [ ] Dark mode (optionnel)
- [ ] Bouton retour en haut de page
- [ ] Partage sur réseaux sociaux (pages spectacles)
- [ ] Tests unitaires (Jest + React Testing Library)
- [ ] Storybook pour les composants
