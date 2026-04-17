import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '350+', label: 'Happy Clients' },
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
            We provide professional lawn care and yard maintenance services to keep your property looking beautiful
            and well-maintained year-round. With over 20 years of experience, our lawn and yard care team delivers
            dependable seasonal service, snow removal, small home repairs, small engine repairs, and golf cart maintenance.
            We pride ourselves on clear communication, attention to detail, and genuine care for every property and equipment we serve.
          </p>
          <p className="dyhs-section-text dyhs-service-area-copy">
            Serving Taber, Lethbridge, Bow Island, and Coaldale with trusted lawn care, yard maintenance, snow removal,
            small home repairs, small engine repair and maintenance, and golf cart repair services. Whether you need spring lawn setup,
            summer lawn mowing, fall yard cleanup, winter snow removal, or equipment maintenance—we're your local yard and property services partner.
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
