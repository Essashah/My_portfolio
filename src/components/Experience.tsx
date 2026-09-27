import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { experience } from '../data/content'
import { Fade, RevealLines } from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'

const EASE = [0.22, 1, 0.36, 1] as const

const Experience = () => {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="experience" className="shell py-28 md:py-40">
      <SectionHeader index="03" label="Experience" aside="2020 — Present" />

      <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-32">
            <h2 className="display text-[clamp(2.5rem,6vw,5.5rem)]">
              <RevealLines lines={['Where', 'I’ve', <span className="serif italic tracking-[-0.02em] text-muted">built.</span>]} />
            </h2>
            <Fade delay={0.1}>
              <p className="mt-8 max-w-xs text-[15px] leading-relaxed text-muted">
                Six roles across financial services, AI products, sports analytics, non-profit
                infrastructure and education.
              </p>
            </Fade>
          </div>
        </div>

        <ol className="border-b hairline md:col-span-8">
          {experience.map((role, i) => {
            const isOpen = open === i
            return (
              <li key={role.title + role.company} className="border-t hairline">
                <Fade y={12} delay={i * 0.03}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group grid w-full grid-cols-[1fr_auto] items-start gap-x-6 gap-y-2 py-7 text-left md:grid-cols-[11rem_1fr_auto] md:py-8"
                  >
                    <span className="mono col-span-2 text-[11px] uppercase tracking-[0.1em] text-faint whitespace-nowrap md:col-span-1 md:pt-2">
                      {role.period}
                    </span>
                    <span>
                      <span className="block text-xl font-medium tracking-tight transition-colors group-hover:text-accent md:text-2xl">
                        {role.title}
                      </span>
                      <span className="mt-1 block text-[15px] text-muted">{role.company}</span>
                    </span>
                    <span
                      aria-hidden
                      className={`mt-1 flex h-8 w-8 items-center justify-center rounded-full border hairline text-sm transition-all duration-500 ease-out-expo ${
                        isOpen ? 'rotate-45 border-accent bg-accent text-ink' : 'group-hover:border-paper'
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="pb-9 md:pl-[calc(11rem+1.5rem)]">
                          <p className="text-[15px] text-paper/90">{role.summary}</p>
                          <ul className="mt-5 space-y-3">
                            {role.points.map((point) => (
                              <li key={point} className="flex gap-4 text-[15px] leading-relaxed text-muted">
                                <span className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Fade>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default Experience
