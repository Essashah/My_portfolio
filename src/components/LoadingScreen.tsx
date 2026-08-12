import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface LoadingScreenProps {
  onComplete: () => void
}

const STATUS_MESSAGES = [
  'Initializing neural core',
  'Warming up inference pipelines',
  'Establishing secure APIs',
  'Compiling experience',
]

const NAME = 'ESSA SHAH'
const RING_RADIUS = 52
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

interface Node {
  x: number
  y: number
  vx: number
  vy: number
}

/**
 * Animated neural-network constellation rendered on canvas. Nodes drift and
 * link when close, evoking an "AI booting" motif that matches the portfolio.
 */
const NeuralCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let nodes: Node[] = []
    let frame = 0

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const seedNodes = () => {
      const count = Math.min(70, Math.floor((width * height) / 22000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }))
    }

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seedNodes()
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)
      const linkDist = 140

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j]
          const dx = n.x - m.x
          const dy = n.y - m.y
          const dist = Math.hypot(dx, dy)
          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * 0.5
            ctx.strokeStyle = `rgba(122, 168, 255, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(m.x, m.y)
            ctx.stroke()
          }
        }

        const pulse = 1.6 + Math.sin(frame * 0.05 + i) * 0.6
        ctx.fillStyle = 'rgba(158, 197, 255, 0.85)'
        ctx.beginPath()
        ctx.arc(n.x, n.y, pulse, 0, Math.PI * 2)
        ctx.fill()
      }

      frame++
      animationId = requestAnimationFrame(render)
    }

    let animationId = 0
    resize()
    render()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70" />
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [statusIndex, setStatusIndex] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        // Ease-out: fast start, gentle finish.
        const step = prev < 70 ? 2 : prev < 90 ? 1 : 0.6
        return Math.min(100, prev + step)
      })
    }, 26)

    const statusInterval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % STATUS_MESSAGES.length)
    }, 900)

    const timer = setTimeout(() => {
      setLoading(false)
      setTimeout(onComplete, 750)
    }, 3000)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
      clearInterval(statusInterval)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(12px)' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#050914]"
        >
          {/* Sliding curtain reveal on exit */}
          <motion.div
            className="pointer-events-none absolute inset-0 bg-[#050914]"
            exit={{ y: '-100%' }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
          />

          {!shouldReduceMotion && <NeuralCanvas />}

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(84,165,255,0.18),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,rgba(139,92,246,0.15),transparent_50%)]" />

          <motion.div
            className="relative z-10 flex flex-col items-center"
            exit={{ opacity: 0, y: -24, scale: 0.96 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {/* Monogram + gradient progress ring */}
            <div className="relative flex h-[168px] w-[168px] items-center justify-center">
              {!shouldReduceMotion && (
                <>
                  <motion.div
                    className="absolute inset-0 rounded-full border border-[#4f8fff]/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  />
                  <motion.div
                    className="absolute inset-3 rounded-full border border-[#8b5cf6]/20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
                  />
                </>
              )}

              <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 120 120">
                <defs>
                  <linearGradient id="ringGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#4f8fff" />
                    <stop offset="0.55" stopColor="#7a5cff" />
                    <stop offset="1" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
                <circle cx="60" cy="60" r={RING_RADIUS} fill="none" stroke="rgba(141,175,255,0.12)" strokeWidth="3" />
                <circle
                  cx="60"
                  cy="60"
                  r={RING_RADIUS}
                  fill="none"
                  stroke="url(#ringGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={RING_CIRCUMFERENCE}
                  strokeDashoffset={RING_CIRCUMFERENCE * (1 - progress / 100)}
                  style={{ transition: 'stroke-dashoffset 0.15s linear', filter: 'drop-shadow(0 0 6px rgba(98,163,255,0.5))' }}
                />
              </svg>

              <motion.span
                className="gradient-text text-4xl font-bold"
                style={{ fontFamily: "'Syne', 'Outfit', sans-serif" }}
                animate={shouldReduceMotion ? undefined : { scale: [1, 1.06, 1] }}
                transition={shouldReduceMotion ? undefined : { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                ES
              </motion.span>
            </div>

            {/* Name with letter stagger */}
            <div className="mt-8 flex overflow-hidden" style={{ fontFamily: "'Syne', 'Outfit', sans-serif" }}>
              {NAME.split('').map((char, i) => (
                <motion.span
                  key={i}
                  className="text-2xl font-semibold tracking-[0.22em] text-slate-100 md:text-3xl"
                  initial={shouldReduceMotion ? { opacity: 0 } : { y: '110%', opacity: 0, filter: 'blur(6px)' }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { y: '0%', opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </div>

            {/* Status + percentage */}
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-400">
              <span className="tabular-nums text-slate-300">{Math.round(progress)}%</span>
              <span className="h-3 w-px bg-[rgba(141,175,255,0.35)]" />
              <div className="relative h-5 w-56 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={statusIndex}
                    className="absolute left-0 whitespace-nowrap"
                    initial={shouldReduceMotion ? { opacity: 0 } : { y: 12, opacity: 0 }}
                    animate={shouldReduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { y: -12, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    {STATUS_MESSAGES[statusIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
