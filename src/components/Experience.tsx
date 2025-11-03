import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { FaBriefcase } from 'react-icons/fa'

interface ExperienceProps {
  setActiveSection: (section: string) => void
}

const Experience = ({ setActiveSection }: ExperienceProps) => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection('experience')
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setActiveSection])

  const experiences = [
    {
      title: 'AI Backend Engineer',
      company: 'Oont',
      period: 'September 2025 – Present',
      description: 'Developed and maintained scalable backend APIs and migrated legacy systems.',
      achievements: [
        'Developed scalable backend APIs in Node.js/TypeScript for high-traffic applications',
        'Migrated and modernized legacy modules using NestJS, Express.js, PostgreSQL, and Redis',
        'Collaborated with frontend, data, and product teams using GitHub + Slack in Agile sprints',
        'Ensured system reliability, performance optimization, and robust error handling',
      ],
    },
    {
      title: 'Computer Vision Engineer – Sports Analytics',
      company: 'Scout-Me Online',
      period: 'September 2025 – Present',
      description: 'Developed real-time computer vision systems for sports analytics.',
      achievements: [
        'Developed real-time computer vision system to detect and track fast-moving objects',
        'Built AI-driven sports analytics pipeline for gameplay analysis',
        'Designed deep learning–based tracking system for continuous object monitoring',
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: 'Qadims Lumiere School',
      period: '2021 – 2023',
      description: 'Developed ML models and data processing pipelines.',
      achievements: [
        'Developed and deployed machine learning models for personalization',
        'Built data processing pipelines for structured analysis and reporting',
        'Collaborated in Agile environment to deliver AI-driven features',
      ],
    },
    {
      title: 'Web Development Instructor',
      company: 'Qadims Lumiere School',
      period: '2020 – 2021',
      description: 'Taught programming fundamentals and AI/ML concepts.',
      achievements: [
        'Taught programming fundamentals and introduced AI and ML concepts',
        'Mentored students on Python projects and basic ML workflows',
      ],
    },
  ]

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
    <section
      id="experience"
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
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gray-600 mx-auto rounded"></div>
          </motion.div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <motion.div 
                  className="glass-effect rounded-2xl p-8 transition-all duration-300 relative group cursor-pointer"
                  whileHover={{ 
                    boxShadow: '0 0 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(59, 130, 246, 0.2)'
                  }}
                >
                  <motion.div 
                    className="absolute -inset-1 bg-blue-500/20 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                  />
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center">
                        <FaBriefcase className="text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                        <p className="text-blue-400">{exp.company}</p>
                      </div>
                    </div>
                    <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                  </div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-400">
                          <span className="text-white mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

