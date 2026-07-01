import { projectsData } from '../data/portfolioData'
import { useScrollReveal } from '../hooks/useScrollReveal'

function ProjectScreenshot({ project }) {
  return (
    <div className="project-screenshot" style={{ background: project.gradient }}>
      <div className="screenshot-mockup">
        <div className="mockup-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="mockup-content">
          <div className="mockup-line mockup-line--wide" />
          <div className="mockup-line" />
          <div className="mockup-line mockup-line--short" />
          <div className="mockup-blocks">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      {project.featured && <span className="featured-badge">Featured</span>}
    </div>
  )
}

function Projects() {
  const revealRef = useScrollReveal()

  return (
    <section id="projects" className="section-panel" ref={revealRef}>
      <div className="section-heading reveal-item">
        <p className="eyebrow">Projects</p>
        <h2>
          Featured <span className="gradient-text">work</span>
        </h2>
        <p className="section-subtitle">
          Real projects that demonstrate my ability to plan, build, and deliver software solutions.
        </p>
      </div>

      <div className="project-grid">
        {projectsData.map((project, index) => (
          <article
            key={project.id}
            className={`project-card ${project.featured ? 'featured-card' : ''} reveal-item delay-${(index % 2) + 1}`}
          >
            <ProjectScreenshot project={project} />

            <div className="project-copy">
              <div className="project-meta">
                <span>{project.subtitle}</span>
                {project.featured && <strong>Capstone Project</strong>}
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-list">
                <strong>Technologies</strong>
                <div className="project-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-list">
                <strong>Key Features</strong>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-tertiary"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="button button-outline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
