"use client";

import Image from "next/image";
import { services } from "@/config/site";
import { useI18n } from "@/i18n/LanguageProvider";

export default function Services() {
  const { t } = useI18n();
  const s = t.services;
  return (
    <section id="services" className="section" aria-labelledby="titre-services">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">{s.eyebrow}</p>
          <h2 id="titre-services">{s.title}</h2>
          <p className="section-intro">{s.intro}</p>
        </div>

        <div className="services-layout">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`service service-${index + 1}`}
            >
              <Image
                src={service.image.src}
                alt={s.items[service.id].alt}
                width={service.image.width}
                height={service.image.height}
                sizes={
                  index === 0
                    ? "(max-width: 900px) 92vw, 56vw"
                    : "(max-width: 900px) 92vw, 36vw"
                }
              />
              <div className="service-body">
                <h3>{s.items[service.id].title}</h3>
                <p>{s.items[service.id].text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
