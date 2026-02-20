# TODO - Borboleta Théâtre

Liste des améliorations à apporter au site.

---

## Priorité haute

### Responsive
- [ ] Navbar responsive avec menu burger sur mobile
- [ ] Media queries pour les cartes (MemberCard, SpectacleCard)
- [ ] Adapter les éléments décoratifs (papillons) sur mobile
- [ ] Tester sur différentes tailles d'écran (320px, 768px, 1024px)

### Accessibilité
- [ ] Ajouter skip link "Aller au contenu principal"
- [ ] Vérifier contrastes couleurs (rose/violet) - objectif 4.5:1
- [ ] Styliser le focus visible sur tous les éléments interactifs
- [ ] Ajouter `aria-current="page"` sur le lien actif dans la navbar

---

## Priorité moyenne

### Performance
- [ ] Migrer les `<img>` vers `next/image` pour optimisation automatique
- [ ] Convertir les images en WebP/AVIF
- [ ] Ajouter `font-display: swap` sur les @font-face
- [ ] Lazy loading sur les images hors viewport

### UX
- [ ] Ajouter indicateur de chargement (skeleton ou spinner)
- [ ] Animation de transition entre les pages
- [ ] Feedback visuel au clic sur les boutons

---

## Priorité basse

### Fonctionnalités
- [ ] Dark mode (optionnel)
- [ ] Bouton retour en haut de page
- [ ] Partage sur réseaux sociaux (pages spectacles)

### SEO
- [ ] Ajouter données structurées JSON-LD (Organization, Event)
- [ ] Optimiser les meta descriptions par page
- [ ] Ajouter og:image spécifique par spectacle

### Code
- [ ] Ajouter tests unitaires (Jest + React Testing Library)
- [ ] Configurer Storybook pour les composants
- [ ] Ajouter pre-commit hooks (Husky)

---

## Terminé ✅

- [x] Design system SCSS avec variables centralisées
- [x] Métadonnées SEO sur toutes les pages
- [x] HTML sémantique (main, section, article)
- [x] aria-label sur les éléments interactifs
- [x] Correction scroll horizontal
- [x] Pages dédiées pour les spectacles
- [x] Galerie avec lightbox
- [x] Contenu externalisé en JSON
