/**
 * Types pour le contenu du site Borboleta Theatre.
 *
 * Ces interfaces correspondent aux structures des fichiers JSON
 * dans src/content/. Modifier un JSON implique de respecter ces types.
 */

/** Un spectacle de la compagnie (src/content/spectacles.json) */
export interface Spectacle {
  /** Slug URL-friendly (ex: "chimeres", "juliet") */
  slug: string;
  /** Titre du spectacle (ex: "CHIMERES", "JULIET") */
  titre: string;
  /** Sous-titre affiché sous le titre (ex: "Création 2024") */
  sous_titre: string;
  /** ID de la vidéo YouTube (ex: "aQysrMCEjas"). Vide si pas de vidéo. */
  youtube_url: string;
  /** Cadre de production, alternance label/valeur : ["-production-", "CNSAD", "-soutien-", "Festival..."] */
  cadre: string[];
  /** Équipe de création, alternance role/noms : ["Mise en scène", "Nom Prénom", "Jeu", "Nom1, Nom2"] */
  creation: string[];
  /** Résumé du spectacle */
  resume: string;
  /** Chemins des photos du spectacle (affichées dans le carousel) */
  photos: string[];
  /** Crédit photographe */
  credit_photo: string;
  /** Chemin vers le dossier PDF du spectacle */
  dossier_url: string;
  /** Chemin vers l'image principale / affiche du spectacle */
  photo_principale: string;
}

/** Structure racine de spectacles.json */
export interface SpectaclesData {
  spectacles: Spectacle[];
}

/** Catégorie de membre : direction artistique ou collaboration */
export type MembreCategory = "direction" | "collaboration";

/** Un membre de la compagnie (src/content/compagnie.json) */
export interface Membre {
  prenom: string;
  nom: string;
  /** Rôle dans la compagnie (ex: "co-directeur artistique", "comédienne") */
  role: string;
  /** Catégorie : "direction" pour les co-directeurs, "collaboration" pour les autres */
  category: MembreCategory;
  /** Chemin vers la photo de profil */
  photo_url: string;
  /** Liste des spectacles et rôles : ["JULIET - 2024", "jeu et mise en scène"] */
  spectacles: string[];
  /** Chemin vers le CV en PDF */
  cv_url: string;
  /** Biographie du membre */
  biographie: string;
}

/** Structure racine de compagnie.json */
export interface CompagnieData {
  /** Texte de présentation de la compagnie (paragraphes séparés) */
  description: string[];
  /** Liste des membres */
  membre: Membre[];
}

/** Un événement dans l'agenda */
export interface AgendaEvent {
  /** Date de l'événement (ex: "6 au 9 Novembre 2024") */
  date: string;
  /** Lieu et nom de l'événement (ex: "JULIET - Lavoir Public, Lyon") */
  lieu: string;
  /** Chemin vers l'affiche associée */
  photo_url: string;
}

/** Une année dans l'agenda (src/content/agenda.json) */
export interface AgendaYear {
  annee: string;
  spectacles: AgendaEvent[];
}

/** Informations de contact (src/content/contact.json) */
export interface ContactInfo {
  email: string;
  telephone: string;
  instagram_url: string;
  facebook_url: string;
  /** Mention légale affichée en bas de la page contact */
  mention_legale: string;
}

/** Une catégorie de photos dans la galerie (src/content/galerie.json) */
export interface GalerieCategory {
  titre: string;
  sous_titre: string;
  credit_photo: string;
  photos: string[];
}

/** Structure racine de galerie.json */
export interface GalerieData {
  categories: GalerieCategory[];
}
