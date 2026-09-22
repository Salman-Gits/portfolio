import { motion } from 'motion/react'
import { Code2, Server, Database, Wrench } from 'lucide-react'

export default function Skills() {
  const categories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js']
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'REST APIs']
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MySQL']
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'Vercel', 'Render', 'Railway']
    }
  ]

  return (
    <div className="page-fade-in container">
      <header className="page-header">
        <motion.span className="page-subtitle" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>Technical Skills</motion.span>
        <motion.h1 className="page-title" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>Skills & Stack</motion.h1>
      </header>

      <motion.p
        className="text-muted text-sm max-w-lg mb-12 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        Technologies I use to build full-stack web applications — from responsive frontend interfaces to REST API design and database management.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            className="skill-category-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
          >
            <div className="skill-category-header">
              <div className="skill-category-icon">
                <cat.icon size={20} />
              </div>
              <h3 className="font-bold text-base">{cat.title}</h3>
            </div>
            <div className="flex flex-col gap-2">
              {cat.skills.map((skill) => (
                <div key={skill} className="skill-item">
                  <span>{skill}</span>
                  <div className="skill-item-dot"></div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
