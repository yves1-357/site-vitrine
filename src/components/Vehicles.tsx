"use client";

import Image from "next/image";
import { Check, Luggage, Users } from "lucide-react";
import { vehicles, type VehicleId } from "@/config/site";

type Props = {
  selected: "" | VehicleId;
  onChoose: (id: VehicleId) => void;
};

export default function Vehicles({ selected, onChoose }: Props) {
  return (
    <section
      id="vehicules"
      className="section section-alt"
      aria-labelledby="titre-vehicules"
    >
      <div className="container">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">Véhicules</p>
          <h2 id="titre-vehicules">Trois catégories pour voyager à votre rythme</h2>
          <p className="section-intro">
            Catégories de démonstration, à titre illustratif : ce site ne
            présente pas de flotte réelle.
          </p>
        </div>

        <ul className="vehicle-list">
          {vehicles.map((vehicle) => {
            const isSelected = selected === vehicle.id;
            return (
              <li
                key={vehicle.id}
                className={`vehicle${isSelected ? " is-selected" : ""}`}
              >
                <Image
                  src={vehicle.image.src}
                  alt={vehicle.image.alt}
                  width={vehicle.image.width}
                  height={vehicle.image.height}
                  sizes="(max-width: 700px) 92vw, 380px"
                />
                <div className="vehicle-body">
                  <h3>{vehicle.name}</h3>
                  <p>{vehicle.description}</p>
                  <ul className="vehicle-specs" aria-label="Capacité">
                    <li>
                      <Users aria-hidden="true" /> Jusqu’à {vehicle.passengers}{" "}
                      passagers
                    </li>
                    <li>
                      <Luggage aria-hidden="true" /> {vehicle.luggage} bagages
                    </li>
                  </ul>
                  <button
                    type="button"
                    className={`btn ${isSelected ? "btn-gold" : "btn-outline"}`}
                    aria-pressed={isSelected}
                    aria-label={`Choisir ${vehicle.name}${isSelected ? " (sélectionné)" : ""}`}
                    onClick={() => onChoose(vehicle.id)}
                  >
                    {isSelected ? <Check aria-hidden="true" /> : null}
                    Choisir
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
