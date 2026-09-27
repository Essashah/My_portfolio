import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

interface LinesProps {
  lines: ReactNode[]
  className?: string
  delay?: number
  /** Animate on mount instead of when scrolled into view. */
  immediate?: boolean
}

/** Headline reveal: each line slides up from behind a clipping mask. */
export const RevealLines = ({ lines, className = '', delay = 0, immediate = false }: LinesProps) => {
  const reduce = useReducedMotion()
  const trigger = immediate
    ? { animate: 'show' }
    : { whileInView: 'show', viewport: { once: true, margin: '-12% 0px' } }

  return (
    <motion.span className={`block ${className}`} initial="hidden" {...trigger}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.18em] -mb-[0.18em]">
          <motion.span
            className="block"
            variants={{
              hidden: reduce ? { opacity: 0 } : { y: '105%' },
              show: {
                y: '0%',
                opacity: 1,
                transition: { duration: 1.05, ease: EASE, delay: delay + i * 0.09 },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

interface FadeProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

/** Soft fade-and-rise for body copy and blocks. */
export const Fade = ({ children, className = '', delay = 0, y = 24 }: FadeProps) => {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}
