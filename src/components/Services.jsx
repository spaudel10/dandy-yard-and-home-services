import { motion, AnimatePresence } from 'framer-motion'

const SEASONS = ['spring', 'summer', 'fall', 'winter']

const SEASON_ICONS = {
  spring: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dyhs-season-icon">
      <path d="M12 22c0-5.523-4.477-10-10-10 5.523 0 10-4.477 10-10 0 5.523 4.477 10 10 10-5.523 0-10 4.477-10 10z" />
    </svg>
  ),
  summer: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dyhs-season-icon">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  ),
  fall: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dyhs-season-icon">
      <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 17 3.5s1.5 6 0 12c0 0 2.5-2 3-5 .5 3-1.5 6-4 8-2.5 2-6 2.5-9 1" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),
  winter: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dyhs-season-icon">
      <path d="M2 12h20M12 2v20m4.24-16.24-8.48 8.48m0-8.48 8.48 8.48M20 16l-4-4 4-4M4 8l4 4-4 4M16 4l-4 4-4-4M8 20l4-4 4 4" />
    </svg>
  ),
}

const services = [
  {
    key: 'spring',
    title: 'Spring Lawn Setup',
    subtitle: 'Get your yard ready for the season',
    bullets: ['Lawn seeding and fertilization', 'Quick cleanup after winter'],
    mediaStyle: { backgroundImage: 'url(/Spring.png)' },
  },
  {
    key: 'summer',
    title: 'Summer Maintenance',
    subtitle: 'Keep it fresh all summer long',
    bullets: ['Weekly lawn mowing and care', 'Edge trimming and quick touch-ups'],
    mediaStyle: { backgroundImage: 'url(/summer.png)' },
  },
  {
    key: 'fall',
    title: 'Fall Cleanup',
    subtitle: 'Leaves out. Yard looking sharp.',
    bullets: ['Leaf removal and yard cleanup', 'Seasonal debris hauling'],
    mediaStyle: { backgroundImage: 'url(/fall.png)' },
  },
  {
    key: 'winter',
    title: 'Winter Snow Services',
    subtitle: 'Safe walkways and driveways',
    bullets: ['Snow plowing and de-icing', 'Storm-ready planning'],
    mediaStyle: { backgroundImage: 'url(/winter.png)' },
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function Services({ activeSeason, setActiveSeason }) {
  const orderedServices = [
    ...services.filter((s) => s.key === activeSeason),
    ...services.filter((s) => s.key !== activeSeason),
  ]

  return (
    <section id="services" className="dyhs-seasonal">
      <div className="dyhs-container">
        <motion.div
          className="dyhs-services-panel"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="dyhs-season-selector" role="tablist" aria-label="Season selector">
            {SEASONS.map((season) => (
              <button
                key={season}
                type="button"
                className={`dyhs-season-pill ${activeSeason === season ? 'active' : ''}`}
                role="tab"
                aria-selected={activeSeason === season}
                onClick={() => setActiveSeason(season)}
                title={season.charAt(0).toUpperCase() + season.slice(1)}
              >
                {SEASON_ICONS[season]}
                <AnimatePresence mode="wait">
                  {activeSeason === season && (
                    <motion.span
                      key={season}
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 'auto', opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="dyhs-season-label"
                    >
                      {season.charAt(0).toUpperCase() + season.slice(1)}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>

          <motion.div className="dyhs-seasonal-grid" role="list" layout>
            <AnimatePresence mode="popLayout">
              {orderedServices.map((s, i) => (
                <motion.article
                  key={s.key}
                  className={`dyhs-service-card dyhs-service-card-${s.key} ${
                    activeSeason === s.key ? 'active' : ''
                  }`}
                  role="listitem"
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  layout
                  layoutId={s.key}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div
                    className="dyhs-service-media"
                    style={s.mediaStyle}
                    aria-hidden="true"
                  />
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
                  <a className={`dyhs-card-btn dyhs-card-btn-${s.key}`} href="#contact">
                    Book Now
                  </a>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
