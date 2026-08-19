import type { SiteContent } from './types'

export const localSiteContent: SiteContent = {
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Commercial Entry Specialists',
    title: 'Automatic Door Systems for Buildings That Cannot Afford Downtime',
    subtitle:
      'Automatic Door Solutions designs, installs, modernizes, and services commercial entrance systems with a precision-first approach to safety, compliance, and first impressions.',
    primaryCta: { label: 'Request A Site Assessment', href: '#contact' },
    secondaryCta: { label: 'View Completed Projects', href: '#projects' },
    stats: [
      { label: 'Response Window', value: 'Under 24 Hours' },
      { label: 'Commercial Sectors Served', value: '6 Core Industries' },
      { label: 'Preventive Uptime Programs', value: 'Tailored Per Site' },
    ],
  },
  about: {
    heading: 'Engineered Entry, Managed End To End',
    body: [
      'Automatic Door Solutions partners with facility teams, developers, and contractors to deliver entry systems that are elegant, dependable, and code-aligned.',
      'From new builds to high-traffic retrofits, we coordinate survey, design intent, installation, commissioning, and long-term service with clear communication and measured outcomes.',
    ],
    highlights: [
      'Certified technicians for installation and service',
      'Accessibility and compliance-focused assessments',
      'Rapid diagnostics for mission-critical entry points',
      'Preventive maintenance programs for lifecycle reliability',
    ],
  },
  services: {
    heading: 'Services',
    intro:
      'Comprehensive commercial automatic door solutions from first survey through ongoing support.',
    items: [
      {
        title: 'Automatic Sliding Door Installation',
        description:
          'High-cycle entrance systems engineered for smooth flow, sensor safety, and long-term durability.',
      },
      {
        title: 'Swing Door Automation Upgrades',
        description:
          'Low-energy operators and compliant activation controls retrofitted into existing entrances.',
      },
      {
        title: 'Emergency Repairs',
        description:
          'Priority response for non-responsive, misaligned, or safety-locked doors that disrupt operations.',
      },
      {
        title: 'Preventive Maintenance Programs',
        description:
          'Scheduled inspections, tuning, and wear-part replacement to reduce outages before they happen.',
      },
      {
        title: 'ADA And Safety Compliance Reviews',
        description:
          'Practical recommendations and corrective upgrades to improve accessibility and reduce operational risk.',
      },
      {
        title: 'Access Control Integration',
        description:
          'Door automation integrated with access readers, activation hardware, and security workflows.',
      },
    ],
  },
  projects: [
    {
      id: 'medical-center',
      title: 'Regional Medical Center Entry Modernization',
      sector: 'Healthcare',
      imageUrl: '/projects/medical-center.svg',
      imageAlt: 'Medical center entrance with automatic sliding doors',
      challenge:
        'Aging entry operators caused frequent interruptions at a high-throughput patient entrance.',
      solution:
        'Installed dual sliding operators with updated safety sensors and adjusted approach zones.',
      outcome:
        'Smoother patient flow and measurable reduction in unplanned entry downtime.',
    },
    {
      id: 'office-tower',
      title: 'Class A Office Lobby Conversion',
      sector: 'Commercial Office',
      imageUrl: '/projects/office-tower.svg',
      imageAlt: 'Office tower lobby with modern automated entry doors',
      challenge:
        'Legacy manual vestibule sequence slowed tenant flow and complicated access control.',
      solution:
        'Converted lobby sequence to automated sliding doors with controlled reader integration.',
      outcome:
        'Improved arrival experience and better managed secure access during peak periods.',
    },
    {
      id: 'retail-flagship',
      title: 'Retail Flagship High-Traffic Retrofit',
      sector: 'Retail',
      imageUrl: '/projects/retail-flagship.svg',
      imageAlt: 'Busy retail storefront with automatic door retrofit',
      challenge:
        'Frequent peak-hour congestion and inconsistent door timing at a flagship storefront.',
      solution:
        'Upgraded to heavy-duty operators and recalibrated sensor timing for traffic conditions.',
      outcome: 'Fewer interruptions during peak trade and improved customer entry flow.',
    },
    {
      id: 'airport-concourse',
      title: 'Airport Concourse Service Program',
      sector: 'Transport',
      imageUrl: '/projects/airport-concourse.svg',
      imageAlt: 'Airport concourse entry points serviced by automatic door systems',
      challenge:
        'Multiple concourse entry points required coordinated maintenance with minimal disruption.',
      solution:
        'Rolled out a phased preventive program with zone-by-zone service scheduling.',
      outcome:
        'Reduced emergency callouts and improved consistency across critical passenger routes.',
    },
    {
      id: 'hotel-entry',
      title: 'Luxury Hotel Entry Automation',
      sector: 'Hospitality',
      imageUrl: '/projects/hotel-entry.svg',
      imageAlt: 'Luxury hotel main entry with touchless automatic doors',
      challenge:
        'Guest arrival sequence needed a premium experience while reducing climate loss.',
      solution:
        'Implemented touchless automation and tuned vestibule sequencing for comfort and flow.',
      outcome:
        'Improved guest impression and reduced conditioned air loss at the main entrance.',
    },
    {
      id: 'senior-living',
      title: 'Senior Living Accessibility Upgrade',
      sector: 'Residential Care',
      imageUrl: '/projects/senior-living.svg',
      imageAlt: 'Accessible senior living entrance with low-energy automatic operator',
      challenge:
        'Residents needed lower-effort, safer entry with reliable low-energy operation.',
      solution:
        'Added low-energy operators, push-plate activation, and optimized closing speed profiles.',
      outcome: 'Safer independent access for residents and smoother visitor entry.',
    },
  ],
  contact: {
    heading: 'Contact Us',
    intro:
      'Tell us about your building and project timeline. We will respond with practical next steps and scheduling availability.',
    emailLabel: 'Email',
    email: 'clakin1@gmail.com',
    phoneLabel: 'Phone',
    phoneDisplay: '07796842200',
    phoneHref: 'tel:07796842200',
    responseSla:
      'Typical response within one business day. Urgent service requests are prioritized.',
    businessHours: 'Mon-Fri: 08:00-18:00 | Emergency support available by phone.',
  },
}
