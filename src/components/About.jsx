import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '200+', label: 'Happy Clients' },
  { value: '4', label: 'Seasons Covered' },
  { value: '100%', label: 'Satisfaction' },
]

export default function About() {
  return (
    <AnimatedSection id="about" className="dyhs-section dyhs-about">
      <div className="dyhs-container dyhs-section-inner">
        <div className="dyhs-about-content">
          <h2 className="dyhs-section-title">About Us</h2>
          <p className="dyhs-section-text">
            We help homeowners keep their yards and entrances looking great year-round with dependable
            seasonal service and friendly communication. From the first thaw of spring to the last snowfall
            of winter, we've got your property covered.
          </p>
        </div>
        <div className="dyhs-stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="dyhs-stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="dyhs-stat-value">{stat.value}</span>
              <span className="dyhs-stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
