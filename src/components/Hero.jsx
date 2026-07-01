import { personalInfo, socialLinks, typingRoles } from '../data/portfolioData'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { useScrollReveal } from '../hooks/useScrollReveal'

function SocialIcon({ icon }) {
  if (icon === 'github') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    )
  }
  if (icon === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function Hero() {
  const revealRef = useScrollReveal()
  const typedRole = useTypingEffect(typingRoles)

  return (
    <section id="home" className="hero-section revealed" ref={revealRef}>
      <div className="hero-copy reveal-item">
        <p className="eyebrow animate-fade-in">
          <span className="status-dot" />
          Available for Internship — {personalInfo.country}
        </p>

        <h1 className="hero-title animate-slide-up">
          Hi, I&apos;m <span className="gradient-text">{personalInfo.name}</span>
        </h1>

        <p className="hero-subtitle animate-slide-up delay-1">
          Aspiring <span className="typing-text">{typedRole}</span>
          <span className="typing-cursor">|</span>
        </p>

        <p className="hero-description animate-slide-up delay-2">
          Final-year HND Information Technology student at SLIATE, {personalInfo.country}.
          I design and build polished software solutions with React, PHP, Laravel, and MySQL —
          ready to contribute to your engineering team.
        </p>

        <div className="hero-actions animate-slide-up delay-3">
          <a className="button button-primary" href="#projects">
            <span>View Featured Project</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a className="button button-secondary" href="#contact">
            Get In Touch
          </a>
        </div>

        <div className="social-list animate-slide-up delay-4">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label={item.label}
            >
              <SocialIcon icon={item.icon} />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="hero-visual reveal-item delay-2">
        <div className="photo-card">
          <div className="photo-glow" />
          <div className="photo-frame">
            <div className="photo-avatar">
              <img
                src={`${import.meta.env.BASE_URL}profile.png`}
                alt={`${personalInfo.name} — Software Engineering Internship Candidate`}
                className="avatar-image"
                loading="eager"
              />
              <div className="avatar-ring" />
            </div>
          </div>
          <div className="photo-badge">
            <span className="badge-pulse" />
            Open to Internships
          </div>
        </div>

        <div className="hero-info">
          <div className="info-item">
            <span className="info-label">Education</span>
            <strong>{personalInfo.education}</strong>
          </div>
          <div className="info-item">
            <span className="info-label">Graduation</span>
            <strong>{personalInfo.graduation}</strong>
          </div>
          <div className="info-item">
            <span className="info-label">Goal</span>
            <strong>{personalInfo.goal}</strong>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <strong>3+</strong>
            <span>Projects</span>
          </div>
          <div className="stat-card">
            <strong>5</strong>
            <span>Skill Areas</span>
          </div>
          <div className="stat-card">
            <strong>2026</strong>
            <span>Graduating</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
