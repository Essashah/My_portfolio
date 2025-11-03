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

  const skills = [
    { name: 'Python', level: 95, bgColor: 'bg-gradient-to-br from-yellow-500 to-blue-600', iconPath: '/icons/Python.svg', fallback: 'Py', textColor: 'text-white' },
    { name: 'TensorFlow', level: 90, bgColor: 'bg-gradient-to-br from-orange-600 to-orange-800', iconPath: '/icons/TensorFlow.svg', fallback: 'TF', textColor: 'text-white' },
    { name: 'PyTorch', level: 92, bgColor: 'bg-gradient-to-br from-orange-600 to-red-700', iconPath: '/icons/PyTorch.svg', fallback: 'PT', textColor: 'text-white' },
    { name: 'OpenCV', level: 95, bgColor: 'bg-gradient-to-br from-blue-500 to-purple-600', iconPath: '/icons/OpenCV.svg', fallback: 'CV', textColor: 'text-white' },
    { name: 'Deep Learning', level: 88, bgColor: 'bg-gradient-to-br from-purple-500 to-pink-600', iconPath: '/icons/deep-learning-svgrepo-com.svg', fallback: 'DL', textColor: 'text-white' },
    { name: 'NLP', level: 85, bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-600', iconPath: '/icons/nlp_10328667.png', fallback: 'NLP', textColor: 'text-white' },
    { name: 'scikit-learn', level: 90, bgColor: 'bg-gradient-to-br from-orange-500 to-orange-700', iconPath: '/icons/scikit-learn.svg', fallback: 'SK', textColor: 'text-white' },
    { name: 'Matplotlib', level: 90, bgColor: 'bg-gradient-to-br from-blue-500 to-blue-700', iconPath: '/icons/Matplotlib.svg', fallback: 'MP', textColor: 'text-white' },
    { name: 'React', level: 85, bgColor: 'bg-gradient-to-br from-blue-400 to-cyan-600', iconPath: '/icons/React.svg', fallback: 'RC', textColor: 'text-white' },
    { name: 'FastAPI', level: 90, bgColor: 'bg-gradient-to-br from-teal-600 to-teal-800', iconPath: '/icons/FastAPI.svg', fallback: 'FA', textColor: 'text-white' },
    { name: 'Flask', level: 88, bgColor: 'bg-gradient-to-br from-gray-600 to-gray-800', iconPath: '/icons/Flask.svg', fallback: 'FL', textColor: 'text-white' },
    { name: 'Node.js', level: 85, bgColor: 'bg-gradient-to-br from-green-500 to-green-700', iconPath: '/icons/Node.js.svg', fallback: 'NJ', textColor: 'text-white' },
    { name: 'TypeScript', level: 85, bgColor: 'bg-gradient-to-br from-blue-600 to-indigo-800', iconPath: '/icons/TypeScript.svg', fallback: 'TS', textColor: 'text-white' },
    { name: 'JavaScript', level: 88, bgColor: 'bg-gradient-to-br from-yellow-400 to-yellow-600', iconPath: '/icons/JavaScript.svg', fallback: 'JS', textColor: 'text-gray-900' },
    { name: 'Tailwind CSS', level: 90, bgColor: 'bg-gradient-to-br from-cyan-500 to-blue-600', iconPath: '/icons/Tailwind CSS.svg', fallback: 'TW', textColor: 'text-white' },
    { name: 'Docker', level: 80, bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-600', iconPath: '/icons/Docker.svg', fallback: 'DC', textColor: 'text-white' },
    { name: 'AWS', level: 75, bgColor: 'bg-gradient-to-br from-orange-500 to-orange-700', iconPath: '/icons/AWS.svg', fallback: 'AWS', textColor: 'text-white' },
    { name: 'Google Cloud', level: 75, bgColor: 'bg-gradient-to-br from-blue-500 to-blue-700', iconPath: '/icons/Google Cloud.svg', fallback: 'GCP', textColor: 'text-white' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gray-600 mx-auto rounded"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect rounded-xl p-6 transition-all duration-300 relative group cursor-pointer"
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: '0 0 40px rgba(59, 130, 246, 0.5), 0 0 80px rgba(59, 130, 246, 0.2)'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div 
                  className="absolute -inset-1 bg-blue-500/20 blur-2xl rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                />
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg ${skill.bgColor} flex items-center justify-center font-bold ${skill.textColor} shadow-lg overflow-hidden`}>
                        {skill.iconPath ? (
                          <img 
                            src={skill.iconPath} 
                            alt={skill.name}
                            className="w-full h-full object-contain p-1"
                            onError={(e) => {
                              // Fallback to text if image fails to load
                              e.currentTarget.style.display = 'none';
                              const parent = e.currentTarget.parentElement;
                              if (parent && !parent.querySelector('span')) {
                                const span = document.createElement('span');
                                span.className = 'text-xs';
                                span.textContent = skill.fallback;
                                parent.appendChild(span);
                              }
                            }}
                          />
                        ) : (
                          <span className="text-xs">{skill.fallback}</span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                    </div>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      className={`h-full ${skill.bgColor} rounded-full`}
                    />
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

