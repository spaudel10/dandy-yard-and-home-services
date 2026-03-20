import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

function Stars({ count = 5 }) {
  return (
    <div className="dyhs-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="dyhs-star"
          viewBox="0 0 24 24"
          role="img"
          aria-hidden="true"
        >
          <path d="M12 17.3l-6.18 3.73 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.76 1.64 7.03L12 17.3z" />
        </svg>
      ))}
    </div>
  )
}

export default function App() {
  const year = new Date().getFullYear()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSeason, setActiveSeason] = useState('spring')

  // Deterministic dot positions so re-renders don't cause "jumping".
  const snowDots = Array.from({ length: 60 }).map((_, i) => {
    const left = (i * 7.3) % 100
    // Bigger dots for visibility on mobile/desktop
    const size = 3 + (i % 6) * 1.0
    const duration = 6 + (i % 10) * 0.35
    const delay = -((i % 20) * 0.45)
    const opacity = 0.35 + (i % 7) * 0.06
    const drift = (i % 11) - 5
    return {
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      opacity,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
      '--drift': `${drift * 14}px`,
    }
  })

  const fallLeaves = Array.from({ length: 55 }).map((_, i) => {
    const left = (i * 9.1) % 100
    // Bigger leaves for visibility
    const size = 6 + (i % 7) * 1.4
    const duration = 5.2 + (i % 9) * 0.42
    const delay = -((i % 22) * 0.33)
    const opacity = 0.35 + (i % 8) * 0.06
    const drift = (i % 13) - 6
    const rot = (i % 12) * 18 - 90
    return {
      left: `${left}%`,
      width: `${size}px`,
      height: `${Math.max(3, size * 0.72)}px`,
      opacity,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
      '--drift': `${drift * 16}px`,
      '--rot': `${rot}deg`,
    }
  })

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [menuOpen])

  const services = [
    {
      key: 'spring',
      title: 'Spring Lawn Setup',
      subtitle: 'Get your yard ready for the season',
      bullets: ['Lawn seeding and fertilization', 'Quick cleanup after winter'],
      mediaStyle: {
        backgroundImage: 'url(/Spring.png)',
      },
    },
    {
      key: 'summer',
      title: 'Summer Maintenance',
      subtitle: 'Keep it fresh all summer long',
      bullets: ['Weekly lawn mowing and care', 'Edge trimming and quick touch-ups'],
      mediaStyle: {
        backgroundImage: 'url(/summer.png)',
      },
    },
    {
      key: 'fall',
      title: 'Fall Cleanup',
      subtitle: 'Leaves out. Yard looking sharp.',
      bullets: ['Leaf removal and yard cleanup', 'Seasonal debris hauling'],
      mediaStyle: {
        backgroundImage: 'url(/fall.png)',
      },
    },
    {
      key: 'winter',
      title: 'Winter Snow Services',
      subtitle: 'Safe walkways and driveways',
      bullets: ['Snow plowing and de-icing', 'Storm-ready planning'],
      mediaStyle: {
        backgroundImage: 'url(/winter.png)',
      },
    },
  ]

  const testimonials = [
    {
      name: 'Jordan D.',
      role: 'Spring Lawn Setup',
      text: 'They transformed our yard quickly. The seeding and cleanup looked great and stayed that way all week.',
    },
    {
      name: 'Sarah W.',
      role: 'Fall Cleanup',
      text: 'Fast, professional, and thorough. They handled the leaves and debris exactly how we wanted.',
    },
    {
      name: 'Chris M.',
      role: 'Winter Snow Services',
      text: 'Great communication during the storm and the driveway was cleared on time. Highly recommend.',
    },
  ]

  return (
    <div className="dyhs">
      <header className="dyhs-header">
        <div className="dyhs-header-inner">
          <a className="dyhs-brand" href="#top" aria-label="Dandy Yard and Home Services">
            <img src="/logo.png" className="dyhs-logo" alt="Dandy Yard and Home Services" />
          </a>

          <button
            className="dyhs-burger"
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span className="dyhs-burger-lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          <nav className="dyhs-nav" aria-label="Primary">
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#gallery">Gallery</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <div
        className={`dyhs-drawer-overlay ${menuOpen ? 'open' : ''}`}
        role="presentation"
        onClick={() => setMenuOpen(false)}
      >
        <aside
          className="dyhs-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="dyhs-drawer-top">
            <img src="/logo.png" className="dyhs-drawer-logo" alt="Dandy Yard and Home Services" />
            <button
              className="dyhs-drawer-close"
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </button>
          </div>

          <nav className="dyhs-drawer-nav" aria-label="Mobile primary">
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About Us
            </a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </a>
            <a href="#testimonials" onClick={() => setMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>
        </aside>
      </div>

      <div id="top" />

      <section className="dyhs-hero" aria-label="Year round services">
        <div
          className="dyhs-hero-bg"
          style={{ backgroundImage: 'url(/backgroundimage.png)' }}
        />
        <div className="dyhs-hero-grad" />
        {activeSeason === 'winter' && (
          <div className="dyhs-snow" aria-hidden="true">
            {snowDots.map((style, i) => (
              <span key={i} className="dyhs-snow-dot" style={style} />
            ))}
          </div>
        )}
        {activeSeason === 'fall' && (
          <div className="dyhs-fall" aria-hidden="true">
            {fallLeaves.map((style, i) => (
              <span key={i} className="dyhs-leaf" style={style} />
            ))}
          </div>
        )}

        <div className="dyhs-container dyhs-hero-content">
          <h1 className="dyhs-hero-title">Year-Round Yard &amp; Home Services</h1>
          <p className="dyhs-hero-subtitle">
            Seasonal solutions to keep your property beautiful and safe at year long.
          </p>

          <div className="dyhs-hero-actions">
            <a className="dyhs-btn dyhs-btn-orange" href="#services">
              Seasonal Services <span aria-hidden="true">›</span>
            </a>
            <a className="dyhs-btn dyhs-btn-primary" href="#contact">
              Book Now
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="dyhs-seasonal">
        <div className="dyhs-container">
          <div className="dyhs-services-panel">
            <div className="dyhs-season-selector" role="tablist" aria-label="Season selector">
              <button
                type="button"
                className={`dyhs-season-pill ${
                  activeSeason === 'spring' ? 'active' : ''
                }`}
                role="tab"
                aria-selected={activeSeason === 'spring'}
                onClick={() => setActiveSeason('spring')}
                title="Spring"
              >
                {activeSeason === 'spring' ? 'Spring' : 'S'}
              </button>
              <button
                type="button"
                className={`dyhs-season-pill ${
                  activeSeason === 'summer' ? 'active' : ''
                }`}
                role="tab"
                aria-selected={activeSeason === 'summer'}
                onClick={() => setActiveSeason('summer')}
                title="Summer"
              >
                {activeSeason === 'summer' ? 'Summer' : 'S'}
              </button>
              <button
                type="button"
                className={`dyhs-season-pill ${
                  activeSeason === 'fall' ? 'active' : ''
                }`}
                role="tab"
                aria-selected={activeSeason === 'fall'}
                onClick={() => setActiveSeason('fall')}
                title="Fall"
              >
                {activeSeason === 'fall' ? 'Fall' : 'F'}
              </button>
              <button
                type="button"
                className={`dyhs-season-pill ${
                  activeSeason === 'winter' ? 'active' : ''
                }`}
                role="tab"
                aria-selected={activeSeason === 'winter'}
                onClick={() => setActiveSeason('winter')}
                title="Winter"
              >
                {activeSeason === 'winter' ? 'Winter' : 'W'}
              </button>
            </div>
            <div className="dyhs-seasonal-grid" role="list">
              {services.map((s) => (
                <article
                  key={s.key}
                  className={`dyhs-service-card dyhs-service-card-${s.key} ${
                    activeSeason === s.key ? 'active' : ''
                  }`}
                  role="listitem"
                >
                  <div className="dyhs-service-body">
                    <h2 className={`dyhs-service-title dyhs-service-title-${s.key}`}>
                      {s.title}
                    </h2>
                    <p className="dyhs-service-subtitle">{s.subtitle}</p>
                    <ul className="dyhs-service-list">
                      {s.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="dyhs-service-media"
                    style={s.mediaStyle}
                    aria-hidden="true"
                  />

                  <a
                    className={`dyhs-card-btn dyhs-card-btn-${s.key}`}
                    href="#contact"
                  >
                    Book Now
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="dyhs-section">
        <div className="dyhs-container dyhs-section-inner">
          <h2 className="dyhs-section-title">About Us</h2>
          <p className="dyhs-section-text">
            We help homeowners keep their yards and entrances looking great year-round with dependable
            seasonal service and friendly communication.
          </p>
        </div>
      </section>

      <section id="gallery" className="dyhs-section dyhs-gallery">
        <div className="dyhs-container">
          <h2 className="dyhs-section-title">Gallery</h2>
          <div className="dyhs-gallery-grid" aria-label="Gallery placeholders">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="dyhs-gallery-tile" style={{ backgroundImage: `url(${heroImg})` }}>
                <span className="dyhs-gallery-tile-label">Photo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="dyhs-testimonials">
        <div className="dyhs-container">
          <div className="dyhs-testimonials-header">
            <h2 className="dyhs-section-title dyhs-testimonials-title">
              What Our Customers Say
            </h2>
            <div className="dyhs-testimonial-controls" aria-hidden="true">
              <button className="dyhs-arrow dyhs-arrow-left" type="button">
                ‹
              </button>
              <button className="dyhs-arrow dyhs-arrow-right" type="button">
                ›
              </button>
            </div>
          </div>
          <div className="dyhs-testimonial-grid">
            {testimonials.map((t) => (
              <article key={t.name} className="dyhs-testimonial-card">
                <Stars />
                <p className="dyhs-testimonial-text">“{t.text}”</p>
                <div className="dyhs-person">
                  <div className="dyhs-avatar" aria-hidden="true">
                    {t.name
                      .split(' ')
                      .slice(0, 2)
                      .map((p) => p[0])
                      .join('')
                      .toUpperCase()}
                  </div>
                  <div className="dyhs-person-meta">
                    <strong className="dyhs-person-name">{t.name}</strong>
                    <span className="dyhs-person-role">{t.role}</span>
                  </div>
                </div>
                <a className="dyhs-review-btn" href="#contact">
                  Read More Reviews
                </a>
              </article>
            ))}
          </div>
          <div className="dyhs-testimonial-dots" aria-hidden="true">
            <span className="dyhs-dot dyhs-dot-active" />
            <span className="dyhs-dot" />
            <span className="dyhs-dot" />
          </div>
        </div>
      </section>

      <section id="contact" className="dyhs-contact">
        <div className="dyhs-container">
          <div className="dyhs-contact-card">
            <h2 className="dyhs-section-title">Book Now</h2>
            <p className="dyhs-section-text">
              Call or send a quick request and we’ll help you pick the right service for your property.
            </p>
            <div className="dyhs-contact-actions">
              <a className="dyhs-btn dyhs-btn-primary" href="tel:+10000000000">
                Call Us
              </a>
              <a className="dyhs-btn dyhs-btn-secondary" href="mailto:info@example.com">
                Email Us
              </a>
            </div>
            <p className="dyhs-contact-note">Replace phone number + email with your real info.</p>
          </div>
        </div>
      </section>

      <footer className="dyhs-footer">
        <div className="dyhs-container">
          <span>© {year} Dandy Yard and Home Services. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}
