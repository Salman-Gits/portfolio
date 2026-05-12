import { motion } from 'framer-motion';
import { Award, BookOpen, Coffee, Cpu, Globe, Rocket, ShieldCheck, Zap, Layers, Terminal } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-brand-bg selection:bg-brand-primary selection:text-white pb-32">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />
        <div className="absolute inset-0 grid-bg" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 pt-32 relative z-10">
        {/* Editorial Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-12 xl:col-span-7"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-brand-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary">The Narrative</span>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-[120px] font-black text-white leading-[0.85] tracking-tighter mb-10">
               DRIVEN BY <br />
               <span className="text-brand-primary italic font-serif font-normal block md:inline underline underline-offset-[12px] decoration-1 decoration-white/10">Discipline.</span>
            </h1>
            <div className="space-y-8 text-slate-400 text-xl font-medium leading-relaxed max-w-2xl">
               <p>
                 I am Mohammed Salman, a system architect who views code as the skeletal structure of modern enterprise. My journey is defined by the pursuit of technical perfection, validated by three consecutive academic gold medals.
               </p>
               <p>
                 Specializing in the <span className="text-white italic">Java ecosystem</span> and <span className="text-white italic">React UI architecture</span>, I bridge the gap between heavy backend logic and fluid digital experiences.
               </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-12 xl:col-span-5 relative"
          >
             <motion.div 
                whileHover={{ rotateY: 15, rotateX: -10, scale: 1.02 }}
                style={{ perspective: 1200, transformStyle: "preserve-3d" }}
                className="aspect-[4/5] bg-[#0c0c10] rounded-[4rem] border border-white/5 relative overflow-hidden group shadow-2xl transition-all duration-500"
             >
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-transparent to-transparent z-10 opacity-60" />
                <img 
                  src="/src/pages/IMG_20251115_194351.png" 
                  alt="Mohammed Salman" 
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 grid-bg opacity-20 group-hover:opacity-40 transition-opacity z-20" />
                
                {/* Status Card - Moved lower and made more compact */}
                <div 
                  style={{ transform: "translateZ(50px)" }}
                  className="absolute bottom-8 left-8 right-8 glass p-6 rounded-3xl border-white/10 z-30 shadow-2xl"
                >
                   <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-[9px] font-black text-white uppercase tracking-widest italic opacity-70">Live Status</span>
                   </div>
                   <div className="text-lg font-black text-white italic leading-snug">Scaling enterprise logics.</div>
                </div>
             </motion.div>

             {/* Floating Achievement Badge */}
             <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 glass p-10 rounded-[3rem] border-white/10 shadow-2xl z-40"
             >
                < Award className="text-brand-primary mb-4" size={40} />
                <div className="text-3xl font-black text-white italic tracking-tighter">8.5 GPA</div>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2">IT Gold Medalist</div>
             </motion.div>
          </motion.div>
        </section>

        {/* Value Pillars: Technical Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40"
        >
          {[
            { 
              title: "Enterprise Rigor", 
              desc: "Engineering systems that thrive under load, leveraging Spring Security and optimized MySQL schemas.",
              icon: <ShieldCheck size={28} />
            },
            { 
              title: "Fluid Design", 
              desc: "Crafting zero-latency interfaces that transform complex data into actionable digital insights.",
              icon: <Zap size={28} />
            },
            { 
              title: "Architectural Integrity", 
              desc: "Adhering to ACID compliance and SOLID principles to ensure code longevity and scalability.",
              icon: <Layers size={28} />
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              className="p-12 bg-white/[0.02] border border-white/5 rounded-[4rem] hover:bg-white/[0.04] hover:border-brand-primary/20 transition-all hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary flex items-center justify-center rounded-2xl mb-10 group-hover:bg-brand-primary group-hover:text-white transition-all shadow-[0_0_30px_rgba(99,102,241,0.1)]">
                {item.icon}
              </div>
              <h4 className="text-2xl font-black text-white mb-6 italic font-serif">0{i+1}. {item.title}</h4>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Section: The Professional Log */}
        <section className="mb-40 pt-20 border-t border-white/5">
           <div className="flex items-center gap-4 mb-20">
              <Terminal className="text-brand-primary" />
              <h2 className="text-4xl font-black text-white italic font-serif">Mission Log.</h2>
           </div>

           <div className="space-y-20">
              {[
                {
                  company: "Kalsun Groups",
                  role: "Full Stack Developer Intern",
                  period: "Dec 2025 — March 2026",
                  tech: "React.js • Java • Spring Boot • MySQL • Jira",
                  points: [
                    "Developed 4+ responsive frontend modules using React.js Hooks and reusable architecture.",
                    "Engineered 10+ RESTful APIs using Spring Boot and Spring Data JPA following MVC principles.",
                    "Designed normalized MySQL schemas for core modules, optimizing query performance for high traffic.",
                    "Integrated complex REST APIs into WordPress environments to enhance user functionality."
                  ]
                }
              ].map((job, i) => (
                <motion.div 
                  key={i}
                  {...fadeInUp}
                  className="bg-white/[0.02] border border-white/5 p-10 md:p-16 rounded-[4rem] group hover:border-brand-primary/20 transition-all"
                >
                   <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                      <div>
                        <h3 className="text-3xl font-black text-white italic tracking-tighter mb-2">{job.company}</h3>
                        <p className="text-brand-primary font-black uppercase text-[10px] tracking-widest">{job.role}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{job.period}</span>
                        <div className="text-[9px] font-bold text-slate-600 mt-2">{job.tech}</div>
                      </div>
                   </div>
                   <ul className="space-y-4">
                      {job.points.map((point, j) => (
                        <li key={j} className="flex gap-4 text-slate-400 text-sm font-medium leading-relaxed italic">
                           <span className="text-brand-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-brand-primary shadow-[0_0_10px_rgba(99,102,241,1)]" />
                           {point}
                        </li>
                      ))}
                   </ul>
                </motion.div>
              ))}
           </div>
        </section>

        {/* Certifications: Technical Row */}
        <section className="mb-40 pt-20 border-t border-white/5">
           <div className="flex items-center gap-4 mb-20">
              <Award className="text-brand-primary" />
              <h2 className="text-4xl font-black text-white italic font-serif">Verified Expertise<span className="text-brand-primary">.</span></h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { provider: "Udemy", focus: "HTML/CSS, React.js, Java, MySQL", icon: "01" },
                { provider: "Infosys Springboard", focus: "Java Architecture & Core Core", icon: "02" },
                { provider: "Scaler Academy", focus: "React.js & MySQL Specialization", icon: "03" },
                { provider: "LetsUpgrade", focus: "Java & React.js Bootcamps", icon: "04" }
              ].map((cert, i) => (
                <div key={i} className="p-10 bg-brand-card border border-white/5 rounded-3xl group hover:border-brand-primary/30 transition-all duration-500">
                   <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-6 group-hover:text-brand-primary transition-colors">{cert.icon}</div>
                   <h4 className="text-xl font-bold text-white mb-2 italic">{cert.provider}</h4>
                   <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest leading-loose">{cert.focus}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Education Timeline: High Contrast Layout */}
        <section className="pt-20 border-t border-white/5">
           <div className="flex items-center gap-4 mb-24">
              <BookOpen className="text-brand-primary" />
              <h2 className="text-4xl font-black text-white italic font-serif">The Foundation.</h2>
           </div>

           <div className="space-y-32">
              {[
                {
                  period: "Graduated 2025",
                  institution: "THE NEW COLLEGE, CHENNAI",
                  degree: "B.SC INFORMATION TECHNOLOGY",
                  detail: "Gold Medalist across 3 consecutive years. CGPA: 8.5 / 10. Secondary honors include 2nd Place in Intra-College Hackathon and Best Performer in 'Decoding the Interview'."
                }
              ].map((edu, i) => (
                <motion.div 
                  key={i}
                  {...fadeInUp}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 group"
                >
                   <div className="lg:col-span-4 flex items-center gap-6">
                      <span className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.5em] italic">{edu.period}</span>
                      <div className="h-[1px] flex-1 bg-white/5 group-hover:bg-brand-primary/30 transition-colors" />
                   </div>
                   <div className="lg:col-span-8">
                      <h4 className="text-5xl font-black text-white mb-6 leading-tight tracking-tighter italic">{edu.institution}</h4>
                      <div className="inline-block px-4 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded text-brand-primary font-black uppercase text-[10px] tracking-widest mb-6">{edu.degree}</div>
                      <p className="text-slate-500 text-lg font-medium max-w-2xl leading-relaxed italic">{edu.detail}</p>
                   </div>
                </motion.div>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
}
