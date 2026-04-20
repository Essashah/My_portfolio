import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

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
      const offset = 88
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      setActiveSection(id)
      setMobileOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-6"
    >
      <div
        className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 md:px-5 ${
          scrolled ? 'glass-effect shadow-glow' : 'border border-transparent bg-transparent'
        }`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative cursor-pointer text-lg font-semibold tracking-tight text-slate-100 md:text-xl"
          style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
          onClick={() => scrollToSection('hero')}
          whileHover={{ y: -1 }}
        >
          Essa Shah
        </motion.div>

        <div className="hidden items-center gap-1 rounded-full border border-[rgba(141,175,255,0.28)] bg-[rgba(10,18,33,0.82)] p-1.5 backdrop-blur-xl md:flex">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'text-slate-100'
                  : 'text-slate-300 hover:text-slate-100'
              }`}
              style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
            >
              <span className="relative z-10">{item.label}</span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-[#4f8fff]/40 via-[#7a5cff]/38 to-[#2dd4bf]/35"
                  transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <button
          className="icon-tile text-base text-slate-100 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="mx-auto mt-3 w-full max-w-6xl rounded-2xl border border-[rgba(141,175,255,0.22)] bg-[rgba(9,15,28,0.95)] p-3 backdrop-blur-xl md:hidden"
        >
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`rounded-xl px-3 py-2 text-left text-sm font-medium transition ${
                  activeSection === item.id
                    ? 'bg-[rgba(84,165,255,0.2)] text-slate-100'
                    : 'bg-[rgba(11,19,34,0.72)] text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navigation

