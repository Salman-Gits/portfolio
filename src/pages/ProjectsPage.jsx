import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Github, Layout as LayoutIcon, Layers, Server, ShoppingCart, Database, Monitor, Shield, Zap } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'Blood Bank Hub',
    tech: 'React.js • Spring Boot • Spring Data JPA • MySQL',
    tag: 'Full Stack Infrastructure',
    desc: 'Mission-critical CRUD system for donor registration and real-time blood stock synchronization. Engineered for hospital-grade reliability with indexed query optimization.',
    metrics: ['8+ RESTful Endpoints', 'Low Latency Search'],
    icon: <Database size={40} />,
    color: 'from-brand-primary/20',
    link: 'https://blood-bank-rouge-alpha.vercel.app/',
    github: 'https://github.com/Salman-Gits'
  },
  {
    id: '02',
    title: 'Nexus E-Commerce',
    tech: 'React.js • Java • Spring Boot • MySQL • JPA',
    tag: 'Transactional Architecture',
    desc: 'Enterprise shopping framework with real-time state synchronization. Features atomic stock handling and a zero-reload cart management pipeline.',
    metrics: ['Real-time Cart Logic', 'Relational Integrity'],
    icon: <ShoppingCart size={40} />,
    color: 'from-blue-500/20',
    link: 'https://ecommerce-frontend-seven-sooty.vercel.app/',
    github: 'https://github.com/Salman-Gits'
  },
  {
    id: '03',
    title: 'Rental Lifecycle Engine',
    tech: 'React • Barcode Scanner • Real-time Logs',
    tag: 'Logistics Solution',
    desc: 'A robust asset tracking system with physical barcode integration. Features automated temporal logging to calculate usage duration with surgical precision.',
    metrics: ['Barcode Digital Logic', 'Temporal Data Models'],
    icon: <Layers size={40} />,
    color: 'from-emerald-500/20',
    link: 'https://rental-opal-one.vercel.app/',
    github: 'https://github.com/Salman-Gits'
  },
  {
    id: '04',
    title: 'Creative Portfolio',
    tech: 'React • Framer Motion • Tailwind',
    tag: 'Client Presentation',
    desc: 'A bespoke digital showcase for a creative professional, focusing on immersive storytelling through motion and high-fidelity UI components.',
    metrics: ['Cinematic Transitions', 'Fluid UX Architecture'],
    icon: <Monitor size={40} />,
    color: 'from-purple-500/20',
    link: 'https://shaheinsha-portfolio.vercel.app/',
    github: 'https://github.com/Salman-Gits'
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-brand-bg pb-32">
       {/* Background Decor */}
       <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full grid-bg" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 pt-32 relative z-10">
        {/* Editorial Header */}
        <div className="mb-40">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-10">
               <span className="w-12 h-[1px] bg-brand-primary" />
               <h2 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.6em]">Deployed Directives</h2>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-[140px] font-black text-white leading-[0.8] tracking-tighter mb-12 uppercase italic font-serif">
              Live <br />
              Systems<span className="text-brand-primary font-sans font-black underline underline-offset-[16px] decoration-1 decoration-white/10">.</span>
            </h1>
            <p className="text-slate-400 text-xl max-w-2xl font-medium italic leading-relaxed">
               A portfolio of system architectures designed for scale, security, and high-availability across healthcare and enterprise domains.
            </p>
          </motion.div>
        </div>

        {/* Project List: High Contrast Hardware Look */}
        <div className="space-y-12">
          {projects.map((p, idx) => (
            <motion.div 
              key={p.id} 
              {...fadeInUp}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[4rem] border border-white/5 bg-[#0c0c10] hover:border-brand-primary/20 transition-all duration-700">
                
                {/* Left: Content Area */}
                <div className="lg:col-span-12 xl:col-span-7 p-12 md:p-16 flex flex-col justify-center border-r border-white/5">
                  <div className="flex items-center gap-6 mb-10">
                    <span className="text-[11px] font-mono text-slate-700 uppercase tracking-widest">{p.id}</span>
                    <div className="px-5 py-1.5 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-[10px] font-black text-brand-primary uppercase tracking-widest italic">
                      {p.tag}
                    </div>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-black text-white mb-8 group-hover:text-brand-primary transition-all font-serif italic tracking-tighter">
                    {p.title}.
                  </h3>
                  <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-xl font-medium font-serif italic">
                    {p.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 items-center">
                    {p.metrics.map((m, j) => (
                      <div key={j} className="flex items-center gap-2 px-5 py-2.5 bg-white/[0.02] rounded-2xl text-[10px] font-black text-slate-400 uppercase tracking-widest border border-white/5 group-hover:border-brand-primary/20 transition-colors">
                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse" />
                        {m}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Interactive Area */}
                <div className="lg:col-span-12 xl:col-span-5 relative bg-[#08080a] p-12 md:p-16 flex flex-col justify-between overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
                  <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col items-center justify-center flex-1 py-12">
                    <div className="w-24 h-24 glass rounded-[2.5rem] flex items-center justify-center text-white mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-2xl">
                      {p.icon}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-white transition-colors italic">
                      Diagnostic Ready <Shield size={12} />
                    </div>
                  </div>

                  <div className="relative z-10 flex gap-4">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="p-6 bg-white/5 text-white rounded-3xl hover:bg-white/10 transition-all border border-white/5">
                      <Github size={24} />
                    </a>
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="flex-1 p-6 bg-brand-primary text-white font-black text-[11px] uppercase tracking-widest rounded-3xl flex items-center justify-center gap-3 hover:bg-brand-primary-dark transition-all shadow-[0_20px_40px_rgba(99,102,241,0.2)]">
                      Observe System <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeInUp} className="mt-40 text-center">
          <Link to="/" className="inline-flex items-center gap-4 text-[10px] font-black text-slate-600 uppercase tracking-[0.6em] hover:text-brand-primary transition-all italic group">
            <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-2 transition-transform" /> Back to Base
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
