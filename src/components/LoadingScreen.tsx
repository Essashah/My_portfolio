import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  onComplete: () => void
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 1.5
      })
    }, 25)

    const timer = setTimeout(() => {
      setLoading(false)
      setTimeout(() => onComplete(), 500)
    }, 2500)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#050914]"
          style={{ pointerEvents: loading ? 'auto' : 'none' }}
        >
          <motion.div
            className="ambient-mesh pointer-events-none absolute inset-0"
            animate={shouldReduceMotion ? undefined : { opacity: [0.55, 0.85, 0.55] }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 8, repeat: Infinity, ease: 'easeInOut' }
            }
          />

          {!shouldReduceMotion && (
            <>
              <motion.div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#4f8fff]/45"
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8b5cf6]/45"
                animate={{ rotate: -360 }}
                transition={{ duration: 11, repeat: Infinity, ease: 'linear' }}
              />
            </>
          )}

          <div className="relative z-10 w-full max-w-md rounded-2xl border border-[rgba(141,175,255,0.3)] bg-[rgba(11,18,33,0.9)] p-8 shadow-[0_28px_70px_-40px_rgba(37,99,235,0.7)] backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="mb-8 text-center"
            >
              <motion.div
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f8fff] to-[#8b5cf6] text-xl font-semibold text-white shadow-lg shadow-blue-400/40"
                animate={shouldReduceMotion ? undefined : { y: [0, -3, 0], rotate: [0, 2, 0, -2, 0] }}
                transition={shouldReduceMotion ? undefined : { duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                ES
              </motion.div>
              <h1
                className="text-2xl font-semibold tracking-tight text-slate-100"
                style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
              >
                Essa Shah
              </h1>
              <p className="mt-1 text-sm text-slate-400">Preparing premium portfolio experience</p>
            </motion.div>

            <div className="relative h-2.5 overflow-hidden rounded-full bg-[rgba(19,30,51,0.8)]">
              {!shouldReduceMotion && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                  animate={{ x: ['-120%', '140%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
              )}
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#4f8fff] via-[#7a5cff] to-[#22d3ee]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.12, ease: 'linear' }}
              />
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
              <span>{Math.round(progress)}%</span>
              <motion.span
                animate={shouldReduceMotion ? undefined : { opacity: [0.4, 1, 0.4] }}
                transition={shouldReduceMotion ? undefined : { duration: 1.2, repeat: Infinity }}
              >
                Loading
              </motion.span>
            </div>

            {!shouldReduceMotion && (
              <div className="mt-6 flex justify-center gap-1.5">
                {[0, 1, 2].map((idx) => (
                  <motion.span
                    key={idx}
                    className="h-1.5 w-1.5 rounded-full bg-[#4f8fff]/70"
                    animate={{ y: [0, -5, 0], opacity: [0.35, 1, 0.35] }}
                    transition={{ duration: 0.9, repeat: Infinity, delay: idx * 0.14 }}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen

