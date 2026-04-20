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
      title: 'AWS GenAI Developer',
      company: 'Appbank',
      period: 'Feb 2026 - Present',
      description:
        'Designed and deployed compliant GenAI systems for regulated banking workflows.',
      achievements: [
        'Designed orchestration agents with AWS Bedrock Agents using Titan and Claude models, aligned with AWS Well-Architected Framework (AI/ML Lens)',
        'Built RAG systems with AWS Knowledge Bases over FCA and PRA rulebooks for legally compliant outputs',
        'Implemented AWS Guardrails for Responsible AI controls, PII filtering, and fine-grained access control',
        'Delivered in Agile sprints with Jira, collaborating with senior engineers under strict compliance standards',
      ],
    },
    {
      title: 'Full-Stack AI Backend Engineer',
      company: 'Oont',
      period: 'Sep 2025 - Feb 2026',
      description: 'Built and optimized scalable backend systems for AI-driven product delivery.',
      achievements: [
        'Built backend systems using Node.js, Express.js, NestJS, PostgreSQL, and Redis',
        'Refactored legacy services into a unified and scalable backend architecture',
        'Improved API performance, reliability, and deployment workflows',
        'Collaborated with frontend, AI, and product teams in Agile environments',
      ],
    },
    {
      title: 'Computer Vision Engineer (Sports Analytics)',
      company: 'Scout-Me Online',
      period: 'Sep 2025 - Feb 2026',
      description: 'Built real-time CV systems for low-latency sports analytics.',
      achievements: [
        'Designed pipelines for tracking fast-moving sports objects in real time',
        'Built deep-learning tracking systems optimized for low-latency inference',
        'Developed automated video analytics tools for instant gameplay insights',
      ],
    },
    {
      title: 'AI Systems Engineer (Peacebuilding & Data Infrastructure)',
      company: 'ICAN Peacebuilding Network (via PAIMAN Alumni Trust)',
      period: '2023 - 2024',
      description:
        'Architected reliable and ethical data infrastructure for distributed peacebuilding operations.',
      achievements: [
        'Architected secure databases to track interventions and outcomes across distributed regions',
        'Designed schemas prioritizing integrity, auditability, and ethical data handling',
        'Built foundational data layers for future predictive analytics and impact assessment',
        'Developed systems where data accuracy directly affected real-world decisions',
      ],
    },
    {
      title: 'Programming & Technology Instructor (Volunteer Leadership Role)',
      company: 'TOLANA - PAIMAN Alumni Trust, Pakistan',
      period: '2021 - 2023',
      description: 'Led technical education programs for low-resource and conflict-affected regions.',
      achievements: [
        'Designed and delivered programming curricula for youth in low-resource regions',
        'Taught Python, web development, and introductory AI under severe infrastructure constraints',
        'Built resilient learning workflows for unreliable connectivity and limited hardware',
        'Mentored students on beginner full-stack and machine learning projects',
      ],
    },
    {
      title: 'Web Development Instructor',
      company: 'Qadims Lumiere School',
      period: '2020 - 2021',
      description: 'Taught web development and foundational programming with practical project mentorship.',
      achievements: [
        'Taught web development, Python fundamentals, and introductory AI concepts',
        'Mentored students on full-stack and beginner machine learning projects',
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
    <section id="experience" ref={sectionRef} className="section-shell flex items-center">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants} className="mb-14 text-center">
            <p className="section-kicker">Experience</p>
            <h2 className="section-title">
              Systems designed for impact
            </h2>
            <p className="section-subtitle mx-auto">
              A delivery track record across backend engineering, computer vision,
              and production ML integration.
            </p>
          </motion.div>

          <div className="relative space-y-6">
            <div className="pointer-events-none absolute left-5 top-10 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-[#4f8fff]/70 via-[#8b5cf6]/50 to-transparent md:block" />
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="surface-card interactive-card relative overflow-hidden p-7 md:ml-8 md:p-8"
                whileHover={{ y: -4 }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(79,143,255,0.14),transparent_35%)]" />
                <div className="relative">
                  <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="icon-tile h-11 w-11 text-blue-200">
                        <FaBriefcase className="text-lg" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-100 md:text-2xl">{exp.title}</h3>
                        <p className="font-medium text-blue-200">{exp.company}</p>
                      </div>
                    </div>
                    <span className="mt-2 premium-chip md:mt-0">{exp.period}</span>
                  </div>
                  <p className="mb-4 text-slate-300">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-300">
                        <span className="mt-1 text-blue-300">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

