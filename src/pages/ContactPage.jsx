import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ContactPage() {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('sent'), 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-20 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div {...fadeInUp}>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.05] mb-8 font-serif">
            Let's <span className="italic font-normal">Talk</span> <br />
            Business.
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-lg mb-12 font-medium">
            Whether you're looking to build a scalable web application or need consultation on your existing system architecture, I'm here to help.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-indigo-50 text-brand-primary flex items-center justify-center rounded-xl shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Me</h4>
                <p className="text-xl font-bold text-slate-900">mdsalmand008@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-indigo-50 text-brand-primary flex items-center justify-center rounded-xl shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Location</h4>
                <p className="text-xl font-bold text-slate-900">Chennai, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          {...fadeInUp} 
          transition={{ delay: 0.2 }}
          className="bg-slate-50 p-10 md:p-16 rounded-[4rem] border border-slate-100"
        >
          <div className="mb-10 flex items-center gap-4">
             <MessageSquare className="text-brand-primary" />
             <h3 className="text-xl font-black italic text-slate-800">Inquiry Form</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 hover:border-brand-primary/30 transition-all font-medium" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 hover:border-brand-primary/30 transition-all font-medium" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Select Service</label>
              <select className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 hover:border-brand-primary/30 transition-all font-medium appearance-none">
                <option>Full Stack Development</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Your Message</label>
              <textarea 
                rows={4}
                required
                placeholder="Tell me about your project..."
                className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 hover:border-brand-primary/30 transition-all font-medium resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={formState !== 'idle'}
              className="w-full py-5 bg-brand-primary text-white text-[11px] font-black uppercase tracking-widest rounded-xl shadow-lg shadow-indigo-100 hover:bg-brand-primary-dark transition-all flex items-center justify-center gap-3"
            >
              {formState === 'idle' && <>Send Message <Send size={16} /></>}
              {formState === 'sending' && <>Sending...</>}
              {formState === 'sent' && <>Message Sent Successfully!</>}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
