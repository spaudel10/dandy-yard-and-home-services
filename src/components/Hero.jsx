import { useState, useEffect } from 'react'
import { motion as Motion } from 'framer-motion'

const fadeUp = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } }

/** Second image is a wide team shot — cover+center crops the sides; bias toward the right (~82%) so the crew on the right stays in frame */
const HERO_SLIDES = [
  { src: '/backgroundimage.png', bgPos: 'center center' },
  { src: '/backgroundimage1.jpeg', bgPos: '82% center' },
]
const HERO_SLIDE_MS = 6500

export default function Hero({ activeSeason, snowDots, fallLeaves }) {
  const [heroSlide, setHeroSlide] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setHeroSlide((i) => (i + 1) % HERO_SLIDES.length)
    }, HERO_SLIDE_MS)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section className="dyhs-hero" aria-label="Yard and home services">
      <div className="dyhs-hero-split">
        <div className="dyhs-hero-copy">
          <div className="dyhs-hero-copy-inner">
            <div className="dyhs-hero-kicker-row">
              <span className="dyhs-hero-kicker-line" aria-hidden="true" />
              <Motion.p
                className="dyhs-hero-kicker"
                {...fadeUp}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                Lawn · Snow · Repairs · More
              </Motion.p>
            </div>

            <Motion.h1
              className="dyhs-hero-title"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="dyhs-hero-title-lead">Local yard and lawn care.</span>
              <span className="dyhs-hero-title-em">
                <span className="dyhs-hero-title-accent">Dependable</span> home service for every season.
              </span>
            </Motion.h1>

            <Motion.p
              className="dyhs-hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            >
            Comprehensive seasonal yard care: precision mowing, thorough cleanups, prompt snow removal, and expert small repairs.
            </Motion.p>

            <Motion.div
              className="dyhs-hero-actions"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <a className="dyhs-btn dyhs-btn-primary" href="#contact">
                Book Now
              </a>
              <a className="dyhs-btn dyhs-btn-secondary" href="#services">
                Services
              </a>
            </Motion.div>
          </div>
        </div>

        <div className="dyhs-hero-visual">
          <div className="dyhs-hero-slider" aria-roledescription="carousel">
            {HERO_SLIDES.map((slide, i) => (
              <div
                key={slide.src}
                className={`dyhs-hero-visual-bg dyhs-hero-slide ${i === heroSlide ? 'is-active' : ''}`}
                style={{
                  backgroundImage: `url(${slide.src})`,
                  backgroundPosition: slide.bgPos,
                }}
                aria-hidden={i !== heroSlide}
              />
            ))}
            <div className="dyhs-hero-slider-ui" role="tablist" aria-label="Hero images">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === heroSlide}
                  className={`dyhs-hero-slider-dot ${i === heroSlide ? 'active' : ''}`}
                  onClick={() => setHeroSlide(i)}
                  aria-label={`Show hero image ${i + 1} of ${HERO_SLIDES.length}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

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
    </section>
  )
}
