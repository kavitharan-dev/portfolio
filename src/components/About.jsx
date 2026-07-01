import { personalInfo } from '../data/portfolioData'
import { useScrollReveal } from '../hooks/useScrollReveal'

function About() {
  const revealRef = useScrollReveal()

  return (
    <section id="about" className="section-panel" ref={revealRef}>
      <div className="section-heading reveal-item">
        <p className="eyebrow">About Me</p>
        <h2>
          Building software with <span className="gradient-text">purpose & precision</span>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-copy reveal-item delay-1">
          <p>
            I am a focused software engineering aspirant from {personalInfo.country} with a strong
            academic foundation and hands-on project experience. My work combines thoughtful UI
            design, maintainable frontend architecture, and backend logic that supports real user
            outcomes.
          </p>
          <p>
            My academic journey at SLIATE has sharpened my technical skills and prepared me to
            contribute confidently to internship teams working on product-ready applications.
            I believe great software is built through curiosity, clean code, and continuous learning.
          </p>

          <div className="about-tags">
            <span>Problem Solver</span>
            <span>Team Player</span>
            <span>Fast Learner</span>
            <span>Detail Oriented</span>
          </div>
        </div>

        <div className="about-details">
          <div className="detail-card reveal-item delay-2">
            <div className="detail-icon">🎯</div>
            <h3>Career Objective</h3>
            <p>
              Secure a Software Engineering Internship where I can apply my React and Laravel
              experience to build reliable digital solutions and learn from senior engineering
              teams in {personalInfo.country}.
            </p>
          </div>

          <div className="detail-card reveal-item delay-3">
            <div className="detail-icon">🏆</div>
            <h3>Academic Achievements</h3>
            <ul>
              <li>Final Year HND student, Information Technology</li>
              <li>SLIATE — Sri Lanka Institute of Advanced Technological Education</li>
              <li>Strong performance in web application and database design</li>
              <li>Capstone project development in progress</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
