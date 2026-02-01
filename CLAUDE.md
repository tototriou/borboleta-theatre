# Consignes pour Claude Code

## Projet

Site web de la compagnie de theatre Borboleta Theatre.
- Framework : Next.js 14 (App Router) avec TypeScript
- Styles : SCSS + Bootstrap
- Deploiement : GitHub Pages via GitHub Actions
- Contenu : fichiers JSON editables dans `website/src/content/`
- Domaine : borboletatheatre.fr

## Bonnes pratiques obligatoires

### Tester systematiquement

- Toujours executer `npm run build` dans `website/` apres toute modification pour verifier que le build passe
- Tester les pages affectees en local avec `npm run dev` quand c'est pertinent
- Verifier que les assets (images, PDFs, fonts) sont accessibles apres deplacement ou renommage

### Code clair et documente

- Ajouter des JSDoc sur les types, interfaces et composants non triviaux
- Les noms de variables, fonctions et composants doivent etre explicites
- Commenter uniquement quand la logique n'est pas evidente

### Refactorer quand possible

- Extraire la logique dupliquee dans des hooks (`src/hooks/`) ou des composants partages (`src/components/`)
- Garder tout le contenu textuel dans les fichiers JSON de `src/content/` (jamais de texte hardcode dans les composants)
- Privilegier les composants simples et les fichiers courts

### Structure du contenu

- Tout le contenu modifiable est dans `website/src/content/` (spectacles.json, compagnie.json, agenda.json, contact.json)
- Les types correspondants sont dans `website/src/types/index.ts`
- Les images sont dans `website/public/images/`
- Les PDFs sont dans `website/public/images/compagnie/cv/`

## Commandes utiles

```bash
cd website
npm run dev      # serveur local sur http://localhost:3000
npm run build    # build de production (genere le dossier out/)
```
