import AnimatedSection from './AnimatedSection'

const SERVICE_AREAS = [
  {
    city: 'Taber, Alberta',
    summary: 'Lawn care, yard cleanup, and seasonal property services near home.',
  },
  {
    city: 'Lethbridge, Alberta',
    summary: 'Residential lawn maintenance, snow removal, and small repairs.',
  },
  {
    city: 'Coaldale, Alberta',
    summary: 'Local landscaping and snow removal support for Coaldale homes.',
  },
]

export default function ServiceArea() {
  return (
    <AnimatedSection id="service-area" className="dyhs-section dyhs-service-area">
      <div className="dyhs-container">
        <div className="dyhs-service-area-top">
          <div>
            <h2 className="dyhs-section-title">Service Area</h2>
            <p className="dyhs-section-text">
              Proudly serving Taber, Lethbridge, and Coaldale with reliable lawn care,
              yard maintenance, snow removal, and small home repairs.
            </p>
          </div>
          <p className="dyhs-service-area-note">
            If you live in southern Alberta and need quality yard service, we’re ready to help.
          </p>
        </div>

        <div className="dyhs-service-area-grid">
          {SERVICE_AREAS.map((area) => (
            <article key={area.city} className="dyhs-service-area-card">
              <h3 className="dyhs-service-area-card-title">{area.city}</h3>
              <p className="dyhs-service-area-card-copy">{area.summary}</p>
            </article>
          ))}
        </div>

        <div className="dyhs-service-area-action">
          <a className="dyhs-btn dyhs-btn-primary" href="#contact">
            Book service for your area
          </a>
        </div>
      </div>
    </AnimatedSection>
  )
}
