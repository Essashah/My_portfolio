import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
import { profile } from '../data/content'
import { scrollToId, setScrollLocked } from '../lib/scroll'
import Scramble from './ui/Scramble'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Capabilities' },
  { id: 'experience', label: 'Experience' },
  { id: 'toolkit', label: 'Toolkit' },
  { id: 'contact', label: 'Contact' },
]

const Nav = () => {
  const [active, setActive] = useState('')
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  // Tuck the bar away while reading downward; bring it back on any upward scroll.
  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(y > prev && y > 240)
    setScrolled(y > 40)
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => setScrollLocked(open), [open])

  const go = (id: string) => {
    setOpen(false)
    // Let the overlay release the scroll lock before Lenis animates.
    requestAnimationFrame(() => scrollToId(id))
  }

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled && !open
            ? 'border-[var(--line)] bg-[color-mix(in_srgb,var(--ink)_78%,transparent)] backdrop-blur-xl'
            : 'border-transparent'
        }`}
        animate={{ y: hidden && !open ? '-110%' : '0%' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="shell flex h-20 items-center justify-between">
          <button onClick={() => go('top')} className="group flex items-baseline gap-2 text-[15px] font-medium tracking-tight">
            {profile.name}
            <span className="serif text-lg italic text-accent transition-transform duration-500 group-hover:rotate-[360deg]">*</span>
          </button>

          <nav className="hidden items-center gap-1 rounded-full border hairline bg-[color-mix(in_srgb,var(--ink)_70%,transparent)] px-2 py-1.5 backdrop-blur-md lg:flex">
            {LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className={`mono relative rounded-full px-3.5 py-1.5 text-[11px] uppercase tracking-[0.12em] transition-colors ${
                  active === link.id ? 'text-paper' : 'text-muted hover:text-paper'
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-ink-3"
                    transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                  />
                )}
                <Scramble text={link.label} className="relative" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={`mailto:${profile.email}`} className="pill-solid hidden md:inline-flex">
              Let’s talk
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="pill mono text-[11px] uppercase tracking-[0.12em] lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col justify-end bg-ink-2 px-5 pb-10 pt-28 lg:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul className="space-y-1">
              {LINKS.map((link, i) => (
                <li key={link.id} className="overflow-hidden border-b hairline">
                  <motion.button
                    onClick={() => go(link.id)}
                    className="flex w-full items-baseline justify-between py-3 text-left"
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 + i * 0.05 }}
                  >
                    <span className="display text-5xl">{link.label}</span>
                    <span className="label">0{i + 1}</span>
                  </motion.button>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="pill-solid">Email me</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="pill">LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="pill">GitHub</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Nav
