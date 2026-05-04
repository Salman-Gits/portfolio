import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Github, Layout as LayoutIcon, Layers, Server, ShoppingCart, Database } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'Blood Bank Management',
    tech: 'Java • Spring Boot • MySQL • React',
    tag: 'Full Stack Healthcare',
    desc: 'An automated life-saving ecosystem for tracking blood donations, inventory, and requester matches. Features secure donor records and real-time availability dashboards.',
    metrics: ['Automated Matching', 'Inventory Control'],
    icon: <Database size={32} />,
    preview: 'Healthcare Logic',
    accent: 'indigo',
    link: 'https://blood-bank-rouge-alpha.vercel.app/',
    github: 'https://github.com/Salman-Gits'
  },
  {
    id: '02',
    title: 'E-Commerce Engine',
    tech: 'React • Java • Spring Boot • MySQL',
    tag: 'Full Stack Service',
    desc: 'An enterprise-grade shopping ecosystem featuring secure multi-layered authentication, dynamic inventory algorithms, and real-time transaction processing.',
    metrics: ['Java Spring Boot 3.0', 'Scalable Architecture'],
    icon: <ShoppingCart size={32} />,
    preview: 'Shopping System',
    accent: 'indigo',
    link: 'https://ecommerce-frontend-seven-sooty.vercel.app/',
    github: 'https://github.com/Salman-Gits'
  },
  {
    id: '03',
    title: 'Rental Management System',
    tech: 'React • Barcode Scanner • Real-time Logs',
    tag: 'Client Logistics Solution',
    desc: 'An end-to-end rental ecosystem featuring integrated barcode scanning (physical & digital) for asset tracking. Dynamically calculates usage duration and manages incoming/outgoing inventory flow.',
    metrics: ['Automated Barcode Auth', 'Temporal Lifecycle Logs'],
    icon: <Layers size={32} />,
    preview: 'Logistics Architecture',
    accent: 'indigo',
    link: 'https://rental-opal-one.vercel.app/',
    github: 'https://github.com/Salman-Gits'
  }
];

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-20 py-20">
      <div className="mb-32">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full mb-8 border border-indigo-100">
             <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest italic">Case Studies</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.1] mb-8">
            Live <br />
            <span className="text-gradient-primary italic font-serif font-normal">Deployments.</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl font-medium">
             A collection of full-stack implementations and healthcare systems designed for high-availability.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {projects.map((p, idx) => (
          <motion.div 
            key={p.id} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white rounded-[4rem] p-8 md:p-16 shadow-2xl shadow-slate-200/50 border border-slate-100 hover:border-brand-primary/20 hover:shadow-indigo-50 transition-all duration-500 overflow-hidden relative hover:-translate-y-2"
          >
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center relative z-10 text-left">
              <div className="flex items-center gap-4 mb-8">
                 <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{p.id}</span>
                 <div className="px-3 py-1 bg-slate-50 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest border border-slate-100 italic">
                    {p.tag}
                 </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 group-hover:text-brand-primary transition-all italic font-serif">
                {p.title}.
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-xl font-medium">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                 {p.metrics.map((m, j) => (
                   <div key={j} className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl text-xs font-bold text-slate-600 border border-slate-100">
                     <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                     {m}
                   </div>
                 ))}
              </div>
            </div>

            {/* Right Preview/CTA */}
            <div className="lg:col-span-5 flex flex-col justify-between items-end relative z-10">
               <div className="w-full aspect-[4/3] bg-slate-50 rounded-[3rem] p-10 flex items-center justify-center relative group-hover:scale-[1.02] transition-transform shadow-inner overflow-hidden">
                  <div className="text-brand-primary opacity-20 scale-[2.5] absolute -bottom-10 -right-10 pointer-events-none">
                     {p.icon}
                  </div>
                  <div className="flex flex-col items-center gap-6">
                     <div className="w-20 h-20 bg-brand-primary flex items-center justify-center rounded-3xl shadow-xl shadow-indigo-100">
                        {p.icon}
                     </div>
                     <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{p.preview}</span>
                  </div>
               </div>

               <div className="w-full mt-10 flex justify-end gap-4">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="p-5 bg-slate-900 text-white rounded-2xl hover:bg-slate-800 transition-all">
                     <Github size={20} />
                  </a>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="flex-1 py-5 bg-brand-primary text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-brand-primary-dark transition-all">
                     Live Demo
                     <ExternalLink size={18} />
                  </a>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-40 text-center">
         <Link to="/" className="inline-flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-[0.4em] hover:text-brand-primary transition-all italic">
            Back to Home Foundations <ArrowRight size={14} />
         </Link>
      </div>
    </div>
  );
}
