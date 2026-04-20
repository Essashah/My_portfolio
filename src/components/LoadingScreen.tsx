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
          <motion.div className="ambient-mesh pointer-events-none absolute inset-0" animate={shouldReduceMotion ? undefined : { opacity: [0.45, 0.75, 0.45] }} transition={shouldReduceMotion ? undefined : { duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(84,165,255,0.14),transparent_45%)]" />

          {!shouldReduceMotion && (
            <>
              <motion.div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#4f8fff]/16"
                animate={{ rotate: 360 }}
                transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8b5cf6]/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              />
            </>
          )}

          <div className="relative z-10 w-full max-w-lg rounded-3xl border border-[rgba(141,175,255,0.25)] bg-[rgba(10,16,30,0.88)] p-8 shadow-[0_28px_80px_-45px_rgba(37,99,235,0.72)] backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="mb-8 text-center"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(141,175,255,0.35)] bg-[rgba(15,25,44,0.95)] text-lg font-semibold text-slate-100">
                ES
              </div>
              <h1
                className="text-2xl font-semibold tracking-tight text-slate-100"
                style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
              >
                Essa Shah
              </h1>
              <p className="mt-1 text-sm text-slate-400">Loading portfolio</p>
            </motion.div>

            <div className="relative mx-auto h-2 max-w-md overflow-hidden rounded-full bg-[rgba(19,30,51,0.8)]">
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

            <div className="mx-auto mt-3 flex max-w-md items-center justify-between text-xs text-slate-400">
              <span>{Math.round(progress)}%</span>
              <motion.span
                animate={shouldReduceMotion ? undefined : { opacity: [0.4, 1, 0.4] }}
                transition={shouldReduceMotion ? undefined : { duration: 1.2, repeat: Infinity }}
              >
                Please wait
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen

