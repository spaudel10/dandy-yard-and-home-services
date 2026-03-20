import { motion } from 'framer-motion'

export default function Hero({ activeSeason, snowDots, fallLeaves }) {
  return (
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
        <motion.h1
          className="dyhs-hero-title"
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Year-Round Yard &amp; Home Services
        </motion.h1>
        <motion.p
          className="dyhs-hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Seasonal solutions to keep your property beautiful and safe all year long.
        </motion.p>

        <motion.div
          className="dyhs-hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <a className="dyhs-btn dyhs-btn-orange" href="#services">
            Seasonal Services <span aria-hidden="true">›</span>
          </a>
          <a className="dyhs-btn dyhs-btn-primary" href="#contact">
            Book Now
          </a>
        </motion.div>
      </div>

      <motion.div
        className="dyhs-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-hidden="true"
      >
        <div className="dyhs-scroll-mouse">
          <div className="dyhs-scroll-wheel" />
        </div>
      </motion.div>
    </section>
  )
}
