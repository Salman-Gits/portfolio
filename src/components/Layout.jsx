import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import ThreeBackground from './ThreeBackground';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Layout({ children }) {
  const [localTime, setLocalTime] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Portfolio', path: '/projects' },
    { label: 'Connect', path: '/contact' }
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-purple-100 selection:text-purple-900">
      <ThreeBackground />
      
      {/* Picto Style Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-20 py-6 transition-colors duration-300 ${isMenuOpen ? 'bg-white' : 'bg-white/70 backdrop-blur-lg border-b border-white/20'}`}>
        <Link to="/" className="flex items-center gap-3 group relative z-50">
          <div className="w-9 h-9 bg-brand-primary flex items-center justify-center rounded-lg shadow-lg shadow-indigo-100">
            <span className="text-white font-black text-sm">MS</span>
          </div>
          <span className="text-lg font-black tracking-tight text-slate-900 uppercase">Salman</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
            {menuItems.map((item) => (
              <Link 
                key={item.label} 
                to={item.path} 
                className={location.pathname === item.path ? "text-brand-primary" : "hover:text-brand-primary transition-all"}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link 
            to="/contact" 
            className="px-8 py-3 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest hover:bg-brand-primary-dark hover:-translate-y-0.5 transition-all rounded-md shadow-lg shadow-indigo-100"
          >
            Get Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-900 hover:text-brand-primary transition-colors relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-white z-40 md:hidden flex flex-col p-8 pt-32"
            >
              <div className="flex flex-col gap-6 text-2xl font-black text-slate-900 italic uppercase">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link 
                      to={item.path}
                      className={location.pathname === item.path ? "text-brand-primary" : "hover:text-brand-primary"}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-auto"
              >
                <Link 
                  to="/contact" 
                  className="w-full flex items-center justify-center px-8 py-5 bg-brand-primary text-white text-sm font-bold uppercase tracking-widest rounded-2xl shadow-xl shadow-indigo-100"
                >
                  Get Consultation
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-24"
      >
        {children}
      </motion.main>

      {/* Global Footer */}
      <footer className="px-6 md:px-20 py-16 bg-white/30 backdrop-blur-sm border-t border-slate-200 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{localTime} LOCAL TIME</span>
            </div>
            <p className="text-slate-400 text-xs tracking-tight">© 2025 MOHAMMED SALMAN M. ALL RIGHTS RESERVED.</p>
          </div>
          
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
             <a href="https://github.com/Salman-Gits" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-all">GitHub</a>
             <a href="https://linkedin.com/in/mohammed-salman-17b573262" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-all">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
