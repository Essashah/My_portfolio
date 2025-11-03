import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

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
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gray-600 mx-auto rounded"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <div className="relative">
                  <motion.div
                    className="w-80 h-80 mx-auto rounded-full glass-effect p-2 animate-float"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <motion.div
                      className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
                      <img 
                        src="/icons/my emoji.png" 
                        alt="Essa Shah"
                        className="w-full h-full object-cover rounded-full relative z-10 translate-x-3"
                      />
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-4 left-0 right-0 mx-auto w-1/2 h-1 bg-gray-600 rounded"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="order-1 md:order-2 space-y-6">
              <h3 className="text-3xl font-bold mb-6 text-white">
                AI/ML Engineer & Computer Vision Specialist
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I'm a dedicated AI/ML Engineer with a strong foundation in computer vision, 
                deep learning, and data science. Skilled in Python, TensorFlow, PyTorch, and 
                related libraries for building and deploying machine learning models. Experienced 
                in developing end-to-end AI pipelines and using data-driven approaches to solve 
                complex problems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing a BSc in Computing at Birkbeck University of London (2026), 
                I'm passionate about applying machine learning to real-world applications, particularly 
                in sports analytics and computer vision systems. I bring expertise in scalable backend 
                systems, AI-driven pipelines, and continuous learning.
              </p>
              <div className="flex gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">AI</div>
                  <div className="text-sm text-gray-400">Specialist</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-400">Passion</div>
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

