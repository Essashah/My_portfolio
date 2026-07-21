import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select'

const CustomCursor = () => {
  const shouldReduceMotion = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [hoveringInteractive, setHoveringInteractive] = useState(false)

  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)
  const ringX = useSpring(dotX, { stiffness: 380, damping: 30 })
  const ringY = useSpring(dotY, { stiffness: 380, damping: 30 })

  useEffect(() => {
    // Fine pointers only: never hijack the cursor on touch devices
    const finePointer = window.matchMedia('(pointer: fine)')
    if (!finePointer.matches || shouldReduceMotion) return

    setEnabled(true)
    document.documentElement.classList.add('custom-cursor-active')

    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
      const target = e.target as Element | null
      setHoveringInteractive(Boolean(target?.closest(INTERACTIVE_SELECTOR)))
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [dotX, dotY, shouldReduceMotion])

  if (!enabled) return null

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8ec8ff] shadow-[0_0_10px_rgba(120,170,255,0.9)]"
        style={{ x: dotX, y: dotY }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(142,200,255,0.55)]"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hoveringInteractive ? 44 : 28,
          height: hoveringInteractive ? 44 : 28,
          opacity: hoveringInteractive ? 0.9 : 0.55,
          backgroundColor: hoveringInteractive ? 'rgba(122, 156, 255, 0.12)' : 'rgba(122, 156, 255, 0)',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        aria-hidden="true"
      />
    </>
  )
}

export default CustomCursor
