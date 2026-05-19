import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
}

export default function Contact() {
  const [formState, setFormState] = useState('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full Stack Development',
    message: ''
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
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setFormState('sent')
        setFormData({
          name: '',
          email: '',
          service: 'Full Stack Development',
          message: ''
        })
        setTimeout(() => setFormState('idle'), 5000)
      } else {
        setFormState('idle')
      }
    } catch (error) {
      setFormState('idle')
    }
  }

  return (
    <div className="page-fade-in contact-page">
      <header className="page-header container">
        <span className="page-subtitle">SECURE NETWORKS & COORDINATES</span>
        <h1 className="page-title text-gradient">Contact</h1>
      </header>

      <div className="container">
        <div className="contact-main-grid grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-details-column"
          >
            <div className="contact-intro-badge flex items-center gap-4 mb-8">
              <span className="contact-intro-line w-12 h-[1px] bg-accent"></span>
              <span className="contact-intro-label text-xs font-mono font-bold tracking-[0.3em] text-accent uppercase">Initiate Project</span>
            </div>

            <h2 className="contact-section-heading text-4xl lg:text-5xl font-black italic uppercase mb-8 leading-[0.9]">
              LET'S <br />
              <span className="title-gradient">Connect.</span>
            </h2>

            <p className="contact-lead text-muted text-lg mb-12 max-w-md">
              Whether you're looking to integrate secure transactional systems or build responsive React interfaces, I'm available for direct collaboration.
            </p>

            <div className="coordinates-card-list flex flex-col gap-4">
              <a href="mailto:mdsalmand008@gmail.com" className="coordinate-card glass-card flex items-center gap-6 p-6">
                <div className="coord-icon text-accent p-3 bg-white/5 border border-white/5 rounded-xl">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="coord-label text-[10px] font-mono tracking-widest text-muted uppercase mb-1">Direct Link</h4>
                  <p className="coord-text font-bold text-accent">mdsalmand008@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/917358653020" target="_blank" rel="noopener noreferrer" className="coordinate-card glass-card flex items-center gap-6 p-6">
                <div className="coord-icon p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl text-emerald-500">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="coord-label text-[10px] font-mono tracking-widest text-muted uppercase mb-1">WhatsApp Channel</h4>
                  <p className="coord-text font-bold text-emerald-500">+91 73586 53020</p>
                </div>
              </a>

              <div className="coordinate-card glass-card flex items-center gap-6 p-6">
                <div className="coord-icon text-accent p-3 bg-white/5 border border-white/5 rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="coord-label text-[10px] font-mono tracking-widest text-muted uppercase mb-1">Base Coordinates</h4>
                  <p className="coord-text text-muted">Chennai, India // GMT+5:30</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="contact-form-column"
          >
            <div className="form-card-wrapper glass-card">
              <div className="form-header-row flex items-center gap-4 mb-10">
                <div className="status-beacon"></div>
                <h3 className="form-protocol-label text-xs font-mono font-bold tracking-[0.2em] text-accent uppercase">System Inquiry Protocol</h3>
              </div>

              {formState === 'sent' ? (
                <motion.div 
                  className="submit-success-card text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle size={64} className="text-secondary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Transmission Successful</h3>
                  <p className="text-muted leading-relaxed">Your project directive has been securely received. I will review the log and initiate contact within 24 hours.</p>
                  <button onClick={() => setFormState('idle')} className="btn btn-outline mt-8 btn-sm">Refresh Protocol</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="floating-input-group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder=" "
                        id="issuer-name"
                        className="form-input font-mono"
                      />
                      <label htmlFor="issuer-name" className="form-label">Subject Name</label>
                    </div>
                    <div className="floating-input-group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder=" "
                        id="issuer-email"
                        className="form-input font-mono"
                      />
                      <label htmlFor="issuer-email" className="form-label">Secure Email</label>
                    </div>
                  </div>

                  <div className="floating-input-group">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-input form-select font-mono"
                      required
                    >
                      <option value="Full Stack Development">Full Stack Development</option>
                      <option value="Frontend Interface Design">Frontend Interface Design</option>
                      <option value="Backend System Architecture">Backend System Architecture</option>
                      <option value="Database Optimization">Database Optimization</option>
                    </select>
                    <label className="form-label">Service Category</label>
                  </div>

                  <div className="floating-input-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      placeholder=" "
                      id="issuer-message"
                      className="form-textarea font-mono"
                    ></textarea>
                    <label htmlFor="issuer-message" className="form-label">Project Log / Message</label>
                  </div>

                  <button
                    type="submit"
                    disabled={formState !== 'idle'}
                    className={`btn w-full mt-2 ${
                      formState === 'sending' ? 'opacity-70' : 'btn-primary'
                    }`}
                  >
                    {formState === 'idle' && <><Send size={18} /> Transmit Protocol</>}
                    {formState === 'sending' && <>Transmitting Service Buffer...</>}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
