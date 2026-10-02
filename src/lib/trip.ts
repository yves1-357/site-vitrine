import { vehicles, type ServiceId, type VehicleId } from "@/config/site";
import { fmt, type Lang, type Messages } from "@/i18n/messages";

export type TripValues = {
  service: "" | ServiceId;
  from: string;
  to: string;
  date: string;
  time: string;
  passengers: string;
  vehicle: "" | VehicleId;
  flight: string;
  roundTrip: boolean;
  returnDate: string;
  returnTime: string;
  options: string[];
};

export type TripField = keyof TripValues;
export type TripError = { code: keyof Messages["errors"]; n?: number };
export type TripErrors = Partial<Record<TripField, TripError>>;

export function errorText(error: TripError, t: Messages): string {
  return fmt(t.errors[error.code], { n: error.n ?? 0 });
}

export const emptyTrip: TripValues = {
  service: "",
  from: "",
  to: "",
  date: "",
  time: "",
  passengers: "1",
  vehicle: "",
  flight: "",
  roundTrip: false,
  returnDate: "",
  returnTime: "",
  options: [],
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

  if (!values.service) errors.service = { code: "service" };

  if (!values.from.trim()) errors.from = { code: "fromRequired" };
  if (!values.to.trim()) errors.to = { code: "toRequired" };
  if (
    !errors.from &&
    !errors.to &&
    normalizeAddress(values.from) === normalizeAddress(values.to)
  ) {
    errors.to = { code: "sameAddress" };
  }

  if (!values.date) {
    errors.date = { code: "dateRequired" };
  } else if (!parseLocal(values.date, "00:00")) {
    errors.date = { code: "dateInvalid" };
  } else if (values.date < todayLocalISO(now)) {
    errors.date = { code: "datePast" };
  }

  if (!values.time) {
    errors.time = { code: "timeRequired" };
  } else if (!errors.date) {
    const when = parseLocal(values.date, values.time);
    if (!when) {
      errors.time = { code: "timeInvalid" };
    } else if (when.getTime() <= now.getTime()) {
      errors.time = { code: "timePast" };
    }
  }

  const passengers = Number(values.passengers);
  const vehicle = vehicles.find((v) => v.id === values.vehicle);
  if (!Number.isInteger(passengers) || passengers < 1) {
    errors.passengers = { code: "passengersMin" };
  } else if (vehicle && passengers > vehicle.passengers) {
    errors.passengers = { code: "passengersCapacity", n: vehicle.passengers };
  } else if (passengers > 7) {
    errors.passengers = { code: "passengersMax" };
  }

  if (!values.vehicle) errors.vehicle = { code: "vehicleRequired" };

  if (
    values.flight.trim() &&
    !/^[A-Za-z0-9]{2}\s?\d{1,4}[A-Za-z]?$/.test(values.flight.trim())
  ) {
    errors.flight = { code: "flightFormat" };
  }

  if (values.roundTrip) {
    if (!values.returnDate) {
      errors.returnDate = { code: "returnDateRequired" };
    } else if (!parseLocal(values.returnDate, "00:00")) {
      errors.returnDate = { code: "dateInvalid" };
    }
    if (!values.returnTime) errors.returnTime = { code: "returnTimeRequired" };
    if (!errors.returnDate && !errors.returnTime) {
      const back = parseLocal(values.returnDate, values.returnTime);
      const out = parseLocal(values.date, values.time);
      if (!back) {
        errors.returnTime = { code: "timeInvalid" };
      } else if (out && back.getTime() <= out.getTime()) {
        errors.returnDate = { code: "returnBeforeOutbound" };
      } else if (back.getTime() <= now.getTime()) {
        errors.returnDate = { code: "datePast" };
      }
    }
  }

  return errors;
}

export function formatDate(date: string, lang: Lang, locale: string): string {
  const parsed = parseLocal(date, "00:00");
  if (!parsed) return date;
  const text = new Intl.DateTimeFormat(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsed);
  return lang === "fr" ? text.charAt(0).toUpperCase() + text.slice(1) : text;
}

export function formatTime(time: string, lang: Lang): string {
  return lang === "fr" ? time.replace(":", " h ") : time;
}

function icsEscape(text: string): string {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r?\n/g, "\\n");
}

function icsStamp(date: string, time: string): string {
  return `${date.replace(/-/g, "")}T${time.replace(":", "")}00`;
}

/** Fichier calendrier généré localement dans le navigateur ; rien n’est envoyé. */
export function buildIcs(values: TripValues, lang: Lang, t: Messages): string {
  const vehicleName = values.vehicle ? t.vehicles.items[values.vehicle].name : "";
  const service = values.service ? t.form.serviceNames[values.service] : "";
  const events: [string, string, string, string][] = [
    [t.summary.outbound, values.date, values.time, `${values.from.trim()} → ${values.to.trim()}`],
  ];
  if (values.roundTrip) {
    events.push([
      t.summary.inbound,
      values.returnDate,
      values.returnTime,
      `${values.to.trim()} → ${values.from.trim()}`,
    ]);
  }
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    `PRODID:-//Elyse Chauffeur//Demonstration//${lang.toUpperCase()}`,
    "CALSCALE:GREGORIAN",
  ];
  events.forEach(([label, date, time, route], index) => {
    lines.push(
      "BEGIN:VEVENT",
      `UID:demo-${icsStamp(date, time)}-${index}@elyse-chauffeur.demo`,
      `DTSTAMP:${icsStamp(todayLocalISO(), "00:00")}`,
      `DTSTART:${icsStamp(date, time)}`,
      "DURATION:PT1H",
      `SUMMARY:${icsEscape(`${service} — ${label} (${t.summary.icsDemo})`)}`,
      `DESCRIPTION:${icsEscape(`${route}\n${t.summary.vehicle} : ${vehicleName}\n${t.demoNotice}`)}`,
      "END:VEVENT",
    );
  });
  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

export function buildSummaryText(
  values: TripValues,
  optionLabels: string[],
  lang: Lang,
  t: Messages,
): string {
  const s = t.summary;
  const when = (d: string, h: string) =>
    `${formatDate(d, lang, t.locale)}${lang === "fr" ? " à " : " at "}${formatTime(h, lang)}`;
  const lines = [
    s.textTitle,
    `${s.service} : ${values.service ? t.form.serviceNames[values.service] : ""}`,
    `${s.from} : ${values.from.trim()}`,
    `${s.to} : ${values.to.trim()}`,
    `${s.outbound} : ${when(values.date, values.time)}`,
  ];
  if (values.roundTrip) lines.push(`${s.inbound} : ${when(values.returnDate, values.returnTime)}`);
  lines.push(
    `${s.passengers} : ${values.passengers}`,
    `${s.vehicle} : ${values.vehicle ? t.vehicles.items[values.vehicle].name : ""}`,
  );
  if (values.flight.trim()) lines.push(`${s.flight} : ${values.flight.trim().toUpperCase()}`);
  if (optionLabels.length) lines.push(`${s.options} : ${optionLabels.join(", ")}`);
  lines.push(t.demoNotice);
  return lines.join("\n");
}
