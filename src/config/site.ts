/**
 * Configuration centrale du site : textes, liens, véhicules, images.
 * Modifiez ce fichier pour adapter le contenu sans toucher aux composants.
 */

export const brand = {
  name: "Élyse Chauffeur",
  tagline: "Vos déplacements en Belgique, en toute sérénité.",
  demoNotice: "Démonstration : aucune réservation n’est envoyée.",
  fictionalNotice: "Marque fictive — Site de démonstration.",
};

/** Laissez une URL vide ("") pour masquer automatiquement le lien correspondant. */
export const developer = {
  name: "Yves Web Studio",
  baseline: "Sites web, tableaux de bord et automatisation.",
  email: "yves.webstudio@gmail.com",
  githubUrl: "https://github.com/yves1-357",
  linkedinUrl: "https://www.linkedin.com/in/jean-yves-iradukunda-9a739138a/",
  portfolioUrl: "",
};

export const navLinks = [
  { href: "/#accueil", label: "Accueil" },
  { href: "/#services", label: "Services" },
  { href: "/#vehicules", label: "Véhicules" },
  { href: "/#trajet", label: "Votre trajet" },
];

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const images = {
  hero: {
    src: "/images/hero.jpg",
    alt: "Berline noire de prestige garée dans une rue animée d’une grande ville",
    width: 1920,
    height: 2560,
  },
  aeroport: {
    src: "/images/aeroport.jpg",
    alt: "Façade vitrée du terminal de l’aéroport de Bruxelles-Zaventem",
    width: 1280,
    height: 780,
  },
  professionnel: {
    src: "/images/professionnel.jpg",
    alt: "Intérieur d’un van de transport avec chauffeur, sièges en cuir clair",
    width: 1280,
    height: 960,
  },
  prive: {
    src: "/images/prive.jpg",
    alt: "Grand-Place de Bruxelles et ses façades dorées",
    width: 1200,
    height: 1600,
  },
  berline: {
    src: "/images/berline.jpg",
    alt: "Berline de catégorie standard vue de trois quarts avant",
    width: 1280,
    height: 852,
  },
  "berline-premium": {
    src: "/images/berline-premium.jpg",
    alt: "Berline premium de couleur sombre vue de trois quarts avant",
    width: 1280,
    height: 710,
  },
  van: {
    src: "/images/van.jpg",
    alt: "Van spacieux de sept places, vue de trois quarts avant",
    width: 1280,
    height: 989,
  },
} satisfies Record<string, ImageAsset>;

export type VehicleId = "berline" | "berline-premium" | "van";

export type Vehicle = {
  id: VehicleId;
  name: string;
  description: string;
  passengers: number;
  luggage: number;
  image: ImageAsset;
};

export const vehicles: Vehicle[] = [
  {
    id: "berline",
    name: "Berline",
    description:
      "Le choix simple et confortable pour un trajet quotidien, une gare ou un aéroport.",
    passengers: 3,
    luggage: 2,
    image: images.berline,
  },
  {
    id: "berline-premium",
    name: "Berline premium",
    description:
      "Une finition plus soignée pour vos rendez-vous importants et vos arrivées en soirée.",
    passengers: 3,
    luggage: 2,
    image: images["berline-premium"],
  },
  {
    id: "van",
    name: "Van",
    description:
      "De l’espace pour les groupes, les familles et les voyageurs avec beaucoup de bagages.",
    passengers: 7,
    luggage: 6,
    image: images.van,
  },
];

export const services = [
  {
    id: "aeroport",
    title: "Transferts aéroport",
    text: "Départs et arrivées à Bruxelles-Zaventem et à Charleroi. Vous indiquez votre trajet, nous préparons le reste.",
    image: images.aeroport,
  },
  {
    id: "professionnel",
    title: "Déplacements professionnels",
    text: "Rendez-vous, gares, salons : un trajet calme pour arriver prêt, ou préparer vos dossiers en route.",
    image: images.professionnel,
  },
  {
    id: "prive",
    title: "Trajets privés et mise à disposition",
    text: "Soirée, week-end, visite de la ville : un chauffeur à votre disposition, selon votre programme.",
    image: images.prive,
  },
];

export const serviceTypes = [
  "Transfert aéroport",
  "Déplacement professionnel",
  "Trajet privé",
  "Mise à disposition",
] as const;

/** Suggestions de destinations, purement indicatives. */
export const destinationSuggestions = [
  "Aéroport de Bruxelles-Zaventem",
  "Aéroport de Charleroi",
  "Gare de Bruxelles-Midi",
  "Gare de Bruxelles-Central",
  "Gare de Liège-Guillemins",
  "Gare d’Anvers-Central",
];

export const faq = [
  {
    q: "Quels types de trajets sont présentés ?",
    a: "Le site présente des transferts aéroport (Bruxelles-Zaventem et Charleroi), des déplacements professionnels, ainsi que des trajets privés et de la mise à disposition. Ce sont des exemples de ce que pourrait proposer une entreprise de transport avec chauffeur.",
  },
  {
    q: "Comment choisir une catégorie de véhicule ?",
    a: "Comptez d’abord le nombre de passagers et de bagages. La berline et la berline premium accueillent jusqu’à 3 passagers et 2 bagages, le van jusqu’à 7 passagers et 6 bagages. Le formulaire vérifie que le nombre de passagers est compatible avec la catégorie choisie.",
  },
  {
    q: "Puis-je réserver réellement sur ce site ?",
    a: "Non. Élyse Chauffeur est une marque fictive et ce site est une démonstration de développement web. Aucune réservation n’est envoyée, aucune donnée n’est stockée et aucun prix n’est calculé. Le formulaire sert uniquement à montrer le parcours qu’un vrai site pourrait offrir.",
  },
];

/** Crédits photographiques (affichés sur /credits et dans le README). */
export const imageCredits = [
  {
    file: "hero.jpg",
    title:
      "Black Mercedes-Benz S-Class on Regent Street near Piccadilly Circus, London",
    author: "Mam16600 for Tripyana",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    url: "https://commons.wikimedia.org/wiki/File:Black_Mercedes-Benz_S-Class_on_Regent_Street_near_Piccadilly_Circus,_London_(Tripyana).jpg",
  },
  {
    file: "berline.jpg",
    title: "Škoda Superb IV IMG 4524",
    author: "Alexander Migl",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    url: "https://commons.wikimedia.org/wiki/File:%C5%A0koda_Superb_IV_IMG_4524.jpg",
  },
  {
    file: "berline-premium.jpg",
    title: "Mercedes-Benz E-Class 1X7A5838",
    author: "Alexander Migl",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    url: "https://commons.wikimedia.org/wiki/File:Mercedes-Benz_E-Class_1X7A5838.jpg",
  },
  {
    file: "van.jpg",
    title: "Mercedes-Benz V-Class 185650",
    author: "Trop86",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    url: "https://commons.wikimedia.org/wiki/File:Mercedes-Benz_V-Class_185650.jpg",
  },
  {
    file: "aeroport.jpg",
    title: "Zaventem Brussels Airport 04",
    author: "Ad Meskens",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    url: "https://commons.wikimedia.org/wiki/File:Zaventem_Brussels_Airport_04.jpg",
  },
  {
    file: "professionnel.jpg",
    title:
      "Mercedes-Benz V-Class interior with cream leather seats, Belgravia, London",
    author: "Mam16600 for Tripyana",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    url: "https://commons.wikimedia.org/wiki/File:Mercedes-Benz_V-Class_interior_with_cream_leather_seats,_Belgravia,_London_(Tripyana).jpg",
  },
  {
    file: "prive.jpg",
    title: "Brussels-Grand Place",
    author: "Romaine",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    url: "https://commons.wikimedia.org/wiki/File:Brussels-Grand_Place.jpg",
  },
];
