/**
 * Configuration centrale du site : marque, liens, véhicules, images.
 * Les textes affichés (français et anglais) sont dans src/i18n/messages.ts.
 */

export const brand = {
  name: "Élyse Chauffeur",
};

/** Laissez une URL vide ("") pour masquer automatiquement le lien correspondant. */
export const developer = {
  name: "Yves Web Studio",
  email: "yves.webstudio@gmail.com",
  githubUrl: "https://github.com/yves1-357",
  linkedinUrl: "https://www.linkedin.com/in/jean-yves-iradukunda-9a739138a/",
  portfolioUrl: "",
};

export const navLinks = [
  { href: "/#accueil", id: "home" },
  { href: "/#services", id: "services" },
  { href: "/#vehicules", id: "vehicles" },
  { href: "/#trajet", id: "trip" },
] as const;

export type ImageAsset = {
  src: string;
  width: number;
  height: number;
};

export const images = {
  hero: { src: "/images/hero.jpg", width: 1400, height: 1867 },
  aeroport: { src: "/images/aeroport.jpg", width: 1280, height: 780 },
  professionnel: { src: "/images/professionnel.jpg", width: 1280, height: 960 },
  prive: { src: "/images/prive.jpg", width: 1200, height: 1600 },
  berline: { src: "/images/berline.jpg", width: 736, height: 1097 },
  "berline-premium": { src: "/images/berline-premium.jpg", width: 736, height: 589 },
  van: { src: "/images/van.jpg", width: 736, height: 736 },
} satisfies Record<string, ImageAsset>;

export type VehicleId = "berline" | "berline-premium" | "van";

export type Vehicle = {
  id: VehicleId;
  passengers: number;
  luggage: number;
  image: ImageAsset;
};

export const vehicles: Vehicle[] = [
  { id: "berline", passengers: 3, luggage: 2, image: images.berline },
  { id: "berline-premium", passengers: 3, luggage: 2, image: images["berline-premium"] },
  { id: "van", passengers: 7, luggage: 6, image: images.van },
];

export const services = [
  { id: "aeroport", image: images.aeroport },
  { id: "professionnel", image: images.professionnel },
  { id: "prive", image: images.prive },
] as const;

export const serviceIds = ["airport", "business", "private", "hire"] as const;
export type ServiceId = (typeof serviceIds)[number];

export const tripOptionIds = ["siege-enfant", "bagages", "panneau", "arret"] as const;
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
