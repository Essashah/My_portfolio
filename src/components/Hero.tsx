import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FaArrowDown, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import ParticleField from './effects/ParticleField'
import MagneticButton from './effects/MagneticButton'

interface HeroProps {
  setActiveSection: (section: string) => void
}

const ROLES = ['AI Systems', 'Backend Platforms', 'Vision Pipelines', 'GenAI Products']

const Hero = ({ setActiveSection }: HeroProps) => {
  const sectionRef = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection('hero')
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setActiveSection])

  useEffect(() => {
    if (shouldReduceMotion) return
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }, 2600)
    return () => clearInterval(interval)
  }, [shouldReduceMotion])

  const containerVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
          },
        },
      }

  const itemVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: 'easeOut' },
        },
      }

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" ref={sectionRef} className="section-shell relative flex items-center pt-36">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="section-panel relative overflow-hidden"
        >
          <ParticleField />

          {!shouldReduceMotion && (
            <>
              <motion.div
                className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-[#4f8fff]/30 blur-3xl"
                animate={{ x: [0, 14, 0], y: [0, 8, 0], opacity: [0.45, 0.6, 0.45] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[#8b5cf6]/25 blur-3xl"
                animate={{ x: [0, -16, 0], y: [0, -10, 0], opacity: [0.35, 0.52, 0.35] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              />
            </>
          )}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_right,rgba(79,143,255,0.18),transparent_45%)]" />

          <div className="relative grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
              <motion.div variants={itemVariants}>
                <motion.div
                  className="premium-chip"
                >
                  AI Engineer - Builder - Research Mindset
                </motion.div>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
                style={{ fontFamily: "'Syne', 'Outfit', sans-serif", letterSpacing: '-0.04em' }}
              >
                <span className="shimmer-text">I Build Production</span>
                <span className="block h-[1.25em] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={ROLES[roleIndex]}
                      className="gradient-text inline-block"
                      initial={shouldReduceMotion ? { opacity: 0 } : { y: '100%', opacity: 0 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { y: '0%', opacity: 1 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { y: '-100%', opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {ROLES[roleIndex]}.
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl"
              >
                From model experimentation to secure APIs and scalable cloud runtimes, I deliver
                AI products with reliability, observability, and business impact built in.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3"
              >
                <MagneticButton>
                  <motion.a
                    href="https://github.com/Essashah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary"
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                  >
                    <FaGithub className="text-base" />
                    <span>GitHub</span>
                  </motion.a>
                </MagneticButton>

                <MagneticButton>
                  <motion.a
                    href="https://www.linkedin.com/in/essa-shah-7a0a5a294"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-secondary"
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                  >
                    <FaLinkedin className="text-base" />
                    <span>LinkedIn</span>
                  </motion.a>
                </MagneticButton>

                <MagneticButton>
                  <motion.a
                    href="mailto:essashah10@gmail.com"
                    className="button-secondary"
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                  >
                    <FaEnvelope className="text-base" />
                    <span>Email</span>
                  </motion.a>
                </MagneticButton>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-2">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="premium-chip">GenAI Workflow Design</span>
                  <span className="premium-chip">Backend + MLOps Delivery</span>
                </div>
                <motion.button
                  onClick={scrollToAbout}
                  className="group inline-flex items-center gap-2 rounded-full border border-[rgba(141,175,255,0.28)] bg-[rgba(10,17,30,0.72)] px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-[rgba(141,175,255,0.48)] hover:text-white"
                  whileHover={shouldReduceMotion ? undefined : { y: -1 }}
                >
                  <span>Scroll to explore</span>
                  <motion.div
                    animate={shouldReduceMotion ? undefined : { y: [0, 3, 0] }}
                    transition={
                      shouldReduceMotion
                        ? undefined
                        : { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }
                    }
                  >
                    <FaArrowDown />
                  </motion.div>
                </motion.button>
              </motion.div>
            </div>

            <motion.aside variants={itemVariants} className="space-y-4 lg:pt-6">
              <div className="surface-card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-200">Current Focus</p>
                <p className="mt-2 text-xl font-semibold text-slate-100" style={{ fontFamily: "'Syne', 'Outfit', sans-serif" }}>
                  Multi-model Systems + Guardrails
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Deploying practical AI in regulated environments with resilient architecture and
                  measurable outcomes.
                </p>
              </div>

              <div className="surface-card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Delivery Principles</p>
                <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-300">•</span>
                    <span>Ship models behind reliable, observable APIs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-300">•</span>
                    <span>Design for compliance and auditability from day one</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-300">•</span>
                    <span>Measure impact, not just accuracy</span>
                  </li>
                </ul>
              </div>
            </motion.aside>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default Hero
