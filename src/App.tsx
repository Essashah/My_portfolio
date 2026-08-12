import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/effects/CustomCursor'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  // Show the intro loader only once per browser session.
  const [isLoaded, setIsLoaded] = useState(
    () => typeof sessionStorage !== 'undefined' && sessionStorage.getItem('introShown') === '1',
  )
  const { scrollYProgress } = useScroll()
  const blobShiftA = useTransform(scrollYProgress, [0, 1], [0, -120])
  const blobShiftB = useTransform(scrollYProgress, [0, 1], [0, 140])

  // Lock scroll during the intro loader so the reveal starts at the top.
  useEffect(() => {
    document.body.style.overflow = isLoaded ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [isLoaded])

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      {!isLoaded && (
        <LoadingScreen
          onComplete={() => {
            sessionStorage.setItem('introShown', '1')
            setIsLoaded(true)
          }}
        />
      )}
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
        <motion.div className="ambient-blob-a" style={{ y: blobShiftA }} />
        <motion.div className="ambient-blob-b" style={{ y: blobShiftB }} />
        <div className="pointer-events-none fixed bottom-[-240px] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(58,119,255,0.28),transparent_65%)] blur-3xl" />

        <CustomCursor />
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

        <motion.main
          className="ambient-grain relative z-10"
          initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
          animate={
            isLoaded
              ? { opacity: 1, y: 0, filter: 'blur(0px)' }
              : { opacity: 0, y: 18, filter: 'blur(8px)' }
          }
          transition={{ duration: 0.7, ease: 'easeOut' }}
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

