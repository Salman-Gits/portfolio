import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Layers, Paintbrush, Download } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeTheme, setActiveTheme] = useState('theme-obsidian')
  const [showThemePanel, setShowThemePanel] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    
    const savedTheme = localStorage.getItem('portfolio-theme') || 'theme-obsidian'
    setActiveTheme(savedTheme)
    document.body.className = savedTheme
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

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
    { name: 'theme-obsidian', color: '#f59e0b', label: 'Gold' },
    { name: 'theme-emerald', color: '#10b981', label: 'Emerald' },
    { name: 'theme-cosmic', color: '#8b5cf6', label: 'Cosmic' },
    { name: 'theme-amber', color: '#f97316', label: 'Sunset' },
    { name: 'theme-midnight', color: '#e2e8f0', label: 'Black', border: true },
    { name: 'theme-snow', color: '#0f172a', label: 'White', lightBg: true }
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <NavLink to="/" className="nav-logo">
          <Layers className="logo-icon" size={24} />
          <span className="logo-text">
            MOHAMMED SALMAN M<span className="logo-dot">.</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
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

        <div className="flex items-center gap-4 nav-actions-row">
          <div className="theme-selector-wrapper" style={{ position: 'relative' }}>
            <button 
              className="theme-panel-toggle-btn text-muted" 
              onClick={() => setShowThemePanel(!showThemePanel)}
              aria-label="Switch UI Theme"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}
            >
              <Paintbrush size={18} className="text-accent" />
              <span className="hidden-mobile">Theme</span>
            </button>

            {showThemePanel && (
              <div className="theme-bubble-panel glass-card" style={{
                position: 'absolute',
                top: 'calc(100% + 12px)',
                right: '0',
                padding: '1rem',
                display: 'flex',
                gap: '0.75rem',
                zIndex: 2000,
                boxShadow: '0 15px 30px rgba(0,0,0,0.4)',
                minWidth: '180px',
                justifyContent: 'center'
              }}>
                {themes.map((t) => (
                  <button
                    key={t.name}
                    onClick={() => {
                      handleThemeChange(t.name)
                      setShowThemePanel(false)
                    }}
                    title={t.label}
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: t.color,
                      border: activeTheme === t.name ? '2px solid #fff' : '2px solid transparent',
                      cursor: 'pointer',
                      transition: 'transform 0.2s'
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <a 
            href="/Mohammed_Salman_Resume.txt" 
            download
            className="btn btn-outline btn-sm font-mono nav-cv-download-btn"
            style={{ fontSize: '0.75rem' }}
          >
            <Download size={14} className="mr-1 inline" /> Resume
          </a>

          <div className="nav-status-container">
            <div className="status-beacon"></div>
            <span className="status-text">AVAILABLE</span>
          </div>
        </div>

        <button className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-nav-panel glass-card" style={{ margin: '0 1rem', position: 'fixed', top: '70px', left: 0, right: 0 }}>
          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `mobile-nav-btn ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-4 border-t border-white/5">
              <div className="flex justify-between items-center mb-6">
                <span className="text-muted text-sm">Theme Variant</span>
                <div className="flex gap-3">
                  {themes.map((t) => (
                    <button
                      key={t.name}
                      onClick={() => handleThemeChange(t.name)}
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        backgroundColor: t.color,
                        border: activeTheme === t.name ? '2px solid #fff' : '1px solid rgba(255,255,255,0.1)'
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="nav-status-container mobile w-full justify-center">
                <div className="status-beacon"></div>
                <span className="status-text">AVAILABLE FOR PROJECTS</span>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
