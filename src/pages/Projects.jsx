import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ExternalLink, GitBranch, Layers } from 'lucide-react'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: '01', title: 'Blood Bank Hub', subtitle: 'Healthcare Platform',
      description: 'A full-stack CRUD application for donor registration and real-time blood inventory tracking. Built with Spring Boot REST endpoints, Hibernate ORM, and an indexed MySQL backend.',
      tags: ['Java', 'Spring Boot', 'React.js', 'MySQL'],
      features: ['CRUD Operations', 'REST APIs', 'Database Integration', 'Responsive UI'],
      category: 'fullstack',
      liveUrl: 'https://blood-bank-rouge-alpha.vercel.app/',
      repoUrl: 'https://github.com/Salman-Gits',
      featured: true
    },
    {
      id: '02', title: 'Nexus E-Commerce', subtitle: 'Shopping Platform',
      description: 'An e-commerce platform with real-time cart synchronization, full relational integrity, and a seamless zero-reload checkout pipeline.',
      tags: ['React.js', 'TypeScript', 'Tailwind', 'REST APIs'],
      features: ['API Integration', 'Responsive UI', 'Deployment'],
      category: 'frontend',
      liveUrl: 'https://ecommerce-frontend-seven-sooty.vercel.app/',
      repoUrl: 'https://github.com/Salman-Gits'
    },
    {
      id: '03', title: 'Rental Lease Engine', subtitle: 'Logistics & Automation',
      description: 'An asset-tracking application with barcode scanning to measure rental periods and calculate lease metrics with precision.',
      tags: ['React.js', 'JSON', 'Barcode APIs'],
      features: ['API Integration', 'Dynamic Tracking', 'Responsive UI'],
      category: 'frontend',
      liveUrl: 'https://rental-opal-one.vercel.app/',
      repoUrl: 'https://github.com/Salman-Gits'
    },
    {
      id: '04', title: 'Creative Showcase', subtitle: 'Portfolio & Motion Design',
      description: 'A high-fidelity portfolio site for a creative professional, featuring cinematic page transitions and optimized asset loading.',
      tags: ['React.js', 'Motion', 'Vite'],
      features: ['Responsive UI', 'Animations', 'Deployment'],
      category: 'design',
      liveUrl: 'https://shaheinsha-portfolio.vercel.app/',
      repoUrl: 'https://github.com/Salman-Gits'
    },
    {
      id: '05', title: 'KG Badminton', subtitle: 'Client Project',
      description: 'A professional website for a badminton club, featuring court availability, membership details, and event showcases with a responsive interface.',
      tags: ['React.js', 'Tailwind CSS', 'Responsive'],
      features: ['Responsive UI', 'Deployment', 'Client Deliverable'],
      category: 'design',
      liveUrl: 'https://kgbadminton.vercel.app/',
      repoUrl: 'https://github.com/Salman-Gits'
    }
  ]

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Full Stack', value: 'fullstack' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Design', value: 'design' }
  ]

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <div className="page-fade-in container">
      <header className="page-header">
        <motion.span className="page-subtitle" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>Live Projects & Systems</motion.span>
        <motion.h1 className="page-title" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>Projects</motion.h1>
      </header>

      <div className="flex flex-wrap gap-2.5 mb-14 pb-4 border-b" style={{ borderColor: 'var(--color-border)' }}>
        {filters.map(tab => (
          <button
            key={tab.value}
            onClick={() => setFilter(tab.value)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
              filter === tab.value ? 'text-accent' : 'text-muted hover:text-white'
            }`}
            style={{
              background: filter === tab.value ? 'var(--color-accent-soft)' : 'transparent',
              border: filter === tab.value ? '1px solid var(--color-border-hover)' : '1px solid var(--color-border)'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div layout className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={project.featured ? 'md:col-span-2' : ''}
            >
              {project.featured ? (
                <div className="featured-project-card">
                  <div className="featured-project-content">
                    <div className="featured-project-header">
                      <div className="flex items-center gap-2 text-[10px] font-mono text-muted uppercase tracking-wider">
                        <Layers size={14} className="text-accent" /> {project.id}
                      </div>
                      <span className="feature-badge">Featured</span>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <span className="project-card-subtitle block mb-5">{project.subtitle}</span>
                        <p className="text-muted text-sm leading-relaxed mb-6">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map(tag => <span key={tag} className="tag-chip">{tag}</span>)}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-mono text-accent uppercase tracking-wider mb-4">Key Features</p>
                        <div className="project-feature-list mb-6">
                          {project.features.map(f => <span key={f} className="feature-badge">{f}</span>)}
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
                    </div>
                  </div>
                </div>
              ) : (
                <div className="project-card">
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
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
