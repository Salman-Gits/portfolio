import { motion } from 'motion/react'
import { Briefcase, Calendar, CheckCircle2, Award, Star } from 'lucide-react'

export default function Experience() {
  const internshipTasks = [
    'Built responsive frontend modules using React.js, React Hooks, and Context API for state management.',
    'Designed and deployed 10+ RESTful API endpoints using Java Spring Boot and Hibernate.',
    'Structured normalized MySQL schemas (up to 3NF) for core application modules, optimizing query performance.',
    'Integrated Spring MVC backend components into existing client hosting environments to scale functionality.'
  ]

  const certifications = [
    { provider: 'Infosys Springboard', name: 'Java Architecture & Enterprise Foundations', id: 'INF-JA-2025' },
    { provider: 'Udemy Specialization', name: 'HTML5/CSS3, Advanced React.js & Java Core', id: 'UDM-FSD-098' },
    { provider: 'Scaler Academy', name: 'React.js State Management & MySQL Specialization', id: 'SCL-RDB-213' },
    { provider: 'LetsUpgrade Bootcamps', name: 'Enterprise Java Core & React UI Architecture', id: 'LUG-JVR-882' }
  ]

  return (
    <div className="page-fade-in container">
      <header className="page-header">
        <motion.span className="page-subtitle" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>Experience & Credentials</motion.span>
        <motion.h1 className="page-title" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>My Journey</motion.h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-36">
        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Briefcase size={20} className="text-accent" />
            <h2 className="text-lg font-bold">Work Experience</h2>
          </div>

          <div className="timeline-track">
            <div className="timeline-dot"></div>
            <motion.div
              className="timeline-card card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-5">
                <div>
                  <span className="text-xs font-mono text-accent uppercase tracking-wider block mb-1">Kalsun Groups</span>
                  <h3 className="font-bold text-base">Full Stack Developer Intern</h3>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[10px] font-mono whitespace-nowrap" style={{ background: 'var(--color-accent-soft)', borderColor: 'var(--color-border-hover)' }}>
                  <Calendar size={12} className="text-accent" /> Dec 2025 — Mar 2026
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {['React.js', 'Java', 'Spring Boot', 'MySQL', 'JPA', 'Hibernate'].map(tech => (
                  <span key={tech} className="tag-chip">{tech}</span>
                ))}
              </div>

              <p className="text-muted text-sm leading-relaxed mb-5">
                Joined the development team to help scale client-facing applications. Contributed to building Spring-based REST endpoints and optimizing database schemas.
              </p>

              <ul className="space-y-4">
                {internshipTasks.map((task, idx) => (
                  <motion.li
                    key={idx}
                    className="flex gap-2.5 items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.08 }}
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></div>
                    <p className="text-sm text-muted leading-relaxed">{task}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-8">
            <CheckCircle2 size={20} className="text-accent" />
            <h2 className="text-lg font-bold">Certifications</h2>
          </div>

          <div className="space-y-5 mb-16">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                className="cert-card card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.4 }}
              >
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <h4 className="font-semibold text-sm">{cert.name}</h4>
                    <span className="text-[10px] font-mono text-accent uppercase tracking-wider mt-1 block">{cert.provider}</span>
                  </div>
                  <span className="feature-badge shrink-0">Verified</span>
                </div>
                <div className="mt-3 pt-3 border-t" style={{ borderColor: 'var(--color-border)' }}>
                  <span className="text-[9px] font-mono text-subtle uppercase">ID: {cert.id}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
