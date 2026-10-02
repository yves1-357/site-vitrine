"use client";

import { ArrowDownUp, CircleAlert } from "lucide-react";
import { serviceIds, tripOptionIds, vehicles } from "@/config/site";
import { fmt } from "@/i18n/messages";
import { useI18n } from "@/i18n/LanguageProvider";
import { errorText, type TripErrors, type TripField, type TripValues } from "@/lib/trip";

type Props = {
  values: TripValues;
  errors: TripErrors;
  onChange: <F extends TripField>(field: F, value: TripValues[F]) => void;
  onSwap: () => void;
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

export default function TripForm({ values, errors, onChange, onSwap, onSubmit }: Props) {
  const { t } = useI18n();
  const f = t.form;
  const msg = (field: TripField) => {
    const error = errors[field];
    return error ? errorText(error, t) : undefined;
  };
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
      <h3 className="form-title">{f.title}</h3>

      {errorList > 0 && (
        <p className="form-alert" role="alert">
          {errorList > 1 ? fmt(f.alertMany, { n: errorList }) : f.alertOne}
        </p>
      )}

      <div className="field">
        <label htmlFor="trip-service">{f.service}</label>
        <select
          id="trip-service"
          value={values.service}
          onChange={(e) => onChange("service", e.target.value as TripValues["service"])}
          {...aria("service")}
        >
          <option value="">{f.select}</option>
          {serviceIds.map((id) => (
            <option key={id} value={id}>
              {f.serviceNames[id]}
            </option>
          ))}
        </select>
        <FieldError id="err-service" message={msg("service")} />
      </div>

      <div className="field">
        <label htmlFor="trip-from">{f.from}</label>
        <input
          id="trip-from"
          type="text"
          autoComplete="off"
          placeholder={f.fromPlaceholder}
          value={values.from}
          onChange={(e) => onChange("from", e.target.value)}
          {...aria("from")}
        />
        <FieldError id="err-from" message={msg("from")} />
      </div>

      <button type="button" className="swap-btn" onClick={onSwap}>
        <ArrowDownUp aria-hidden="true" /> {f.swap}
      </button>

      <div className="field">
        <label htmlFor="trip-to">{f.to}</label>
        <input
          id="trip-to"
          type="text"
          autoComplete="off"
          placeholder={f.toPlaceholder}
          value={values.to}
          onChange={(e) => onChange("to", e.target.value)}
          {...aria("to")}
        />
        <FieldError id="err-to" message={msg("to")} />
        <div className="suggestions" role="group" aria-label={f.suggestionsLabel}>
          <span>{f.suggestionsTitle}</span>
          {f.suggestions.map((place) => (
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
          <label htmlFor="trip-date">{f.date}</label>
          <input
            id="trip-date"
            type="date"
            value={values.date}
            onChange={(e) => onChange("date", e.target.value)}
            {...aria("date")}
          />
          <FieldError id="err-date" message={msg("date")} />
        </div>
        <div className="field">
          <label htmlFor="trip-time">{f.time}</label>
          <input
            id="trip-time"
            type="time"
            value={values.time}
            onChange={(e) => onChange("time", e.target.value)}
            {...aria("time")}
          />
          <FieldError id="err-time" message={msg("time")} />
        </div>
      </div>

      <label className="check check-toggle" htmlFor="trip-roundTrip">
        <input
          id="trip-roundTrip"
          type="checkbox"
          checked={values.roundTrip}
          onChange={(e) => onChange("roundTrip", e.target.checked)}
        />
        <span>{f.roundTrip}</span>
      </label>

      {values.roundTrip && (
        <div className="field-row field-reveal">
          <div className="field">
            <label htmlFor="trip-returnDate">{f.returnDate}</label>
            <input
              id="trip-returnDate"
              type="date"
              value={values.returnDate}
              onChange={(e) => onChange("returnDate", e.target.value)}
              {...aria("returnDate")}
            />
            <FieldError id="err-returnDate" message={msg("returnDate")} />
          </div>
          <div className="field">
            <label htmlFor="trip-returnTime">{f.returnTime}</label>
            <input
              id="trip-returnTime"
              type="time"
              value={values.returnTime}
              onChange={(e) => onChange("returnTime", e.target.value)}
              {...aria("returnTime")}
            />
            <FieldError id="err-returnTime" message={msg("returnTime")} />
          </div>
        </div>
      )}

      <div className="field-row">
        <div className="field">
          <label htmlFor="trip-passengers">{f.passengers}</label>
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
          <FieldError id="err-passengers" message={msg("passengers")} />
        </div>
        <div className="field">
          <label htmlFor="trip-vehicle">{f.vehicle}</label>
          <select
            id="trip-vehicle"
            value={values.vehicle}
            onChange={(e) => onChange("vehicle", e.target.value as TripValues["vehicle"])}
            {...aria("vehicle")}
          >
            <option value="">{f.select}</option>
            {vehicles.map((v) => (
              <option key={v.id} value={v.id}>
                {fmt(f.vehicleOption, { name: t.vehicles.items[v.id].name, n: v.passengers })}
              </option>
            ))}
          </select>
          <FieldError id="err-vehicle" message={msg("vehicle")} />
        </div>
      </div>

      {values.service === "airport" && (
        <div className="field field-reveal">
          <label htmlFor="trip-flight">{f.flight}</label>
          <input
            id="trip-flight"
            type="text"
            autoComplete="off"
            maxLength={8}
            placeholder={f.flightPlaceholder}
            value={values.flight}
            onChange={(e) => onChange("flight", e.target.value)}
            {...aria("flight")}
          />
          <FieldError id="err-flight" message={msg("flight")} />
        </div>
      )}

      <fieldset className="options">
        <legend>{f.optionsLegend}</legend>
        <div className="options-grid">
          {tripOptionIds.map((id) => (
            <label key={id} className="check" htmlFor={`opt-${id}`}>
              <input
                id={`opt-${id}`}
                type="checkbox"
                checked={values.options.includes(id)}
                onChange={(e) =>
                  onChange(
                    "options",
                    e.target.checked
                      ? [...values.options, id]
                      : values.options.filter((o) => o !== id),
                  )
                }
              />
              <span>{f.options[id]}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <button type="submit" className="btn btn-gold btn-block">
        {f.submit}
      </button>
      <p className="form-note">
        {t.demoNotice} {f.note}
      </p>
    </form>
  );
}
