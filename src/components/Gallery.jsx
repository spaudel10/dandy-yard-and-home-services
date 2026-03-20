import { motion } from 'framer-motion'
import heroImg from '../assets/hero.png'
import AnimatedSection from './AnimatedSection'

const labels = ['Spring Lawn', 'Summer Trim', 'Fall Cleanup', 'Snow Removal', 'Garden Care', 'Yard Detail']

export default function Gallery() {
  return (
    <AnimatedSection id="gallery" className="dyhs-section dyhs-gallery">
      <div className="dyhs-container">
        <h2 className="dyhs-section-title">Gallery</h2>
        <div className="dyhs-gallery-grid" aria-label="Gallery">
          {labels.map((label, i) => (
            <motion.div
              key={i}
              className="dyhs-gallery-tile"
              style={{ backgroundImage: `url(${heroImg})` }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03, transition: { duration: 0.25 } }}
            >
              <span className="dyhs-gallery-tile-label">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
