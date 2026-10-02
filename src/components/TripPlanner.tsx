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
import TripForm from "./TripForm";
import TripSummary from "./TripSummary";
import Vehicles from "./Vehicles";

const FIELD_ORDER: TripField[] = [
  "service",
  "from",
  "to",
  "date",
  "time",
  "passengers",
  "vehicle",
];

export default function TripPlanner() {
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

  const update = (field: TripField, value: string) => {
    const next = { ...values, [field]: value } as TripValues;
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
            <p className="eyebrow">Votre trajet</p>
            <h2 id="titre-trajet">Préparez votre trajet en quelques instants</h2>
            <p className="section-intro">
              Renseignez votre trajet et obtenez un récapitulatif clair.
              Aucun numéro de téléphone, e-mail ou moyen de paiement n’est demandé.
            </p>
            <p className="demo-notice">Démonstration : aucune réservation n’est envoyée.</p>
          </div>

          <div className="trip-panel">
            {showSummary ? (
              <TripSummary values={values} onEdit={edit} headingRef={summaryRef} />
            ) : (
              <TripForm
                values={values}
                errors={errors}
                onChange={update}
                onSubmit={submit}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
