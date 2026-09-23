import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowRight, GraduationCap, Briefcase } from 'lucide-react'

export default function About() {
  return (
    <div className="page-fade-in container">
      <header className="page-header">
        <motion.span className="page-subtitle" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>About Me</motion.span>
        <motion.h1 className="page-title" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>Who I Am</motion.h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-36">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold mb-6">A developer who values clean code and structured systems.</h2>
          <div className="space-y-6 text-muted text-sm leading-relaxed">
            <p>
              I'm <strong className="text-accent">Mohammed Salman</strong>, a B.Sc IT graduate and full stack developer from Chennai, India. I build web applications using React.js, Java, Spring Boot, and MySQL.
            </p>
            <p>
              My focus is on writing maintainable backend code with well-designed REST APIs and normalized database schemas, paired with responsive frontend interfaces that work across devices.
            </p>
            <p>
              I'm a <strong className="text-accent">3× Academic Gold Medalist</strong> and recently completed a Full Stack Developer internship at Kalsun Groups, where I worked on real client projects using React.js, Spring Boot, and MySQL.
            </p>
          </div>

          <div className="flex gap-3 mt-8">
            <Link to="/projects" className="btn btn-primary btn-sm">
              View Projects <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="btn btn-outline btn-sm">
              Get in Touch
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="terminal-block">
            <div className="terminal-header">
              <div className="terminal-dot" style={{ background: '#FF5F57' }}></div>
              <div className="terminal-dot" style={{ background: '#FEBC2E' }}></div>
              <div className="terminal-dot" style={{ background: '#28C840' }}></div>
              <span className="text-xs text-subtle ml-2">developer.ts</span>
            </div>
            <div className="terminal-body">
              <div><span className="terminal-key">const</span> <span className="terminal-accent">developer</span> = {'{'}</div>
              <div className="pl-4"><span className="terminal-key">name</span>: <span className="terminal-string">'Mohammed Salman M'</span>,</div>
              <div className="pl-4"><span className="terminal-key">role</span>: <span className="terminal-string">'Full Stack Developer'</span>,</div>
              <div className="pl-4"><span className="terminal-key">location</span>: <span className="terminal-string">'Chennai, India'</span>,</div>
              <div className="pl-4"><span className="terminal-key">stack</span>: [<span className="terminal-string">'React'</span>, <span className="terminal-string">'Java'</span>, <span className="terminal-string">'Spring Boot'</span>],</div>
              <div className="pl-4"><span className="terminal-key">database</span>: <span className="terminal-string">'MySQL'</span>,</div>
              <div className="pl-4"><span className="terminal-key">education</span>: <span className="terminal-string">'B.Sc IT — The New College'</span>,</div>
              <div className="pl-4"><span className="terminal-key">achievements</span>: <span className="terminal-string">'3× Gold Medalist'</span>,</div>
              <div className="pl-4"><span className="terminal-key">openToWork</span>: <span className="terminal-accent">true</span>,</div>
              <div className="pl-4"><span className="terminal-comment">// Looking for SDE / Full Stack roles</span></div>
              <div>{'}'};</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-36">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="skill-category-icon"><GraduationCap size={20} /></div>
            <div>
              <h3 className="font-bold text-sm">Education</h3>
              <p className="text-muted text-xs">B.Sc Information Technology</p>
            </div>
          </div>
          <p className="text-muted text-sm leading-relaxed">
            The New College, Chennai • 2022–2025 • CGPA: 8.5
          </p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, duration: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="skill-category-icon"><Briefcase size={20} /></div>
            <div>
              <h3 className="font-bold text-sm">Experience</h3>
              <p className="text-muted text-xs">Full Stack Developer Intern</p>
            </div>
          </div>
          <p className="text-muted text-sm leading-relaxed">
            Kalsun Groups • Dec 2025–Mar 2026 • React.js, Spring Boot, MySQL
          </p>
        </motion.div>
      </div>

      {/* What I'm Looking For */}
      <motion.section
        className="mb-36"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-label">What I'm Looking For</span>
        <h2 className="section-title mb-14">Open to Software Developer & Full Stack Roles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Full Stack Developer', desc: 'Roles involving both frontend and backend development with React and Java/Spring Boot.' },
            { title: 'Backend Developer', desc: 'Positions focused on REST API design, database optimization, and server-side logic.' },
            { title: 'Frontend Developer', desc: 'Roles building responsive, user-focused interfaces with React.js and modern CSS.' }
          ].map((role, idx) => (
            <motion.div
              key={idx}
              className="card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
            >
              <h3 className="font-bold text-sm mb-2 text-accent">{role.title}</h3>
              <p className="text-muted text-xs leading-relaxed">{role.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
