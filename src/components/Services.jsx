import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion as Motion, AnimatePresence } from 'framer-motion'

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

/** All 12 photoreal assets in public/services/ (1–4 align with seasonal packages; 5–12 from notr.note) */
const SERVICE_PHOTOS_ALL = [
  { label: 'Spring Lawn Setup', image: '/services/1_Spring_Lawn_Setup_Photoreal_1_20260329_001609.png' },
  { label: 'Summer Maintenance', image: '/services/2_Summer_Maintenance_Bright_su_1_20260329_001642.png' },
  { label: 'Fall Cleanup', image: '/services/3_Fall_Cleanup_Autumn_afternoo_1_20260329_001706.png' },
  { label: 'Winter Snow Services', image: '/services/4_Winter_Snow_Services_Blue_ho_1_20260329_001726.png' },
  { label: 'Snow removal', image: '/services/5_Snow_removal_Action_capable_1_20260329_001741.png' },
  { label: 'Lawn maintenance', image: '/services/6_Lawn_maintenance_Recurring_c_1_20260329_001757.png' },
  { label: 'Tree and shrub trimming', image: '/services/7_Tree_and_shrub_trimming_Arbo_1_20260329_001820.png' },
  { label: 'Junk removal', image: '/services/8_Junk_removal_Before_after_si_1_20260329_001840.png' },
  { label: 'Small landscaping jobs', image: '/services/9_Small_landscaping_jobs_Fresh_1_20260329_001856.png' },
  { label: 'Small engine repair and maintenance', image: '/services/10_Small_engine_repair_and_mainte_1_20260329_001911.png' },
  { label: 'Golf cart repair and maintenance', image: '/services/11_Golf_cart_repair_and_maintenan_1_20260329_001927.png' },
  { label: 'Small handyman house repairs', image: '/services/12_Small_handyman_house_repairs_1_20260329_001941.png' },
]

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

const SMALL_ENGINE_IMAGE = encodeURI('/small engine repair image.PNG')

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
  const [smallEngineOpen, setSmallEngineOpen] = useState(false)

  useEffect(() => {
    if (!smallEngineOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') setSmallEngineOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [smallEngineOpen])

  const orderedServices = [
    ...services.filter((s) => s.key === activeSeason),
    ...services.filter((s) => s.key !== activeSeason),
  ]

  return (
    <section id="services" className="dyhs-seasonal">
      <div className="dyhs-container">
        <Motion.div
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
                    <Motion.span
                      key={season}
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 'auto', opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="dyhs-season-label"
                    >
                      {season.charAt(0).toUpperCase() + season.slice(1)}
                    </Motion.span>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>

          <Motion.div className="dyhs-seasonal-grid" role="list" layout>
            <AnimatePresence mode="popLayout">
              {orderedServices.map((s, i) => (
                <Motion.article
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
                </Motion.article>
              ))}
            </AnimatePresence>
          </Motion.div>
        </Motion.div>

        <div className="dyhs-small-engine">
          <h2 className="dyhs-small-engine-title">Small Engine Repair</h2>
          <button
            type="button"
            className="dyhs-small-engine-trigger"
            onClick={() => setSmallEngineOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={smallEngineOpen}
          >
            <span
              className="dyhs-small-engine-trigger-media"
              style={{ backgroundImage: `url(${SMALL_ENGINE_IMAGE})` }}
            />
          </button>
        </div>

        <div className="dyhs-more-services">
          <h2 className="dyhs-more-services-title">All services</h2>
          <p className="dyhs-more-services-intro">
            Seasonal packages and year-round help—every service we offer:
          </p>
          <div className="dyhs-more-services-grid" role="list">
            {SERVICE_PHOTOS_ALL.map((item) => (
              <article key={item.image} className="dyhs-more-service-card" role="listitem">
                <div
                  className="dyhs-more-service-media"
                  style={{ backgroundImage: `url(${item.image})` }}
                  aria-hidden="true"
                />
                <p className="dyhs-more-service-label">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {createPortal(
        <AnimatePresence>
          {smallEngineOpen && (
            <Motion.div
              key="small-engine-modal"
              className="dyhs-modal-root"
              role="presentation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <button
                type="button"
                className="dyhs-modal-backdrop"
                aria-label="Close"
                onClick={() => setSmallEngineOpen(false)}
              />
              <Motion.div
                role="dialog"
                aria-modal="true"
                aria-label="Small Engine Repair"
                className="dyhs-modal-card"
                initial={{ opacity: 0, scale: 0.94, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 12 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  type="button"
                  className="dyhs-modal-close"
                  onClick={() => setSmallEngineOpen(false)}
                  aria-label="Close dialog"
                >
                  ×
                </button>
                <div
                  className="dyhs-modal-card-media"
                  style={{ backgroundImage: `url(${SMALL_ENGINE_IMAGE})` }}
                />
              </Motion.div>
            </Motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  )
}
