import type { ServicesContent } from '../../content/types'

type ServicesSectionProps = {
  services: ServicesContent
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="section">
      <div className="container">
        <p className="section-kicker">What We Do</p>
        <h2>{services.heading}</h2>
        <p className="section-intro">{services.intro}</p>

        <div className="services-grid">
          {services.items.map((item) => (
            <article className="service-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
