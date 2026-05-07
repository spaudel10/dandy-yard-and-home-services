import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
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
            We are known for dependable small engine repair and maintenance—mowers, snowblowers, generators, pressure washers,
            and more—alongside professional lawn care and yard work to keep your property looking its best year-round.
            With over 20 years of experience, our team delivers seasonal lawn and snow service, small home repairs, and golf cart maintenance.
            We pride ourselves on clear communication, attention to detail, and genuine care for every machine and property we serve.
          </p>
          <p className="dyhs-section-text dyhs-service-area-copy">
            Serving Taber, Lethbridge, Bow Island, and Coaldale with trusted small engine service, lawn care, yard maintenance,
            snow removal, small home repairs, and golf cart repair. Whether your equipment needs a tune-up or you need spring lawn setup,
            summer mowing, fall cleanup, or winter snow removal—we're your local yard and property services partner.
          </p>
          <p className="dyhs-section-text">
            For a full list of equipment we work on and the types of jobs we take on, see our dedicated{' '}
            <Link to="/small-engine-repair" className="dyhs-text-link">
              small engine repair
            </Link>{' '}
            page.
          </p>
        </div>
        <div className="dyhs-stats-grid">
          {stats.map((stat, i) => (
            <Motion.div
              key={stat.label}
              className="dyhs-stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="dyhs-stat-value">{stat.value}</span>
              <span className="dyhs-stat-label">{stat.label}</span>
            </Motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
