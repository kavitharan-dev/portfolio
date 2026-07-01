import { personalInfo, socialLinks } from '../data/portfolioData'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Contact() {
  const revealRef = useScrollReveal()

  return (
    <section id="contact" className="section-panel contact-section" ref={revealRef}>
      <div className="contact-card reveal-item">
        <div className="contact-glow" aria-hidden="true" />
        <p className="eyebrow">Contact</p>
        <h2>
          Let&apos;s build something <span className="gradient-text">together</span>
        </h2>
        <p>
          I&apos;m actively seeking Software Engineering Internship opportunities in Sri Lanka.
          If you&apos;re looking for a motivated developer ready to learn and contribute — let&apos;s connect.
        </p>

        <div className="contact-actions">
          <a href={`mailto:${personalInfo.email}`} className="button button-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            {personalInfo.email}
          </a>
        </div>

        <div className="contact-links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>
        Designed &amp; developed by <strong>{personalInfo.name}</strong> — ready for internship
        opportunities in {personalInfo.country}.
      </p>
      <p className="footer-year">© {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  )
}

export { Contact, Footer }
