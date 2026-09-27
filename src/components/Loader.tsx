import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { profile } from '../data/content'

const EASE = [0.76, 0, 0.24, 1] as const
const DURATION = 1700

/** Intro: counter runs 000 → 100 under the name, then the panel lifts away. */
const Loader = ({ onDone }: { onDone: () => void }) => {
  const reduce = useReducedMotion()
  const [count, setCount] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const total = reduce ? 300 : DURATION
    const start = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / total)
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * 100))
      if (p < 1) frame = requestAnimationFrame(tick)
      else setLeaving(true)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [reduce])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink-2 p-5 md:p-10"
      initial={{ clipPath: 'inset(0 0 0% 0)' }}
      animate={leaving ? { clipPath: 'inset(0 0 100% 0)' } : undefined}
      transition={{ duration: reduce ? 0.2 : 0.9, ease: EASE, delay: 0.15 }}
      onAnimationComplete={() => leaving && onDone()}
    >
      <div className="flex items-start justify-between">
        <p className="label">{profile.role}</p>
        <p className="label">Portfolio — {new Date().getFullYear()}</p>
      </div>

      <div className="flex items-end justify-between gap-6">
        <div className="overflow-hidden">
          <motion.p
            className="display text-[13vw] md:text-[8vw]"
            initial={{ y: reduce ? 0 : '100%' }}
            animate={{ y: leaving && !reduce ? '-100%' : '0%' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: leaving ? 0 : 0.1 }}
          >
            {profile.name.split(' ')[0]}
            <span className="serif italic text-accent">.</span>
          </motion.p>
        </div>
        <p className="mono pb-[1.2vw] text-[9vw] font-normal leading-none tabular-nums text-muted md:text-[4.5vw]">
          {String(count).padStart(3, '0')}
        </p>
      </div>
    </motion.div>
  )
}

export default Loader
