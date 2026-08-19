import { z } from 'zod'

const CtaSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
})

const StatSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
})

const NavItemSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
})

const HeroSchema = z.object({
  eyebrow: z.string().min(1),
  title: z.string().min(1),
  subtitle: z.string().min(1),
  primaryCta: CtaSchema,
  secondaryCta: CtaSchema,
  stats: z.array(StatSchema).min(1),
})

const AboutSchema = z.object({
  heading: z.string().min(1),
  body: z.array(z.string().min(1)).min(1),
  highlights: z.array(z.string().min(1)).min(1),
})

const ServiceSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
})

const ServicesSchema = z.object({
  heading: z.string().min(1),
  intro: z.string().min(1),
  items: z.array(ServiceSchema).min(1),
})

const ProjectSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  sector: z.string().min(1),
  imageUrl: z.string().min(1),
  imageAlt: z.string().min(1),
  challenge: z.string().min(1),
  solution: z.string().min(1),
  outcome: z.string().min(1),
})

const ContactSchema = z.object({
  heading: z.string().min(1),
  intro: z.string().min(1),
  emailLabel: z.string().min(1),
  email: z.string().email(),
  phoneLabel: z.string().min(1),
  phoneDisplay: z.string().min(1),
  phoneHref: z.string().min(1),
  responseSla: z.string().min(1),
  businessHours: z.string().min(1),
})

export const SiteContentSchema = z.object({
  nav: z.array(NavItemSchema).min(1),
  hero: HeroSchema,
  about: AboutSchema,
  services: ServicesSchema,
  projects: z.array(ProjectSchema).min(1),
  contact: ContactSchema,
})

export type NavItem = z.infer<typeof NavItemSchema>
export type HeroContent = z.infer<typeof HeroSchema>
export type AboutContent = z.infer<typeof AboutSchema>
export type ServiceItem = z.infer<typeof ServiceSchema>
export type ServicesContent = z.infer<typeof ServicesSchema>
export type ProjectItem = z.infer<typeof ProjectSchema>
export type ContactContent = z.infer<typeof ContactSchema>
export type SiteContent = z.infer<typeof SiteContentSchema>
