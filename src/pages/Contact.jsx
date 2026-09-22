import { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react'

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

  const contactCards = [
    { href: "mailto:mdsalmand008@gmail.com", icon: Mail, label: "Email", value: "mdsalmand008@gmail.com", color: "var(--color-accent)", bg: "var(--color-accent-soft)", border: "var(--color-border-glow)" },
    { href: "https://wa.me/917358653020", icon: MessageSquare, label: "WhatsApp", value: "+91 73586 53020", color: "#10b981", bg: "rgba(16, 185, 129, 0.08)", border: "rgba(16, 185, 129, 0.15)" },
    { href: null, icon: MapPin, label: "Location", value: "Chennai, India • GMT+5:30", color: "var(--color-accent)", bg: "var(--color-accent-soft)", border: "var(--color-border-glow)" }
  ]

  return (
    <div className="page-fade-in contact-page">
      <header className="page-header container">
        <motion.span
          className="page-subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >Get in Touch</motion.span>
        <motion.h1
          className="page-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >Contact</motion.h1>
      </header>

      <div className="container">
        <div className="contact-main-grid grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="contact-details-column"
          >
            <div className="contact-intro-badge flex items-center gap-4 mb-6">
              <motion.span
                className="w-12 h-[1px] bg-accent"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
              <span className="text-xs font-mono font-semibold tracking-[0.25em] text-accent uppercase">Let's Talk</span>
            </div>

            <h2 className="contact-section-heading text-3xl lg:text-4xl font-bold mb-6 leading-[1.1]">
              Let's build<br />
              <span className="title-gradient">something together.</span>
            </h2>

            <p className="contact-lead text-muted text-base mb-10 max-w-md leading-relaxed">
              Whether you need a full-stack application, a responsive frontend, or backend API design — I'm available for freelance work and full-time opportunities.
            </p>

            <div className="coordinates-card-list flex flex-col gap-3">
              {contactCards.map((card, idx) => {
                const CardTag = card.href ? motion.a : motion.div
                return (
                  <CardTag
                    key={idx}
                    href={card.href}
                    target={card.href ? "_blank" : undefined}
                    rel={card.href ? "noopener noreferrer" : undefined}
                    className="coordinate-card glass-card shimmer-card flex items-center gap-4"
                    style={{ padding: '1.25rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    whileHover={{ x: 4, scale: 1.01 }}
                  >
                    <div className="p-3 rounded-xl" style={{ background: card.bg, border: `1px solid ${card.border}`, color: card.color }}>
                      <card.icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-mono tracking-widest text-muted uppercase mb-1">{card.label}</h4>
                      <p className="font-semibold text-sm" style={{ color: card.color }}>{card.value}</p>
                    </div>
                  </CardTag>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="contact-form-column"
          >
            <div className="form-card-wrapper glass-card shimmer-card">
              <div className="form-header-row flex items-center gap-3 mb-8">
                <div className="status-beacon"></div>
                <h3 className="text-xs font-mono font-semibold tracking-[0.2em] text-accent uppercase">Send a Message</h3>
              </div>

              {formState === 'sent' ? (
                <motion.div
                  className="submit-success-card text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                  >
                    <CheckCircle size={56} className="text-secondary mx-auto mb-5" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">Message Sent!</h3>
                  <p className="text-muted leading-relaxed text-sm">Thanks for reaching out. I'll review your message and get back to you within 24 hours.</p>
                  <motion.button
                    onClick={() => setFormState('idle')}
                    className="btn btn-outline mt-6 btn-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Another
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="floating-input-group">
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder=" " id="issuer-name" className="form-input font-mono" />
                      <label htmlFor="issuer-name" className="form-label">Your Name</label>
                    </div>
                    <div className="floating-input-group">
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder=" " id="issuer-email" className="form-input font-mono" />
                      <label htmlFor="issuer-email" className="form-label">Email Address</label>
                    </div>
                  </div>

                  <div className="floating-input-group">
                    <select name="service" value={formData.service} onChange={handleChange} className="form-input form-select font-mono" required>
                      <option value="Full Stack Development">Full Stack Development</option>
                      <option value="Frontend Interface Design">Frontend Interface Design</option>
                      <option value="Backend System Architecture">Backend System Architecture</option>
                      <option value="Database Optimization">Database Optimization</option>
                    </select>
                    <label className="form-label">Service</label>
                  </div>

                  <div className="floating-input-group">
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={5} required placeholder=" " id="issuer-message" className="form-textarea font-mono"></textarea>
                    <label htmlFor="issuer-message" className="form-label">Your Message</label>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formState !== 'idle'}
                    className={`btn w-full mt-2 ${formState === 'sending' ? 'opacity-70' : 'btn-primary'}`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {formState === 'idle' && <><Send size={18} /> Send Message</>}
                    {formState === 'sending' && <>Sending...</>}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
