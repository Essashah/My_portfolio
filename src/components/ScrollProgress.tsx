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
      className="fixed left-0 right-0 top-0 z-[9998] h-0.5 bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: scrollProgress > 0 ? 1 : 0 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-[#4f8fff] via-[#7a5cff] to-[#22d3ee]"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.12, ease: 'easeOut' }}
      />
    </motion.div>
  )
}

export default ScrollProgress

