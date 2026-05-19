import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ExternalLink, Layers, GitBranch, Shield } from 'lucide-react'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: '01',
      title: 'Blood Bank Hub',
      subtitle: 'Infrastructure // Healthcare',
      version: 'v1.2.0_STABLE',
      description: 'An automated ecosystem for donor registration and real-time blood stock tracking. Built with secure Spring Boot MVC endpoints and Hibernate ORM.',
      tags: ['Java', 'Spring Boot', 'React.js', 'MySQL'],
      metrics: '8+ Core API Endpoints',
      category: 'infrastructure',
      liveUrl: 'https://blood-bank-rouge-alpha.vercel.app/',
      repoUrl: 'https://github.com/Salman-Gits'
    },
    {
      id: '02',
      title: 'Nexus E-Commerce',
      subtitle: 'Transactional // High Availability',
      version: 'v2.0.1_BETA',
      description: 'An enterprise platform built for atomic stock updates, full relational integrity, and a seamless zero-reload cart pipeline.',
      tags: ['React.js', 'TypeScript', 'Tailwind', 'REST APIs'],
      metrics: 'State Synchronization',
      category: 'transactional',
      liveUrl: 'https://ecommerce-frontend-seven-sooty.vercel.app/',
      repoUrl: 'https://github.com/Salman-Gits'
    },
    {
      id: '03',
      title: 'Rental Lease Engine',
      subtitle: 'Logistics Systems // Automation',
      version: 'v1.0.4_STABLE',
      description: 'Asset-tracking engine with barcode scanning to measure rental periods and calculate temporal lease metrics with precision.',
      tags: ['React.js', 'JSON', 'Barcode APIs'],
      metrics: 'Dynamic Temporal Models',
      category: 'logistics',
      liveUrl: 'https://rental-opal-one.vercel.app/',
      repoUrl: 'https://github.com/Salman-Gits'
    },
    {
      id: '04',
      title: 'Creative Showcase',
      subtitle: 'Presentation // Motion Design',
      version: 'v1.1.0_LIVE',
      description: 'High-fidelity showcase designed for a creative professional. Focuses on cinematic page choreography and asset lazy loading.',
      tags: ['React.js', 'Motion Hooks', 'Vite'],
      metrics: 'Fluid Transitions',
      category: 'design',
      liveUrl: 'https://shaheinsha-portfolio.vercel.app/',
      repoUrl: 'https://github.com/Salman-Gits'
    },
    {
      id: '05',
      title: 'KG Badminton',
      subtitle: 'Client Project // Sports Management',
      version: 'v1.0.0_LIVE',
      description: 'A professional digital platform developed for a badminton club, focusing on court availability, membership details, and event showcases with a high-performance interface.',
      tags: ['React.js', 'Tailwind CSS', 'Responsive Design'],
      metrics: 'Client Launch • Production Ready',
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
        <span className="page-subtitle">SYSTEM ARCHITECTURES & LIVE SYSTEMS</span>
        <h1 className="page-title text-gradient">Projects</h1>
      </header>

      <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-white/5 pb-8">
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
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              filter === tab.value 
                ? 'bg-accent/10 border border-accent/20 text-accent' 
                : 'text-muted hover:text-white border border-transparent'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="projects-catalog-grid grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
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
              className="project-detail-card glass-card flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-muted uppercase">
                    <Layers size={14} className="text-accent" /> SYS_REG_{project.id}
                  </div>
                  <div className="flex items-center gap-2 bg-accent/5 border border-accent/10 text-accent text-[9px] px-2 py-0.5 rounded font-bold">
                    <Shield size={12} /> {project.version}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-black">{project.title}</h3>
                  <span className="text-xs font-mono text-accent block mt-1 uppercase tracking-wider">{project.subtitle}</span>
                </div>

                <p className="text-muted text-sm leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-white/5 border border-white/5 text-[9px] font-mono text-muted px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <div className="flex items-center gap-2 text-[10px] font-mono text-muted mb-8 italic">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_8px_var(--color-accent)]"></span> {project.metrics}
                </div>

                <div className="flex gap-4">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm flex-1">
                    Launch <ExternalLink size={14} />
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
