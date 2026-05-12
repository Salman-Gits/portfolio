import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Github, Linkedin, Award, Code, Database, Terminal, Cpu, Layers, ExternalLink, ShieldCheck, Zap, Server, Monitor, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import SkillsVisualization from '../components/SkillsVisualization';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="relative selection:bg-brand-primary selection:text-white">
      {/* Structural Decor */}
      <div className="absolute inset-0 pointer-events-none pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full grid-bg" />
        <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px]" />
      </div>

      {/* Hero Section: Premium Technical Editorial */}
      <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-32 max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-12 xl:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary">Full Stack Engineer</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">v2.0_2025</span>
              </div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ rotateX: 2, rotateY: 5 }}
                className="text-5xl sm:text-7xl md:text-[140px] font-black text-white leading-[0.85] tracking-[-0.04em] mb-10 transition-transform duration-500"
                style={{ perspective: 1000 }}
              >
                THE <span className="text-brand-primary italic font-serif font-normal block md:inline underline underline-offset-[16px] decoration-1 decoration-white/10">Architect</span> <br />
                SALMAN<span className="text-brand-primary">.</span>
              </motion.h1>

              <div className="flex flex-col md:flex-row gap-12 items-start md:items-end">
                <p className="text-slate-400 text-lg leading-relaxed max-w-md font-medium">
                  Designing robust digital ecosystems with surgical precision. Specializing in high-performance Java architectures & immersive React experiences.
                </p>
                
                <div className="flex gap-4">
                  <Link 
                    to="/projects" 
                    className="group relative px-8 py-4 bg-white text-black text-[11px] font-black uppercase tracking-widest rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Work <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <a 
                    href="#contact"
                    className="px-8 py-4 bg-transparent border border-white/10 text-white text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-white/5 transition-all"
                  >
                    Connect
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technical Rail (Visible on XL only) */}
          <div className="hidden xl:flex xl:col-span-4 h-full flex-col justify-between items-end py-10 opacity-30 pointer-events-none">
            <div className="writing-mode-vertical-rl rotate-180 text-[10px] font-mono uppercase tracking-[0.5em] text-slate-400">
              System.Design // Latency: 24ms // Uptime: 99.9%
            </div>
            <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center">
              <Zap size={20} className="text-brand-primary" />
            </div>
          </div>
        </div>

        {/* Global Footer Hook (Hero) */}
        <div className="mt-auto pt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5">
          {[
            { label: 'Location', value: 'Chennai, India' },
            { label: 'Status', value: 'Available for Directives' },
            { label: 'Focus', value: 'Scalable Architecture' },
            { label: 'Core', value: 'Java / React' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex flex-col gap-1"
            >
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{item.label}</span>
              <span className="text-xs font-black text-slate-200 uppercase tracking-wider">{item.value}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section: Technical Bento */}
      <section className="py-32 bg-brand-card/30">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Bento Main: Intro */}
            <motion.div 
              {...fadeInUp}
              className="lg:col-span-7 bg-brand-card p-12 rounded-[3.5rem] border border-white/5 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.4em] mb-6 italic">Core Philosophy</h2>
                <h3 className="text-5xl font-black text-white leading-tight mb-8 font-serif italic">Engineering with <br />Absolute Discipline.</h3>
                <p className="text-slate-400 text-lg leading-relaxed font-medium">
                  As an IT gold medalist, I don't just build features; I engineer reliable foundations. My work spans the entire lifecycle of production systems—from normalizing complex MySQL schemas to implementing fine-grained security protocols in Spring Boot.
                </p>
              </div>
              <div className="mt-12 flex gap-12">
                 <div>
                    <div className="text-4xl font-black text-white italic mb-1">3<span className="text-brand-primary">X</span></div>
                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Gold Medals</div>
                 </div>
                 <div>
                    <div className="text-4xl font-black text-white italic mb-1">8.5</div>
                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Academic GPA</div>
                 </div>
              </div>
            </motion.div>

            {/* Bento Sidebar: Credentials */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-6">
               <motion.div 
                 {...fadeInUp} transition={{ delay: 0.1 }}
                 className="bg-brand-primary p-12 rounded-[3.5rem] text-white overflow-hidden relative group"
               >
                  <Award size={140} className="absolute -right-8 -bottom-8 opacity-20 group-hover:rotate-12 transition-transform duration-700" />
                  <div className="relative z-10">
                    <h4 className="text-[10px] font-black uppercase tracking-widest mb-12 italic opacity-60">Recognition</h4>
                    <p className="text-2xl font-black italic leading-tight mb-6">
                      "Dedicated to building the nervous system of modern enterprise."
                    </p>
                    <div className="text-xs font-bold uppercase tracking-widest opacity-60">Verified Specialist</div>
                  </div>
               </motion.div>

               <motion.div 
                 {...fadeInUp} transition={{ delay: 0.2 }}
                 className="bg-[#111115] p-12 rounded-[3.5rem] border border-white/5"
               >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 bg-brand-primary/10 text-brand-primary flex items-center justify-center rounded-xl">
                      <ShieldCheck size={20} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">Trust Layer</span>
                  </div>
                  <h5 className="text-lg font-black text-slate-200 italic mb-2">Systems Reliability</h5>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Prioritizing security and performance in every line of code. Secure by design, efficient by implementation.
                  </p>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack: Precision Data Grid */}
      <section className="py-40 max-w-7xl mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
          <motion.div {...fadeInUp}>
            <h2 className="text-[11px] font-black text-brand-primary uppercase tracking-[0.5em] mb-4">Technical Arsenal</h2>
            <h3 className="text-6xl font-black text-white italic font-serif">The Engine Room<span className="text-brand-primary">.</span></h3>
          </motion.div>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="max-w-xs text-right">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-loose">
              A curated stack for high-performance enterprise applications and seamless user interfaces.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 border-y border-white/5"
        >
          {[
            { 
              title: 'Frontend Logic', 
              icon: <Code size={32} />, 
              skills: ['Html', 'Css', 'Javascript', 'React.js'],
              gradient: 'from-blue-500/20 shadow-blue-500/10'
            },
            { 
              title: 'Backend Core', 
              icon: <Server size={32} />, 
              skills: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate'],
              gradient: 'from-brand-primary/20 shadow-indigo-500/10'
            },
            { 
              title: 'Database', 
              icon: <Database size={32} />, 
              skills: ['MySQL'],
              gradient: 'from-emerald-500/20 shadow-emerald-500/10'
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -10 }}
              className="p-8 md:p-12 border-x border-white/5 group hover:bg-white/[0.02] transition-all duration-500 relative overflow-hidden holographic shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
              <div className="relative z-10">
                <div className="text-brand-primary mb-12 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl border border-white/10 group-hover:border-brand-primary/50">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black text-white italic mb-8 uppercase tracking-tight group-hover:text-brand-primary transition-colors">{item.title}</h4>
                <ul className="space-y-4">
                  {item.skills.map((s, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-brand-primary rounded-full group-hover:scale-150 group-hover:bg-cyan-400 transition-all" />
                      <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div {...fadeInUp} className="mt-20 relative">
          <div className="absolute inset-0 bg-brand-primary/5 blur-[120px] rounded-full -z-10 animate-pulse" />
          <SkillsVisualization />
        </motion.div>
      </section>

      {/* Cinematic Marquee Transition */}
      <div className="py-20 bg-brand-primary/5 overflow-hidden border-y border-white/5 relative">
        <div className="absolute inset-0 grid-bg opacity-30 px-20 flex items-center">
           <motion.div 
             animate={{ x: [0, -1000] }}
             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
             className="flex whitespace-nowrap gap-20 text-8xl md:text-[180px] font-black uppercase select-none italic"
           >
              <span className="text-white/5">Java Ecosystem</span>
              <span className="text-brand-primary/10">React Architecture</span>
              <span className="text-purple-500/10">Scalable Logic</span>
              <span className="text-emerald-500/10">Systems Design</span>
              <span className="text-amber-500/10">Gold Medalist</span>
              <span className="text-white/5">Java Ecosystem</span>
              <span className="text-brand-primary/10">React Architecture</span>
              <span className="text-purple-500/10">Scalable Logic</span>
              <span className="text-emerald-500/10">Systems Design</span>
              <span className="text-amber-500/10">Gold Medalist</span>
           </motion.div>
        </div>
        <div className="relative z-10 flex justify-center">
           <div className="px-8 py-2 glass rounded-full text-[10px] font-black text-brand-primary uppercase tracking-[0.5em] italic animate-pulse">Scanning Next Directive</div>
        </div>
      </div>

      {/* Case Studies: Immersive Hardware View */}
      <section className="py-40 bg-brand-bg relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="text-center mb-32">
            <h2 className="text-[11px] font-black text-brand-primary uppercase tracking-[0.5em] mb-4 italic">Case Studies</h2>
            <h3 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter">Production Grade Systems.</h3>
          </div>

          <div className="space-y-32">
            {/* Project 1 */}
            <motion.div {...fadeInUp} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 aspect-[16/10] bg-[#0c0c10] rounded-[3rem] border border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent opacity-40" />
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute inset-12 flex items-center justify-center">
                  <Database size={120} className="text-white/20 group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm">
                    <div className="px-4 py-2 glass rounded-lg text-center font-mono text-[10px] text-brand-primary">v1.2.0_STABLE</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col items-start">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[9px] font-black uppercase tracking-widest text-slate-400 mb-6 italic">Infrastructure // Healthcare</span>
                <h4 className="text-4xl font-black text-white italic mb-6 leading-tight font-serif">Blood Bank <br />Management Interface.</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
                  An automated life-saving ecosystem. Engineered with <span className="text-white">Java Spring Boot</span> for mission-critical reliability and <span className="text-white">React</span> for a fluid, accessible donor experience.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="https://blood-bank-rouge-alpha.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white border-b-2 border-brand-primary pb-2 hover:gap-4 transition-all"
                  >
                    Launch System <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div {...fadeInUp} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col items-start lg:items-end lg:text-right">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[9px] font-black uppercase tracking-widest text-slate-400 mb-6 italic">Creative // Presentation</span>
                <h4 className="text-4xl font-black text-white italic mb-6 leading-tight font-serif text-left lg:text-right">Client <br />Digital Showcase.</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
                  A high-fidelity creative portfolio focusing on cinematic motion and fluid UI choreography. Built to elevate personal branding through <span className="text-brand-primary italic">Executive Design</span>.
                </p>
                <a 
                  href="https://shaheinsha-portfolio.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white border-b-2 border-brand-primary pb-2 hover:gap-4 transition-all"
                >
                  Live Preview <ExternalLink size={14} />
                </a>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2 aspect-[16/10] bg-[#0c0c10] rounded-[3rem] border border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-40" />
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute inset-12 flex items-center justify-center">
                   <Monitor size={120} className="text-white/20 group-hover:scale-110 transition-transform duration-1000" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Merits: High Contrast Data */}
      <section className="py-40 border-t border-white/5 bg-[#08080a]">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div {...fadeInUp}>
              <h2 className="text-[11px] font-black text-brand-primary uppercase tracking-[0.5em] mb-12 italic">Recognition</h2>
              <div className="space-y-16">
                 {[
                   { date: '2025 GRADUATE', title: 'Triple Gold Medalist', location: 'IT Excellence - 3 Consecutive Years' },
                   { date: '2025 INNOVATOR', title: 'Hackathon Silver', location: 'Inner College Rapid Innovation' },
                   { date: '2025 PROFESSIONAL', title: 'Full Stack Specialist', location: 'Kalsun Groups Internship' }
                 ].map((item, i) => (
                   <div key={i} className="group flex gap-8 items-center border-b border-white/5 pb-8">
                     <span className="text-[10px] font-mono text-slate-600 group-hover:text-brand-primary transition-colors">{item.date}</span>
                     <div>
                       <h4 className="text-2xl font-black text-white italic mb-1 group-hover:translate-x-2 transition-transform duration-500">{item.title}</h4>
                       <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{item.location}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </motion.div>

            <motion.div 
               {...fadeInUp} transition={{ delay: 0.3 }}
               className="bg-brand-primary p-12 md:p-20 rounded-[4rem] flex flex-col justify-between text-white relative overflow-hidden shadow-[0_40px_80px_rgba(99,102,241,0.2)]"
            >
               <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-white opacity-10 rounded-full blur-[100px]" />
               <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest mb-16 opacity-50 italic underline underline-offset-8">Direct Request</h4>
                  <h3 className="text-5xl font-black leading-none mb-10 italic font-serif">Ready to start the next big architecture.</h3>
                  <Link 
                    to="/contact" 
                    className="group inline-flex items-center gap-4 text-sm font-black uppercase tracking-widest"
                  >
                    Book A Directive <ArrowRight className="group-hover:translate-x-4 transition-transform duration-500" />
                  </Link>
               </div>
               
               <div className="mt-20 pt-12 border-t border-white/20 flex justify-between items-end">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-bold opacity-50 uppercase tracking-widest">Available</span>
                    <span className="text-xs font-black uppercase">Immediately</span>
                  </div>
                  <Download size={24} className="opacity-50" />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA: THE OBSIDIAN CALL */}
      <section id="contact" className="py-40 max-w-7xl mx-auto px-6 md:px-20">
         <motion.div 
           {...fadeInUp}
           className="bg-[#111115] border border-white/5 p-12 md:p-24 rounded-[5rem] text-white flex flex-col md:flex-row justify-between items-center gap-20 overflow-hidden relative"
         >
            <div className="absolute inset-0 grid-bg opacity-10" />
            <div className="flex-1 relative z-10 text-center md:text-left">
               <h2 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.6em] mb-12 italic">Let's Connect</h2>
               <h3 className="text-5xl md:text-8xl font-black leading-[0.8] mb-16 tracking-tighter">
                 BUILD THE <br /><span className="text-brand-primary italic font-serif font-normal">Future</span><span className="text-white">.</span>
               </h3>
               
                <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                  <a href="mailto:mdsalmand008@gmail.com" className="group flex items-center gap-4 text-xl md:text-2xl font-black hover:text-brand-primary transition-all italic uppercase hover:scale-105">
                     <Mail size={24} className="text-brand-primary transition-transform group-hover:rotate-12" />
                     <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 group-hover:from-brand-primary group-hover:to-blue-400">Email</span>
                  </a>
                  <a href="https://wa.me/917358653020" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-xl md:text-2xl font-black hover:text-emerald-500 transition-all italic uppercase hover:scale-105">
                     <MessageSquare size={24} className="text-emerald-500 transition-transform group-hover:rotate-12" />
                     <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 group-hover:from-emerald-500 group-hover:to-teal-400">WhatsApp</span>
                  </a>
                  <a href="https://github.com/Salman-Gits" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest hover:text-brand-primary transition-colors italic group">
                     <span className="group-hover:translate-y-[-2px] transition-transform">GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/mohammed-salman-m-17b573262/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest hover:text-brand-primary transition-colors italic">
                     LinkedIn
                  </a>
               </div>
            </div>
            
            <div className="w-full md:w-[320px] relative z-10 shrink-0">
               <a 
                href="src/pages/Mohammed_Salman_Resume.pdf"
                download="Mohammed_Salman_Resume.pdf"
                className="w-full aspect-square bg-brand-primary text-white rounded-[3rem] hover:rotate-6 hover:scale-110 active:scale-95 transition-all duration-500 flex flex-col items-center justify-center gap-6 shadow-[0_30px_60px_rgba(99,102,241,0.3)]"
               >
                 <Download size={48} strokeWidth={3} />
                 <span className="uppercase text-[11px] tracking-[0.4em] font-black">Get Resume</span>
               </a>
            </div>
         </motion.div>
      </section>
    </div>
  );
}
