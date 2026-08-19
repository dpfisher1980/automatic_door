import { useEffect, useState } from 'react'
import { AboutSection } from './components/sections/About'
import { ContactSection } from './components/sections/Contact'
import { HeroSection } from './components/sections/Hero'
import { ProjectsCarouselSection } from './components/sections/ProjectsCarousel'
import { ProjectsGallerySection } from './components/sections/ProjectsGallery'
import { ServicesSection } from './components/sections/Services'
import { fetchSiteContent } from './content/providers'
import type { SiteContent } from './content/types'

function App() {
  const [content, setContent] = useState<SiteContent | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    async function loadContent() {
      try {
        const result = await fetchSiteContent()

        if (mounted) {
          setContent(result)
        }
      } catch (error) {
        if (mounted) {
          const fallback =
            error instanceof Error ? error.message : 'Unable to load website content.'

          setErrorMessage(fallback)
        }
      }
    }

    void loadContent()

    return () => {
      mounted = false
    }
  }, [])

  if (errorMessage) {
    return (
      <main className="app-shell">
        <section className="container section">
          <h1>Automatic Door Solutions</h1>
          <p>{errorMessage}</p>
        </section>
      </main>
    )
  }

  if (!content) {
    return (
      <main className="app-shell">
        <section className="container section">
          <h1>Automatic Door Solutions</h1>
          <p>Loading site content...</p>
        </section>
      </main>
    )
  }

  return (
    <main className="app-shell">
      <HeroSection hero={content.hero} nav={content.nav} />
      <AboutSection about={content.about} />
      <ServicesSection services={content.services} />
      <ProjectsCarouselSection projects={content.projects} />
      <ProjectsGallerySection projects={content.projects} />
      <ContactSection contact={content.contact} />
    </main>
  )
}

export default App
