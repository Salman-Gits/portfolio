import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Github, Linkedin, Award, Code, Database, Terminal, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import SkillsVisualization from '../components/SkillsVisualization';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px] animate-pulse" />
         <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-slate-50/50 rounded-full blur-[100px]" />
         <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-indigo-50/30 rounded-full blur-[80px]" />
         
         {/* Architectural Background Text */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-slate-900/[0.02] uppercase select-none leading-none">
            Architect
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
        {/* Editorial Style Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
               <span className="w-12 h-[1px] bg-brand-primary" />
               <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-400">Software Engineer</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.05] mb-8 font-serif">
              I'm <span className="italic font-normal">the architect</span> <br />
              Salman.
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed max-w-lg mb-10 font-medium">
              Transforming complex business requirements into elegant, scalable digital systems. Specializing in high-performance Java and React ecosystems.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link 
                to="/projects" 
                className="px-10 py-5 bg-brand-primary text-white text-[11px] font-black uppercase tracking-widest rounded shadow-xl shadow-indigo-100 hover:bg-brand-primary-dark hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>

          {/* Hero Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center lg:justify-end relative group"
          >
             {/* Floating Tech Indicators */}
             <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-12 -left-12 z-20 hidden xl:block"
             >
                <div className="glass p-6 rounded-3xl border-brand-primary/10 shadow-2xl">
                   <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                      <span className="text-[10px] font-black text-slate-900 uppercase">System Integrity</span>
                   </div>
                   <div className="text-xs font-bold text-slate-400">99.9% Availability</div>
                </div>
             </motion.div>

             <motion.div 
               animate={{ y: [0, 20, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute top-1/2 -left-24 z-20 hidden xl:block"
             >
                <div className="bg-slate-900 p-6 rounded-3xl shadow-2xl border border-white/10">
                   <div className="text-brand-primary font-black text-lg italic mb-1">Scale-Up</div>
                   <div className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Optimized Query Logic</div>
                </div>
             </motion.div>

             <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                {/* Decorative Elements */}
                <div className="absolute inset-0 border border-indigo-50 rounded-[4rem] animate-[spin_20s_linear_infinite] opacity-50" />
                <div className="absolute inset-10 border border-indigo-100 rounded-[3rem] animate-[spin_15s_linear_infinite_reverse] opacity-30" />
                
                {/* 3D Glass Morphic Core */}
                <motion.div 
                  whileHover={{ rotateY: 15, rotateX: -15, scale: 1.05 }}
                  style={{ perspective: 1000 }}
                  className="relative z-10 w-72 h-72 bg-slate-900 rounded-[3rem] shadow-2xl primary-glow flex items-center justify-center overflow-hidden border border-white/10 transition-all duration-500"
                >
                   <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/40 via-transparent to-transparent opacity-20" />
                   
                   {/* Animated Grid Lines */}
                   <div className="absolute inset-0 opacity-10" 
                        style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                   
                   <Terminal size={120} strokeWidth={1} className="text-white group-hover:scale-110 transition-transform duration-700 relative z-10" />
                   
                   {/* Scanning Line */}
                   <motion.div 
                      animate={{ top: ['-10%', '110%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute left-0 w-full h-1/2 bg-gradient-to-b from-brand-primary/20 to-transparent blur-xl"
                   />
                </motion.div>

                {/* Satellite Elements */}
                <div className="absolute top-10 right-10 w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center text-brand-primary animate-bounce">
                   <Cpu size={24} />
                </div>
                <div className="absolute bottom-10 left-10 w-16 h-16 glass rounded-2xl shadow-xl flex items-center justify-center text-slate-800 animate-pulse">
                   <Database size={28} />
                </div>
             </div>
          </motion.div>
        </div>

        {/* Passion & Query Bars (Based on Image) */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-slate-100 pt-16">
           <motion.div 
             {...fadeInUp}
             className="flex flex-col gap-4"
           >
              <h4 className="text-lg font-black font-serif italic text-slate-800">Designing With Passion While<br />Exploring The World.</h4>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest leading-loose">
                 Every system I build is a reflection of my commitment to technical excellence and cross-domain innovation.
              </p>
           </motion.div>

           <motion.div 
             {...fadeInUp}
             transition={{ delay: 0.2 }}
             className="flex flex-col gap-4"
           >
              <h4 className="text-base font-black font-serif italic text-slate-800">Available For <br />New Directives.</h4>
              <div className="flex items-center gap-4">
                 <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                 <Link to="/contact" className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-brand-primary transition-colors border-b border-slate-200 pb-1">
                    Book Consultation
                 </Link>
              </div>
           </motion.div>
        </div>
      </section>

      {/* ABOUT ME SECTION - TARGET FOR NAV */}
      <section id="about" className="py-32 border-t border-slate-100">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
               <h2 className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.4em] mb-4 italic">About Me</h2>
               <h3 className="text-4xl font-black text-slate-900 mb-8 italic">Engineering with Discipline.</h3>
               <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
                  <p>
                    I am a goal-oriented software engineer with a heavy focus on the <span className="text-slate-900 font-bold">Java ecosystem</span> and <span className="text-slate-900 font-bold">modern React patterns</span>. My background as an IT gold medalist isn't just about theory—it's about the relentless pursuit of efficient, production-ready code.
                  </p>
                  <p>
                    I spent 3 years at <span className="text-slate-900 font-bold">The New College</span> mastering technical foundations, maintaining an 8.5 GPA while building healthcare systems and e-commerce architectures. My internship at <span className="text-slate-900 font-bold">Kalsun Groups</span> sharpened my ability to deliver in fast-paced corporate environments.
                  </p>
               </div>
               
               <div className="mt-12 grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-2xl font-black text-brand-primary mb-1 italic">3x Gold</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Academic Medals</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-brand-primary mb-1 italic">Freshman+</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Enterprise Ready</div>
                  </div>
               </div>
            </motion.div>
            
            <motion.div 
               {...fadeInUp}
               className="relative group lg:pl-10"
            >
               <div className="p-12 bg-white rounded-[3rem] border border-slate-100 shadow-2xl shadow-indigo-50/50 hover:shadow-indigo-100/80 hover:border-brand-primary/10 transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl -mr-10 -mt-10 opacity-50" />
                  <div className="relative z-10">
                     <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-indigo-50 text-brand-primary flex items-center justify-center rounded-2xl group-hover:bg-brand-primary group-hover:text-white transition-all shadow-sm">
                           <Award size={24} />
                        </div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 italic">The Vision</h4>
                     </div>
                     <p className="text-slate-600 text-base italic leading-relaxed mb-10 font-medium font-serif">
                       "Software is the nervous system of modern enterprise. My mission is to build robust, secure, and beautiful systems that companies can rely on for years."
                     </p>
                     <div className="flex items-center gap-4">
                        <span className="text-xs font-black uppercase tracking-widest text-slate-400">M. Salman</span>
                        <span className="w-12 h-[2px] bg-indigo-100 group-hover:w-20 transition-all duration-500 rounded-full" />
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      <section id="projects" className="py-20 border-t border-slate-100">
         <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.4em] mb-4 italic">Recent Milestone</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-6 italic">Full Stack Blood Bank System.</h3>
            
            <div className="max-w-5xl mx-auto glass p-10 md:p-16 rounded-[4rem] flex flex-col md:flex-row gap-12 items-center text-left mb-12 group hover:border-indigo-200 transition-all">
               <div className="w-24 h-24 bg-indigo-50 text-brand-primary flex items-center justify-center rounded-3xl shadow-xl shadow-indigo-100 shrink-0">
                  <Database size={40} />
               </div>
               <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                     <span className="px-3 py-1 bg-indigo-100 text-brand-primary rounded-lg text-[9px] font-bold uppercase tracking-widest">Healthcare Infrastructure</span>
                     <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Java + Spring + MySQL</span>
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 mb-4 italic">Blood Bank Management Interface</h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                     An automated life-saving ecosystem. Engineered with <span className="text-slate-900 font-bold italic uppercase">Java Spring Boot</span> for mission-critical reliability and <span className="text-slate-900 font-bold italic uppercase">React</span> for a fluid, accessible donor experience. Includes secure donor tracking and real-time inventory synchronization.
                  </p>
                  <div className="flex flex-wrap gap-4">
                     <a 
                       href="https://blood-bank-rouge-alpha.vercel.app/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="px-6 py-3 bg-brand-primary text-white font-bold rounded-xl shadow-lg shadow-indigo-200 text-[11px] uppercase tracking-widest flex items-center gap-2 hover:bg-brand-primary-dark transition-all"
                     >
                       Live Deployment <ArrowRight size={14} />
                     </a>
                     <Link 
                       to="/projects" 
                       className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl shadow-lg text-[11px] uppercase tracking-widest"
                     >
                       System Details
                     </Link>
                  </div>
               </div>
            </div>
         </motion.div>
      </section>

      {/* NEW: SYSTEM ARCHITECTURE SECTION */}
      <section className="py-20 border-t border-slate-100">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
               <h2 className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.4em] mb-4 italic">Methodology</h2>
               <h3 className="text-5xl font-black text-slate-900 mb-8 italic">Architecture <br /> First.</h3>
               <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
                  My development approach isn't just about writing code; it's about engineering systems. From <span className="text-slate-900">Normalizing MySQL Databases</span> to implementing <span className="text-slate-900">Spring Security</span> filters, I ensure every layer is optimized for growth.
               </p>

               <div className="space-y-6">
                  {[
                     { label: 'Frontend', text: 'State management with Hooks and high-performance CSS architectures.' },
                     { label: 'Backend', text: 'RESTful API design using Spring Boot with clean JPA repositories.' },
                     { label: 'DevOps', text: 'Continuous deployment pipelines to Vercel and scalable hosting.' }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-6 items-start">
                        <div className="text-brand-primary font-black opacity-20 text-4xl">0{i+1}</div>
                        <div>
                           <h5 className="font-bold text-slate-900 text-sm uppercase tracking-widest mb-1 italic">{item.label}</h5>
                           <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.text}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </motion.div>

            <motion.div 
               {...fadeInUp}
               className="bg-slate-50 rounded-[4rem] p-12 border border-slate-100 relative group overflow-hidden"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="relative z-10">
                  <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200 border border-slate-50 mb-8">
                     <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-4">Live Infrastructure</div>
                     <h4 className="text-2xl font-black text-slate-900 mb-4 italic">E-Commerce Engine</h4>
                     <p className="text-slate-500 text-sm mb-6 font-medium leading-relaxed">
                        Secure transactional system with multi-layer auth.
                     </p>
                     <a 
                       href="https://ecommerce-frontend-seven-sooty.vercel.app/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-xs font-bold text-brand-primary uppercase tracking-widest flex items-center gap-2"
                     >
                       Inspect Live Build <ArrowRight size={14} />
                     </a>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-indigo-600 p-8 rounded-3xl text-white">
                        <Database size={24} className="mb-4" />
                        <div className="text-xs font-bold opacity-70 uppercase tracking-widest">Active Data</div>
                        <div className="text-xl font-black italic">MySQL</div>
                     </div>
                     <div className="bg-slate-900 p-8 rounded-3xl text-white">
                        <Terminal size={24} className="mb-4" />
                        <div className="text-xs font-bold opacity-70 uppercase tracking-widest">Core Engine</div>
                        <div className="text-xl font-black italic">Java</div>
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* RECRUITER QUICK-VIEW */}
      <section className="py-20 border-t border-slate-100">
         <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.4em] mb-4 italic">Why Hire Me</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-6 italic">Technical Value & Reliability.</h3>
         </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
               { title: 'Full Stack Native', text: 'Proficient across the entire stack from HTML/CSS to Spring Boot backends.' },
               { title: 'System Architect', text: 'Capable of designing complex relational databases using MySQL with efficiency.' },
               { title: 'Clean Engineer', text: 'Strong believer in DRY principles, SOLID patterns, and scalable Java architecture.' },
               { title: 'Fast Learner', text: '2025 Graduate with 8.5 GPA and three consecutive Gold Medals in IT excellence.' }
            ].map((p, i) => (
               <motion.div 
                 key={i}
                 {...fadeInUp}
                 transition={{ delay: i * 0.1 }}
                 className="p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-white hover:border-brand-primary/20 transition-all"
               >
                  <h5 className="text-sm font-black text-slate-900 mb-2 uppercase tracking-widest italic group-hover:text-brand-primary transition-colors">{p.title}</h5>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{p.text}</p>
               </motion.div>
            ))}
         </div>
      </section>

      {/* Skills Section - Moved up & Refined */}
      <section className="py-20">
        <motion.div {...fadeInUp} className="text-center mb-16">
           <h2 className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.4em] mb-4 italic">Full Stack Mastery</h2>
           <h3 className="text-5xl font-black text-slate-900 mb-8 italic">The Tech Stack.</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
           {[
             { title: 'Frontend Stack', icon: <Code />, skills: 'HTML, CSS, JS, React.js' },
             { title: 'Backend Core', icon: <Terminal />, skills: 'Java, Spring Boot' },
             { title: 'Data Management', icon: <Database />, skills: 'MySQL, Relational Architecture' }
           ].map((item, idx) => (
             <motion.div 
               key={idx}
               {...fadeInUp}
               className="p-10 bg-white rounded-[2.5rem] shadow-xl shadow-slate-100 border border-slate-50 relative overflow-hidden group"
             >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                   {item.icon}
                </div>
                <div className="w-14 h-14 bg-indigo-50 text-brand-primary flex items-center justify-center rounded-2xl mb-8">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 italic">{item.title}</h4>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">{item.skills}</p>
             </motion.div>
           ))}
        </div>

        <motion.div {...fadeInUp}>
           <SkillsVisualization />
        </motion.div>
      </section>

      {/* TECHNICAL STANDARDS - THE PRODUCTIVE EDGE */}
      <section className="py-20 border-t border-slate-100">
         <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.4em] mb-4 italic">Development Standards</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-6 italic">Built for Reliability.</h3>
         </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-10">
               <div>
                  <h4 className="flex items-center gap-3 text-sm font-black text-slate-900 mb-4 italic uppercase tracking-widest">
                     <Code size={18} className="text-brand-primary" /> Frontend Excellence
                  </h4>
                  <ul className="space-y-3 text-[13px] text-slate-500 font-medium">
                     <li className="flex items-center gap-2 italic"> <div className="w-1 h-1 bg-brand-primary rounded-full" /> Responsive React Flow</li>
                     <li className="flex items-center gap-2 italic"> <div className="w-1 h-1 bg-brand-primary rounded-full" /> Framer Motion Animations</li>
                     <li className="flex items-center gap-2 italic"> <div className="w-1 h-1 bg-brand-primary rounded-full" /> Modern Tailwind Architecture</li>
                  </ul>
               </div>
            </div>

            <div className="space-y-10">
               <div>
                  <h4 className="flex items-center gap-3 text-sm font-black text-slate-900 mb-4 italic uppercase tracking-widest">
                     <Terminal size={18} className="text-brand-primary" /> Backend Integrity
                  </h4>
                  <ul className="space-y-3 text-[13px] text-slate-500 font-medium">
                     <li className="flex items-center gap-2 italic"> <div className="w-1 h-1 bg-brand-primary rounded-full" /> Spring Boot MVC Pattern</li>
                     <li className="flex items-center gap-2 italic"> <div className="w-1 h-1 bg-brand-primary rounded-full" /> Hibernate / JPA Integration</li>
                     <li className="flex items-center gap-2 italic"> <div className="w-1 h-1 bg-brand-primary rounded-full" /> JWT & Secure Auth Flows</li>
                  </ul>
               </div>
            </div>

            <div className="space-y-10">
               <div>
                  <h4 className="flex items-center gap-3 text-sm font-black text-slate-900 mb-4 italic uppercase tracking-widest">
                     <Database size={18} className="text-brand-primary" /> Database Rigor
                  </h4>
                  <ul className="space-y-3 text-[13px] text-slate-500 font-medium">
                     <li className="flex items-center gap-2 italic"> <div className="w-1 h-1 bg-brand-primary rounded-full" /> Relational MySQL Design</li>
                     <li className="flex items-center gap-2 italic"> <div className="w-1 h-1 bg-brand-primary rounded-full" /> Query Optimization & Indexing</li>
                     <li className="flex items-center gap-2 italic"> <div className="w-1 h-1 bg-brand-primary rounded-full" /> ACID Compliance Standards</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* Experience Section */}
      <section className="py-40 border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
           <motion.div {...fadeInUp}>
              <h2 className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.4em] mb-12 italic">Professional Path</h2>
              <div className="space-y-12">
                 <div className="group">
                    <div className="flex items-center gap-4 mb-4">
                       <span className="w-12 h-[2px] bg-indigo-100 group-hover:w-20 bg-brand-primary transition-all" />
                       <span className="text-sm font-bold text-slate-400">DEC 2025 – FEB 2026</span>
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2 italic">Full Stack Developer Intern</h4>
                    <div className="text-brand-primary font-bold mb-4 uppercase text-[11px] tracking-widest">Kalsun Groups / Chennai</div>
                    <p className="text-slate-500 leading-relaxed max-w-sm font-medium">
                      Developed responsive architectures and integrated WordPress hooks with backend systems.
                    </p>
                 </div>
              </div>
           </motion.div>

           <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="p-12 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden group shadow-2xl">
                 <div className="absolute right-0 top-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                    <Award size={200} />
                 </div>
                 <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] mb-12 italic">Merits</h4>
                 <div className="space-y-10 relative z-10">
                    <div className="flex gap-6 items-start">
                       <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                          <Award className="text-brand-primary" />
                       </div>
                       <div>
                          <div className="text-lg font-bold mb-1 italic">Triple Gold Medalist</div>
                          <div className="text-xs text-slate-400 uppercase font-bold tracking-widest">Academic Excellence 1st, 2nd & 3rd Year</div>
                       </div>
                    </div>
                    <div className="flex gap-6 items-start">
                       <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                          <Award className="text-brand-primary" />
                       </div>
                       <div>
                          <div className="text-lg font-bold mb-1 italic">Hackathon Silver</div>
                          <div className="text-xs text-slate-400 uppercase font-bold tracking-widest">Inner College Innovation Award</div>
                       </div>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40">
         <motion.div 
           {...fadeInUp}
           className="bg-brand-primary p-12 md:p-24 rounded-[4rem] text-white flex flex-col md:flex-row justify-between items-center gap-20 shadow-2xl shadow-indigo-200"
         >
            <div className="flex-1">
               <h2 className="text-[10px] font-bold text-white/50 uppercase tracking-[0.4em] mb-8 italic">Inquiry</h2>
               <h3 className="text-5xl md:text-7xl font-black leading-[0.9] mb-12 tracking-tight">
                 Let's start <br />something <span className="text-white/40 italic">great.</span>
               </h3>
               
               <div className="flex flex-col gap-6">
                  <a href="mailto:mdsalmand008@gmail.com" className="flex items-center gap-4 text-xl md:text-3xl font-bold hover:translate-x-2 transition-transform">
                     <Mail />
                     mdsalmand008@gmail.com
                  </a>
                  <div className="flex items-center gap-6 text-white/60 font-bold uppercase tracking-widest text-[11px]">
                     <a href="https://github.com/Salman-Gits" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Github</a>
                     <a href="https://linkedin.com/in/mohammed-salman-17b573262" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                     <span>Chennai, India</span>
                  </div>
               </div>
            </div>
            
            <div className="w-full md:w-[300px]">
               <button 
                onClick={() => window.print()}
                className="w-full h-32 bg-white text-brand-primary rounded-[2rem] hover:bg-white/90 hover:scale-105 transition-all flex items-center justify-center gap-6 uppercase text-[10px] tracking-[0.4em] font-black shadow-xl"
               >
                 Resume <Download size={24} />
               </button>
            </div>
         </motion.div>
      </section>
    </div>
    </div>
  );
}
