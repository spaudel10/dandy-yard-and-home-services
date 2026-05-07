import { useState, useCallback, useEffect } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import Stars from './Stars'
import AnimatedSection from './AnimatedSection'

const testimonials = [
  {
    name: 'Ford Cory',
    role: 'Google Review',
    text: 'Very awesome to deal with quick and efficient service with great pricing I would recommend them to everyone.',
  },
  {
    name: 'D&D Group Company',
    role: 'Google Review',
    text: 'We have been using this landscaping company for several years now, and they have consistently exceeded our expectations. From regular yard maintenance to larger seasonal cleanups, their team is always reliable, professional, and incredibly hardworking.',
  },
  {
    name: 'Melissa Fortin',
    role: 'Google Review',
    text: 'Great experience, yard always looks great, timely response for snow removal, would recommend.',
  },
  {
    name: 'Jaelynn Wiest',
    role: 'Google Review',
    text: 'Efficient, timely and hard working. Easy to work with. Highly recommend! Happy with product and communication!',
  },
  {
    name: 'john mcneill',
    role: 'Google Review',
    text: 'Awesome bunch of guys they cleaned up my yard took all my trash away very friendly and knowledgeable and respectful I would highly recommend them to anyone I am going to get them in the fall to do my fall cleanup and this winter to do my snow removal give them a try you will not be disappointed.',
  },
  {
    name: 'Royal Bist1',
    role: 'Google Review',
    text: 'Great service.',
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
  const safePage = Math.min(page, Math.max(totalPages - 1, 0))

  const paginate = useCallback((dir) => {
    setDirection(dir)
    setPage((p) => (p + dir + totalPages) % totalPages)
  }, [totalPages])

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000)
    return () => clearInterval(timer)
  }, [paginate])

  const visibleTestimonials = testimonials.slice(
    safePage * cardsPerView,
    safePage * cardsPerView + cardsPerView
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
            <Motion.div
              key={safePage}
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
                  <p className="dyhs-testimonial-text">"{t.text}"</p>
                </article>
              ))}
            </Motion.div>
          </AnimatePresence>
        </div>

        <div className="dyhs-testimonial-dots" aria-label="Testimonial pages">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`dyhs-dot ${safePage === i ? 'dyhs-dot-active' : ''}`}
              onClick={() => {
                setDirection(i > safePage ? 1 : -1)
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
