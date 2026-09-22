import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, Award, ShieldCheck, Database, Layers, ExternalLink, Sparkles } from 'lucide-react'
import profileImg from '../assets/images/salman.png'
import { useTypewriter, useCountUp, useInView, useMousePosition } from '../hooks/useAnimations'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

function MetricCounter({ target, suffix, label, icon: Icon, color }) {
  const [ref, inView] = useInView()
  const value = useCountUp(target, 1800, inView)
  return (
    <div ref={ref} className="hero-metric-card glass-card shimmer-card flex-1">
      <Icon className="metric-icon" size={28} style={color ? { color } : undefined} />
      <div className="metric-details">
        <span className="metric-big block">
          {target % 1 === 0 ? Math.round(value) : value.toFixed(1)}{suffix}
        </span>
        <span className="metric-text" style={color ? { color } : undefined}>{label}</span>
      </div>
    </div>
  )
}

export default function Home() {
  const typedRole = useTypewriter(['Full Stack Developer', 'Java Spring Boot', 'React.js Specialist', 'Backend Engineer'], 90, 40, 2000)
  const mousePos = useMousePosition()

  const featuredProjects = [
    {
      id: '01', title: 'Blood Bank Hub', subtitle: 'Healthcare Platform',
      description: 'A full-stack application for donor registration and real-time blood inventory tracking, built with Spring Boot REST APIs and an indexed MySQL backend.',
      tags: ['Java', 'Spring Boot', 'React.js', 'MySQL'],
      liveUrl: 'https://blood-bank-rouge-alpha.vercel.app/'
    },
    {
      id: '02', title: 'Nexus E-Commerce', subtitle: 'Shopping Platform',
      description: 'An e-commerce platform with real-time cart synchronization, optimized product catalogs, and a seamless zero-reload checkout experience.',
      tags: ['React.js', 'TypeScript', 'Tailwind', 'REST APIs'],
      liveUrl: 'https://ecommerce-frontend-seven-sooty.vercel.app/'
    },
    {
      id: '03', title: 'KG Badminton', subtitle: 'Client Project',
      description: 'A professional website for a badminton club, featuring court availability, membership details, and event showcases with a responsive interface.',
      tags: ['React.js', 'Tailwind CSS', 'Vite', 'Responsive'],
      liveUrl: 'https://kgbadminton.vercel.app/'
    }
  ]

  const parallaxX = (mousePos.x - 0.5) * 20
  const parallaxY = (mousePos.y - 0.5) * 20

  return (
    <div className="page-fade-in home-page">
      <section className="hero-landing container">
        <div className="hero-grid-container">
          <motion.div
            className="hero-intro-column"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="executive-badge">
              <span className="executive-pulse"></span> B.Sc IT Graduate & Full Stack Developer
            </motion.div>

            <motion.h1 variants={item} className="main-title text-gradient">
              Mohammed Salman M. <br />
              <span className="title-gradient">
                {typedRole}<span style={{ opacity: 0.4 }}>|</span>
              </span>
            </motion.h1>

            <motion.p variants={item} className="hero-lead">
              Gold medalist developer specializing in Java Spring Boot and React. I build reliable, well-structured web applications that bridge robust backend architecture with clean, responsive user experiences.
            </motion.p>

            <motion.div variants={item} className="cta-group flex gap-4 mt-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/projects" className="btn btn-primary">
                  View Projects <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="btn btn-outline">
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={item} className="quick-metrics-row mt-12 flex gap-4">
              <MetricCounter target={3} suffix="x" label="Gold Medalist" icon={Award} />
              <MetricCounter target={8.5} label="Cumulative GPA" icon={ShieldCheck} color="var(--color-secondary)" />
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-showcase-column"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-profile-container">
              <div className="profile-glow-ring"></div>
              <div className="profile-decorator"></div>
              <motion.img
                src={profileImg}
                alt="Mohammed Salman M"
                className="hero-profile-image"
                referrerPolicy="no-referrer"
                animate={{ x: parallaxX * 0.3, y: parallaxY * 0.3 }}
                transition={{ type: 'spring', stiffness: 50, damping: 15 }}
              />

              <motion.div
                className="absolute -bottom-4 -right-4 glass-card p-3 flex items-center gap-2"
                style={{ borderRadius: '12px' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="status-beacon"></div>
                <span className="text-[10px] font-mono font-semibold tracking-widest text-accent uppercase">Open to Work</span>
              </motion.div>
            </div>

            <motion.div
              className="showcase-card glass-card shimmer-card mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="showcase-header flex justify-between items-center mb-5">
                <span className="showcase-label text-xs font-mono text-accent tracking-widest uppercase flex items-center gap-2">
                  <Sparkles size={14} /> Engineering Principles
                </span>
                <span className="showcase-status text-[10px] font-mono px-2 py-0.5 rounded text-accent" style={{ background: 'var(--color-accent-soft)' }}>Active</span>
              </div>
              <h3 className="showcase-title text-xl font-bold mb-3">How I Build</h3>
              <p className="showcase-text text-muted text-sm mb-6 leading-relaxed">
                I prioritize clean architecture, data integrity, and maintainable code — following SOLID principles and thorough schema design.
              </p>

              <div className="creed-items flex flex-col gap-5 pt-5 border-t">
                <motion.div
                  className="creed-item flex gap-3 items-start"
                  whileHover={{ x: 4 }}
                >
                  <Database size={18} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">Data Integrity First</h4>
                    <p className="text-xs text-muted mt-0.5">Normalized schemas (3NF) and indexed queries for performance.</p>
                  </div>
                </motion.div>

                <motion.div
                  className="creed-item flex gap-3 items-start"
                  whileHover={{ x: 4 }}
                >
                  <Layers size={18} className="text-secondary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">Layered Architecture</h4>
                    <p className="text-xs text-muted mt-0.5">Decoupled services with clean separation of concerns.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="featured-section container py-20">
        <motion.div
          className="section-header-row flex justify-between items-end mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="section-subtitle-badge">Selected Work</span>
            <h2 className="section-main-heading">Featured Projects</h2>
          </div>
          <Link to="/projects" className="text-link flex items-center gap-2 text-accent font-medium">
            View All <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="featured-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="featured-card glass-card shimmer-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
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
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Live <ExternalLink size={14} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="home-abstract container pb-20">
        <motion.div
          className="abstract-card glass-card shimmer-card text-center py-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="abstract-heading text-2xl font-bold mb-5">Academic Excellence Meets Real-World Experience</h2>
          <p className="abstract-text text-muted max-w-xl mx-auto mb-8 leading-relaxed">
            Triple academic gold medals in Information Technology, backed by hands-on internship experience building production applications at Kalsun Groups.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/about" className="btn btn-outline btn-sm">
              Read My Story
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
