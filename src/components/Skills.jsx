import { skillsData } from '../data/portfolioData'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Skills() {
  const revealRef = useScrollReveal()

  return (
    <section id="skills" className="section-panel section-alt" ref={revealRef}>
      <div className="section-heading reveal-item">
        <p className="eyebrow">Skills</p>
        <h2>
          Technical <span className="gradient-text">strengths</span>
        </h2>
        <p className="section-subtitle">
          A balanced full-stack skill set built through academic projects and self-driven learning.
        </p>
      </div>

      <div className="skill-grid">
        {skillsData.map((skill, index) => (
          <article
            key={skill.title}
            className={`skill-card reveal-item delay-${(index % 3) + 1}`}
          >
            <div className="skill-card__header">
              <span className="skill-icon">{skill.icon}</span>
              <h3>{skill.title}</h3>
            </div>

            <div className="skill-progress">
              <div className="skill-progress__track">
                <div
                  className="skill-progress__fill"
                  style={{ '--progress': `${skill.level}%` }}
                />
              </div>
              <span className="skill-progress__label">{skill.level}%</span>
            </div>

            <ul>
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
