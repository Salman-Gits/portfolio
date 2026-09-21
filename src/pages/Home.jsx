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
      subtitle: 'Healthcare Platform',
      description: 'A full-stack application for donor registration and real-time blood inventory tracking, built with Spring Boot REST APIs and an indexed MySQL backend.',
      tags: ['Java', 'Spring Boot', 'React.js', 'MySQL'],
      liveUrl: 'https://blood-bank-rouge-alpha.vercel.app/'
    },
    {
      id: '02',
      title: 'Nexus E-Commerce',
      subtitle: 'Shopping Platform',
      description: 'An e-commerce platform with real-time cart synchronization, optimized product catalogs, and a seamless zero-reload checkout experience.',
      tags: ['React.js', 'TypeScript', 'Tailwind', 'REST APIs'],
      liveUrl: 'https://ecommerce-frontend-seven-sooty.vercel.app/'
    },
    {
      id: '03',
      title: 'KG Badminton',
      subtitle: 'Client Project',
      description: 'A professional website for a badminton club, featuring court availability, membership details, and event showcases with a responsive interface.',
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
              <span className="executive-pulse"></span> B.Sc IT Graduate & Full Stack Developer
            </div>

            <h1 className="main-title text-gradient">
              Mohammed Salman M. <br />
              <span className="title-gradient">Full Stack Developer</span>
            </h1>

            <p className="hero-lead">
              Gold medalist developer specializing in Java Spring Boot and React. I build reliable, well-structured web applications that bridge robust backend architecture with clean, responsive user experiences.
            </p>

            <div className="cta-group flex gap-4 mt-8">
              <Link to="/projects" className="btn btn-primary">
                View Projects <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get in Touch
              </Link>
            </div>

            <div className="quick-metrics-row mt-12 flex gap-4">
              <div className="hero-metric-card glass-card flex-1">
                <Award className="metric-icon" size={28} />
                <div className="metric-details">
                  <span className="metric-big block">3x</span>
                  <span className="metric-text text-accent">Gold Medalist</span>
                </div>
              </div>

              <div className="hero-metric-card glass-card flex-1">
                <ShieldCheck className="metric-icon text-secondary" size={28} />
                <div className="metric-details">
                  <span className="metric-big block">8.5</span>
                  <span className="metric-text text-secondary">Cumulative GPA</span>
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

              <div className="absolute -bottom-4 -right-4 glass-card p-3 flex items-center gap-2" style={{ borderRadius: '12px' }}>
                <div className="status-beacon"></div>
                <span className="text-[10px] font-mono font-semibold tracking-widest text-accent uppercase">Open to Work</span>
              </div>
            </div>

            <div className="showcase-card glass-card mt-10">
              <div className="showcase-header flex justify-between items-center mb-5">
                <span className="showcase-label text-xs font-mono text-accent tracking-widest uppercase">Engineering Principles</span>
                <span className="showcase-status text-[10px] font-mono px-2 py-0.5 rounded text-accent" style={{ background: 'var(--color-accent-soft)' }}>Active</span>
              </div>
              <h3 className="showcase-title text-xl font-bold mb-3">How I Build</h3>
              <p className="showcase-text text-muted text-sm mb-6 leading-relaxed">
                I prioritize clean architecture, data integrity, and maintainable code — following SOLID principles and thorough schema design.
              </p>

              <div className="creed-items flex flex-col gap-5 pt-5 border-t">
                <div className="creed-item flex gap-3 items-start">
                  <Database size={18} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">Data Integrity First</h4>
                    <p className="text-xs text-muted mt-0.5">Normalized schemas (3NF) and indexed queries for performance.</p>
                  </div>
                </div>

                <div className="creed-item flex gap-3 items-start">
                  <Layers size={18} className="text-secondary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">Layered Architecture</h4>
                    <p className="text-xs text-muted mt-0.5">Decoupled services with clean separation of concerns.</p>
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
            <span className="section-subtitle-badge">Selected Work</span>
            <h2 className="section-main-heading">Featured Projects</h2>
          </div>
          <Link to="/projects" className="text-link flex items-center gap-2 text-accent font-medium">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="featured-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="featured-card glass-card"
              {...fadeInUp}
              transition={{ delay: idx * 0.1 }}
            >
              <div>
                <span className="featured-card-id mb-3 block">PROJECT_{project.id}</span>
                <h3 className="featured-card-title">{project.title}</h3>
                <span className="featured-card-subtitle mb-4 block">{project.subtitle}</span>
                <p className="featured-card-description text-muted text-sm leading-relaxed mb-6">{project.description}</p>
              </div>

              <div className="featured-card-bottom pt-5 border-t">
                <div className="card-tags flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-chip">{tag}</span>
                  ))}
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm w-full"
                >
                  View Live <ExternalLink size={14} />
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
          transition={{ duration: 0.6 }}
        >
          <h2 className="abstract-heading text-2xl font-bold mb-5">Academic Excellence Meets Real-World Experience</h2>
          <p className="abstract-text text-muted max-w-xl mx-auto mb-8 leading-relaxed">
            Triple academic gold medals in Information Technology, backed by hands-on internship experience building production applications at Kalsun Groups.
          </p>
          <Link to="/about" className="btn btn-outline btn-sm">
            Read My Story
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
