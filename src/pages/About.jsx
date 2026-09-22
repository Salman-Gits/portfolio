import { motion } from 'motion/react'
import { BookOpen, Award, ShieldCheck, Database, Layout } from 'lucide-react'
import { useCountUp, useInView } from '../hooks/useAnimations'

function AnimatedSkill({ comp, idx, circumference }) {
  const [ref, inView] = useInView()
  const animatedPct = useCountUp(comp.percentage, 1800, inView)
  const strokeDashoffset = circumference - (circumference * animatedPct) / 100

  return (
    <motion.div
      ref={ref}
      className="skill-circular-item flex flex-col items-center text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.5 }}
    >
      <div className="circular-svg-wrapper relative mb-3">
        <svg width="90" height="90" viewBox="0 0 90 90">
          <circle cx="45" cy="45" r={35} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
          <circle
            cx="45" cy="45" r={35} fill="none"
            stroke="var(--color-accent)" strokeWidth="6" strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 45 45)"
            style={{ transition: 'stroke-dashoffset 0.1s linear' }}
          />
        </svg>
        <span className="circular-percentage-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {Math.round(animatedPct)}%
        </span>
      </div>
      <span className="skill-circular-category">{comp.category}</span>
      <h4 className="skill-circular-name text-sm font-semibold text-white mt-1">{comp.label}</h4>
    </motion.div>
  )
}

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
        <motion.span
          className="page-subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >About Me</motion.span>
        <motion.h1
          className="page-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >My Story</motion.h1>
      </header>

      <div className="about-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
        <motion.div
          className="about-bio-column"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
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

          <motion.div
            className="education-box glass-card shimmer-card mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
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
          </motion.div>
        </motion.div>

        <motion.div
          className="about-diagnostics-column"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
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
              {coreCompetencies.map((comp, idx) => (
                <AnimatedSkill key={idx} comp={comp} idx={idx} circumference={circumference} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <section className="about-principles mb-24">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle-badge">What I Value</span>
          <h2 className="text-3xl font-bold">Core Principles</h2>
        </motion.div>

        <div className="principles-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Scalability', text: 'Building high-availability systems using proven Java and Spring Boot patterns.', icon: ShieldCheck },
            { title: 'Data Integrity', text: 'Normalizing MySQL schemas up to 3NF to guarantee consistency and ACID compliance.', icon: Database },
            { title: 'User Experience', text: 'Creating responsive React interfaces with clean state management and smooth interactions.', icon: Layout }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="principle-card glass-card shimmer-card group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-center mb-5">
                <item.icon className="text-accent group-hover:scale-110 transition-transform" size={28} />
                <span className="font-mono text-2xl font-bold opacity-10">0{idx + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
