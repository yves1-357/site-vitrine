"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { CalendarPlus, Check, Copy, Info, Pencil, Printer } from "lucide-react";
import { tripOptionIds, vehicles } from "@/config/site";
import { fmt } from "@/i18n/messages";
import { useI18n } from "@/i18n/LanguageProvider";
import {
  buildIcs,
  buildSummaryText,
  formatDate,
  formatTime,
  type TripValues,
} from "@/lib/trip";

type Props = {
  values: TripValues;
  onEdit: () => void;
  headingRef: RefObject<HTMLHeadingElement | null>;
};

export default function TripSummary({ values, onEdit, headingRef }: Props) {
  const { lang, t } = useI18n();
  const s = t.summary;
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  const vehicle = vehicles.find((v) => v.id === values.vehicle);
  const passengers = Number(values.passengers);
  const optionLabels = tripOptionIds
    .filter((id) => values.options.includes(id))
    .map((id) => t.form.options[id]);
  const when = (d: string, h: string) =>
    `${formatDate(d, lang, t.locale)}${lang === "fr" ? " à " : " at "}${formatTime(h, lang)}`;

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const rows: [string, string][] = [
    [s.service, values.service ? t.form.serviceNames[values.service] : ""],
    [s.from, values.from.trim()],
    [s.to, values.to.trim()],
    [s.outbound, when(values.date, values.time)],
  ];
  if (values.roundTrip) rows.push([s.inbound, when(values.returnDate, values.returnTime)]);
  rows.push(
    [s.passengers, fmt(passengers > 1 ? s.passengerMany : s.passengerOne, { n: passengers })],
    [
      s.vehicle,
      vehicle
        ? fmt(s.vehicleDetail, {
            name: t.vehicles.items[vehicle.id].name,
            p: vehicle.passengers,
            l: vehicle.luggage,
          })
        : "",
    ],
  );
  if (values.flight.trim()) rows.push([s.flight, values.flight.trim().toUpperCase()]);
  if (optionLabels.length) rows.push([s.options, optionLabels.join(" · ")]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(buildSummaryText(values, optionLabels, lang, t));
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const downloadIcs = () => {
    const blob = new Blob([buildIcs(values, lang, t)], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = s.icsFile;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="summary" aria-live="polite">
      <p className="summary-kicker">{s.kicker}</p>
      <h3 ref={headingRef} tabIndex={-1} className="form-title">
        {s.title}
      </h3>

      <dl className="summary-list">
        {rows.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>

      <p className="summary-demo">
        <Info aria-hidden="true" />
        <span>
          <strong>{t.demoNotice}</strong> {s.demoDetail}
        </span>
      </p>

      <div className="summary-actions">
        <button type="button" className="btn btn-outline" onClick={copy}>
          {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
          {copied ? s.copied : s.copy}
        </button>
        <button type="button" className="btn btn-outline" onClick={() => window.print()}>
          <Printer aria-hidden="true" /> {s.print}
        </button>
        <button type="button" className="btn btn-outline" onClick={downloadIcs}>
          <CalendarPlus aria-hidden="true" /> {s.calendar}
        </button>
      </div>
      <p className="sr-only" role="status">
        {copied ? s.copiedStatus : ""}
      </p>

      <button type="button" className="btn btn-gold btn-block" onClick={onEdit}>
        <Pencil aria-hidden="true" /> {s.edit}
      </button>
    </div>
  );
}
