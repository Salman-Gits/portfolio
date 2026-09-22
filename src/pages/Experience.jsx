import { motion } from 'motion/react'
import { Briefcase, Award, CheckCircle2, Star, Calendar } from 'lucide-react'

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
    <div className="page-fade-in experience-page container">
      <header className="page-header">
        <motion.span
          className="page-subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >Experience & Credentials</motion.span>
        <motion.h1
          className="page-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >My Journey</motion.h1>
      </header>

      <div className="experience-timeline-grid grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <motion.div
          className="timeline-column"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-8 pb-4 border-t">
            <Briefcase size={22} className="text-accent" />
            <h2 className="text-xl font-bold">Work Experience</h2>
          </div>

          <motion.div
            className="timeline-track"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="timeline-dot"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring' }}
            />
            <motion.div
              className="timeline-node-card glass-card shimmer-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                <div>
                  <span className="text-xs font-mono font-semibold text-accent uppercase tracking-widest block mb-1">Kalsun Groups</span>
                  <h3 className="text-xl font-bold">Full Stack Developer Intern</h3>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-[10px] font-mono whitespace-nowrap" style={{ background: 'var(--color-accent-soft)', borderColor: 'var(--color-border-glow)' }}>
                  <Calendar size={14} className="text-accent" /> Dec 2025 — Mar 2026
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {['React.js', 'Java', 'Spring Boot', 'MySQL', 'JPA', 'Hibernate', 'Jira'].map((tech) => (
                  <span key={tech} className="tag-chip">{tech}</span>
                ))}
              </div>

              <p className="text-muted leading-relaxed mb-6 text-sm">
                Joined the development team to help scale client-facing applications. Contributed to building Spring-based REST endpoints and optimizing database schemas.
              </p>

              <ul className="space-y-3">
                {internshipTasks.map((task, idx) => (
                  <motion.li
                    key={idx}
                    className="flex gap-3 items-start"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></div>
                    <p className="text-sm text-muted leading-relaxed">{task}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="timeline-info-column"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-8 pb-4 border-t">
            <CheckCircle2 size={22} className="text-accent" />
            <h2 className="text-xl font-bold">Certifications</h2>
          </div>

          <div className="space-y-3 mb-12">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                className="certificate-item-card glass-card shimmer-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                whileHover={{ x: 4 }}
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-semibold text-sm">{cert.name}</h4>
                    <span className="text-[10px] font-mono text-accent uppercase tracking-widest mt-1 block">{cert.provider}</span>
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded font-semibold uppercase shrink-0 text-accent" style={{ background: 'var(--color-accent-soft)', border: '1px solid var(--color-border-glow)' }}>Verified</span>
                </div>
                <div className="mt-3 pt-3 border-t">
                  <span className="text-[9px] font-mono text-muted uppercase">ID: {cert.id}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-8 pb-4 border-t">
            <Award size={22} className="text-secondary" />
            <h2 className="text-xl font-bold">Achievements</h2>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {[
              { title: 'Triple Gold Medalist', icon: Star, detail: 'First place in the IT Department across three consecutive years (2023, 2024, 2025).' },
              { title: 'Hackathon Runner-Up', icon: Award, detail: '2nd place out of 40+ competing teams at the Inner College Hackathon (2025).' }
            ].map((honor, idx) => (
              <motion.div
                key={idx}
                className="honor-item-card glass-card shimmer-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <honor.icon size={18} className="text-secondary" />
                  <h4 className="font-semibold text-sm">{honor.title}</h4>
                </div>
                <p className="text-muted text-xs leading-relaxed">{honor.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
