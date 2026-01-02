import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

const AnimatedCounter = ({ value, suffix = '', duration = 2, className = '' }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      setCount(Math.floor(progress * value))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  )
}

export default AnimatedCounter

