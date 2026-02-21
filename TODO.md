# TODO - Borboleta Théâtre

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
- [ ] Ajouter `metadata` sur la page d'accueil (`page.tsx` est `"use client"` — extraire le metadata dans un wrapper server component)
- [ ] Ajouter `metadata` sur la page galerie (même problème `"use client"`)
- [ ] Données structurées JSON-LD : schema `Organization` (page compagnie), `Event` (agenda), `CreativeWork` (spectacles)
- [ ] Ajouter favicon, `apple-touch-icon` et `manifest.json` dans `public/`
- [ ] Optimiser les priorités du `sitemap.xml` (compagnie : 0.8 → 0.9)

## Priorité basse
- [ ] Copyright footer : remplacer "2024" par année dynamique
- [ ] Corriger icône téléphone dans contact : ajouter `aria-hidden="true"` (`contact/page.tsx` ligne 49)
- [ ] Dark mode (optionnel)
- [ ] Bouton retour en haut de page
- [ ] Partage sur réseaux sociaux (pages spectacles)
- [ ] Tests unitaires (Jest + React Testing Library)
- [ ] Storybook pour les composants
