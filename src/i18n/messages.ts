/**
 * Tous les textes affichés du site, en français (langue par défaut) et en anglais.
 * Les deux objets doivent avoir exactement la même structure.
 */

export type Lang = "fr" | "en";

const fr = {
  meta: {
    title: "Élyse Chauffeur — Site de démonstration VTC et taxi en Belgique",
    description:
      "Site de démonstration pour une entreprise fictive de transport avec chauffeur en Belgique. Aucune réservation réelle : réalisation de portfolio par Yves Web Studio.",
  },
  locale: "fr-BE",
  skip: "Aller au contenu",
  scrollTop: "Retour en haut de la page",
  header: {
    navLabel: "Navigation principale",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    cta: "Préparer mon trajet",
    links: {
      home: "Accueil",
      services: "Services",
      vehicles: "Véhicules",
      trip: "Votre trajet",
    },
    langLabel: "Langue",
    langFr: "Français",
    langEn: "English",
  },
  hero: {
    eyebrow: "Transport avec chauffeur · Belgique",
    title: "Vos déplacements en Belgique, en toute sérénité.",
    lead: "Transferts aéroport, trajets privés et déplacements professionnels : un service pensé pour que vous arriviez à l’heure, détendu, sans avoir à y penser.",
    primary: "Préparer mon trajet",
    secondary: "Découvrir nos services",
    tagsLabel: "Types de trajets",
    tags: ["Aéroports", "Affaires", "Trajets privés"],
    badge: "Site de démonstration",
    alt: "Berline noire de prestige garée dans une rue animée d’une grande ville",
  },
  services: {
    eyebrow: "Services",
    title: "Un trajet, selon votre besoin",
    intro:
      "Trois façons de vous déplacer sans contrainte, avec un chauffeur qui s’adapte à votre programme.",
    items: {
      aeroport: {
        title: "Transferts aéroport",
        text: "Départs et arrivées à Bruxelles-Zaventem et à Charleroi. Vous indiquez votre trajet, nous préparons le reste.",
        alt: "Façade vitrée du terminal de l’aéroport de Bruxelles-Zaventem",
      },
      professionnel: {
        title: "Déplacements professionnels",
        text: "Rendez-vous, gares, salons : un trajet calme pour arriver prêt, ou préparer vos dossiers en route.",
        alt: "Intérieur d’un van de transport avec chauffeur, sièges en cuir clair",
      },
      prive: {
        title: "Trajets privés et mise à disposition",
        text: "Soirée, week-end, visite de la ville : un chauffeur à votre disposition, selon votre programme.",
        alt: "Grand-Place de Bruxelles et ses façades dorées",
      },
    },
  },
  how: {
    eyebrow: "Comment ça marche",
    title: "Trois étapes, sans complication",
    intro:
      "Le parcours de préparation d’un trajet, tel qu’un vrai site pourrait le proposer à ses clients.",
    steps: [
      {
        title: "Choisissez",
        text: "Sélectionnez le type de prestation et la catégorie de véhicule adaptée à votre groupe.",
      },
      {
        title: "Renseignez",
        text: "Indiquez adresses, date, heure et, si besoin, un retour ou quelques options.",
      },
      {
        title: "Vérifiez",
        text: "Consultez le récapitulatif, copiez-le, imprimez-le ou ajoutez-le à votre agenda.",
      },
    ],
  },
  vehicles: {
    eyebrow: "Véhicules",
    title: "Trois catégories pour voyager à votre rythme",
    intro:
      "Catégories de démonstration, à titre illustratif : ce site ne présente pas de flotte réelle.",
    capacity: "Capacité",
    selected: "sélectionné",
    upTo: "Jusqu’à {n} passagers",
    luggage: "{n} bagages",
    choose: "Choisir",
    chooseAria: "Choisir {name}",
    items: {
      berline: {
        name: "Berline",
        description:
          "Le choix simple et confortable pour un trajet quotidien, une gare ou un aéroport.",
        alt: "Berline Mercedes noire garée devant un terminal d’aéroport, plaque d’immatriculation visible",
      },
      "berline-premium": {
        name: "Berline premium",
        description:
          "Une finition plus soignée pour vos rendez-vous importants et vos arrivées en soirée.",
        alt: "Berline de luxe noire récente vue de trois quarts avant, devant l’entrée d’un hôtel le soir",
      },
      van: {
        name: "Van",
        description:
          "De l’espace pour les groupes, les familles et les voyageurs avec beaucoup de bagages.",
        alt: "Van Mercedes noir avec lanterne taxi, vue de trois quarts avant, plaque visible",
      },
    },
  },
  trip: {
    eyebrow: "Votre trajet",
    title: "Préparez votre trajet en quelques instants",
    intro:
      "Renseignez votre trajet et obtenez un récapitulatif clair. Aucun numéro de téléphone, e-mail ou moyen de paiement n’est demandé.",
  },
  form: {
    title: "Détails du trajet",
    alertOne: "Merci de corriger le champ signalé ci-dessous.",
    alertMany: "Merci de corriger les {n} champs signalés ci-dessous.",
    service: "Type de prestation",
    select: "Sélectionner…",
    serviceNames: {
      airport: "Transfert aéroport",
      business: "Déplacement professionnel",
      private: "Trajet privé",
      hire: "Mise à disposition",
    },
    from: "Adresse de départ",
    fromPlaceholder: "Rue, numéro, ville",
    to: "Destination",
    toPlaceholder: "Adresse ou lieu d’arrivée",
    swap: "Inverser départ et destination",
    suggestionsLabel: "Suggestions de destinations",
    suggestionsTitle: "Suggestions :",
    suggestions: [
      "Aéroport de Bruxelles-Zaventem",
      "Aéroport de Charleroi",
      "Gare de Bruxelles-Midi",
      "Gare de Bruxelles-Central",
      "Gare de Liège-Guillemins",
      "Gare d’Anvers-Central",
    ],
    date: "Date de l’aller",
    time: "Heure de l’aller",
    roundTrip: "Ajouter un trajet retour",
    returnDate: "Date du retour",
    returnTime: "Heure du retour",
    passengers: "Nombre de passagers",
    vehicle: "Catégorie de véhicule",
    vehicleOption: "{name} (max. {n} passagers)",
    flight: "Numéro de vol (facultatif)",
    flightPlaceholder: "Ex. SN 3201",
    optionsLegend: "Options (facultatif)",
    options: {
      "siege-enfant": "Siège enfant ou rehausseur",
      bagages: "Bagages volumineux",
      panneau: "Accueil avec panneau nominatif",
      arret: "Arrêt intermédiaire",
    },
    submit: "Voir le récapitulatif",
    note: "Les adresses saisies ne sont ni transmises ni conservées.",
  },
  demoNotice: "Démonstration : aucune réservation n’est envoyée.",
  errors: {
    service: "Choisissez un type de prestation.",
    fromRequired: "Indiquez votre adresse de départ.",
    toRequired: "Indiquez votre destination.",
    sameAddress: "La destination doit être différente de l’adresse de départ.",
    dateRequired: "Choisissez une date.",
    dateInvalid: "Cette date n’est pas valide.",
    datePast: "Cette date est déjà passée.",
    timeRequired: "Choisissez une heure.",
    timeInvalid: "Cette heure n’est pas valide.",
    timePast: "Cette heure est déjà passée. Choisissez un horaire à venir.",
    passengersMin: "Indiquez au moins 1 passager.",
    passengersCapacity:
      "Cette catégorie accueille jusqu’à {n} passagers. Réduisez le nombre de passagers ou choisissez une autre catégorie.",
    passengersMax: "Le nombre maximal de passagers est de 7.",
    vehicleRequired: "Choisissez une catégorie de véhicule.",
    flightFormat:
      "Format attendu : deux caractères puis des chiffres, par exemple SN 3201.",
    returnDateRequired: "Choisissez la date du retour.",
    returnTimeRequired: "Choisissez l’heure du retour.",
    returnBeforeOutbound: "Le retour doit avoir lieu après l’aller.",
  },
  summary: {
    kicker: "Récapitulatif",
    title: "Votre trajet",
    service: "Prestation",
    from: "Départ",
    to: "Destination",
    outbound: "Aller",
    inbound: "Retour",
    passengers: "Passagers",
    passengerOne: "{n} passager",
    passengerMany: "{n} passagers",
    vehicle: "Véhicule",
    vehicleDetail: "{name} — jusqu’à {p} passagers, {l} bagages",
    flight: "Numéro de vol",
    options: "Options",
    demoDetail:
      "Ce récapitulatif ne constitue ni une réservation ni un devis : aucun prix ni aucune distance n’est calculé.",
    copy: "Copier",
    copied: "Copié",
    copiedStatus: "Récapitulatif copié dans le presse-papiers.",
    print: "Imprimer",
    calendar: "Agenda",
    edit: "Modifier mon trajet",
    textTitle: "Récapitulatif de trajet — Élyse Chauffeur (démonstration)",
    icsFile: "trajet-demonstration.ics",
    icsDemo: "démonstration",
  },
  faq: {
    eyebrow: "Questions fréquentes",
    title: "Avant de vous lancer",
    items: [
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
        a: "Non. Ce site est une démonstration de développement web, conçue comme exemple pour une petite PME. Aucune réservation n’est envoyée, aucune donnée n’est stockée et aucun prix n’est calculé. Le formulaire sert uniquement à montrer le parcours qu’un vrai site pourrait offrir.",
      },
    ],
  },
  dev: {
    title: "Un site comme celui-ci pour votre activité ?",
    madeBy: "Réalisé par",
    baseline: "Sites web, tableaux de bord et automatisation.",
    cta: "Discutons de votre site",
    contact: {
      title: "Discutons de votre site",
      intro: "Décrivez votre projet : le message s’ouvrira dans votre application de messagerie, prêt à être envoyé à Yves Web Studio.",
      name: "Votre nom",
      email: "Votre e-mail",
      message: "Votre message",
      send: "Envoyer",
      close: "Fermer",
      required: "Ce champ est obligatoire.",
      invalidEmail: "Saisissez une adresse e-mail valide.",
      note: "Aucune donnée n’est enregistrée sur ce site.",
      subject: "Demande de site web",
    },
    newTab: "(s’ouvre dans un nouvel onglet)",
  },
  footer: {
    notice: "Démonstration de site VTC pour une entreprise fictive",
    signed: "Signé",
    credits: "Crédits photographiques",
  },
  credits: {
    title: "Crédits photographiques",
    intro:
      "Photographies issues de Wikimedia Commons, redimensionnées pour le web. Les véhicules illustrés ne représentent pas une flotte réelle.",
    back: "← Retour à l’accueil",
  },
};

export type Messages = typeof fr;

const en: Messages = {
  meta: {
    title: "Élyse Chauffeur — Demo website for a private hire and taxi company in Belgium",
    description:
      "Demo website for a fictional chauffeur company in Belgium. No real booking: portfolio work by Yves Web Studio.",
  },
  locale: "en-GB",
  skip: "Skip to content",
  scrollTop: "Back to top",
  header: {
    navLabel: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    cta: "Plan my trip",
    links: {
      home: "Home",
      services: "Services",
      vehicles: "Vehicles",
      trip: "Your trip",
    },
    langLabel: "Language",
    langFr: "Français",
    langEn: "English",
  },
  hero: {
    eyebrow: "Chauffeur-driven transport · Belgium",
    title: "Your journeys across Belgium, with complete peace of mind.",
    lead: "Airport transfers, private rides and business travel: a service designed so you arrive on time, relaxed, without having to think about it.",
    primary: "Plan my trip",
    secondary: "Discover our services",
    tagsLabel: "Types of trips",
    tags: ["Airports", "Business", "Private rides"],
    badge: "Demo website",
    alt: "Black executive saloon parked on a busy city street",
  },
  services: {
    eyebrow: "Services",
    title: "One ride, tailored to your needs",
    intro:
      "Three ways to travel without constraints, with a driver who adapts to your schedule.",
    items: {
      aeroport: {
        title: "Airport transfers",
        text: "Departures and arrivals at Brussels-Zaventem and Charleroi. You enter your trip, we prepare the rest.",
        alt: "Glass façade of the Brussels-Zaventem airport terminal",
      },
      professionnel: {
        title: "Business travel",
        text: "Meetings, stations, trade fairs: a calm ride to arrive ready, or to prepare your files on the way.",
        alt: "Interior of a chauffeur-driven van with light leather seats",
      },
      prive: {
        title: "Private rides and hourly hire",
        text: "Evening out, weekend, city tour: a driver at your disposal, following your plans.",
        alt: "Brussels Grand-Place and its golden façades",
      },
    },
  },
  how: {
    eyebrow: "How it works",
    title: "Three steps, no hassle",
    intro:
      "The trip preparation journey, as a real website could offer it to its customers.",
    steps: [
      {
        title: "Choose",
        text: "Select the type of service and the vehicle category suited to your group.",
      },
      {
        title: "Fill in",
        text: "Enter addresses, date, time and, if needed, a return trip or a few options.",
      },
      {
        title: "Check",
        text: "Review the summary, copy it, print it or add it to your calendar.",
      },
    ],
  },
  vehicles: {
    eyebrow: "Vehicles",
    title: "Three categories to travel at your own pace",
    intro:
      "Demo categories, for illustration only: this website does not present a real fleet.",
    capacity: "Capacity",
    selected: "selected",
    upTo: "Up to {n} passengers",
    luggage: "{n} bags",
    choose: "Select",
    chooseAria: "Select {name}",
    items: {
      berline: {
        name: "Saloon",
        description:
          "The simple, comfortable choice for a daily ride, a station or an airport.",
        alt: "Black Mercedes saloon parked in front of an airport terminal, number plate visible",
      },
      "berline-premium": {
        name: "Premium saloon",
        description:
          "A more refined finish for your important meetings and late-evening arrivals.",
        alt: "Recent black luxury saloon seen from the front three-quarter, in front of a hotel entrance at dusk",
      },
      van: {
        name: "Van",
        description:
          "Room for groups, families and travellers with lots of luggage.",
        alt: "Black Mercedes van with a taxi roof sign, front three-quarter view, number plate visible",
      },
    },
  },
  trip: {
    eyebrow: "Your trip",
    title: "Plan your trip in a few moments",
    intro:
      "Enter your trip details and get a clear summary. No phone number, e-mail or payment details are requested.",
  },
  form: {
    title: "Trip details",
    alertOne: "Please correct the field flagged below.",
    alertMany: "Please correct the {n} fields flagged below.",
    service: "Type of service",
    select: "Select…",
    serviceNames: {
      airport: "Airport transfer",
      business: "Business trip",
      private: "Private ride",
      hire: "Hourly hire",
    },
    from: "Pick-up address",
    fromPlaceholder: "Street, number, city",
    to: "Destination",
    toPlaceholder: "Drop-off address or place",
    swap: "Swap pick-up and destination",
    suggestionsLabel: "Destination suggestions",
    suggestionsTitle: "Suggestions:",
    suggestions: [
      "Brussels-Zaventem Airport",
      "Charleroi Airport",
      "Brussels-South Station",
      "Brussels-Central Station",
      "Liège-Guillemins Station",
      "Antwerp-Central Station",
    ],
    date: "Outbound date",
    time: "Outbound time",
    roundTrip: "Add a return trip",
    returnDate: "Return date",
    returnTime: "Return time",
    passengers: "Number of passengers",
    vehicle: "Vehicle category",
    vehicleOption: "{name} (max. {n} passengers)",
    flight: "Flight number (optional)",
    flightPlaceholder: "e.g. SN 3201",
    optionsLegend: "Options (optional)",
    options: {
      "siege-enfant": "Child seat or booster",
      bagages: "Large luggage",
      panneau: "Meet and greet with name sign",
      arret: "Intermediate stop",
    },
    submit: "View summary",
    note: "Addresses entered are neither transmitted nor stored.",
  },
  demoNotice: "Demo: no booking is sent.",
  errors: {
    service: "Choose a type of service.",
    fromRequired: "Enter your pick-up address.",
    toRequired: "Enter your destination.",
    sameAddress: "The destination must differ from the pick-up address.",
    dateRequired: "Choose a date.",
    dateInvalid: "This date is not valid.",
    datePast: "This date has already passed.",
    timeRequired: "Choose a time.",
    timeInvalid: "This time is not valid.",
    timePast: "This time has already passed. Choose a future time.",
    passengersMin: "Enter at least 1 passenger.",
    passengersCapacity:
      "This category seats up to {n} passengers. Reduce the number of passengers or choose another category.",
    passengersMax: "The maximum number of passengers is 7.",
    vehicleRequired: "Choose a vehicle category.",
    flightFormat:
      "Expected format: two characters followed by digits, for example SN 3201.",
    returnDateRequired: "Choose the return date.",
    returnTimeRequired: "Choose the return time.",
    returnBeforeOutbound: "The return must take place after the outbound trip.",
  },
  summary: {
    kicker: "Summary",
    title: "Your trip",
    service: "Service",
    from: "Pick-up",
    to: "Destination",
    outbound: "Outbound",
    inbound: "Return",
    passengers: "Passengers",
    passengerOne: "{n} passenger",
    passengerMany: "{n} passengers",
    vehicle: "Vehicle",
    vehicleDetail: "{name} — up to {p} passengers, {l} bags",
    flight: "Flight number",
    options: "Options",
    demoDetail:
      "This summary is neither a booking nor a quote: no price or distance is calculated.",
    copy: "Copy",
    copied: "Copied",
    copiedStatus: "Summary copied to the clipboard.",
    print: "Print",
    calendar: "Calendar",
    edit: "Edit my trip",
    textTitle: "Trip summary — Élyse Chauffeur (demo)",
    icsFile: "demo-trip.ics",
    icsDemo: "demo",
  },
  faq: {
    eyebrow: "Frequently asked questions",
    title: "Before you start",
    items: [
      {
        q: "What types of trips are shown?",
        a: "The site shows airport transfers (Brussels-Zaventem and Charleroi), business travel, as well as private rides and hourly hire. These are examples of what a chauffeur company could offer.",
      },
      {
        q: "How do I choose a vehicle category?",
        a: "First count the number of passengers and bags. The saloon and premium saloon seat up to 3 passengers with 2 bags, the van up to 7 passengers with 6 bags. The form checks that the number of passengers fits the chosen category.",
      },
      {
        q: "Can I actually book on this site?",
        a: "No. This site is a web development demo, built as an example for a small business. No booking is sent, no data is stored and no price is calculated. The form only shows the journey a real website could offer.",
      },
    ],
  },
  dev: {
    title: "A site like this one for your business?",
    madeBy: "Built by",
    baseline: "Websites, dashboards and automation.",
    cta: "Let’s discuss your website",
    contact: {
      title: "Let’s discuss your website",
      intro: "Describe your project: the message will open in your email app, ready to send to Yves Web Studio.",
      name: "Your name",
      email: "Your email",
      message: "Your message",
      send: "Send",
      close: "Close",
      required: "This field is required.",
      invalidEmail: "Enter a valid email address.",
      note: "No data is stored on this site.",
      subject: "Website request",
    },
    newTab: "(opens in a new tab)",
  },
  footer: {
    notice: "VTC website demo for a fictional company",
    signed: "Signed",
    credits: "Photo credits",
  },
  credits: {
    title: "Photo credits",
    intro:
      "Photographs from Wikimedia Commons, resized for the web. The vehicles shown do not represent a real fleet.",
    back: "← Back to home",
  },
};

export const messages: Record<Lang, Messages> = { fr, en };

/** Remplace les marqueurs {nom} d’un texte. */
export function fmt(text: string, vars: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (_, key: string) => String(vars[key] ?? ""));
}
