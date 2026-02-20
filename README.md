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
