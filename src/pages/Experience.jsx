import { motion } from 'motion/react'
import { Briefcase, Award, CheckCircle2, Star, Calendar } from 'lucide-react'

export default function Experience() {
  const internshipTasks = [
    'Engineered high-performance, responsive UI modular components utilizing React.js, React Hooks, and Context State APIs.',
    'Designed and deployed 10+ decoupled RESTful API endpoints utilizing Java Spring Boot and Hibernate frameworks.',
    'Structured normalized MySQL schemas (up to 3NF) for core booking modules, maximizing join efficiency.',
    'Integrated robust Spring MVC backend components within existing client hosting spaces to scale communications.'
  ]

  const certifications = [
    { provider: 'Infosys Springboard', name: 'Java Architecture & Enterprise Foundations', id: 'INF-JA-2025' },
    { provider: 'Udemy Specialization', name: 'HTML5/CSS3, Advanced React.js, & Java Core', id: 'UDM-FSD-098' },
    { provider: 'Scaler Academy', name: 'React.js State Pipelines & MySQL Specialization', id: 'SCL-RDB-213' },
    { provider: 'LetsUpgrade Bootcamps', name: 'Enterprise Java Core & React UI Architectures', id: 'LUG-JVR-882' }
  ]

  return (
    <div className="page-fade-in experience-page container">
      <header className="page-header">
        <span className="page-subtitle">PROFESSIONAL TIMELINE & CREDENTIALS</span>
        <h1 className="page-title text-gradient">Mission Log</h1>
      </header>

      <div className="experience-timeline-grid grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <motion.div 
          className="timeline-column"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/5">
            <Briefcase size={24} className="text-accent" />
            <h2 className="text-2xl font-bold">Active Directives</h2>
          </div>

          <div className="timeline-track relative pl-8 border-l-2 border-accent/30 py-4">
            <div className="timeline-dot absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-4 shadow-[0_0_15px_var(--color-accent)] animate-pulse"></div>
            <div className="timeline-node-card glass-card">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-1">Kalsun Groups</span>
                  <h3 className="text-2xl font-black">Full Stack Developer Intern</h3>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 text-[10px] font-mono whitespace-nowrap">
                  <Calendar size={14} className="text-accent" /> DEC 2025 — MAR 2026
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['React.js', 'Java', 'Spring Boot', 'MySQL', 'JPA', 'Hibernate', 'Jira'].map((tech) => (
                  <span key={tech} className="bg-white/5 px-2.5 py-1 rounded text-[10px] font-mono text-muted border border-white/5">{tech}</span>
                ))}
              </div>

              <p className="text-muted leading-relaxed mb-8">
                Assigned to the development core team to help scale client-facing digital infrastructures. Collaborated on building spring-based REST endpoints and optimizing schemas.
              </p>

              <ul className="space-y-4">
                {internshipTasks.map((task, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></div>
                    <p className="text-sm text-muted leading-relaxed">{task}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="timeline-info-column"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/5">
            <CheckCircle2 size={24} className="text-accent" />
            <h2 className="text-2xl font-bold">Verified Credentials</h2>
          </div>

          <div className="space-y-4 mb-16">
            {certifications.map((cert, idx) => (
              <div key={idx} className="certificate-item-card glass-card group">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-bold group-hover:text-accent transition-colors">{cert.name}</h4>
                    <span className="text-[10px] font-mono text-accent uppercase tracking-widest mt-1 block">{cert.provider}</span>
                  </div>
                  <span className="bg-accent/10 border border-accent/20 text-accent text-[9px] px-2 py-0.5 rounded font-bold uppercase shrink-0">Verified</span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5">
                   <span className="text-[9px] font-mono text-muted uppercase">Credential ID: {cert.id}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/5">
            <Award size={24} className="text-secondary" />
            <h2 className="text-2xl font-bold">System Honors</h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              { title: 'Triple Gold Medalist', icon: Star, detail: 'Awarded for placing 1st in IT Department over three consecutive years (2023, 2024, 2025).' },
              { title: 'Hackathon Silver', icon: Award, detail: '2nd Place out of 40+ competitor developer groups at Inner College Hackathon (2025).' }
            ].map((honor, idx) => (
              <div key={idx} className="honor-item-card glass-card">
                <div className="flex items-center gap-3 mb-2">
                  <honor.icon size={18} className="text-secondary" />
                  <h4 className="font-bold">{honor.title}</h4>
                </div>
                <p className="text-muted text-xs leading-relaxed">{honor.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
