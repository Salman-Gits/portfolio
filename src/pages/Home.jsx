import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, Award, ShieldCheck, Database, Layers, ExternalLink } from 'lucide-react'
import profileImg from '../assets/images/salman.png'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

export default function Home() {
  const featuredProjects = [
    {
      id: '01',
      title: 'Blood Bank Hub',
      subtitle: 'Infrastructure // Healthcare Systems',
      description: 'An automated life-saving ecosystem designed for donor registration and real-time blood stock tracking. Engineered with Spring Boot and indexed MySQL queries.',
      tags: ['Java', 'Spring Boot', 'React.js', 'MySQL'],
      liveUrl: 'https://blood-bank-rouge-alpha.vercel.app/'
    },
    {
      id: '02',
      title: 'Nexus E-Commerce',
      subtitle: 'Transactional Systems // High Availability',
      description: 'An enterprise shopping engine focusing on real-time state synchronization, optimized product catalogs, and zero-reload checkouts.',
      tags: ['React.js', 'TypeScript', 'Tailwind', 'REST APIs'],
      liveUrl: 'https://ecommerce-frontend-seven-sooty.vercel.app/'
    },
    {
      id: '05',
      title: 'KG Badminton',
      subtitle: 'Client Project // Sports Management',
      description: 'A digital ecosystem developed for a high-performance sports venue, managing memberships, scheduling, and digital presence with absolute efficiency.',
      tags: ['React.js', 'Tailwind CSS', 'Vite', 'Responsive'],
      liveUrl: 'https://kgbadminton.vercel.app/'
    }
  ]

  return (
    <div className="page-fade-in home-page">
      <section className="hero-landing container">
        <div className="hero-grid-container">
          <motion.div 
            className="hero-intro-column"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="executive-badge">
              <span className="executive-pulse"></span> B.SC IT GRADUATE & FULL STACK DEVELOPER
            </div>
            
            <h1 className="main-title text-gradient">
              MOHAMMED SALMAN M. <br/>
              <span className="title-gradient">Full Stack Developer</span>
            </h1>
            
            <p className="hero-lead">
              Gold medalist developer specialized in the Java Spring Boot ecosystem and high-efficiency React UI architectures. I bridge the gap between heavy database integrity and fluid user experiences.
            </p>

            <div className="cta-group flex gap-4 mt-8">
              <Link to="/projects" className="btn btn-primary">
                Observe Architectures <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Me
              </Link>
            </div>

            <div className="quick-metrics-row mt-12 flex gap-6">
              <div className="hero-metric-card glass-card flex-1">
                <Award className="metric-icon mb-2" size={32} />
                <div className="metric-details">
                  <span className="metric-big block text-2xl font-bold">3X</span>
                  <span className="metric-text text-accent text-xs font-mono">Gold Medalist</span>
                </div>
              </div>
              
              <div className="hero-metric-card glass-card flex-1">
                <ShieldCheck className="metric-icon mb-2 text-secondary" size={32} />
                <div className="metric-details">
                  <span className="metric-big block text-2xl font-bold">8.5</span>
                  <span className="metric-text text-secondary text-xs font-mono">Cumulative GPA</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="hero-showcase-column"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-profile-container">
              <div className="profile-decorator"></div>
              <img 
                src={profileImg} 
                alt="Mohammed Salman M" 
                className="hero-profile-image"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute -bottom-6 -right-6 glass-card p-4 flex items-center gap-3">
                <div className="status-beacon"></div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase">Verified Developer</span>
              </div>
            </div>
            
            <div className="showcase-card glass-card mt-12">
              <div className="showcase-header flex justify-between items-center mb-6">
                <span className="showcase-label text-xs font-mono text-accent">CORE COMPLIANCE</span>
                <span className="showcase-status text-[10px] font-mono bg-accent/10 px-2 py-0.5 rounded text-accent">ACTIVE</span>
              </div>
              <h3 className="showcase-title text-2xl font-bold mb-4">The Engineering Creed</h3>
              <p className="showcase-text text-muted text-sm mb-8">
                Every line of code serves the system. I prioritize ACID compliance, SOLID design principles, and comprehensive schema normalizations.
              </p>
              
              <div className="creed-items flex flex-col gap-6 pt-6 border-t border-white/5">
                <div className="creed-item flex gap-4 items-start">
                  <Database size={20} className="text-accent mt-1" />
                  <div>
                    <h4 className="font-bold text-sm">Data Integrity First</h4>
                    <p className="text-xs text-muted">Relational normalizations (3NF) and indexed search pipelines.</p>
                  </div>
                </div>
                
                <div className="creed-item flex gap-4 items-start">
                  <Layers size={20} className="text-secondary mt-1" />
                  <div>
                    <h4 className="font-bold text-sm">Layered Separation</h4>
                    <p className="text-xs text-muted">Decoupled multi-tier services and professional UI state hooks.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="featured-section container py-20">
        <div className="section-header-row flex justify-between items-end mb-12">
          <div>
            <span className="section-subtitle-badge">CURATED COMPILATION</span>
            <h2 className="section-main-heading text-3xl font-bold">Featured Systems</h2>
          </div>
          <Link to="/projects" className="text-link flex items-center gap-2 text-accent font-medium">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="featured-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, idx) => (
            <motion.div 
              key={project.id} 
              className="featured-card glass-card flex flex-col justify-between"
              {...fadeInUp}
              transition={{ delay: idx * 0.1 }}
            >
              <div>
                <span className="featured-card-id font-mono text-xs text-muted mb-2 block">REG_SYS_{project.id}</span>
                <h3 className="featured-card-title text-2xl font-bold mb-1">{project.title}</h3>
                <span className="featured-card-subtitle text-xs font-mono text-accent mb-4 block">{project.subtitle}</span>
                <p className="featured-card-description text-muted text-sm leading-relaxed mb-6">{project.description}</p>
              </div>
              
              <div className="featured-card-bottom pt-6 border-t border-white/5">
                <div className="card-tags flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-chip text-[10px] font-mono bg-white/5 px-2 py-1 rounded border border-white/5">{tag}</span>
                  ))}
                </div>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary btn-sm w-full"
                >
                  Observe System <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="home-abstract container pb-20">
        <motion.div 
          className="abstract-card glass-card text-center py-16"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.98 }}
        >
          <h2 className="abstract-heading text-3xl font-bold mb-6">Academic Rigor & Production Precision</h2>
          <p className="abstract-text text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Validating technical rigor with triple academic gold medals in Information Technology and professional internship experience at Kalsun Groups.
          </p>
          <Link to="/about" className="btn btn-outline btn-sm">
            Read My Narrative
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
