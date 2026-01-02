import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypingAnimationProps {
  text: string
  className?: string
}

const TypingAnimation = ({ text, className = '' }: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [text])

  return (
    <span className={className}>
      {displayedText}
      {isTyping && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-1 h-8 bg-blue-400 ml-1"
        />
      )}
    </span>
  )
}

export default TypingAnimation

