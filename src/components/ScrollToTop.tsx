import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 glass-effect rounded-full flex items-center justify-center text-2xl text-blue-400 z-50 group"
        >
          <motion.div 
            className="absolute -inset-2 bg-blue-500/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
          />
          <FaArrowUp className="relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop

