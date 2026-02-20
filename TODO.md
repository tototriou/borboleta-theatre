# TODO - Borboleta Théâtre

Liste des améliorations à apporter au site.

---

## Priorité haute

### Responsive
- [x] Navbar responsive avec menu burger sur mobile
- [x] Media queries pour les cartes (MemberCard, SpectacleCard)
- [ ] Adapter les éléments décoratifs (papillons) sur mobile
- [ ] Tester sur différentes tailles d'écran (320px, 768px, 1024px)

### Accessibilité
- [x] Ajouter skip link "Aller au contenu principal"
- [x] Vérifier contrastes couleurs (rose/violet) - objectif 4.5:1
- [x] Styliser le focus visible sur tous les éléments interactifs
- [x] Ajouter `aria-current="page"` sur le lien actif dans la navbar

---

## Priorité moyenne

### Performance
- [x] Migrer les `<img>` vers `next/image` pour optimisation automatique
- [ ] Convertir les images en WebP/AVIF
- [x] Ajouter `font-display: swap` sur les @font-face
- [x] Lazy loading sur les images hors viewport (via next/image)

### UX
- [x] Ajouter indicateur de chargement (skeleton ou spinner)
- [ ] Animation de transition entre les pages (retiré - non souhaité)
- [ ] Feedback visuel au clic sur les boutons (retiré - non souhaité)

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
- [x] Ajouter pre-commit hooks (Husky)

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
