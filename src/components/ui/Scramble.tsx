import { useCallback, useEffect, useRef, useState } from 'react'

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/<>_-+*'

/**
 * Decodes text through random glyphs, left to right. Runs on mount when
 * `autoplay` is set and on every hover of the nearest `.group` ancestor.
 */
export const useScramble = (text: string, autoplay = false) => {
  const [output, setOutput] = useState(text)
  const frame = useRef(0)

  const play = useCallback(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    cancelAnimationFrame(frame.current)
    const start = performance.now()
    const duration = Math.min(700, 220 + text.length * 28)

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      const revealed = Math.floor(progress * text.length)
      setOutput(
        text
          .split('')
          .map((char, i) =>
            i < revealed || char === ' ' ? char : GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
          )
          .join(''),
      )
      if (progress < 1) frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
  }, [text])

  useEffect(() => {
    if (autoplay) play()
    return () => cancelAnimationFrame(frame.current)
  }, [autoplay, play])

  return { output, play }
}

interface ScrambleProps {
  text: string
  className?: string
  autoplay?: boolean
}

const Scramble = ({ text, className = '', autoplay = false }: ScrambleProps) => {
  const { output, play } = useScramble(text, autoplay)
  return (
    <span className={className} onMouseEnter={play} aria-label={text}>
      <span aria-hidden="true">{output}</span>
    </span>
  )
}

export default Scramble
