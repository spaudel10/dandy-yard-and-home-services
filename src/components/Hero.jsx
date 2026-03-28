import { motion as Motion } from 'framer-motion'

const fadeUp = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } }

export default function Hero({ activeSeason, snowDots, fallLeaves }) {
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
              <span className="dyhs-hero-title-lead">Beautiful outdoor spaces.</span>
              <span className="dyhs-hero-title-em">
                <span className="dyhs-hero-title-accent">Dependable</span> help at home.
              </span>
            </Motion.h1>

            <Motion.p
              className="dyhs-hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            >
              Mowing, seasonal cleanup, snow removal, and small repairs—with clear communication and care
              for your property, every visit.
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

        <div className="dyhs-hero-visual" aria-hidden="true">
          <div
            className="dyhs-hero-visual-bg"
            style={{ backgroundImage: 'url(/backgroundimage.png)' }}
          />
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
