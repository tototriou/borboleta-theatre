/**
 * Types pour le contenu du site Borboleta Theatre.
 *
 * Ces interfaces correspondent aux structures des fichiers JSON
 * dans src/content/. Modifier un JSON implique de respecter ces types.
 */

/** Un extrait de texte ou citation de presse */
export interface Extrait {
  /** Texte de l'extrait ou de la citation */
  texte: string;
  /** Source (journal, auteur, etc.) */
  source: string;
}

/** Un article de presse */
export interface ArticlePresse {
  /** Titre de l'article */
  titre: string;
  /** Nom du journal / média */
  source: string;
  /** URL vers l'article (optionnel) */
  url?: string;
}

/** Un spectacle de la compagnie (src/content/spectacles.json) */
export interface Spectacle {
  /** Slug URL-friendly (ex: "chimeres", "juliet") */
  slug: string;
  /** Titre du spectacle (ex: "CHIMERES", "JULIET") */
  titre: string;
  /** Sous-titre affiché sous le titre (ex: "Création 2024") */
  sous_titre: string;
  /** Cadre de production, alternance label/valeur : ["-production-", "CNSAD", "-soutien-", "Festival..."] */
  cadre: string[];
  /** Équipe de création, alternance role/noms : ["Mise en scène", "Nom Prénom", "Jeu", "Nom1, Nom2"] */
  creation: string[];
  /** Personnes / structures remerciées */
  remerciements: string[];
  /** Courte accroche (1 phrase, affichée en italique sur la liste) */
  accroche: string;
  /** Durée du spectacle (ex: "1h15"). Vide si non renseigné. */
  duree: string;
  /** Public visé (ex: "Tout public", "À partir de 14 ans"). Vide si non renseigné. */
  public: string;
  /** Résumé du spectacle */
  resume: string;
  /** Extraits de texte ou citations de presse */
  extraits: Extrait[];
  /** Articles de presse */
  presse: ArticlePresse[];
  /** IDs YouTube des vidéos / teasers du spectacle */
  videos: string[];
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

/** Démarche artistique de la compagnie */
export interface ArtisticApproach {
  /** Phrase d'introduction */
  intro: string;
  /** Paragraphes de la démarche */
  approach: string[];
}

/** Structure racine de compagnie.json */
export interface CompagnieData {
  /** Texte de présentation de la compagnie (paragraphes séparés) */
  description: string[];
  /** Démarche artistique */
  artisticApproach: ArtisticApproach;
  /** Liste des membres */
  membre: Membre[];
}

/** Un événement dans l'agenda (src/content/agenda.json) */
export interface AgendaEvent {
  /** Date ISO de début (ex: "2024-11-06") — utilisée pour le tri et la séparation passé/futur */
  date: string;
  /** Date lisible (ex: "6 au 9 Novembre 2024") — affichée à l'écran */
  dateDisplay: string;
  /** Nom du spectacle (ex: "JULIET", "CHIMERES") — utilisé pour le regroupement */
  spectacleName: string;
  /** Slug du spectacle pour le lien vers sa page (ex: "juliet") — optionnel */
  slug?: string;
  /** Lieu de représentation (ex: "Lavoir Public, Lyon") */
  lieu: string;
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

/** Une photo individuelle dans la galerie */
export interface GaleriePhoto {
  /** Chemin vers l'image */
  url: string;
  /** Texte alternatif descriptif (WCAG) */
  alt: string;
  /** Crédit photographe spécifique à cette photo (remplace credit_photo de la catégorie si renseigné) */
  credit?: string;
}

/** Une catégorie de photos dans la galerie (src/content/galerie.json) */
export interface GalerieCategory {
  titre: string;
  sous_titre: string;
  /** Crédit photographe par défaut pour toute la catégorie */
  credit_photo: string;
  photos: GaleriePhoto[];
}

/** Structure racine de galerie.json */
export interface GalerieData {
  categories: GalerieCategory[];
}
