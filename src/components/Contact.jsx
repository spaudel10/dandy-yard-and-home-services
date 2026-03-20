import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="dyhs-contact">
      <div className="dyhs-container">
        <motion.div
          className="dyhs-contact-card"
          whileInView={{ scale: [0.97, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="dyhs-section-title">Book Now</h2>
          <p className="dyhs-section-text">
            Call or send a quick request and we'll help you pick the right service for your property.
          </p>
          <div className="dyhs-contact-actions">
            <a className="dyhs-btn dyhs-btn-primary dyhs-btn-glow" href="tel:+10000000000">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dyhs-btn-icon">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call Us
            </a>
            <a className="dyhs-btn dyhs-btn-secondary" href="mailto:info@example.com">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dyhs-btn-icon">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Email Us
            </a>
          </div>
          <p className="dyhs-contact-note">Replace phone number + email with your real info.</p>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
