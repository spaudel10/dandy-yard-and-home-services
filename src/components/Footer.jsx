export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="dyhs-footer">
      <div className="dyhs-container dyhs-footer-inner">
        <div className="dyhs-footer-brand">
          <div className="dyhs-footer-logo" role="img" aria-label="Dandy Yard and Home Services" />
          <div>
            <span className="dyhs-footer-copy dyhs-footer-service-area">

              Serving Taber, Lethbridge, and Coaldale.
            </span>
            <span className="dyhs-footer-copy">
              
              © {year} Dandy Yard and Home Services. All rights reserved.
            </span>

          </div>
        </div>
        <div className="dyhs-footer-links">
          <nav className="dyhs-footer-nav" aria-label="Footer">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
          <a
            className="dyhs-footer-fb"
            href="https://www.facebook.com/DDYardCare"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dandy Yard and Home Services on Facebook"
          >
            <svg className="dyhs-footer-fb-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M24 12.073C24 5.446 18.627 0 12 0S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
