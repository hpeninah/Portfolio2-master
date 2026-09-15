import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id="portfolio" className="projects-section">
      <div className="section-heading">
        <p className="eyebrow">SELECTED WORK</p>

        <h2>Featured Projects</h2>

        <p>
          Projects spanning full-stack development, genomics,
          scientific computing, and computational biology.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects