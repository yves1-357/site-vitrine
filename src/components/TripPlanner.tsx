"use client";

import { useEffect, useRef, useState } from "react";
import type { VehicleId } from "@/config/site";
import {
  emptyTrip,
  validateTrip,
  type TripErrors,
  type TripField,
  type TripValues,
} from "@/lib/trip";
import { useI18n } from "@/i18n/LanguageProvider";
import TripForm from "./TripForm";
import TripSummary from "./TripSummary";
import Vehicles from "./Vehicles";

const FIELD_ORDER: TripField[] = [
  "service",
  "from",
  "to",
  "date",
  "time",
  "returnDate",
  "returnTime",
  "passengers",
  "vehicle",
  "flight",
];

export default function TripPlanner() {
  const { t } = useI18n();
  const [values, setValues] = useState<TripValues>(emptyTrip);
  const [errors, setErrors] = useState<TripErrors>({});
  const [attempted, setAttempted] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const summaryRef = useRef<HTMLHeadingElement>(null);
  const focusAfterEdit = useRef<string | null>(null);

  useEffect(() => {
    if (showSummary) {
      summaryRef.current?.focus({ preventScroll: true });
    } else if (focusAfterEdit.current) {
      document.getElementById(focusAfterEdit.current)?.focus({ preventScroll: true });
      focusAfterEdit.current = null;
    }
  }, [showSummary]);

  const update = <F extends TripField>(field: F, value: TripValues[F]) => {
    const next = { ...values, [field]: value };
    setValues(next);
    if (attempted) setErrors(validateTrip(next));
  };

  const swap = () => {
    const next = { ...values, from: values.to, to: values.from };
    setValues(next);
    if (attempted) setErrors(validateTrip(next));
  };

  const chooseVehicle = (id: VehicleId) => {
    const next = { ...values, vehicle: id };
    setValues(next);
    if (attempted) setErrors(validateTrip(next));
    focusAfterEdit.current = "trip-vehicle";
    const wasSummary = showSummary;
    setShowSummary(false);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document
      .getElementById("trajet")
      ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    // Si le formulaire est déjà visible, l’effet ne se redéclenche pas.
    if (!wasSummary) {
      window.setTimeout(() => {
        document.getElementById("trip-vehicle")?.focus({ preventScroll: true });
        focusAfterEdit.current = null;
      }, reduce ? 0 : 500);
    }
  };

  const submit = () => {
    const found = validateTrip(values);
    setErrors(found);
    setAttempted(true);
    const first = FIELD_ORDER.find((field) => found[field]);
    if (first) {
      document.getElementById(`trip-${first}`)?.focus();
      return;
    }
    setShowSummary(true);
  };

  const edit = () => {
    focusAfterEdit.current = "trip-service";
    setShowSummary(false);
  };

  return (
    <>
      <Vehicles selected={values.vehicle} onChoose={chooseVehicle} />
      <section id="trajet" className="section section-night" aria-labelledby="titre-trajet">
        <div className="container trip-grid">
          <div className="trip-intro">
            <p className="eyebrow">{t.trip.eyebrow}</p>
            <h2 id="titre-trajet">{t.trip.title}</h2>
            <p className="section-intro">{t.trip.intro}</p>
            <p className="demo-notice">{t.demoNotice}</p>
          </div>

          <div className="trip-panel">
            {showSummary ? (
              <TripSummary values={values} onEdit={edit} headingRef={summaryRef} />
            ) : (
              <TripForm
                values={values}
                errors={errors}
                onChange={update}
                onSwap={swap}
                onSubmit={submit}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
