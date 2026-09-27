import { useEffect, useRef } from 'react'

const SPACING = 22
const RADIUS = 170

/**
 * Dot-matrix "signal field". A grid of points shimmers with layered sine
 * waves (a cheap stand-in for noise) and bends away from the pointer, with
 * dots nearest the cursor lit in the accent colour. Pauses off-screen and
 * renders a single still frame for reduced-motion users.
 */
const DotField = ({ className = '' }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999 }
    let width = 0
    let height = 0
    let cols = 0
    let rows = 0
    let frame = 0
    let running = false
    let elapsed = 0
    let last = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cols = Math.ceil(width / SPACING) + 1
      rows = Math.ceil(height / SPACING) + 1
      if (reduce) draw(0)
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height)
      pointer.x += (pointer.tx - pointer.x) * 0.12
      pointer.y += (pointer.ty - pointer.y) * 0.12
      const offsetX = (width - (cols - 1) * SPACING) / 2

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          let x = offsetX + c * SPACING
          let y = r * SPACING

          const wave =
            Math.sin(c * 0.21 + t * 0.6) * Math.cos(r * 0.17 - t * 0.45) +
            Math.sin((c + r) * 0.09 + t * 0.3) * 0.6
          let intensity = 0.16 + Math.max(0, wave) * 0.34

          const dx = x - pointer.x
          const dy = y - pointer.y
          const dist = Math.hypot(dx, dy)
          let hot = 0
          if (dist < RADIUS) {
            const force = 1 - dist / RADIUS
            const eased = force * force
            x += (dx / (dist || 1)) * eased * 14
            y += (dy / (dist || 1)) * eased * 14
            intensity += eased * 0.8
            hot = eased
          }

          const size = 1.1 + intensity * 1.4
          ctx.fillStyle =
            hot > 0.35
              ? `rgba(255, 90, 31, ${Math.min(1, intensity)})`
              : `rgba(239, 233, 223, ${Math.min(0.9, intensity)})`
          ctx.fillRect(x - size / 2, y - size / 2, size, size)
        }
      }
    }

    const loop = (now: number) => {
      elapsed += Math.min(0.05, (now - last) / 1000)
      last = now
      draw(elapsed)
      frame = requestAnimationFrame(loop)
    }

    const play = () => {
      if (running || reduce) return
      running = true
      last = performance.now()
      frame = requestAnimationFrame(loop)
    }

    const pause = () => {
      running = false
      cancelAnimationFrame(frame)
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.tx = e.clientX - rect.left
      pointer.ty = e.clientY - rect.top
      if (pointer.x < -1000) {
        pointer.x = pointer.tx
        pointer.y = pointer.ty
      }
    }

    const onLeave = () => {
      pointer.tx = -9999
      pointer.ty = -9999
      pointer.x = -9999
      pointer.y = -9999
    }

    const observer = new IntersectionObserver(([entry]) => (entry.isIntersecting ? play() : pause()))
    const resizeObserver = new ResizeObserver(resize)

    resize()
    observer.observe(canvas)
    resizeObserver.observe(canvas)
    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)

    return () => {
      pause()
      observer.disconnect()
      resizeObserver.disconnect()
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className={`h-full w-full ${className}`} />
}

export default DotField
