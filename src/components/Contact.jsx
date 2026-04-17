import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const PHONE_DISPLAY = '587-257-9907'
const PHONE_E164 = '15872579907'
const EMAIL = 'Dandyyardandhomeservices@gmail.com'

const phoneHref = `tel:+${PHONE_E164}`
const emailHref = `mailto:${EMAIL}`
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xaqlzjgj'

const iconClass = 'dyhs-btn-icon'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')
  const [message, setMessage] = useState('')

  return (
    <AnimatedSection id="contact" className="dyhs-contact">
      <div className="dyhs-container">
        <Motion.div
          className="dyhs-contact-card"
          whileInView={{ scale: [0.97, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="dyhs-section-title">Book Now</h2>
          <p className="dyhs-section-text">
            Call, email, or send your details below and we&apos;ll reply as soon as possible.
          </p>
          <div className="dyhs-contact-actions">
            <a className="dyhs-btn dyhs-btn-primary dyhs-btn-glow" href={phoneHref} aria-label={`Call us at ${PHONE_DISPLAY}`}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={iconClass}
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call us
            </a>
            <a className="dyhs-btn dyhs-btn-primary" href={emailHref} aria-label={`Email us at ${EMAIL}`}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={iconClass}
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Email us
            </a>
          </div>
          <form className="dyhs-contact-form" action={FORMSPREE_ENDPOINT} method="POST">
            <input type="hidden" name="_subject" value="Service request from website" />
            <input type="hidden" name="_replyto" value={email} />
            <div className="dyhs-contact-grid">
              <label className="dyhs-contact-field">
                <span>Your name</span>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Name"
                  required
                />
              </label>
              <label className="dyhs-contact-field">
                <span>Email address</span>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </label>
              <label className="dyhs-contact-field">
                <span>Phone number</span>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="587-555-0100"
                />
              </label>
              <label className="dyhs-contact-field">
                <span>Service location</span>
                <input
                  type="text"
                  name="location"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  placeholder="Town or neighborhood"
                />
              </label>
            </div>
            <label className="dyhs-contact-message">
              <span>Message</span>
              <textarea
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell us what you need help with"
                rows={5}
                required
              />
            </label>
            <button type="submit" className="dyhs-btn dyhs-btn-secondary dyhs-contact-submit">
              Send request
            </button>
          </form>
        </Motion.div>
      </div>
    </AnimatedSection>
  )
}
