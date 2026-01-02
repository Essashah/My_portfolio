import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scrolled = (scrollPx / winHeightPx) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gray-900 z-[9998]"
      initial={{ opacity: 0 }}
      animate={{ opacity: scrollProgress > 0 ? 1 : 0 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </motion.div>
  )
}

export default ScrollProgress

