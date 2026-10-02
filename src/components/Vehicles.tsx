"use client";

import Image from "next/image";
import { Check, Luggage, Users } from "lucide-react";
import { vehicles, type VehicleId } from "@/config/site";
import { fmt } from "@/i18n/messages";
import { useI18n } from "@/i18n/LanguageProvider";

type Props = {
  selected: "" | VehicleId;
  onChoose: (id: VehicleId) => void;
};

export default function Vehicles({ selected, onChoose }: Props) {
  const { t } = useI18n();
  const v = t.vehicles;
  return (
    <section
      id="vehicules"
      className="section section-alt"
      aria-labelledby="titre-vehicules"
    >
      <div className="container">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">{v.eyebrow}</p>
          <h2 id="titre-vehicules">{v.title}</h2>
          <p className="section-intro">{v.intro}</p>
        </div>

        <ul className="vehicle-list">
          {vehicles.map((vehicle) => {
            const isSelected = selected === vehicle.id;
            const info = v.items[vehicle.id];
            return (
              <li
                key={vehicle.id}
                className={`vehicle${isSelected ? " is-selected" : ""}`}
              >
                <Image
                  src={vehicle.image.src}
                  alt={info.alt}
                  width={vehicle.image.width}
                  height={vehicle.image.height}
                  sizes="(max-width: 700px) 92vw, 380px"
                />
                <div className="vehicle-body">
                  <h3>{info.name}</h3>
                  <p>{info.description}</p>
                  <ul className="vehicle-specs" aria-label={v.capacity}>
                    <li>
                      <Users aria-hidden="true" /> {fmt(v.upTo, { n: vehicle.passengers })}
                    </li>
                    <li>
                      <Luggage aria-hidden="true" /> {fmt(v.luggage, { n: vehicle.luggage })}
                    </li>
                  </ul>
                  <button
                    type="button"
                    className={`btn ${isSelected ? "btn-gold" : "btn-outline"}`}
                    aria-pressed={isSelected}
                    aria-label={`${fmt(v.chooseAria, { name: info.name })}${isSelected ? ` (${v.selected})` : ""}`}
                    onClick={() => onChoose(vehicle.id)}
                  >
                    {isSelected ? <Check aria-hidden="true" /> : null}
                    {v.choose}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
