import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'

interface HeroProps {
  setActiveSection: (section: string) => void
}

const Hero = ({ setActiveSection }: HeroProps) => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection('hero')
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setActiveSection])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative px-6 py-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants}>
            <motion.div
              className="text-sm md:text-base text-blue-400 mb-4 inline-block px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              Syed Muhammad Essa Shah
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            AI/ML Engineer
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
          >
            AI/ML Engineer specializing in computer vision, deep learning, and data science.
            Passionate about applying machine learning to solve real-world problems.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <motion.a
              href="https://github.com/Essashah"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 glass-effect rounded-lg flex items-center gap-2 transition-all relative group overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="absolute -inset-1 bg-blue-500/30 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <FaGithub className="text-2xl relative z-10" />
              <span className="relative z-10">GitHub</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/essa-shah-7a0a5a294"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 glass-effect rounded-lg flex items-center gap-2 transition-all relative group overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="absolute -inset-1 bg-blue-500/30 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <FaLinkedin className="text-2xl relative z-10" />
              <span className="relative z-10">LinkedIn</span>
            </motion.a>

            <motion.a
              href="mailto:essashah10@gmail.com"
              className="px-6 py-3 glass-effect rounded-lg flex items-center gap-2 transition-all relative group overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="absolute -inset-1 bg-blue-500/30 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <FaEnvelope className="text-2xl relative z-10" />
              <span className="relative z-10">Email</span>
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.button
              onClick={scrollToAbout}
              className="group flex flex-col items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors"
              whileHover={{ y: 10 }}
            >
              <span className="text-sm">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowDown className="text-xl" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
    </section>
  )
}

export default Hero

