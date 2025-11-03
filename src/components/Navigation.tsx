import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      setActiveSection(id)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? 'bg-gray-950/90 backdrop-blur-lg border-b border-gray-800 shadow-lg shadow-black/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold text-white cursor-pointer relative group"
          onClick={() => scrollToSection('hero')}
          whileHover={{ scale: 1.05 }}
        >
          <span className="relative z-10">Essa Shah</span>
          <motion.div 
            className="absolute -inset-2 bg-blue-500/40 blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
            animate={{ 
              boxShadow: ['0 0 0px rgba(59, 130, 246, 0)', '0 0 30px rgba(59, 130, 246, 0.6)', '0 0 0px rgba(59, 130, 246, 0)']
            }}
            transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
          />
        </motion.div>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-3 py-2 transition-all duration-300 group ${
                activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{item.label}</span>
              <motion.div 
                className="absolute -inset-2 bg-blue-500/40 blur-lg rounded opacity-0 group-hover:opacity-100 transition-all duration-300"
              />
              <motion.div 
                className="absolute inset-0 bg-blue-500/20 rounded opacity-0 group-hover:opacity-100 transition-all duration-300"
              />
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"
                  style={{ 
                    boxShadow: '0 0 15px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.4)' 
                  }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation

