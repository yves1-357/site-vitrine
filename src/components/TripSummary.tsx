import type { RefObject } from "react";
import { Info, Pencil } from "lucide-react";
import { vehicles } from "@/config/site";
import { formatDateFr, type TripValues } from "@/lib/trip";

type Props = {
  values: TripValues;
  onEdit: () => void;
  headingRef: RefObject<HTMLHeadingElement | null>;
};

export default function TripSummary({ values, onEdit, headingRef }: Props) {
  const vehicle = vehicles.find((v) => v.id === values.vehicle);
  const passengers = Number(values.passengers);

  const rows: [string, string][] = [
    ["Prestation", values.service],
    ["Départ", values.from.trim()],
    ["Destination", values.to.trim()],
    ["Date", formatDateFr(values.date)],
    ["Heure", values.time.replace(":", " h ")],
    ["Passagers", `${passengers} ${passengers > 1 ? "passagers" : "passager"}`],
    [
      "Véhicule",
      vehicle
        ? `${vehicle.name} — jusqu’à ${vehicle.passengers} passagers, ${vehicle.luggage} bagages`
        : "",
    ],
  ];

  return (
    <div className="summary" aria-live="polite">
      <p className="summary-kicker">Récapitulatif</p>
      <h3 ref={headingRef} tabIndex={-1} className="form-title">
        Votre trajet
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
          <strong>Démonstration : aucune réservation n’est envoyée.</strong>{" "}
          Ce récapitulatif ne constitue ni une réservation ni un devis : aucun
          prix ni aucune distance n’est calculé.
        </span>
      </p>

      <button type="button" className="btn btn-outline btn-block" onClick={onEdit}>
        <Pencil aria-hidden="true" /> Modifier mon trajet
      </button>
    </div>
  );
}
