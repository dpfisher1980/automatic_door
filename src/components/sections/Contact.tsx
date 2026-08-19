import type { ContactContent } from '../../content/types'

type ContactSectionProps = {
  contact: ContactContent
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact" className="section section-contact">
      <div className="container contact-panel">
        <div>
          <p className="section-kicker">Get In Touch</p>
          <h2>{contact.heading}</h2>
          <p>{contact.intro}</p>
          <p className="contact-meta">{contact.responseSla}</p>
          <p className="contact-meta">{contact.businessHours}</p>
        </div>
        <div className="contact-links" aria-label="Contact channels">
          <a href={`mailto:${contact.email}`}>
            <span>{contact.emailLabel}</span>
            <strong>{contact.email}</strong>
          </a>
          <a href={contact.phoneHref}>
            <span>{contact.phoneLabel}</span>
            <strong>{contact.phoneDisplay}</strong>
          </a>
        </div>
      </div>
    </section>
  )
}
