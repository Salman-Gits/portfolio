import { motion } from 'motion/react'
import { BookOpen, Award, ShieldCheck, Database, Layout } from 'lucide-react'

export default function About() {
  const coreCompetencies = [
    { label: 'Java / Spring Boot', percentage: 92, category: 'Backend' },
    { label: 'MySQL Systems', percentage: 88, category: 'Database' },
    { label: 'React.js / JSX', percentage: 85, category: 'Frontend' },
    { label: 'REST APIs', percentage: 90, category: 'Integration' }
  ]

  const radius = 35
  const circumference = 2 * Math.PI * radius

  return (
    <div className="page-fade-in about-page container">
      <header className="page-header">
        <span className="page-subtitle">About Me</span>
        <h1 className="page-title text-gradient">My Story</h1>
      </header>

      <div className="about-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
        <motion.div
          className="about-bio-column"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="bio-lead-heading text-white">Building with discipline and purpose.</h2>
          <div className="space-y-5 text-muted text-base leading-relaxed">
            <p>
              I'm <strong className="text-white">Mohammed Salman</strong>, a B.Sc IT graduate and full stack developer who sees clean code as the foundation of reliable software. My journey is defined by consistent academic excellence — three consecutive gold medals in Information Technology.
            </p>
            <p>
              I bridge the gap between normalized backend databases and fluid, responsive interfaces. I specialize in optimizing query performance, managing complex database joins, and building decoupled RESTful architectures designed to scale.
            </p>
          </div>

          <div className="education-box glass-card mt-10">
            <div className="education-title-row flex items-center gap-4 mb-4">
              <BookOpen className="edu-icon" size={26} />
              <div>
                <h3 className="text-lg font-bold">The New College, Chennai</h3>
                <p className="text-muted text-sm">B.Sc Information Technology • 2022 – 2025</p>
              </div>
            </div>
            <p className="education-body text-muted text-sm leading-relaxed">
              Honored as a <strong className="text-accent">Triple Gold Medalist</strong> for academic excellence across three consecutive years. Graduated with a cumulative GPA of <strong className="text-accent">8.5 / 10</strong>.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="about-diagnostics-column"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="skills-card glass-card">
            <div className="skills-card-header flex items-center gap-3 mb-2">
              <Award className="text-accent" size={22} />
              <h3 className="text-lg font-bold">Core Skills</h3>
            </div>
            <p className="text-muted text-sm mb-8">
              Capabilities validated through academic achievement and hands-on production experience.
            </p>

            <div className="skills-circular-grid grid grid-cols-2 gap-6">
              {coreCompetencies.map((comp, idx) => {
                const strokeDashoffset = circumference - (circumference * comp.percentage) / 100
                return (
                  <div key={idx} className="skill-circular-item flex flex-col items-center text-center">
                    <div className="circular-svg-wrapper relative mb-3">
                      <svg width="90" height="90" viewBox="0 0 90 90">
                        <circle
                          className="fill-none"
                          cx="45" cy="45" r={radius}
                          stroke="rgba(255,255,255,0.06)"
                          strokeWidth="6"
                        />
                        <circle
                          className="fill-none"
                          cx="45" cy="45" r={radius}
                          stroke="var(--color-accent)"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray={circumference}
                          strokeDashoffset={strokeDashoffset}
                          transform="rotate(-90 45 45)"
                        />
                      </svg>
                      <span className="circular-percentage-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{comp.percentage}%</span>
                    </div>
                    <span className="skill-circular-category">{comp.category}</span>
                    <h4 className="skill-circular-name text-sm font-semibold text-white mt-1">{comp.label}</h4>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>

      <section className="about-principles mb-24">
        <div className="text-center mb-12">
          <span className="section-subtitle-badge">What I Value</span>
          <h2 className="text-3xl font-bold">Core Principles</h2>
        </div>

        <div className="principles-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Scalability',
              text: 'Building high-availability systems using proven Java and Spring Boot patterns.',
              icon: ShieldCheck
            },
            {
              title: 'Data Integrity',
              text: 'Normalizing MySQL schemas up to 3NF to guarantee consistency and ACID compliance.',
              icon: Database
            },
            {
              title: 'User Experience',
              text: 'Creating responsive React interfaces with clean state management and smooth interactions.',
              icon: Layout
            }
          ].map((item, idx) => (
            <div key={idx} className="principle-card glass-card group">
              <div className="flex justify-between items-center mb-5">
                <item.icon className="text-accent group-hover:scale-110 transition-transform" size={28} />
                <span className="font-mono text-2xl font-bold opacity-10">0{idx + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
