import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
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
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gray-600 mx-auto rounded"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Always open to discussing AI/ML projects, computer vision solutions, or opportunities to collaborate on innovative technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 glass-effect p-6 rounded-xl">
                  <div className="text-3xl text-blue-400">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Location</h3>
                    <p className="text-gray-400">57 Kingsley, Debden, Essex, IG10 3TU</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 glass-effect p-6 rounded-xl">
                  <div className="text-3xl text-blue-400">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
                    <a href="mailto:essashah10@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                      essashah10@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 glass-effect p-6 rounded-xl">
                  <div className="text-3xl text-blue-400">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Phone</h3>
                    <p className="text-gray-400">07424906183</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 pt-8">
                <motion.a
                  href="https://github.com/Essashah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 glass-effect rounded-full flex items-center justify-center text-2xl transition-all relative group"
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 5,
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)'
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div 
                    className="absolute -inset-2 bg-blue-500/40 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                  />
                  <FaGithub className="relative z-10" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/essa-shah-7a0a5a294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 glass-effect rounded-full flex items-center justify-center text-2xl transition-all relative group"
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: -5,
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)'
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div 
                    className="absolute -inset-2 bg-blue-500/40 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                  />
                  <FaLinkedin className="relative z-10" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-6 py-4 glass-effect rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-lg focus:shadow-blue-500/20 text-white placeholder-gray-500 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-6 py-4 glass-effect rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-lg focus:shadow-blue-500/20 text-white placeholder-gray-500 transition-all"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-6 py-4 glass-effect rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-lg focus:shadow-blue-500/20 text-white placeholder-gray-500 resize-none transition-all"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full px-6 py-4 bg-gray-800 rounded-xl font-bold transition-all relative group overflow-hidden"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="absolute -inset-1 bg-blue-500/40 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10">Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-16 pt-8 border-t border-gray-700"
          >
            <p className="text-gray-400">
              © 2024 Syed Muhammad Essa Shah. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

