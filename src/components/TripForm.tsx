"use client";

import { CircleAlert } from "lucide-react";
import {
  destinationSuggestions,
  serviceTypes,
  vehicles,
} from "@/config/site";
import type { TripErrors, TripField, TripValues } from "@/lib/trip";

type Props = {
  values: TripValues;
  errors: TripErrors;
  onChange: (field: TripField, value: string) => void;
  onSubmit: () => void;
};

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="field-error">
      <CircleAlert aria-hidden="true" />
      <span>{message}</span>
    </p>
  );
}

export default function TripForm({ values, errors, onChange, onSubmit }: Props) {
  const aria = (field: TripField) => ({
    "aria-invalid": errors[field] ? (true as const) : undefined,
    "aria-describedby": errors[field] ? `err-${field}` : undefined,
  });

  const errorList = (Object.keys(errors) as TripField[]).length;

  return (
    <form
      className="trip-form"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <h3 className="form-title">Détails du trajet</h3>

      {errorList > 0 && (
        <p className="form-alert" role="alert">
          Merci de corriger {errorList > 1 ? `les ${errorList} champs` : "le champ"} signalé
          {errorList > 1 ? "s" : ""} ci-dessous.
        </p>
      )}

      <div className="field">
        <label htmlFor="trip-service">Type de prestation</label>
        <select
          id="trip-service"
          value={values.service}
          onChange={(e) => onChange("service", e.target.value)}
          {...aria("service")}
        >
          <option value="">Sélectionner…</option>
          {serviceTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <FieldError id="err-service" message={errors.service} />
      </div>

      <div className="field">
        <label htmlFor="trip-from">Adresse de départ</label>
        <input
          id="trip-from"
          type="text"
          autoComplete="off"
          placeholder="Rue, numéro, ville"
          value={values.from}
          onChange={(e) => onChange("from", e.target.value)}
          {...aria("from")}
        />
        <FieldError id="err-from" message={errors.from} />
      </div>

      <div className="field">
        <label htmlFor="trip-to">Destination</label>
        <input
          id="trip-to"
          type="text"
          autoComplete="off"
          placeholder="Adresse ou lieu d’arrivée"
          value={values.to}
          onChange={(e) => onChange("to", e.target.value)}
          {...aria("to")}
        />
        <FieldError id="err-to" message={errors.to} />
        <div className="suggestions" role="group" aria-label="Suggestions de destinations">
          <span>Suggestions :</span>
          {destinationSuggestions.map((place) => (
            <button
              key={place}
              type="button"
              className="chip"
              onClick={() => onChange("to", place)}
            >
              {place}
            </button>
          ))}
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="trip-date">Date</label>
          <input
            id="trip-date"
            type="date"
            value={values.date}
            onChange={(e) => onChange("date", e.target.value)}
            {...aria("date")}
          />
          <FieldError id="err-date" message={errors.date} />
        </div>
        <div className="field">
          <label htmlFor="trip-time">Heure</label>
          <input
            id="trip-time"
            type="time"
            value={values.time}
            onChange={(e) => onChange("time", e.target.value)}
            {...aria("time")}
          />
          <FieldError id="err-time" message={errors.time} />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="trip-passengers">Nombre de passagers</label>
          <select
            id="trip-passengers"
            value={values.passengers}
            onChange={(e) => onChange("passengers", e.target.value)}
            {...aria("passengers")}
          >
            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <FieldError id="err-passengers" message={errors.passengers} />
        </div>
        <div className="field">
          <label htmlFor="trip-vehicle">Catégorie de véhicule</label>
          <select
            id="trip-vehicle"
            value={values.vehicle}
            onChange={(e) => onChange("vehicle", e.target.value)}
            {...aria("vehicle")}
          >
            <option value="">Sélectionner…</option>
            {vehicles.map((v) => (
              <option key={v.id} value={v.id}>
                {v.name} (max. {v.passengers} passagers)
              </option>
            ))}
          </select>
          <FieldError id="err-vehicle" message={errors.vehicle} />
        </div>
      </div>

      <button type="submit" className="btn btn-gold btn-block">
        Voir le récapitulatif
      </button>
      <p className="form-note">
        Démonstration : aucune réservation n’est envoyée. Les adresses saisies
        ne sont ni transmises ni conservées.
      </p>
    </form>
  );
}
