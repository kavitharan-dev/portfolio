import { useEffect, useState } from 'react'
import { navLinks, personalInfo } from '../data/portfolioData'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#home" className="navbar__brand" onClick={handleNavClick}>
          <span className="navbar__brand-dot" />
          {personalInfo.name}
        </a>

        <button
          type="button"
          className={`navbar__toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__nav ${menuOpen ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={handleNavClick}>
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${personalInfo.email}`}
            className="navbar__cta"
            onClick={handleNavClick}
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
