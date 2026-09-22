import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, Download } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [location])

  const navItems = [
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Education', path: '/education' },
    { label: 'Contact', path: '/contact' }
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <NavLink to="/" className="nav-logo">
          <span className="logo-icon font-mono">{'</>'}</span>
          <span className="logo-text">
            Mohammed Salman M<span className="logo-dot">.</span>
          </span>
        </NavLink>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a
            href="/Mohammed_Salman_Resume.txt"
            download
            className="btn btn-outline btn-sm nav-resume-btn"
          >
            <Download size={14} /> Resume
          </a>
          <div className="nav-status">
            <div className="status-dot"></div>
            <span className="status-label">Available</span>
          </div>
        </div>

        <button className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-nav-panel card"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="mobile-nav-links">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `mobile-nav-btn ${isActive ? 'active' : ''}`}
                  >
                    {item.label}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                className="pt-3 mt-2 border-t"
                style={{ borderColor: 'var(--color-border)' }}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a href="/Mohammed_Salman_Resume.txt" download className="btn btn-outline btn-sm w-full mb-3">
                  <Download size={14} /> Download Resume
                </a>
                <div className="nav-status w-full justify-center">
                  <div className="status-dot"></div>
                  <span className="status-label">Available for Work</span>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
