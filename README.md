# Borboleta Théâtre

Site web de la compagnie de théâtre Borboleta Théâtre.

**URL du site** : [borboletatheatre.fr](https://borboletatheatre.fr)

---

## Lancer l'application en local

### Prérequis

- [Node.js](https://nodejs.org/) version 18 ou supérieure
- npm (inclus avec Node.js)

### Installation

```bash
# Cloner le projet
git clone https://github.com/tototriou/borboleta-theatre.git
cd borboleta-theatre

# Aller dans le dossier du site
cd website

# Installer les dépendances
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

Le site est accessible sur **http://localhost:3000**

### Autres commandes utiles

```bash
# Build de production (génère le dossier out/)
npm run build

# Vérifier les erreurs TypeScript
npm run type-check

# Vérifier le code avec ESLint
npm run lint
```

---

## Structure du projet

```
website/
├── public/
│   ├── images/          # Photos, affiches, portraits
│   ├── fonts/           # Polices de caractères
│   └── icons/           # Icônes SVG
├── src/
│   ├── app/             # Pages du site (Next.js App Router)
│   ├── components/      # Composants React réutilisables
│   ├── content/         # Contenu éditable en JSON
│   ├── styles/          # Fichiers SCSS
│   └── types/           # Types TypeScript
└── package.json
```

---

## Modifier le contenu du site

Tout le contenu est dans des fichiers JSON dans `website/src/content/` :

| Fichier | Contenu |
|---------|---------|
| `spectacles.json` | Liste des spectacles |
| `compagnie.json` | Présentation + membres de l'équipe |
| `agenda.json` | Dates des représentations |
| `galerie.json` | Photos de la galerie |
| `contact.json` | Email, téléphone, réseaux sociaux |

**Pour modifier du contenu** : édite le fichier JSON correspondant, puis commit et push. Le site sera automatiquement mis à jour.

---

## Workflow Git — Modifier le site en toute sécurité

> Ce guide est destiné aux personnes peu familières avec Git. Il explique comment apporter des modifications au site sans risquer de casser la version en ligne.

### Principe de base

La branche `main` correspond à ce qui est **en ligne sur le site**. On ne modifie jamais `main` directement. À la place, on crée une branche temporaire, on y fait les changements, on vérifie que tout va bien, puis on fusionne.

```
main (site en ligne)
  └── content/ajout-spectacle (ta branche de travail)
        → modifications → vérification → fusion dans main → site mis à jour
```

---

### Étape 1 — Récupérer la dernière version du projet

Avant de commencer, s'assurer d'avoir la version la plus récente :

```bash
git checkout main
git pull origin main
```

---

### Étape 2 — Créer une branche de travail

Choisir un nom court qui décrit ce qu'on fait :

```bash
# Pour une modification de contenu (JSON, images)
git checkout -b content/ajout-spectacle-eclats

# Pour une correction
git checkout -b fix/faute-dans-agenda
```

On est maintenant sur la nouvelle branche. Les modifications faites ici n'affectent pas `main`.

---

### Étape 3 — Faire les modifications

Éditer les fichiers JSON dans `website/src/content/`, ajouter des images dans `website/public/images/`, etc.

Pour vérifier le résultat visuellement avant de publier :

```bash
cd website
npm run dev
# Ouvrir http://localhost:3000 dans le navigateur
```

---

### Étape 4 — Enregistrer les modifications (commit)

```bash
# Revenir à la racine du projet
cd ..

# Voir quels fichiers ont été modifiés
git status

# Ajouter les fichiers modifiés
git add website/src/content/spectacles.json
git add website/public/images/spectacles/mon-spectacle/

# Créer le commit avec un message descriptif
git commit -m "content(spectacles): ajouter le spectacle Éclats"
```

**Format du message de commit** : `type(section): description courte`

Exemples de types : `content` (contenu), `fix` (correction), `feat` (nouvelle fonctionnalité)

---

### Étape 5 — Pousser la branche sur GitHub

```bash
git push origin content/ajout-spectacle-eclats
```

---

### Étape 6 — Fusionner dans main (mettre en ligne)

Une fois les modifications vérifiées et validées :

```bash
# Revenir sur main
git checkout main

# Fusionner la branche
git merge --no-ff content/ajout-spectacle-eclats

# Mettre en ligne
git push origin main

# Supprimer la branche de travail (elle n'est plus utile)
git branch -d content/ajout-spectacle-eclats
```

Le site se met à jour automatiquement en quelques minutes (GitHub Actions rebuild et redéploie).

---

### Résumé rapide

```bash
git checkout main && git pull origin main          # 1. Récupérer la dernière version
git checkout -b content/ma-modification            # 2. Créer une branche
# ... faire les modifications ...
git add <fichiers modifiés>                        # 4a. Sélectionner les fichiers
git commit -m "content(section): description"      # 4b. Enregistrer
git push origin content/ma-modification            # 5. Pousser sur GitHub
git checkout main                                  # 6a. Revenir sur main
git merge --no-ff content/ma-modification          # 6b. Fusionner
git push origin main                               # 6c. Mettre en ligne
git branch -d content/ma-modification              # 6d. Nettoyer
```

---

## Ajouter un nouveau spectacle

1. Ouvrir `website/src/content/spectacles.json`
2. Ajouter une nouvelle entrée avec un `slug` unique (ex: `"mon-spectacle"`)
3. Ajouter les photos dans `website/public/images/spectacles/mon-spectacle/`
4. Ajouter le dossier PDF dans `website/public/images/compagnie/cv/`
5. Commit et push → la page `/spectacles/mon-spectacle/` est créée automatiquement

---

## Déploiement

Le site est déployé automatiquement sur GitHub Pages à chaque push sur `main`.

Le workflow GitHub Actions :
1. Build le projet Next.js
2. Génère les fichiers statiques dans `out/`
3. Déploie sur GitHub Pages

**Domaine** : Le fichier `website/public/CNAME` contient `borboletatheatre.fr`

---

## Technologies utilisées

- **Next.js 14** (App Router, export statique)
- **TypeScript**
- **SCSS** + Bootstrap
- **GitHub Pages** pour l'hébergement
