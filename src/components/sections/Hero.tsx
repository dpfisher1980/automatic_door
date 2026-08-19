import type { HeroContent, NavItem } from '../../content/types'

type HeroSectionProps = {
  hero: HeroContent
  nav: NavItem[]
}

export function HeroSection({ hero, nav }: HeroSectionProps) {
  return (
    <header className="hero-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <div className="container">
        <nav className="top-nav" aria-label="Primary">
          <a className="brand" href="#top">
            Automatic Door Solutions
          </a>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="top" className="hero-content section">
          <div className="hero-copy-block">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p className="hero-subtitle">{hero.subtitle}</p>
            <div className="hero-cta-row">
              <a className="btn btn-primary" href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </a>
              <a className="btn btn-ghost" href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          <aside
            className="hero-editorial-panel"
            aria-label="Design and reliability highlights"
          >
            <div className="editorial-card editorial-card-large">
              <p>Precision in Motion</p>
              <h3>Decades of expertise in automated access systems.</h3>
            </div>
            <div className="editorial-card">
              <p>Where Engineering Meets Elegance</p>
              <h3>Elevate security, efficiency, and architectural design.</h3>
            </div>
            <div className="editorial-card">
              <p>Compliance You Can Trust</p>
              <h3>Delivering compliant and reliable access systems.</h3>
            </div>
          </aside>

          <div className="hero-divider" aria-hidden="true" />

          <div>
            <p className="section-kicker">Performance Snapshot</p>
          </div>
          <ul className="stats-grid" aria-label="Company highlights">
            {hero.stats.map((stat) => (
              <li key={stat.label}>
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </header>
  )
}
