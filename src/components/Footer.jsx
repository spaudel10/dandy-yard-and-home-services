export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="dyhs-footer">
      <div className="dyhs-container dyhs-footer-inner">
        <div className="dyhs-footer-brand">
          <img src="/logo.png" className="dyhs-footer-logo" alt="DYHS" />
          <span className="dyhs-footer-copy">
            © {year} Dandy Yard and Home Services. All rights reserved.
          </span>
        </div>
        <nav className="dyhs-footer-nav" aria-label="Footer">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
