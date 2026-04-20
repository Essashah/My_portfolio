import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import AnimatedCounter from './AnimatedCounter'

interface AboutProps {
  setActiveSection: (section: string) => void
}

const About = ({ setActiveSection }: AboutProps) => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection('about')
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setActiveSection])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" ref={sectionRef} className="section-shell flex items-center">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-14"
        >
          <motion.div variants={itemVariants} className="text-center">
            <p className="section-kicker">About</p>
            <h2 className="section-title">
              Engineering AI products with precision
            </h2>
            <p className="section-subtitle mx-auto">
              Product thinking, production-grade architecture, and ML rigor from experimentation
              through deployment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <div className="relative">
                  <motion.div
                    className="mx-auto h-72 w-72 rounded-3xl border border-[rgba(141,175,255,0.25)] bg-[rgba(14,22,38,0.88)] p-2 shadow-[0_20px_56px_-32px_rgba(91,140,255,0.72)] md:h-80 md:w-80"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <motion.div
                      className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[1.3rem] bg-gradient-to-br from-[#172745] to-[#0b1528]"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#4f8fff]/35 to-transparent"></div>
                      <img 
                        src="/icons/my emoji.png" 
                        alt="Essa Shah"
                        className="relative z-10 h-full w-full translate-x-3 rounded-[1.3rem] object-cover"
                      />
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-4 left-0 right-0 mx-auto h-1 w-1/2 rounded bg-gradient-to-r from-[#4f8fff] to-[#8b5cf6]"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="order-1 md:order-2 space-y-6">
              <h3 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                AI/ML Engineer & Computer Vision Specialist
              </h3>
              <p className="leading-relaxed text-slate-300">
                I build robust AI systems that bridge model quality and production constraints.
                My work spans experimentation, backend architecture, observability, and deployment
                workflows for real-world environments.
              </p>
              <p className="leading-relaxed text-slate-300">
                I focus on computer vision, generative AI integrations, and scalable backend services
                that keep systems maintainable under growth and strict compliance expectations.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="surface-card interactive-card p-4 text-center">
                  <div className="text-3xl font-semibold text-slate-100">
                    <AnimatedCounter value={5} suffix="+" />
                  </div>
                  <div className="mt-1 text-xs text-slate-400 md:text-sm">Years Experience</div>
                </div>
                <div className="surface-card interactive-card p-4 text-center">
                  <div className="text-3xl font-semibold text-slate-100">26</div>
                  <div className="mt-1 text-xs text-slate-400 md:text-sm">Stack Icons Used</div>
                </div>
                <div className="surface-card interactive-card p-4 text-center">
                  <div className="text-3xl font-semibold text-slate-100">
                    <AnimatedCounter value={100} suffix="%" />
                  </div>
                  <div className="mt-1 text-xs text-slate-400 md:text-sm">Execution Focus</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

