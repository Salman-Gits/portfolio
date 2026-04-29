import { motion } from 'framer-motion';
import { Award, BookOpen, Coffee, Cpu, Globe, Rocket } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Micro-patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />
        <div className="absolute inset-0" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #e2e8f0 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-brand-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-500">The Narrative</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.05] mb-8 font-serif">
               Driven by <br />
               <span className="italic font-normal">Discipline.</span>
            </h1>
            <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
               <p>
                 I am Mohammed Salman, a software engineer who views code as the architecture of modern enterprise. My journey began at <span className="text-slate-900 font-bold">The New College</span>, where I maintained an 8.5 GPA and secured gold medals for three consecutive years.
               </p>
               <p>
                 My technical philosophy is built on the <span className="text-slate-900 font-bold">Java ecosystem</span> and the precision of <span className="text-slate-900 font-bold">Relational Database Design</span>. During my tenure at Kalsun Groups, I bridged the gap between complex system logic and fluid user interfaces.
               </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
             <div className="aspect-[4/5] bg-slate-100 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl relative group">
                <div className="absolute inset-0 flex items-center justify-center text-slate-200">
                    <Cpu size={300} strokeWidth={0.5} className="group-hover:text-brand-primary transition-colors duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-10 left-10 right-10">
                   <div className="text-[10px] font-bold text-white uppercase tracking-[0.4em] mb-2 opacity-60">Status</div>
                   <div className="text-2xl font-bold text-white italic">Available for remote engineering roles.</div>
                </div>
             </div>
             {/* Floating Achievement */}
             <div className="absolute -top-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl shadow-indigo-100 border border-indigo-50 animate-bounce">
                <Award className="text-brand-primary mb-2" size={32} />
                <div className="text-xl font-black text-slate-900 italic">8.5 GPA</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">IT Gold Medalist</div>
             </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {[
            { 
              title: "Enterprise Rigor", 
              desc: "Building systems that handle complexity with grace using Java, Spring, and optimized databases.",
              icon: <Cpu size={24} />
            },
            { 
              title: "Fluid Design", 
              desc: "Crafting zero-friction interfaces with React and Framer Motion that users actually love to use.",
              icon: <Rocket size={24} />
            },
            { 
              title: "Global Standards", 
              desc: "Adhering to high-level coding standards, ACID compliance, and industry best practices.",
              icon: <Globe size={24} />
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              className="p-12 glass rounded-[2.5rem] hover:bg-white transition-all hover:-translate-y-2 group border-slate-100"
            >
              <div className="w-14 h-14 bg-indigo-50 text-brand-primary flex items-center justify-center rounded-2xl mb-8 group-hover:bg-brand-primary group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-4 italic">{item.title}</h4>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <div className="mt-40 border-t border-slate-100 pt-20">
           <div className="flex items-center gap-4 mb-16">
              <Award className="text-brand-primary" />
              <h2 className="text-3xl font-black text-slate-900 italic uppercase tracking-tighter">Technical Certifications.</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { provider: "Udemy", focus: "HTML, CSS, React.js, Java MySQL", icon: "01" },
                { provider: "Scaler Academy", focus: "React.js, Java, MySQL", icon: "02" },
                { provider: "Infosys Springboard", focus: "Java Architecture", icon: "03" },
                { provider: "LetsUpgrade", focus: "Java & React.js Masterclasses", icon: "04" }
              ].map((cert, i) => (
                <div key={i} className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:border-brand-primary/20 hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-2 transition-all duration-500 cursor-default">
                   <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 group-hover:text-brand-primary transition-colors">{cert.icon}</div>
                   <h4 className="text-xl font-black text-slate-900 mb-2 italic group-hover:translate-x-2 transition-transform duration-500">{cert.provider}</h4>
                   <p className="text-sm text-slate-600 font-bold uppercase tracking-widest leading-loose group-hover:text-slate-900 transition-colors">{cert.focus}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Education Timeline */}
        <div className="mt-40 border-t border-slate-100 pt-20">
           <div className="flex items-center gap-4 mb-20">
              <BookOpen className="text-brand-primary" />
              <h2 className="text-3xl font-black text-slate-900 italic">The Foundation.</h2>
           </div>

           <div className="space-y-20">
              {[
                {
                  period: "2022 — 2025",
                  institution: "The New College, Chennai",
                  degree: "B.Sc Information Technology",
                  detail: "Awarded 'Gold Medal' for 3 consecutive years for academic excellence in computer science and mathematics."
                },
                {
                  period: "2025 — 2026",
                  institution: "Professional Certifications",
                  degree: "Full Stack Specialization",
                  detail: "Advanced certification in Spring Boot architecture and Microservices communication."
                }
              ].map((edu, i) => (
                <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                   <div className="lg:col-span-3">
                      <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-300 italic">{edu.period}</span>
                   </div>
                   <div className="lg:col-span-9">
                      <h4 className="text-2xl font-black text-slate-900 mb-2 italic">{edu.institution}</h4>
                      <div className="text-brand-primary font-bold uppercase text-[10px] tracking-widest mb-4">{edu.degree}</div>
                      <p className="text-slate-500 font-medium max-w-2xl leading-relaxed">{edu.detail}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
