import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

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
    {
      category: 'AI & Machine Learning',
      icon: '🧠',
      skills: [
        { name: 'Python', level: 95, bgColor: 'bg-gradient-to-br from-yellow-500 to-blue-600', iconPath: '/icons/Python.svg' },
        { name: 'TensorFlow', level: 90, bgColor: 'bg-gradient-to-br from-orange-600 to-orange-800', iconPath: '/icons/TensorFlow.svg' },
        { name: 'PyTorch', level: 92, bgColor: 'bg-gradient-to-br from-orange-600 to-red-700', iconPath: '/icons/PyTorch.svg' },
        { name: 'OpenCV', level: 95, bgColor: 'bg-gradient-to-br from-blue-500 to-purple-600', iconPath: '/icons/OpenCV.svg' },
        { name: 'Deep Learning', level: 88, bgColor: 'bg-gradient-to-br from-purple-500 to-pink-600', iconPath: '/icons/deep-learning-svgrepo-com.svg' },
        { name: 'NLP', level: 85, bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-600', iconPath: '/icons/nlp_10328667.png' },
        { name: 'scikit-learn', level: 90, bgColor: 'bg-gradient-to-br from-orange-500 to-orange-700', iconPath: '/icons/scikit-learn.svg' },
        { name: 'Matplotlib', level: 90, bgColor: 'bg-gradient-to-br from-blue-500 to-blue-700', iconPath: '/icons/Matplotlib.svg' },
      ]
    },
    {
      category: 'Web Development',
      icon: '🌐',
      skills: [
        { name: 'React', level: 85, bgColor: 'bg-gradient-to-br from-blue-400 to-cyan-600', iconPath: '/icons/React.svg' },
        { name: 'TypeScript', level: 85, bgColor: 'bg-gradient-to-br from-blue-600 to-indigo-800', iconPath: '/icons/TypeScript.svg' },
        { name: 'JavaScript', level: 88, bgColor: 'bg-gradient-to-br from-yellow-400 to-yellow-600', iconPath: '/icons/JavaScript.svg' },
        { name: 'Tailwind CSS', level: 90, bgColor: 'bg-gradient-to-br from-cyan-500 to-blue-600', iconPath: '/icons/Tailwind CSS.svg' },
        { name: 'Node.js', level: 85, bgColor: 'bg-gradient-to-br from-green-500 to-green-700', iconPath: '/icons/Node.js.svg' },
      ]
    },
    {
      category: 'Backend & APIs',
      icon: '⚙️',
      skills: [
        { name: 'FastAPI', level: 90, bgColor: 'bg-gradient-to-br from-teal-600 to-teal-800', iconPath: '/icons/FastAPI.svg' },
        { name: 'Flask', level: 88, bgColor: 'bg-gradient-to-br from-gray-600 to-gray-800', iconPath: '/icons/Flask.svg' },
        { name: 'Express.js', level: 85, bgColor: 'bg-gradient-to-br from-gray-700 to-gray-900', iconPath: '/icons/png-clipart-mean-solution-stack-express-js-node-js-javascript-github-text-trademark-thumbnail.png' },
        { name: 'NestJS', level: 85, bgColor: 'bg-gradient-to-br from-red-600 to-red-800', iconPath: '/icons/NestJS.svg.png' },
        { name: 'PostgreSQL', level: 82, bgColor: 'bg-gradient-to-br from-blue-600 to-blue-800', iconPath: '/icons/Postgresql_elephant.svg.png' },
        { name: 'MongoDB', level: 80, bgColor: 'bg-gradient-to-br from-green-600 to-green-800', iconPath: '/icons/mongodb-logo-png_seeklogo-481256.png' },
        { name: 'Redis', level: 78, bgColor: 'bg-gradient-to-br from-red-500 to-red-700', iconPath: '/icons/Redis-Logo.wine.png' },
      ]
    },
    {
      category: 'DevOps & Cloud',
      icon: '☁️',
      skills: [
        { name: 'Docker', level: 80, bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-600', iconPath: '/icons/Docker.svg' },
        { name: 'Kubernetes', level: 78, bgColor: 'bg-gradient-to-br from-blue-600 to-blue-800', iconPath: '/icons/Kubernetes_logo_without_workmark.svg.png' },
        { name: 'AWS', level: 75, bgColor: 'bg-gradient-to-br from-orange-500 to-orange-700', iconPath: '/icons/AWS.svg' },
        { name: 'Google Cloud', level: 75, bgColor: 'bg-gradient-to-br from-blue-500 to-blue-700', iconPath: '/icons/Google Cloud.svg' },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              My <span className="gradient-text">Skills</span>
            </motion.h2>
            <motion.div 
              className="w-32 h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto rounded-full mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.p 
              className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Expertise organized by domain • Hover for interactive 3D effects
            </motion.p>
          </motion.div>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="relative"
              >
                {/* Category Header */}
                <motion.div
                  className="flex items-center gap-4 mb-8 group/category"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div 
                    className="text-5xl"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">{category.category}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-700 via-gray-600 to-transparent relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                      initial={{ x: '-100%' }}
                      whileInView={{ x: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: categoryIndex * 0.2 + 0.3 }}
                    />
                  </div>
                  <motion.span
                    className="text-sm text-gray-400 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.2 + 0.5 }}
                  >
                    {category.skills.length} skills
                  </motion.span>
                </motion.div>

                {/* Skills Grid - Optimized */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" style={{ contain: 'layout style paint' }}>
                  {category.skills.map((skill, skillIndex) => {
                    const globalIndex = categoryIndex * 10 + skillIndex
                    const proficiency = skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Intermediate'
                    const proficiencyColor = skill.level >= 90 ? 'text-green-400' : skill.level >= 80 ? 'text-blue-400' : 'text-yellow-400'
                    
                    return (
                      <motion.div
                        key={skillIndex}
                        variants={itemVariants}
                        className="glass-effect rounded-2xl p-6 transition-all duration-300 relative group cursor-pointer perspective-1000 overflow-hidden"
                        style={{ 
                          willChange: 'transform',
                          backfaceVisibility: 'hidden',
                          transform: 'translateZ(0)',
                          transformStyle: 'preserve-3d'
                        }}
                        whileHover={{ 
                          scale: 1.05, 
                          y: -10,
                          rotateY: 5,
                          rotateX: 2,
                        }}
                        transition={{ 
                          type: 'spring', 
                          stiffness: 300,
                          damping: 30,
                          mass: 1
                        }}
                      >
                        {/* Optimized Glow Effects - Single layer for performance */}
                        <motion.div 
                          className="absolute -inset-1 bg-blue-500/25 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ willChange: 'opacity' }}
                        />
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        
                        {/* Content */}
                        <div className="relative z-10">
                          {/* Icon and Title Section */}
                          <div className="flex items-start justify-between mb-5">
                            <div className="flex items-center gap-4 flex-1">
                              <motion.div 
                                className={`w-16 h-16 rounded-2xl ${skill.bgColor} flex items-center justify-center shadow-xl overflow-hidden relative group/icon flex-shrink-0`}
                                whileHover={{ rotate: 360, scale: 1.15 }}
                                transition={{ 
                                  rotate: { duration: 0.6, ease: 'easeInOut' },
                                  scale: { duration: 0.2, type: 'spring', stiffness: 400 }
                                }}
                                style={{ willChange: 'transform' }}
                              >
                                <img 
                                  src={skill.iconPath} 
                                  alt={skill.name}
                                  className="w-full h-full object-contain p-2.5 transition-transform duration-300 group-hover/icon:scale-105"
                                  loading="lazy"
                                  decoding="async"
                                />
                                {/* Simplified shine effect - only on hover */}
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
                                  initial={{ x: '-100%' }}
                                  whileHover={{ x: '100%' }}
                                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                                />
                              </motion.div>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-lg font-bold text-white mb-1 truncate">{skill.name}</h3>
                                <div className={`text-xs font-semibold ${proficiencyColor} flex items-center gap-1`}>
                                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                                  {proficiency}
                                </div>
                              </div>
                            </div>
                            <motion.div
                              className="flex-shrink-0"
                              whileHover={{ scale: 1.2 }}
                              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                              style={{ willChange: 'transform' }}
                            >
                              <span className="text-xl font-bold text-blue-400">{skill.level}%</span>
                            </motion.div>
                          </div>
                          
                          {/* Optimized Progress Bar */}
                          <div className="w-full bg-gray-800/60 rounded-full h-3 overflow-hidden relative">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true, margin: '-50px' }}
                              transition={{ 
                                duration: 1.5, 
                                delay: globalIndex * 0.02, 
                                ease: [0.22, 1, 0.36, 1]
                              }}
                              className={`h-full ${skill.bgColor} rounded-full relative overflow-hidden`}
                              style={{ willChange: 'width' }}
                            >
                              {/* Simplified shine - only when visible */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                initial={{ x: '-100%' }}
                                whileInView={{ x: '200%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: globalIndex * 0.02 + 1.5 }}
                              />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
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

