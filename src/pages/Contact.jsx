import { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, MapPin, Send, MessageSquare, CheckCircle, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  const [formState, setFormState] = useState('idle')
  const [formData, setFormData] = useState({
    name: '', email: '', service: 'Full Stack Development', message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormState('sending')
    try {
      const response = await fetch("https://formspree.io/f/xgorgjjb", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        setFormState('sent')
        setFormData({ name: '', email: '', service: 'Full Stack Development', message: '' })
        setTimeout(() => setFormState('idle'), 5000)
      } else { setFormState('idle') }
    } catch { setFormState('idle') }
  }

  const contactInfo = [
    { href: "mailto:mdsalmand008@gmail.com", icon: Mail, label: "Email", value: "mdsalmand008@gmail.com" },
    { href: "https://wa.me/917358653020", icon: MessageSquare, label: "WhatsApp", value: "+91 73586 53020" },
    { href: "https://www.linkedin.com/in/mohammed-salman-m-17b573262/", icon: Linkedin, label: "LinkedIn", value: "Mohammed Salman M" },
    { href: "https://github.com/Salman-Gits", icon: Github, label: "GitHub", value: "Salman-Gits" },
    { href: null, icon: MapPin, label: "Location", value: "Chennai, India • GMT+5:30" }
  ]

  return (
    <div className="page-fade-in container">
      <header className="page-header">
        <motion.span className="page-subtitle" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>Get in Touch</motion.span>
        <motion.h1 className="page-title" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>Contact</motion.h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-28">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold mb-4">Let's build something together.</h2>
          <p className="text-muted text-sm mb-10 max-w-md leading-relaxed">
            Available for full-time Software Developer and Full Stack Developer roles, as well as freelance projects. I respond within 24 hours.
          </p>

          <div className="flex flex-col gap-5">
            {contactInfo.map((info, idx) => {
              const Tag = info.href ? motion.a : motion.div
              return (
                <Tag
                  key={idx}
                  href={info.href}
                  target={info.href ? "_blank" : undefined}
                  rel={info.href ? "noopener noreferrer" : undefined}
                  className="contact-info-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06, duration: 0.4 }}
                >
                  <div className="contact-info-icon">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono tracking-wider text-muted uppercase mb-0.5">{info.label}</h4>
                    <p className="font-semibold text-sm">{info.value}</p>
                  </div>
                </Tag>
              )
            })}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="card">
            <div className="flex items-center gap-2 mb-8">
              <div className="status-dot"></div>
              <h3 className="text-xs font-mono font-semibold tracking-wider text-accent uppercase">Send a Message</h3>
            </div>

            {formState === 'sent' ? (
              <motion.div
                className="text-center py-10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle size={48} className="text-accent mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Message Sent!</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button onClick={() => setFormState('idle')} className="btn btn-outline btn-sm">Send Another</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="floating-input-group">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder=" " id="issuer-name" className="form-input" />
                    <label htmlFor="issuer-name" className="form-label">Your Name</label>
                  </div>
                  <div className="floating-input-group">
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder=" " id="issuer-email" className="form-input" />
                    <label htmlFor="issuer-email" className="form-label">Email Address</label>
                  </div>
                </div>

                <div className="floating-input-group">
                  <select name="service" value={formData.service} onChange={handleChange} className="form-input form-select" required>
                    <option value="Full Stack Development">Full Stack Development</option>
                    <option value="Frontend Interface Design">Frontend Interface Design</option>
                    <option value="Backend System Architecture">Backend System Architecture</option>
                    <option value="Database Optimization">Database Optimization</option>
                  </select>
                  <label className="form-label">Service</label>
                </div>

                <div className="floating-input-group">
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={5} required placeholder=" " id="issuer-message" className="form-textarea"></textarea>
                  <label htmlFor="issuer-message" className="form-label">Your Message</label>
                </div>

                <button
                  type="submit"
                  disabled={formState !== 'idle'}
                  className={`btn w-full mt-1 ${formState === 'sending' ? 'opacity-60' : 'btn-primary'}`}
                >
                  {formState === 'idle' && <><Send size={16} /> Send Message</>}
                  {formState === 'sending' && <>Sending...</>}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
