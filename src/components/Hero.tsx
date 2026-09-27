import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { hero, profile } from '../data/content'
import { scrollToId } from '../lib/scroll'
import DotField from './effects/DotField'
import LocalTime from './ui/LocalTime'
import Magnetic from './ui/Magnetic'
import { RevealLines } from './ui/Reveal'

const EASE = [0.22, 1, 0.36, 1] as const

const Hero = ({ ready }: { ready: boolean }) => {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const lift = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const meta = [
    { k: 'Role', v: profile.role },
    { k: 'Based in', v: profile.location },
    { k: 'Local time', v: <LocalTime /> },
    {
      k: 'Status',
      v: (
        <span className="inline-flex items-center gap-2">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
          {hero.status}
        </span>
      ),
    },
  ]

  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <motion.div
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_70%_at_68%_42%,black_25%,transparent_78%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 1.6, delay: 0.3 }}
      >
        <DotField />
      </motion.div>

      <div className="shell relative flex flex-1 flex-col pb-10 pt-28 md:pb-12 md:pt-32">
        <motion.dl
          className="grid grid-cols-2 gap-x-6 gap-y-4 border-t hairline pt-5 md:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {meta.map((item) => (
            <div key={item.k}>
              <dt className="label text-faint">{item.k}</dt>
              <dd className="mt-1.5 text-[13px] text-paper/90">{item.v}</dd>
            </div>
          ))}
        </motion.dl>

        <motion.div className="mt-auto" style={{ y: lift, opacity: fade }}>
          {ready && (
            <h1 className="display pt-16 text-[clamp(3.1rem,10.4vw,10.5rem)]">
              <RevealLines
                immediate
                lines={[
                  'Engineering AI',
                  <>
                    that works <span className="serif italic tracking-[-0.02em] text-accent">beyond</span>
                  </>,
                  <span className="serif italic tracking-[-0.02em]">the demo.</span>,
                ]}
              />
            </h1>
          )}

          <motion.div
            className="mt-10 grid gap-8 border-t hairline pt-6 md:mt-14 md:grid-cols-12"
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 1, ease: EASE, delay: 0.55 }}
          >
            <p className="max-w-md text-[15px] leading-relaxed text-muted md:col-span-6 md:text-base">
              <span className="text-paper">I’m Essa</span> — {hero.intro}
            </p>
            <div className="flex flex-col justify-between gap-6 md:col-span-6 md:items-end">
              <p className="label md:text-right">{hero.current}</p>
              <div className="flex flex-wrap items-center gap-3">
                <Magnetic>
                  <button onClick={() => scrollToId('experience')} className="pill-solid">
                    View experience
                    <span aria-hidden>↘</span>
                  </button>
                </Magnetic>
                <Magnetic>
                  <a href={`mailto:${profile.email}`} className="pill">
                    Get in touch
                  </a>
                </Magnetic>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
