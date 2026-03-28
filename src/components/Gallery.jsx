import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

/** Matches files in public/Gallery/ (numbered 1–6) */
const GALLERY_ITEMS = [
  { label: 'Spring Lawn', image: '/Gallery/1_Photoreal_early_spring_suburb_1_20260329_002354.png' },
  { label: 'Summer Trim', image: '/Gallery/2_Photoreal_peak_summer_midday_1_20260329_002417.png' },
  { label: 'Fall Cleanup', image: '/Gallery/3_Photoreal_autumn_afternoon_ov_1_20260329_002437.png' },
  { label: 'Snow Removal', image: '/Gallery/4_Photoreal_blue_hour_winter_f_1_20260329_002500.png' },
  { label: 'Garden Care', image: '/Gallery/5_Photoreal_sunny_day_neat_flo_1_20260329_002523.png' },
  { label: 'Yard Detail', image: '/Gallery/6_Photoreal_finishing_touches_1_20260329_002544.png' },
]

export default function Gallery() {
  return (
    <AnimatedSection id="gallery" className="dyhs-section dyhs-gallery">
      <div className="dyhs-container">
        <h2 className="dyhs-section-title">Gallery</h2>
        <div className="dyhs-gallery-grid" aria-label="Gallery">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.image}
              className="dyhs-gallery-tile"
              style={{ backgroundImage: `url(${item.image})` }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03, transition: { duration: 0.25 } }}
            >
              <span className="dyhs-gallery-tile-label">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
