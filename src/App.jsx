import { useState, useMemo } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSeason, setActiveSeason] = useState('spring')

  const snowDots = useMemo(
    () =>
      Array.from({ length: 60 }).map((_, i) => ({
        left: `${(i * 7.3) % 100}%`,
        width: `${3 + (i % 6)}px`,
        height: `${3 + (i % 6)}px`,
        opacity: 0.35 + (i % 7) * 0.06,
        animationDuration: `${6 + (i % 10) * 0.35}s`,
        animationDelay: `${-((i % 20) * 0.45)}s`,
        '--drift': `${((i % 11) - 5) * 14}px`,
      })),
    []
  )

  const fallLeaves = useMemo(
    () =>
      Array.from({ length: 55 }).map((_, i) => {
        const size = 6 + (i % 7) * 1.4
        return {
          left: `${(i * 9.1) % 100}%`,
          width: `${size}px`,
          height: `${Math.max(3, size * 0.72)}px`,
          opacity: 0.35 + (i % 8) * 0.06,
          animationDuration: `${5.2 + (i % 9) * 0.42}s`,
          animationDelay: `${-((i % 22) * 0.33)}s`,
          '--drift': `${((i % 13) - 6) * 16}px`,
          '--rot': `${(i % 12) * 18 - 90}deg`,
        }
      }),
    []
  )

  return (
    <div className="dyhs" data-season={activeSeason}>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div id="top" />
      <Hero activeSeason={activeSeason} snowDots={snowDots} fallLeaves={fallLeaves} />
      <Services activeSeason={activeSeason} setActiveSeason={setActiveSeason} />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
