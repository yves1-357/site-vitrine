import Image from "next/image";
import { services } from "@/config/site";

export default function Services() {
  return (
    <section id="services" className="section" aria-labelledby="titre-services">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">Services</p>
          <h2 id="titre-services">Un trajet, selon votre besoin</h2>
          <p className="section-intro">
            Trois façons de vous déplacer sans contrainte, avec un chauffeur
            qui s’adapte à votre programme.
          </p>
        </div>

        <div className="services-layout">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`service service-${index + 1}`}
            >
              <Image
                src={service.image.src}
                alt={service.image.alt}
                width={service.image.width}
                height={service.image.height}
                sizes={
                  index === 0
                    ? "(max-width: 900px) 92vw, 56vw"
                    : "(max-width: 900px) 92vw, 36vw"
                }
              />
              <div className="service-body">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
