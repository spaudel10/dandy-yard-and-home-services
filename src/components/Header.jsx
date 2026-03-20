import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prev
    }
  }, [menuOpen, setMenuOpen])

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About Us' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <>
      <motion.header
        className={`dyhs-header ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="dyhs-header-inner">
          <a className="dyhs-brand" href="#top" aria-label="Dandy Yard and Home Services">
            <img src="/logo.png" className="dyhs-logo" alt="Dandy Yard and Home Services" />
          </a>

          <button
            className="dyhs-burger"
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span className="dyhs-burger-lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          <nav className="dyhs-nav" aria-label="Primary">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="dyhs-drawer-overlay open"
            role="presentation"
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.aside
              className="dyhs-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              onClick={(e) => e.stopPropagation()}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            >
              <div className="dyhs-drawer-top">
                <img src="/logo.png" className="dyhs-drawer-logo" alt="Dandy Yard and Home Services" />
                <button
                  className="dyhs-drawer-close"
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                >
                  ×
                </button>
              </div>

              <nav className="dyhs-drawer-nav" aria-label="Mobile primary">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
