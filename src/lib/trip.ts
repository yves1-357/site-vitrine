import { vehicles, type VehicleId } from "@/config/site";

export type TripValues = {
  service: string;
  from: string;
  to: string;
  date: string;
  time: string;
  passengers: string;
  vehicle: "" | VehicleId;
};

export type TripField = keyof TripValues;
export type TripErrors = Partial<Record<TripField, string>>;

export const emptyTrip: TripValues = {
  service: "",
  from: "",
  to: "",
  date: "",
  time: "",
  passengers: "1",
  vehicle: "",
};

/** Normalisation simple : minuscules, sans accents ni ponctuation, espaces réduits. */
export function normalizeAddress(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

export function todayLocalISO(now = new Date()): string {
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

function parseLocal(date: string, time: string): Date | null {
  const d = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
  const t = /^(\d{2}):(\d{2})$/.exec(time);
  if (!d || !t) return null;
  const result = new Date(
    Number(d[1]),
    Number(d[2]) - 1,
    Number(d[3]),
    Number(t[1]),
    Number(t[2]),
  );
  // Rejette les dates inexistantes comme le 31 février.
  if (
    result.getFullYear() !== Number(d[1]) ||
    result.getMonth() !== Number(d[2]) - 1 ||
    result.getDate() !== Number(d[3])
  ) {
    return null;
  }
  return result;
}

export function validateTrip(values: TripValues, now = new Date()): TripErrors {
  const errors: TripErrors = {};

  if (!values.service) errors.service = "Choisissez un type de prestation.";

  if (!values.from.trim()) errors.from = "Indiquez votre adresse de départ.";
  if (!values.to.trim()) errors.to = "Indiquez votre destination.";
  if (
    !errors.from &&
    !errors.to &&
    normalizeAddress(values.from) === normalizeAddress(values.to)
  ) {
    errors.to = "La destination doit être différente de l’adresse de départ.";
  }

  if (!values.date) {
    errors.date = "Choisissez une date.";
  } else if (!parseLocal(values.date, "00:00")) {
    errors.date = "Cette date n’est pas valide.";
  } else if (values.date < todayLocalISO(now)) {
    errors.date = "Cette date est déjà passée.";
  }

  if (!values.time) {
    errors.time = "Choisissez une heure.";
  } else if (!errors.date) {
    const when = parseLocal(values.date, values.time);
    if (!when) {
      errors.time = "Cette heure n’est pas valide.";
    } else if (when.getTime() <= now.getTime()) {
      errors.time = "Cette heure est déjà passée. Choisissez un horaire à venir.";
    }
  }

  const passengers = Number(values.passengers);
  const vehicle = vehicles.find((v) => v.id === values.vehicle);
  if (!Number.isInteger(passengers) || passengers < 1) {
    errors.passengers = "Indiquez au moins 1 passager.";
  } else if (vehicle && passengers > vehicle.passengers) {
    errors.passengers = `Cette catégorie accueille jusqu’à ${vehicle.passengers} passagers. Réduisez le nombre de passagers ou choisissez une autre catégorie.`;
  } else if (passengers > 7) {
    errors.passengers = "Le nombre maximal de passagers est de 7.";
  }

  if (!values.vehicle) errors.vehicle = "Choisissez une catégorie de véhicule.";

  return errors;
}

export function formatDateFr(date: string): string {
  const parsed = parseLocal(date, "00:00");
  if (!parsed) return date;
  const text = new Intl.DateTimeFormat("fr-BE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsed);
  return text.charAt(0).toUpperCase() + text.slice(1);
}
