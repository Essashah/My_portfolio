import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { techIcons } from '../data/techIcons'

interface SkillsProps {
  setActiveSection: (section: string) => void
}

const Skills = ({ setActiveSection }: SkillsProps) => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection('skills')
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setActiveSection])

  const skillCategories = [
    { key: 'ai-ml', label: 'AI & Machine Learning', icon: '🧠', description: 'Modeling, CV, NLP, and ML foundations.' },
    { key: 'frontend', label: 'Frontend Engineering', icon: '🧩', description: 'Modern UX delivery and interface architecture.' },
    { key: 'backend', label: 'Backend & APIs', icon: '⚙️', description: 'Service design, APIs, and platform reliability.' },
    { key: 'cloud-devops', label: 'Cloud & DevOps', icon: '☁️', description: 'Infrastructure, orchestration, and deployment.' },
    { key: 'database', label: 'Data Infrastructure', icon: '🗄️', description: 'State, storage, and low-latency data access.' },
  ] as const

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <section id="skills" ref={sectionRef} className="section-shell flex items-center">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants} className="mb-14 text-center">
            <p className="section-kicker">Skills</p>
            <h2 className="section-title">
              Capability stack with full icon coverage
            </h2>
            <p className="section-subtitle mx-auto">
              Every icon from the portfolio asset library is mapped to the related delivery area.
            </p>
          </motion.div>

          <div className="space-y-10">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="surface-card p-6 md:p-7"
              >
                <motion.div className="mb-6 flex items-center gap-4">
                  <span className="icon-tile text-2xl">{category.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100 md:text-2xl">{category.label}</h3>
                    <p className="text-sm text-slate-400">{category.description}</p>
                  </div>
                  <span className="ml-auto text-sm text-slate-400">
                    {techIcons.filter((skill) => skill.category === category.key).length} skills
                  </span>
                </motion.div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {techIcons
                    .filter((skill) => skill.category === category.key)
                    .map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="interactive-card rounded-xl border border-[rgba(141,175,255,0.2)] bg-[rgba(9,15,27,0.85)] p-4"
                      whileHover={{ y: -4 }}
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div className="icon-tile h-11 w-11">
                          <img
                            src={skill.iconPath}
                            alt={skill.name}
                            className="h-8 w-8 object-contain"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="truncate text-sm font-semibold text-slate-100 md:text-base">
                            {skill.name}
                          </h4>
                          <p className="text-xs text-slate-400">{skill.note}</p>
                        </div>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-[rgba(26,40,64,0.78)]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, margin: '-50px' }}
                          transition={{
                            duration: 0.9,
                            delay: categoryIndex * 0.08 + skillIndex * 0.02,
                            ease: 'easeOut',
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-[#4f8fff] via-[#7a5cff] to-[#22d3ee]"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default Skills

