import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { about, profile } from '../data/content'
import { Fade, RevealLines } from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'

const About = () => {
  const portraitRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: portraitRef, offset: ['start end', 'end start'] })
  const drift = useTransform(scrollYProgress, [0, 1], ['6%', '-6%'])

  return (
    <section id="about" data-tone="light" className="shell py-28 md:py-40">
      <SectionHeader index="01" label="About" aside="Engineer · Educator" />

      <div className="mt-14 grid gap-14 md:mt-20 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <Fade>
            <div ref={portraitRef} className="group relative aspect-[4/5] overflow-hidden rounded-[20px] bg-ink-3">
              <motion.img
                src="/icons/my emoji.png"
                alt={`Portrait of ${profile.name}`}
                className="absolute inset-0 h-full w-full scale-110 object-contain object-bottom pt-10 transition-transform duration-700 ease-out-expo group-hover:scale-[1.15]"
                style={{ y: drift }}
              />
              <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
                <span className="mono text-[11px] uppercase tracking-[0.12em] text-muted">{profile.name}</span>
                <span className="mono text-[11px] uppercase tracking-[0.12em] text-muted">Essex, UK</span>
              </div>
            </div>
          </Fade>
        </div>

        <div className="md:col-span-8 md:pl-6">
          <h2 className="display text-[clamp(2.5rem,6vw,5.5rem)]">
            <RevealLines
              lines={[about.heading[0], <span className="serif italic tracking-[-0.02em] text-muted">{about.heading[1]}</span>]}
            />
          </h2>

          <div className="mt-12 grid gap-6 text-[15px] leading-[1.75] text-muted md:grid-cols-2 md:gap-10 md:text-base">
            {about.paragraphs.map((p, i) => (
              <Fade key={i} delay={i * 0.08}>
                <p>{p}</p>
              </Fade>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-3 border-t hairline">
            {about.stats.map((s, i) => (
              <Fade key={s.label} delay={i * 0.08} className={`pt-6 ${i > 0 ? 'border-l hairline pl-4 md:pl-6' : ''}`}>
                <p className="display text-5xl md:text-7xl">{s.value}</p>
                <p className="mt-3 max-w-[12rem] text-xs leading-snug text-muted md:text-sm">{s.label}</p>
              </Fade>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-28 md:mt-36">
        <Fade>
          <p className="label">How I work</p>
        </Fade>
        <div className="mt-8 grid gap-px overflow-hidden rounded-[20px] border hairline bg-[var(--line)] md:grid-cols-3">
          {about.principles.map((p, i) => (
            <Fade key={p.title} delay={i * 0.08} y={16} className="bg-ink">
              <div className="group flex h-full min-h-[240px] flex-col justify-between p-7 transition-colors duration-500 hover:bg-ink-2 md:p-8">
                <span className="mono text-[11px] text-faint transition-colors group-hover:text-accent">0{i + 1}</span>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.body}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
