# TODO - Borboleta Théâtre

---

## Features

### `feat/agenda-layout`
- [ ] Supprimer les images dans la page agenda
- [ ] Dates futures groupées par spectacle (titre en `h2`, liste de dates dessous)
- [ ] Dates passées triées par date décroissante, groupées par année
- [ ] Séparation passé/futur dynamique côté client (`Date.now()`)
- [ ] Ajouter champ `date` ISO (`YYYY-MM-DD`) et `spectacleName` dans `agenda.json`
- [ ] Mettre à jour `src/types/index.ts`

### `feat/galerie-layout`
- [ ] Afficher le titre du spectacle sans l'année
- [ ] Limiter à 15 photos maximum par spectacle
- [ ] Ajouter champ `credit` (optionnel) et `alt` par photo dans `galerie.json`
- [ ] Afficher le crédit photo dans la lightbox si renseigné
- [ ] Mettre à jour `LightboxModal.tsx` et `src/types/index.ts`

---

## Responsive
- [ ] Adapter les éléments décoratifs (papillons) sur mobile
- [ ] Tester sur différentes tailles d'écran (320px, 768px, 1024px)

## Performance
- [ ] Migrer les `<img>` vers `next/image`
- [ ] Convertir les images en WebP/AVIF

## Priorité basse
- [ ] Dark mode (optionnel)
- [ ] Bouton retour en haut de page
- [ ] Partage sur réseaux sociaux (pages spectacles)
- [ ] Données structurées JSON-LD (Organization, Event)
- [ ] Tests unitaires (Jest + React Testing Library)
- [ ] Storybook pour les composants
