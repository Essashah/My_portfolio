import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

interface ContactProps {
  setActiveSection: (section: string) => void
}

const Contact = ({ setActiveSection }: ContactProps) => {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection('contact')
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setActiveSection])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`)
    const body = encodeURIComponent(`${formData.message}\n\nReply to: ${formData.email}`)
    window.location.href = `mailto:essashah10@gmail.com?subject=${subject}&body=${body}`
    setFormData({ name: '', email: '', message: '' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="contact" ref={sectionRef} className="section-shell flex items-center">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants} className="mb-14 text-center">
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">Let&apos;s build something impactful</h2>
            <p className="section-subtitle mx-auto">
              Open to AI product engineering, platform work, and high-value ML delivery projects.
            </p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <div className="surface-card interactive-card flex items-start gap-4 p-6">
                  <div className="icon-tile text-2xl text-blue-200">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-slate-100">Location</h3>
                    <p className="text-slate-300">57 Kingsley, Debden, Essex, IG10 3TU</p>
                  </div>
                </div>

                <div className="surface-card interactive-card flex items-start gap-4 p-6">
                  <div className="icon-tile text-2xl text-blue-200">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-slate-100">Email</h3>
                    <a href="mailto:essashah10@gmail.com" className="text-slate-300 transition-colors hover:text-blue-200">
                      essashah10@gmail.com
                    </a>
                  </div>
                </div>

                <div className="surface-card interactive-card flex items-start gap-4 p-6">
                  <div className="icon-tile text-2xl text-blue-200">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-slate-100">Phone</h3>
                    <p className="text-slate-300">07424906183</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 pt-8">
                <motion.a
                  href="https://github.com/Essashah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface-card flex h-12 w-12 items-center justify-center rounded-full text-lg text-slate-200"
                  whileHover={{ y: -3, scale: 1.04 }}
                  whileTap={{ y: 0 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/essa-shah-7a0a5a294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface-card flex h-12 w-12 items-center justify-center rounded-full text-lg text-slate-200"
                  whileHover={{ y: -3, scale: 1.04 }}
                  whileTap={{ y: 0 }}
                >
                  <FaLinkedin />
                </motion.a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="surface-card relative space-y-5 p-6 md:p-8">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,143,255,0.15),transparent_35%)]" />
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="premium-input relative"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="premium-input"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="premium-input resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="button-primary w-full"
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 border-t border-[rgba(141,175,255,0.2)] pt-8 text-center"
          >
            <p className="text-slate-400">
              © 2024 Syed Muhammad Essa Shah. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

