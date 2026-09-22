import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, Layers, Palette, Download } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeTheme, setActiveTheme] = useState('theme-obsidian')
  const [showThemePanel, setShowThemePanel] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    const savedTheme = localStorage.getItem('portfolio-theme') || 'theme-obsidian'
    setActiveTheme(savedTheme)
    document.body.className = savedTheme
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [location])

  const handleThemeChange = (themeName) => {
    setActiveTheme(themeName)
    document.body.className = themeName
    localStorage.setItem('portfolio-theme', themeName)
  }

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' }
  ]

  const themes = [
    { name: 'theme-obsidian', color: '#f59e0b', label: 'Amber' },
    { name: 'theme-emerald', color: '#10b981', label: 'Emerald' },
    { name: 'theme-cosmic', color: '#8b5cf6', label: 'Violet' },
    { name: 'theme-amber', color: '#f97316', label: 'Orange' },
    { name: 'theme-midnight', color: '#e2e8f0', label: 'Mono' },
    { name: 'theme-snow', color: '#0f172a', label: 'Light' }
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <NavLink to="/" className="nav-logo">
          <Layers className="logo-icon" size={22} />
          <span className="logo-text">
            Mohammed Salman M<span className="logo-dot">.</span>
          </span>
        </NavLink>

        <ul className="nav-links">
          {navItems.map((item, i) => (
            <motion.li
              key={item.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-3 nav-actions-row">
          <motion.div
            className="theme-selector-wrapper"
            style={{ position: 'relative' }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <button
              className="text-muted"
              onClick={() => setShowThemePanel(!showThemePanel)}
              aria-label="Switch theme"
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', padding: '0.4rem', borderRadius: '8px', transition: 'all 0.25s' }}
            >
              <Palette size={18} className="text-accent" />
            </button>

            <AnimatePresence>
              {showThemePanel && (
                <>
                  <div onClick={() => setShowThemePanel(false)} style={{ position: 'fixed', inset: 0, zIndex: 1999 }} />
                  <motion.div
                    className="glass-card"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: 'absolute', top: 'calc(100% + 10px)', right: '0',
                      padding: '1rem', display: 'flex', gap: '0.6rem',
                      zIndex: 2000, minWidth: '200px', flexWrap: 'wrap',
                      justifyContent: 'center', borderRadius: '14px'
                    }}
                  >
                    {themes.map((t) => (
                      <motion.button
                        key={t.name}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => { handleThemeChange(t.name); setShowThemePanel(false) }}
                        title={t.label}
                        style={{
                          width: '28px', height: '28px', borderRadius: '50%',
                          backgroundColor: t.color,
                          border: activeTheme === t.name ? '2px solid var(--color-text-main)' : '2px solid transparent',
                          cursor: 'pointer',
                          boxShadow: activeTheme === t.name ? `0 0 12px ${t.color}66` : 'none'
                        }}
                      />
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.a
            href="/Mohammed_Salman_Resume.txt"
            download
            className="btn btn-outline btn-sm nav-cv-download-btn"
            style={{ fontSize: '0.75rem' }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={14} /> Resume
          </motion.a>

          <motion.div
            className="nav-status-container"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="status-beacon"></div>
            <span className="status-text">Available</span>
          </motion.div>
        </div>

        <motion.button
          className="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-nav-panel glass-card"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="mobile-nav-links">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
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
                className="pt-4 border-t"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex justify-between items-center mb-4 mt-4">
                  <span className="text-muted text-sm">Theme</span>
                  <div className="flex gap-2 flex-wrap">
                    {themes.map((t) => (
                      <button
                        key={t.name}
                        onClick={() => handleThemeChange(t.name)}
                        style={{
                          width: '24px', height: '24px', borderRadius: '50%',
                          backgroundColor: t.color,
                          border: activeTheme === t.name ? '2px solid var(--color-text-main)' : '1px solid var(--color-border)'
                        }}
                      />
                    ))}
                  </div>
                </div>
                <a href="/Mohammed_Salman_Resume.txt" download className="btn btn-outline btn-sm w-full mb-4">
                  <Download size={14} /> Download Resume
                </a>
                <div className="nav-status-container mobile w-full justify-center">
                  <div className="status-beacon"></div>
                  <span className="status-text">Available for Work</span>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
