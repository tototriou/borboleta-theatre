# Borboleta Theatre - Site Web

Site web de la compagnie Borboleta Theatre, deploye sur GitHub Pages a l'adresse [borboletatheatre.fr](https://borboletatheatre.fr).

## Prerequis

Avant de commencer, il faut installer **Node.js** (version 18 ou superieure) sur ton ordinateur :

1. Va sur [https://nodejs.org](https://nodejs.org)
2. Telecharge la version **LTS** (recommandee)
3. Installe-la en suivant les instructions
4. Verifie l'installation en ouvrant un terminal et en tapant :
   ```
   node --version
   ```
   Tu dois voir un numero de version (ex: `v20.11.0`)

## Installation du projet

1. Clone le repo (ou telecharge-le) :
   ```
   git clone https://github.com/tototriou/bistanclaque-pan.git
   cd bistanclaque-pan/website
   ```

2. Installe les dependances :
   ```
   npm install
   ```

## Lancer le site en local

Pour voir le site sur ton ordinateur pendant que tu fais des modifications :

```
npm run dev
```

Puis ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.
Le site se met a jour automatiquement quand tu modifies un fichier.

## Deploiement

Le site se deploie **automatiquement** sur GitHub Pages a chaque push sur la branche `main`.

Le workflow GitHub Actions (`.github/workflows/deploy.yml`) :
1. Build le site
2. Le deploie sur GitHub Pages
3. Le rend accessible sur borboletatheatre.fr

**Tu n'as rien a faire** : push tes changements et le site se met a jour.

### Configuration GitHub Pages (a faire une seule fois)

Dans les settings du repo GitHub (`Settings > Pages`) :
- **Source** : selectionne **GitHub Actions**

---

## Modifier le contenu du site

Tout le contenu est dans des **fichiers JSON** dans `src/content/`. Tu peux les modifier directement sur GitHub (bouton crayon) ou en local.

### Fichiers de contenu

| Fichier | Quoi modifier |
|---------|---------------|
| `src/content/spectacles.json` | Ajouter/modifier des spectacles (titre, description, photos, video YouTube, equipe, dossier PDF) |
| `src/content/compagnie.json` | Modifier la description de la compagnie + ajouter/modifier des membres (nom, photo, biographie, CV) |
| `src/content/agenda.json` | Ajouter des dates de representation |
| `src/content/contact.json` | Modifier l'email, le telephone, les reseaux sociaux |

### Ajouter un nouveau spectacle

Ouvre `src/content/spectacles.json` et ajoute un bloc dans le tableau `spectacles` :

```json
{
    "titre": "NOM DU SPECTACLE",
    "sous_titre": "Creation 2025",
    "youtube_url": "",
    "cadre": [
        "-production-",
        "Nom du producteur",
        "-soutien-",
        "Nom du soutien"
    ],
    "creation": [
        "Mise en scene",
        "Prenom Nom",
        "Jeu",
        "Prenom1 Nom1, Prenom2 Nom2"
    ],
    "resume": "Le resume du spectacle...",
    "photos": [
        "/images/compagnie/images/photo-monspectacle1.jpg"
    ],
    "credit_photo": "Photos : Prenom Nom",
    "dossier_url": "/images/compagnie/cv/dossier-monspectacle.pdf",
    "photo_principale": "/images/compagnie/images/affiche-monspectacle.png"
}
```

> **Important** : les champs `cadre` et `creation` fonctionnent par paires : le 1er element est le label (en italique), le 2eme est la valeur (en gras), etc.

### Ajouter un nouveau membre

Ouvre `src/content/compagnie.json` et ajoute un bloc dans le tableau `membre` :

```json
{
    "prenom": "Prenom",
    "nom": "Nom",
    "role": "comedien/comedienne",
    "photo_url": "/images/compagnie/images/pp-prenom.jpg",
    "spectacles": [
        "NOM DU SPECTACLE - 2025",
        "role dans le spectacle"
    ],
    "cv_url": "/images/compagnie/cv/cv-prenom.pdf",
    "biographie": "Sa biographie..."
}
```

### Ajouter une date a l'agenda

Ouvre `src/content/agenda.json` et ajoute un evenement dans l'annee correspondante :

```json
{
    "date": "15 et 16 Mars",
    "lieu": "NOM DU SPECTACLE - Nom du lieu, Ville",
    "photo_url": "/images/compagnie/images/affiche-spectacle.png"
}
```

Pour ajouter une nouvelle annee, ajoute un bloc au debut du tableau :

```json
{
    "annee": "2025",
    "spectacles": [ ... ]
}
```

### Ajouter des images

1. Place tes images dans `public/images/compagnie/images/`
2. Place tes PDFs (CV, dossiers) dans `public/images/compagnie/cv/`
3. Reference-les dans les JSON avec le chemin `/images/compagnie/images/ton-fichier.jpg`

---

## Structure du projet

```
website/
├── public/                   Images, fonts, icones (servis tels quels)
│   ├── images/               Photos, affiches, logos
│   ├── icons/                Icones SVG (envelope, instagram, etc.)
│   ├── fonts/                Polices de caracteres
│   └── CNAME                 Configuration du domaine
├── src/
│   ├── app/                  Pages du site (1 dossier = 1 page)
│   │   ├── page.tsx          Page d'accueil
│   │   ├── compagnie/        Page "La Compagnie"
│   │   ├── spectacles/       Page "Les Spectacles"
│   │   ├── agenda/           Page "Agenda"
│   │   └── contact/          Page "Contact"
│   ├── components/           Composants reutilisables
│   ├── content/              Fichiers JSON de contenu (a modifier !)
│   ├── hooks/                Hooks React personnalises
│   ├── types/                Types TypeScript
│   └── styles/               Styles globaux
├── next.config.mjs           Configuration Next.js
└── package.json              Dependances du projet
```

## Technologies

- **Next.js 14** - Framework React
- **TypeScript** - Typage du code
- **SCSS** - Styles avec Bootstrap
- **GitHub Pages** - Hebergement gratuit
- **GitHub Actions** - Deploiement automatique
