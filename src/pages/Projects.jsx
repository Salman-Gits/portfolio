import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ExternalLink, Layers, GitBranch, Shield } from 'lucide-react'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: '01',
      title: 'Blood Bank Hub',
      subtitle: 'Healthcare Platform',
      version: 'v1.2.0',
      description: 'A full-stack CRUD application for donor registration and real-time blood inventory tracking. Built with Spring Boot REST endpoints, Hibernate ORM, and an indexed MySQL backend.',
      tags: ['Java', 'Spring Boot', 'React.js', 'MySQL'],
      metrics: '8+ API Endpoints',
      category: 'infrastructure',
      liveUrl: 'https://blood-bank-rouge-alpha.vercel.app/',
      repoUrl: 'https://github.com/Salman-Gits'
    },
    {
      id: '02',
      title: 'Nexus E-Commerce',
      subtitle: 'Shopping Platform',
      version: 'v2.0.1',
      description: 'An e-commerce platform with real-time cart synchronization, full relational integrity, and a seamless zero-reload checkout pipeline.',
      tags: ['React.js', 'TypeScript', 'Tailwind', 'REST APIs'],
      metrics: 'Real-time Sync',
      category: 'transactional',
      liveUrl: 'https://ecommerce-frontend-seven-sooty.vercel.app/',
      repoUrl: 'https://github.com/Salman-Gits'
    },
    {
      id: '03',
      title: 'Rental Lease Engine',
      subtitle: 'Logistics & Automation',
      version: 'v1.0.4',
      description: 'An asset-tracking application with barcode scanning to measure rental periods and calculate lease metrics with precision.',
      tags: ['React.js', 'JSON', 'Barcode APIs'],
      metrics: 'Dynamic Tracking',
      category: 'logistics',
      liveUrl: 'https://rental-opal-one.vercel.app/',
      repoUrl: 'https://github.com/Salman-Gits'
    },
    {
      id: '04',
      title: 'Creative Showcase',
      subtitle: 'Portfolio & Motion Design',
      version: 'v1.1.0',
      description: 'A high-fidelity portfolio site for a creative professional, featuring cinematic page transitions and optimized asset loading.',
      tags: ['React.js', 'Motion', 'Vite'],
      metrics: 'Smooth Transitions',
      category: 'design',
      liveUrl: 'https://shaheinsha-portfolio.vercel.app/',
      repoUrl: 'https://github.com/Salman-Gits'
    },
    {
      id: '05',
      title: 'KG Badminton',
      subtitle: 'Client Project',
      version: 'v1.0.0',
      description: 'A professional website for a badminton club, featuring court availability, membership details, and event showcases with a responsive, high-performance interface.',
      tags: ['React.js', 'Tailwind CSS', 'Responsive'],
      metrics: 'Production Ready',
      category: 'design',
      liveUrl: 'https://kgbadminton.vercel.app/',
      repoUrl: 'https://github.com/Salman-Gits'
    }
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <div className="page-fade-in projects-page container">
      <header className="page-header">
        <span className="page-subtitle">Live Projects & Systems</span>
        <h1 className="page-title text-gradient">Projects</h1>
      </header>

      <div className="flex flex-wrap justify-center gap-3 mb-12 border-b pb-6">
        {[
          { label: 'All', value: 'all' },
          { label: 'Infrastructure', value: 'infrastructure' },
          { label: 'Transactional', value: 'transactional' },
          { label: 'Logistics', value: 'logistics' },
          { label: 'Design', value: 'design' }
        ].map((tab) => (
          <button
            key={tab.value}
            onClick={() => setFilter(tab.value)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              filter === tab.value
                ? 'text-accent'
                : 'text-muted hover:text-white'
            }`}
            style={{
              background: filter === tab.value ? 'var(--color-accent-soft)' : 'transparent',
              border: filter === tab.value ? '1px solid var(--color-border-glow)' : '1px solid var(--color-border)'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="projects-catalog-grid grid grid-cols-1 md:grid-cols-2 gap-6 mb-24"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="project-detail-card glass-card"
            >
              <div>
                <div className="flex justify-between items-center mb-5 pb-4 border-t" style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-muted uppercase tracking-widest">
                    <Layers size={14} className="text-accent" /> {project.id}
                  </div>
                  <div className="flex items-center gap-2 text-[9px] px-2 py-0.5 rounded font-semibold text-accent" style={{ background: 'var(--color-accent-soft)', border: '1px solid var(--color-border-glow)' }}>
                    <Shield size={12} /> {project.version}
                  </div>
                </div>

                <div className="mb-5">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs font-mono text-accent block mt-1 uppercase tracking-wider">{project.subtitle}</span>
                </div>

                <p className="text-muted text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-chip">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <div className="flex items-center gap-2 text-[10px] font-mono text-muted mb-5">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" style={{ boxShadow: '0 0 8px var(--color-accent)' }}></span>
                  {project.metrics}
                </div>

                <div className="flex gap-3">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm flex-1">
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                    <GitBranch size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
