import { motion } from 'motion/react'
import { BookOpen, Award, ShieldCheck, Database, Layout } from 'lucide-react'

export default function About() {
  const coreCompetencies = [
    { label: 'Java / Spring Boot', percentage: 92, category: 'Backend Core' },
    { label: 'MySQL Systems', percentage: 88, category: 'Database Systems' },
    { label: 'React.js / JSX', percentage: 85, category: 'User Interface' },
    { label: 'REST APIs', percentage: 90, category: 'Integration Logic' }
  ]

  const radius = 35
  const circumference = 2 * Math.PI * radius

  return (
    <div className="page-fade-in about-page container">
      <header className="page-header">
        <span className="page-subtitle">BIOGRAPHY & CORE COMPETENCIES</span>
        <h1 className="page-title text-gradient">The Narrative</h1>
      </header>

      <div className="about-grid grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
        <motion.div 
          className="about-bio-column"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="bio-lead-heading text-2xl lg:text-3xl font-bold mb-8 text-white">Development with Absolute Discipline.</h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              I am <strong className="text-white">Mohammed Salman</strong>, a B.Sc IT Graduate & Full Stack Developer who views structured code as the skeletal framework of modern enterprise. My journey is defined by technical perfection, validated by three consecutive academic gold medals.
            </p>
            <p>
              I bridge the gap between heavy, normalized backend relational databases and fluid, responsive interfaces. I specialize in optimizing query execution, managing complex database joins, and building decoupled RESTful architectures designed to scale.
            </p>
          </div>

          <div className="education-box glass-card mt-12">
            <div className="education-title-row flex items-center gap-4 mb-4">
              <BookOpen className="edu-icon text-accent" size={28} />
              <div>
                <h3 className="text-xl font-bold">The New College, Chennai</h3>
                <p className="text-muted text-sm">B.Sc Information Technology • Graduated (2022 - 2025)</p>
              </div>
            </div>
            <p className="education-body text-muted text-sm leading-relaxed">
              Honored as a <strong className="text-accent">Triple Gold Medalist</strong> for overall academic excellence. Completed with a cumulative GPA of <strong className="text-accent">8.5 / 10</strong>.
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
              <Award className="text-accent" />
              <h3 className="text-xl font-bold">Verified Diagnostics</h3>
            </div>
            <p className="text-muted text-sm mb-10">
              Primary developer capabilities verified through academic gold medals and production internship milestones.
            </p>
            
            <div className="skills-circular-grid grid grid-cols-2 gap-8">
              {coreCompetencies.map((comp, idx) => {
                const strokeDashoffset = circumference - (circumference * comp.percentage) / 100
                return (
                  <div key={idx} className="skill-circular-item flex flex-col items-center text-center">
                    <div className="circular-svg-wrapper relative w-24 h-24 mb-4">
                      <svg width="96" height="96" viewBox="0 0 90 90">
                        <circle 
                          className="circular-bg-ring fill-none stroke-white/5 stroke-[6]" 
                          cx="45" cy="45" r={radius} 
                        />
                        <circle 
                          className="circular-fill-ring fill-none stroke-accent stroke-[6] stroke-round" 
                          cx="45" cy="45" r={radius} 
                          strokeDasharray={circumference}
                          strokeDashoffset={strokeDashoffset}
                          transform="rotate(-90 45 45)"
                        />
                      </svg>
                      <span className="circular-percentage-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono font-bold text-lg">{comp.percentage}%</span>
                    </div>
                    <span className="skill-circular-category text-[9px] font-mono font-bold text-accent uppercase tracking-widest">{comp.category}</span>
                    <h4 className="skill-circular-name text-sm font-bold text-white mt-1">{comp.label}</h4>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>

      <section className="about-principles mb-24">
        <div className="text-center mb-16">
          <span className="section-subtitle-badge font-mono text-accent text-xs tracking-widest uppercase mb-2 block">PHILOSOPHY</span>
          <h2 className="text-4xl font-black">Core Foundations</h2>
        </div>

        <div className="principles-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Scalability',
              text: 'Developing high-availability systems using secure Java environments.',
              icon: ShieldCheck
            },
            {
              title: 'Relational Integrity',
              text: 'Normalizing complex MySQL structures up to 3NF to guarantee ACID compliance.',
              icon: Database
            },
            {
              title: 'Fluid Human Experience',
              text: 'Designing performant React interfaces with decoupled state synchronization.',
              icon: Layout
            }
          ].map((item, idx) => (
            <div key={idx} className="principle-card glass-card p-8 group">
              <div className="flex justify-between items-center mb-6">
                <item.icon className="text-accent group-hover:scale-110 transition-transform" size={32} />
                <span className="font-mono text-3xl font-black opacity-10 italic">0{idx+1}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
