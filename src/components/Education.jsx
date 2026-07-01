import { educationData } from '../data/portfolioData'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Education() {
  const revealRef = useScrollReveal()

  return (
    <section id="education" className="section-panel section-alt" ref={revealRef}>
      <div className="section-heading reveal-item">
        <p className="eyebrow">Education</p>
        <h2>
          Academic <span className="gradient-text">profile</span>
        </h2>
      </div>

      <div className="education-grid">
        <div className="education-card education-card--main reveal-item delay-1">
          <div className="education-icon">🎓</div>
          <h3>{educationData.degree}</h3>
          <p className="education-institution">{educationData.institution}</p>
          <div className="education-details">
            <div className="education-detail">
              <span>Location</span>
              <strong>{educationData.location}</strong>
            </div>
            <div className="education-detail">
              <span>Expected Graduation</span>
              <strong>{educationData.graduation}</strong>
            </div>
            <div className="education-detail">
              <span>GPA</span>
              <strong>{educationData.gpa}</strong>
            </div>
          </div>
        </div>

        <div className="education-card reveal-item delay-2">
          <h3>Academic Highlights</h3>
          <ul>
            {educationData.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="education-card reveal-item delay-3">
          <h3>Professional Focus</h3>
          <ul>
            <li>Software Engineering Internship readiness</li>
            <li>Full-stack application planning</li>
            <li>Project-driven learning and delivery</li>
            <li>Collaborative development workflows</li>
          </ul>
        </div>
      </div>

      <div className="timeline reveal-item delay-2">
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <span>2024 — Present</span>
            <strong>Final Year HND Studies</strong>
            <p>Advanced web development, database systems, and capstone project</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <span>2026</span>
            <strong>Expected Graduation</strong>
            <p>September 2026 — Ready for industry placement</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
