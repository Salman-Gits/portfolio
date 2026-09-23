import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, Download, Mail, ExternalLink, GitBranch, ChevronDown } from 'lucide-react'
import profileImg from '../assets/images/salman.png'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

export default function Home() {
  const featuredProject = {
    id: '01',
    title: 'Blood Bank Hub',
    subtitle: 'Healthcare Platform',
    description: 'A full-stack CRUD application for donor registration and real-time blood inventory tracking. Built with Spring Boot REST endpoints, Hibernate ORM, and an indexed MySQL backend for efficient donor management and blood availability tracking.',
    tags: ['Java', 'Spring Boot', 'React.js', 'MySQL'],
    features: ['CRUD Operations', 'REST APIs', 'Database Integration', 'Responsive UI'],
    liveUrl: 'https://blood-bank-rouge-alpha.vercel.app/',
    repoUrl: 'https://github.com/Salman-Gits'
  }

  const otherProjects = [
    {
      id: '02', title: 'Nexus E-Commerce', subtitle: 'Shopping Platform',
      description: 'E-commerce platform with real-time cart synchronization and a seamless zero-reload checkout pipeline.',
      tags: ['React.js', 'TypeScript', 'Tailwind', 'REST APIs'],
      features: ['API Integration', 'Responsive UI', 'Deployment'],
      liveUrl: 'https://ecommerce-frontend-seven-sooty.vercel.app/',
      repoUrl: 'https://github.com/Salman-Gits'
    },
    {
      id: '03', title: 'Rental Lease Engine', subtitle: 'Logistics & Automation',
      description: 'Asset-tracking application with barcode scanning to measure rental periods and calculate lease metrics.',
      tags: ['React.js', 'JSON', 'Barcode APIs'],
      features: ['API Integration', 'Dynamic Tracking', 'Responsive UI'],
      liveUrl: 'https://rental-opal-one.vercel.app/',
      repoUrl: 'https://github.com/Salman-Gits'
    },
    {
      id: '04', title: 'KG Badminton', subtitle: 'Client Project',
      description: 'Professional website for a badminton club with court availability, membership details, and event showcases.',
      tags: ['React.js', 'Tailwind CSS', 'Vite'],
      features: ['Responsive UI', 'Deployment', 'Client Deliverable'],
      liveUrl: 'https://kgbadminton.vercel.app/',
      repoUrl: 'https://github.com/Salman-Gits'
    }
  ]

  return (
    <div className="page-fade-in">
      {/* Hero */}
      <section className="hero-section container">
        <div className="hero-grid">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="hero-badge">
              <span className="hero-badge-dot"></span> B.Sc IT Graduate & Full Stack Developer
            </motion.div>

            <motion.h1 variants={fadeUp} className="hero-name">
              Mohammed Salman M.
            </motion.h1>

            <motion.h2 variants={fadeUp} className="hero-role">
              Full Stack Developer
            </motion.h2>

            <motion.p variants={fadeUp} className="hero-description">
              I build web applications with React.js, Java, Spring Boot, and MySQL. Focused on clean REST API design, normalized database schemas, and responsive user interfaces.
            </motion.p>

            <motion.div variants={fadeUp} className="hero-cta-group">
              <Link to="/projects" className="btn btn-primary">
                View Projects <ArrowRight size={16} />
              </Link>
              <a href="/Mohammed_Salman_Resume.txt" download className="btn btn-outline">
                <Download size={16} /> Resume
              </a>
              <Link to="/contact" className="btn btn-outline">
                <Mail size={16} /> Contact Me
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-value">3×</span>
                <span className="hero-stat-label">Gold Medalist</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-value">8.5</span>
                <span className="hero-stat-label">CGPA</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-value">5+</span>
                <span className="hero-stat-label">Live Projects</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="hero-profile-wrap">
              <div className="profile-border-deco"></div>
              <img src={profileImg} alt="Mohammed Salman M" className="hero-profile-img" referrerPolicy="no-referrer" />
              <div className="profile-status-badge">
                <div className="status-dot"></div> Open to Work
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="scroll-indicator-text">Scroll</span>
          <div className="scroll-indicator-line"></div>
        </motion.div>
      </section>

      {/* Featured Project */}
      <section className="container py-24">
        <motion.div
          className="flex justify-between items-end mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span className="section-label">Featured Project</span>
            <h2 className="section-title">Blood Bank Hub</h2>
          </div>
          <Link to="/projects" className="section-link">
            View All <ArrowRight size={14} />
          </Link>
        </motion.div>

        <motion.div
          className="featured-project-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="featured-project-content">
            <div className="featured-project-header">
              <span className="project-card-id">PROJECT_01</span>
              <span className="feature-badge">Full Stack</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold mb-2">Blood Bank Hub</h3>
                <span className="project-card-subtitle block mb-5">Healthcare Platform</span>
                <p className="text-muted text-sm leading-relaxed mb-6">{featuredProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tags.map(tag => <span key={tag} className="tag-chip">{tag}</span>)}
                </div>
              </div>

              <div>
                <p className="text-xs font-mono text-accent uppercase tracking-wider mb-4">Key Features</p>
                <div className="project-feature-list mb-6">
                  {featuredProject.features.map(f => <span key={f} className="feature-badge">{f}</span>)}
                </div>
                <div className="flex gap-3">
                  <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm flex-1">
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a href={featuredProject.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                    <GitBranch size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Other Projects Preview */}
      <section className="container py-24">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">More Projects</span>
          <h2 className="section-title">Other Work</h2>
        </motion.div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
            >
              <div>
                <span className="project-card-id block mb-3">PROJECT_{project.id}</span>
                <h3 className="project-card-title">{project.title}</h3>
                <span className="project-card-subtitle block mb-4">{project.subtitle}</span>
                <p className="text-muted text-sm leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map(tag => <span key={tag} className="tag-chip">{tag}</span>)}
                </div>
                <div className="project-feature-list mb-5">
                  {project.features.map(f => <span key={f} className="feature-badge">{f}</span>)}
                </div>
              </div>
              <div className="flex gap-2 mt-auto pt-5 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm flex-1">
                  <ExternalLink size={14} /> Demo
                </a>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                  <GitBranch size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Resume CTA */}
      <section className="container py-24 pb-32">
        <motion.div
          className="resume-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="resume-cta-heading">Looking for my next opportunity</h2>
          <p className="resume-cta-text">
            Interested in building scalable and user-focused web applications with React.js, Java, and Spring Boot.
          </p>
          <div className="resume-cta-buttons">
            <a href="/Mohammed_Salman_Resume.txt" download className="btn btn-primary">
              <Download size={16} /> Download Resume
            </a>
            <Link to="/contact" className="btn btn-outline">
              <Mail size={16} /> Let's Connect
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
