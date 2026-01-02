import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      <LoadingScreen onComplete={handleLoadingComplete} />
      
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <ScrollProgress />
            
            {/* Subtle animated background gradient */}
            <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-blue-950/10 to-gray-950 pointer-events-none"></div>
            
            <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
            
            <main className="relative z-10">
              <Hero setActiveSection={setActiveSection} />
              <About setActiveSection={setActiveSection} />
              <Experience setActiveSection={setActiveSection} />
              <Skills setActiveSection={setActiveSection} />
              <Contact setActiveSection={setActiveSection} />
            </main>
            
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

