import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import { useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export default function ContactPage() {
  const [formState, setFormState] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full Stack Development',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('sending');
    
    try {
      const response = await fetch("https://formspree.io/f/xgorgjjb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormState('sent');
        setFormData({
          name: '',
          email: '',
          service: 'Full Stack Development',
          message: ''
        });
        setTimeout(() => setFormState('idle'), 5000);
      } else {
        setFormState('idle');
      }
    } catch (error) {
      setFormState('idle');
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-bg selection:bg-brand-primary selection:text-white pb-32">
       {/* Background Decor */}
       <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full grid-bg" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 pt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Side: Editorial Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-12 xl:col-span-5"
          >
            <div className="flex items-center gap-4 mb-10">
              <span className="w-12 h-[1px] bg-brand-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary">Initiate Project</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-12 uppercase italic font-serif">
               LET'S <br />
               <span className="text-brand-primary italic font-serif font-normal">Connect.</span>
            </h1>
            
            <p className="text-slate-400 text-xl font-medium leading-relaxed mb-16 italic">
              Whether you're scaling an enterprise architecture or building a production-grade web ecosystem, I'm available for new directives.
            </p>

            <div className="space-y-12">
              <div className="flex items-start gap-8 group">
                <div className="w-14 h-14 bg-white/[0.02] border border-white/5 text-brand-primary flex items-center justify-center rounded-2xl group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-2">Secure Link</h4>
                  <p className="text-2xl font-black text-white italic tracking-tight">mdsalmand008@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-8 group">
                <div className="w-14 h-14 bg-white/[0.02] border border-white/5 text-brand-primary flex items-center justify-center rounded-2xl group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-2">Base Coordinates</h4>
                  <p className="text-2xl font-black text-white italic tracking-tight">Chennai, India // GMT+5:30</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: High-Tech Form */}
          <motion.div 
            {...fadeInUp} 
            transition={{ delay: 0.2 }}
            className="lg:col-span-12 xl:col-span-7"
          >
            <div className="bg-[#0c0c10] p-10 md:p-20 rounded-[4rem] border border-white/5 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                 <MessageSquare size={200} strokeWidth={0.5} />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-16">
                   <div className="w-3 h-3 bg-brand-primary rounded-full animate-pulse" />
                   <h3 className="text-sm font-black uppercase tracking-[0.3em] text-white">System Inquiry Protocol</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Subject Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="ALICE VOID"
                        className="w-full bg-white/[0.02] border border-white/5 rounded-3xl px-8 py-6 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary/30 transition-all font-mono" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Secure Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="ALICE@SECURE.NET"
                        className="w-full bg-white/[0.02] border border-white/5 rounded-3xl px-8 py-6 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary/30 transition-all font-mono" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Directive Type</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white/[0.02] border border-white/5 rounded-3xl px-8 py-6 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary/30 transition-all font-mono appearance-none"
                    >
                      <option className="bg-[#0c0c10]">Full Stack Development</option>
                      <option className="bg-[#0c0c10]">System Architecture</option>
                      <option className="bg-[#0c0c10]">Enterprise Security</option>
                      <option className="bg-[#0c0c10]">Technical Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Message Log</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      placeholder="INITIATING DETAILED BRIEF..."
                      className="w-full bg-white/[0.02] border border-white/5 rounded-3xl px-8 py-6 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary/30 transition-all font-mono resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={formState !== 'idle'}
                    className={`w-full py-8 text-white text-[11px] font-black uppercase tracking-[0.4em] rounded-[2rem] shadow-2xl transition-all flex items-center justify-center gap-4 ${
                      formState === 'sent' ? 'bg-emerald-500 shadow-emerald-500/20' : 'bg-brand-primary shadow-brand-primary/20 hover:scale-[1.02] active:scale-95'
                    }`}
                  >
                    {formState === 'idle' && <>Transmit Protocol <Send size={18} /></>}
                    {formState === 'sending' && <>Transmitting...</>}
                    {formState === 'sent' && <>Directive Received Successfully!</>}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
