import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { FaArrowDown, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import TypingAnimation from './TypingAnimation'
import { techIcons } from '../data/techIcons'

interface HeroProps {
  setActiveSection: (section: string) => void
}

const Hero = ({ setActiveSection }: HeroProps) => {
  const sectionRef = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()

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

  const spotlightPriority = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'FastAPI',
    'Django',
    'AWS',
    'TensorFlow',
  ]

  const spotlightStack = spotlightPriority
    .map((name) => techIcons.find((item) => item.name === name))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))

  return (
    <section id="hero" ref={sectionRef} className="section-shell relative flex items-center pt-36">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="section-panel relative overflow-hidden"
        >
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

          <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
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
                className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-slate-50 md:text-7xl"
                style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
              >
                <TypingAnimation text="I Architect Production AI Systems." />
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
            <motion.a
              href="https://github.com/Essashah"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
              whileHover={shouldReduceMotion ? undefined : { y: -1 }}
              whileTap={shouldReduceMotion ? undefined : { y: 0 }}
            >
              <FaGithub className="text-base" />
              <span>GitHub</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/essa-shah-7a0a5a294"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
              whileHover={shouldReduceMotion ? undefined : { y: -1 }}
              whileTap={shouldReduceMotion ? undefined : { y: 0 }}
            >
              <FaLinkedin className="text-base" />
              <span>LinkedIn</span>
            </motion.a>

            <motion.a
              href="mailto:essashah10@gmail.com"
              className="button-secondary"
              whileHover={shouldReduceMotion ? undefined : { y: -1 }}
              whileTap={shouldReduceMotion ? undefined : { y: 0 }}
            >
              <FaEnvelope className="text-base" />
              <span>Email</span>
            </motion.a>
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
                <p className="mt-2 text-xl font-semibold text-slate-100" style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}>
                  Multi-model Systems + Guardrails
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Deploying practical AI in regulated environments with resilient architecture and
                  measurable outcomes.
                </p>
              </div>

              <div className="surface-card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Spotlight Stack</p>
                <div className="mt-4 grid grid-cols-4 gap-3">
                  {spotlightStack.map((stack) => (
                    <div key={stack.name} className="icon-tile h-14 w-14">
                      <img src={stack.iconPath} alt={stack.name} className="h-9 w-9 object-contain" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

