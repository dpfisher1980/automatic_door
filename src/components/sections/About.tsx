import type { AboutContent } from '../../content/types'

type AboutSectionProps = {
  about: AboutContent
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="section about-section">
      <div className="container split-layout">
        <div>
          <p className="section-kicker">Company</p>
          <h2>{about.heading}</h2>
          {about.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="highlight-list">
          {about.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
