import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="w-full"
      >
        <ScrollProgress />

        <motion.div
          className="ambient-mesh pointer-events-none fixed inset-0"
          animate={{ opacity: [0.55, 0.95, 0.55] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="ambient-blob-a" />
        <div className="ambient-blob-b" />
        <div className="pointer-events-none fixed bottom-[-240px] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(58,119,255,0.28),transparent_65%)] blur-3xl" />

        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

        <motion.main
          className="ambient-grain relative z-10"
          initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
        >
          <Hero setActiveSection={setActiveSection} />
          <About setActiveSection={setActiveSection} />
          <Experience setActiveSection={setActiveSection} />
          <Skills setActiveSection={setActiveSection} />
          <Contact setActiveSection={setActiveSection} />
        </motion.main>

        <ScrollToTop />
      </motion.div>
    </div>
  )
}

export default App

