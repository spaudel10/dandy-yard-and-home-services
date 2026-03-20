import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Stars from './Stars'
import AnimatedSection from './AnimatedSection'

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
  {
    name: 'Alex R.',
    role: 'Summer Maintenance',
    text: 'Our lawn has never looked better. Consistent, reliable, and always on schedule. Truly top-notch service.',
  },
  {
    name: 'Maria L.',
    role: 'Fall Cleanup',
    text: 'They made our backyard look brand new before the holidays. Friendly crew and great attention to detail.',
  },
]

function useCardsPerView() {
  const getCount = () => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth < 640) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }
  const [count, setCount] = useState(getCount)
  useEffect(() => {
    const onResize = () => setCount(getCount())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return count
}

export default function Testimonials() {
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState(0)
  const cardsPerView = useCardsPerView()
  const totalPages = Math.ceil(testimonials.length / cardsPerView)

  useEffect(() => {
    setPage((p) => Math.min(p, totalPages - 1))
  }, [totalPages])

  const paginate = useCallback((dir) => {
    setDirection(dir)
    setPage((p) => (p + dir + totalPages) % totalPages)
  }, [totalPages])

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000)
    return () => clearInterval(timer)
  }, [paginate])

  const visibleTestimonials = testimonials.slice(
    page * cardsPerView,
    page * cardsPerView + cardsPerView
  )

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  }

  return (
    <AnimatedSection id="testimonials" className="dyhs-testimonials">
      <div className="dyhs-container">
        <div className="dyhs-testimonials-header">
          <h2 className="dyhs-section-title dyhs-testimonials-title">
            What Our Customers Say
          </h2>
          <div className="dyhs-testimonial-controls">
            <button
              className="dyhs-arrow dyhs-arrow-left"
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous testimonials"
            >
              ‹
            </button>
            <button
              className="dyhs-arrow dyhs-arrow-right"
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next testimonials"
            >
              ›
            </button>
          </div>
        </div>

        <div className="dyhs-testimonial-carousel">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              className="dyhs-testimonial-grid"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {visibleTestimonials.map((t) => (
                <article key={t.name} className="dyhs-testimonial-card">
                  <Stars />
                  <p className="dyhs-testimonial-text">"{t.text}"</p>
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
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="dyhs-testimonial-dots" aria-label="Testimonial pages">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`dyhs-dot ${page === i ? 'dyhs-dot-active' : ''}`}
              onClick={() => {
                setDirection(i > page ? 1 : -1)
                setPage(i)
              }}
              aria-label={`Go to page ${i + 1}`}
              type="button"
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
