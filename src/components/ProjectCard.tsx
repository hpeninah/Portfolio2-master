import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={`project-card ${project.featured ? 'project-featured' : ''}`}
    >
      <div className="project-number">{project.number}</div>

      <div className="project-content">
        <p className="project-type">{project.type}</p>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        {project.secondaryDescription && (
          <p>{project.secondaryDescription}</p>
        )}

        <div className="tech-tags">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <ul className="project-highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        {(project.github || project.liveUrl || project.detailsUrl) && (
          <div className="project-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub →
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Project →
              </a>
            )}

            {project.detailsUrl && (
              <a href={project.detailsUrl}>
                Project Details →
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard