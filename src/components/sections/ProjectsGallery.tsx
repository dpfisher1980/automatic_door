import type { ProjectItem } from '../../content/types'

type ProjectsGallerySectionProps = {
  projects: ProjectItem[]
}

export function ProjectsGallerySection({ projects }: ProjectsGallerySectionProps) {
  return (
    <section className="section">
      <div className="container">
        <p className="section-kicker">Project Gallery</p>
        <h2>More Completed Work</h2>
        <div className="gallery-grid">
          {projects.map((project) => (
            <article className="gallery-card" key={`gallery-${project.id}`}>
              <img src={project.imageUrl} alt={project.imageAlt} loading="lazy" />
              <div>
                <p className="project-sector">{project.sector}</p>
                <h3>{project.title}</h3>
                <p>{project.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
