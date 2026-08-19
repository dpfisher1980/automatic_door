import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useMemo, useState } from 'react'
import type { ProjectItem } from '../../content/types'

type ProjectsCarouselSectionProps = {
  projects: ProjectItem[]
}

export function ProjectsCarouselSection({ projects }: ProjectsCarouselSectionProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const snapPoints = useMemo(() => emblaApi?.scrollSnapList() ?? [], [emblaApi])

  const hasMultipleSlides = useMemo(() => projects.length > 1, [projects.length])

  useEffect(() => {
    if (!emblaApi) {
      return
    }

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())

    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('reInit', onSelect)
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <section id="projects" className="section section-contrast">
      <div className="container">
        <div className="section-head-row">
          <div>
            <p className="section-kicker">Portfolio</p>
            <h2>Featured Projects</h2>
          </div>
          {hasMultipleSlides && (
            <div className="carousel-actions">
              <button
                type="button"
                className="btn btn-small"
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Previous project"
              >
                Prev
              </button>
              <button
                type="button"
                className="btn btn-small"
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Next project"
              >
                Next
              </button>
            </div>
          )}
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla-container">
            {projects.map((project) => (
              <article className="embla-slide" key={project.id}>
                <img src={project.imageUrl} alt={project.imageAlt} loading="lazy" />
                <div className="project-panel">
                  <p className="project-sector">{project.sector}</p>
                  <h3>{project.title}</h3>
                  <p>
                    <strong>Challenge:</strong> {project.challenge}
                  </p>
                  <p>
                    <strong>Solution:</strong> {project.solution}
                  </p>
                  <p>
                    <strong>Outcome:</strong> {project.outcome}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {hasMultipleSlides && (
          <div className="dot-row" aria-label="Project slide positions">
            {snapPoints.map((_, index) => (
              <button
                type="button"
                className={index === selectedIndex ? 'dot dot-active' : 'dot'}
                key={index}
                aria-label={`Go to project ${index + 1}`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
