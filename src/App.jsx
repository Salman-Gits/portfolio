import { motion, AnimatePresence } from 'motion/react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Contact from './pages/Contact'
import { useScrollProgress } from './hooks/useAnimations'

function ScrollProgress() {
  const progress = useScrollProgress()
  return (
    <div className="scroll-progress" style={{ width: `${progress * 100}%` }} />
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <HashRouter>
      <ScrollProgress />
      <div className="bg-grid"></div>
      <div className="bg-glow"></div>

      <Navbar />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <AnimatedRoutes />
      </main>

      <footer className="global-footer">
        <div className="footer-container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="footer-copyright tracking-widest uppercase mb-1">
              © {new Date().getFullYear()} Mohammed Salman M.
            </p>
            <p className="text-[9px] font-mono text-subtle tracking-[0.2em] uppercase">
              Built with React, Spring Boot & Attention to Detail
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Salman-Gits" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-accent transition-colors" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span className="text-[10px] font-mono tracking-widest uppercase">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/mohammed-salman-m-17b573262/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-accent transition-colors" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-[10px] font-mono tracking-widest uppercase">LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>
    </HashRouter>
  )
}
