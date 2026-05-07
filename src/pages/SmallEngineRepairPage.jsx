import { useState, useEffect, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { usePageMeta, smallEnginePageMeta, SITE_ORIGIN, SMALL_ENGINE_SHARE_IMAGE } from '../seo'
import Header from '../components/Header'
import Footer from '../components/Footer'

const HERO_IMAGE = '/small-engine/small-engine-hero.png'

const SHOWCASE = [
  {
    src: '/small-engine/small-engine-mower.png',
    alt: 'Push lawn mower being serviced on a workshop stand',
    caption: 'Lawn mowers & riding equipment',
  },
  {
    src: '/small-engine/small-engine-snowblower.png',
    alt: 'Snow blower engine and service bay',
    caption: 'Snow blowers & winter gear',
  },
  {
    src: '/small-engine/small-engine-diagnostics.png',
    alt: 'Small engine parts and tools laid out for diagnostic repair',
    caption: 'Diagnostics & precision work',
  },
]

const EQUIPMENT = [
  'Golf carts',
  'Lawnmowers',
  'Snow blowers',
  'Line trimmers',
  'Chainsaws',
  'Pressure washers',
  'Generators',
  'Tillers & cultivators',
  'Log splitters',
  'Anything with a small engine',
]

const SERVICES = [
  {
    title: 'General maintenance',
    text: 'Oil changes, filters, belts, blades, spark plugs, and seasonal prep so equipment starts reliably.',
    image: '/small-engine/small-engine-mower.png',
    imageAlt: 'Lawn mower maintenance and blade service in the shop',
  },
  {
    title: 'Tune-ups',
    text: 'Carburetor adjustment, fuel system care, idle and power tuning for smooth running.',
    image: '/small-engine/small-engine-diagnostics.png',
    imageAlt: 'Small engine tune-up parts and tools on a workbench',
  },
  {
    title: 'Diagnostic repairs',
    text: "Won't start, rough running, smoke, leaks—we trace the problem and fix it.",
    image: '/small-engine/small-engine-snowblower.png',
    imageAlt: 'Snow blower and small engine diagnostic service',
  },
  {
    title: 'Overhauls',
    text: 'When an engine needs deeper work, we rebuild and refresh so you get more life from your machine.',
    image: '/small-engine/small-engine-diagnostics.png',
    imageAlt: 'Engine components during an overhaul on the workbench',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE_ORIGIN}/small-engine-repair#service`,
      name: 'Small engine repair and maintenance',
      serviceType: 'Small engine repair',
      url: `${SITE_ORIGIN}/small-engine-repair`,
      image: SMALL_ENGINE_SHARE_IMAGE,
      description: smallEnginePageMeta.description,
      provider: { '@id': `${SITE_ORIGIN}/#business` },
      areaServed: ['Taber, Alberta', 'Lethbridge, Alberta', 'Bow Island, Alberta', 'Coaldale, Alberta'],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_ORIGIN}/small-engine-repair#breadcrumbs`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${SITE_ORIGIN}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Small engine repair',
          item: `${SITE_ORIGIN}/small-engine-repair`,
        },
      ],
    },
  ],
}

export default function SmallEngineRepairPage() {
  usePageMeta(smallEnginePageMeta)
  const [menuOpen, setMenuOpen] = useState(false)

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = 'dyhs-jsonld-small-engine-page'
    el.textContent = JSON.stringify(jsonLd)
    document.head.appendChild(el)
    return () => {
      document.getElementById('dyhs-jsonld-small-engine-page')?.remove()
    }
  }, [])

  return (
    <div className="dyhs" data-season="spring">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="dyhs-subpage">
        <section className="dyhs-engine-hero" aria-labelledby="engine-hero-heading">
          <div className="dyhs-container dyhs-engine-hero-inner">
            <div className="dyhs-engine-hero-copy">
              <p className="dyhs-engine-hero-kicker">Small engines · Southern Alberta</p>
              <h1 id="engine-hero-heading" className="dyhs-engine-hero-title">
                Small engine repair &amp; maintenance
              </h1>
              <p className="dyhs-engine-hero-lead">
                We service golf carts, lawnmowers, snow blowers, line trimmers, chainsaws, and more—pretty much{' '}
                <strong>anything that has a small engine on it</strong>. Serving Taber, Lethbridge, Bow Island, and
                Coaldale.
              </p>
              <div className="dyhs-engine-hero-actions">
                <a className="dyhs-btn dyhs-btn-primary" href="/#contact">
                  Book service
                </a>
                <a className="dyhs-btn dyhs-btn-secondary" href="tel:+15872579907">
                  Call 587-257-9907
                </a>
                <Link className="dyhs-btn dyhs-btn-secondary" to="/">
                  ← All services
                </Link>
              </div>
            </div>
            <img
              className="dyhs-engine-hero-visual"
              src={HERO_IMAGE}
              alt="Clean small engine repair workshop with a mower on the workbench and professional tools"
              width={1200}
              height={675}
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </section>

        <section className="dyhs-section dyhs-engine-section" aria-labelledby="equipment-heading">
          <div className="dyhs-container dyhs-section-inner">
            <h2 id="equipment-heading" className="dyhs-section-title">
              Equipment we work on
            </h2>
            <p className="dyhs-section-text dyhs-engine-section-intro">
              If it has a small engine, there is a good chance we can help. Common jobs include residential and
              light-duty equipment—when you are not sure, ask when you book.
            </p>
            <ul className="dyhs-engine-chip-list">
              {EQUIPMENT.map((item) => (
                <li key={item} className="dyhs-engine-chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="dyhs-engine-showcase" aria-label="Small engine service gallery">
          <div className="dyhs-container">
            <div className="dyhs-engine-showcase-grid">
              {SHOWCASE.map((item) => (
                <figure key={item.src} className="dyhs-engine-showcase-card">
                  <div className="dyhs-engine-showcase-media-wrap">
                    <img
                      className="dyhs-engine-showcase-img"
                      src={item.src}
                      alt={item.alt}
                      width={640}
                      height={480}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="dyhs-engine-showcase-caption">{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="dyhs-section dyhs-engine-section dyhs-engine-section-alt" aria-labelledby="work-heading">
          <div className="dyhs-container dyhs-section-inner">
            <h2 id="work-heading" className="dyhs-section-title">
              What we do
            </h2>
            <div className="dyhs-engine-cards">
              {SERVICES.map((s, i) => (
                <Motion.article
                  key={s.title}
                  className="dyhs-engine-card"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="dyhs-engine-card-media">
                    <img src={s.image} alt={s.imageAlt} width={480} height={300} loading="lazy" decoding="async" />
                  </div>
                  <div className="dyhs-engine-card-body">
                    <h3 className="dyhs-engine-card-title">{s.title}</h3>
                    <p className="dyhs-engine-card-text">{s.text}</p>
                  </div>
                </Motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="dyhs-engine-cta-band" aria-label="Contact">
          <div className="dyhs-container dyhs-engine-cta-inner">
            <p className="dyhs-engine-cta-text">Ready to get your equipment running right?</p>
            <div className="dyhs-engine-cta-actions">
              <a className="dyhs-btn dyhs-btn-primary" href="/#contact">
                Request a booking
              </a>
              <a className="dyhs-btn dyhs-btn-secondary" href="mailto:Dandyyardandhomeservices@gmail.com">
                Email us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
