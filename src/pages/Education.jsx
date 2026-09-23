import { motion } from 'motion/react'
import { GraduationCap, Award, Star, Trophy } from 'lucide-react'

export default function Education() {
  const achievements = [
    { title: '3× Academic Gold Medalist', icon: Star, detail: 'First place in the IT Department across three consecutive years (2023, 2024, 2025).' },
    { title: 'Intra-college Hackathon — 2nd Place', icon: Trophy, detail: '2nd place out of 40+ competing teams at the Inner College Hackathon (2025).' },
    { title: 'Decode the Interview — Best Performer', icon: Award, detail: 'Recognized as best performer in the Decode the Interview competition.' }
  ]

  return (
    <div className="page-fade-in container">
      <header className="page-header">
        <motion.span className="page-subtitle" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>Education & Achievements</motion.span>
        <motion.h1 className="page-title" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>Education</motion.h1>
      </header>

      {/* Education Card */}
      <motion.div
        className="card mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-start gap-4">
          <div className="skill-category-icon shrink-0">
            <GraduationCap size={24} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-1">B.Sc Information Technology</h3>
            <p className="text-muted text-sm mb-3">The New College, Chennai • 2022 – 2025</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-subtle uppercase tracking-wider">CGPA</span>
                <span className="text-accent font-bold text-lg">8.5</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-subtle uppercase tracking-wider">Honors</span>
                <span className="text-accent font-semibold text-sm">3× Gold Medalist</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Achievements */}
      <div className="mb-10">
        <span className="section-label">Achievements</span>
        <h2 className="section-title">Recognition & Awards</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            className="achievement-card card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="skill-category-icon">
                <item.icon size={20} />
              </div>
              <h3 className="font-semibold text-sm">{item.title}</h3>
            </div>
            <p className="text-muted text-xs leading-relaxed">{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
