import type { IconType } from 'react-icons'
import {
  SiAmazonaws,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiGooglecloud,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpencv,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
  SiScikitlearn,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from 'react-icons/si'

export const profile = {
  name: 'Essa Shah',
  fullName: 'Syed Muhammad Essa Shah',
  role: 'AI / ML Engineer',
  location: 'Essex, United Kingdom',
  timezone: 'Europe/London',
  email: 'essashah10@gmail.com',
  phone: '07424 906183',
  phoneHref: 'tel:+447424906183',
  github: 'https://github.com/Essashah',
  linkedin: 'https://www.linkedin.com/in/essa-shah-7a0a5a294',
}

export const hero = {
  status: 'Open to select opportunities',
  intro:
    'I build generative AI platforms, backend infrastructure and real-time computer vision — systems designed to be reliable, observable and compliant from the first commit.',
  current: 'Currently building compliant GenAI for regulated banking at Appbank.',
}

export const about = {
  heading: ['Model quality is', 'only half the job.'],
  paragraphs: [
    'I work where machine learning meets software engineering. A model that performs in a notebook is a starting point — the real work is making it dependable: behind secure APIs, observable in production and compliant with the rules it operates under.',
    'Over the past five years I have built generative AI for financial services, backend platforms for AI-first products and computer vision for live sports analytics. Before that I taught programming across low-resource regions of Pakistan — work that still shapes how I build for real constraints.',
  ],
  stats: [
    { value: '5+', label: 'Years in engineering' },
    { value: '06', label: 'Roles across AI, backend & education' },
    { value: '05', label: 'Industries, from banking to sport' },
  ],
  principles: [
    {
      title: 'Production first',
      body: 'Models ship behind reliable, observable APIs — with monitoring, fallbacks and clear contracts.',
    },
    {
      title: 'Compliance by design',
      body: 'Auditability, access control and data handling are architecture decisions, not afterthoughts.',
    },
    {
      title: 'Measure what matters',
      body: 'Accuracy is a metric. Impact on the people and processes using the system is the goal.',
    },
  ],
}

export const capabilities = [
  {
    title: 'Generative AI Systems',
    body: 'Agent orchestration, retrieval-augmented generation and guardrails on AWS Bedrock — built for regulated, auditable environments.',
    tags: ['Bedrock Agents', 'RAG', 'Guardrails', 'LLM Ops'],
  },
  {
    title: 'Backend & Platforms',
    body: 'Service architecture in Node.js, NestJS and Python, backed by PostgreSQL and Redis. Designed for throughput, clarity and change.',
    tags: ['NestJS', 'FastAPI', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'Computer Vision',
    body: 'Real-time detection and tracking pipelines, optimised for low-latency inference on live, fast-moving video.',
    tags: ['PyTorch', 'OpenCV', 'Tracking', 'Inference'],
  },
  {
    title: 'Data Infrastructure',
    body: 'Schemas and data layers where integrity and auditability matter — because the decisions made downstream do.',
    tags: ['Data modelling', 'Auditability', 'Analytics'],
  },
]

export interface Role {
  title: string
  company: string
  period: string
  summary: string
  points: string[]
}

export const experience: Role[] = [
  {
    title: 'AWS GenAI Developer',
    company: 'Appbank',
    period: 'Feb 2026 — Present',
    summary: 'Building compliant generative AI for regulated banking workflows.',
    points: [
      'Designed agent orchestration on AWS Bedrock Agents using Titan and Claude models, following Well-Architected Framework guidance for AI/ML.',
      'Built retrieval-augmented generation over FCA and PRA rulebooks with Bedrock Knowledge Bases, grounding every output in regulatory source text.',
      'Implemented Bedrock Guardrails for responsible-AI policy, PII filtering and fine-grained access control.',
      'Delivered in Agile sprints alongside senior engineers under strict compliance standards.',
    ],
  },
  {
    title: 'Full-Stack AI Backend Engineer',
    company: 'Oont',
    period: 'Sep 2025 — Feb 2026',
    summary: 'Backend platform engineering for AI-driven products.',
    points: [
      'Built backend services with Node.js, Express, NestJS, PostgreSQL and Redis.',
      'Consolidated legacy services into a single, scalable backend architecture.',
      'Improved API performance, reliability and deployment workflows.',
      'Worked across frontend, AI and product teams in an Agile environment.',
    ],
  },
  {
    title: 'Computer Vision Engineer',
    company: 'Scout-Me Online',
    period: 'Sep 2025 — Feb 2026',
    summary: 'Real-time computer vision for sports analytics.',
    points: [
      'Designed real-time pipelines for tracking fast-moving objects in live sports footage.',
      'Built deep-learning tracking models optimised for low-latency inference.',
      'Developed automated video analytics that surface gameplay insights as play unfolds.',
    ],
  },
  {
    title: 'AI Systems Engineer',
    company: 'ICAN Peacebuilding Network',
    period: '2023 — 2024',
    summary: 'Data infrastructure for distributed peacebuilding operations, via PAIMAN Alumni Trust.',
    points: [
      'Architected secure databases tracking interventions and outcomes across distributed regions.',
      'Designed schemas around integrity, auditability and ethical data handling.',
      'Laid the data foundations for predictive analytics and impact assessment — systems where accuracy directly informed real-world decisions.',
    ],
  },
  {
    title: 'Programming & Technology Instructor',
    company: 'TOLANA · PAIMAN Alumni Trust',
    period: '2021 — 2023',
    summary: 'Volunteer leadership role teaching technology in low-resource and conflict-affected regions.',
    points: [
      'Designed and taught programming curricula for young people in under-served communities.',
      'Taught Python, web development and introductory AI with limited hardware and unreliable connectivity.',
      'Mentored students through their first full-stack and machine learning projects.',
    ],
  },
  {
    title: 'Web Development Instructor',
    company: 'Qadims Lumiere School',
    period: '2020 — 2021',
    summary: 'Web development and programming fundamentals, taught through practical projects.',
    points: [
      'Taught web development, Python fundamentals and introductory AI concepts.',
      'Mentored students on full-stack and early machine learning projects.',
    ],
  },
]

export interface Tool {
  name: string
  icon?: IconType
  /** Brand colour. Omitted for near-black marks, which use the text colour. */
  color?: string
}

export const toolkit: { group: string; tools: Tool[] }[] = [
  {
    group: 'AI & Machine Learning',
    tools: [
      { name: 'Python', icon: SiPython, color: '#4B8BBE' },
      { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'OpenCV', icon: SiOpencv, color: '#6E5BFF' },
      { name: 'scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
      { name: 'Deep Learning' },
      { name: 'NLP' },
      { name: 'Matplotlib' },
    ],
  },
  {
    group: 'Backend & APIs',
    tools: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
      { name: 'Express', icon: SiExpress },
      { name: 'FastAPI', icon: SiFastapi, color: '#05998B' },
      { name: 'Django', icon: SiDjango, color: '#44B78B' },
      { name: 'Flask', icon: SiFlask },
    ],
  },
  {
    group: 'Cloud & DevOps',
    tools: [
      { name: 'AWS', icon: SiAmazonaws, color: '#FF9900' },
      { name: 'AWS Bedrock' },
      { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
    ],
  },
  {
    group: 'Data',
    tools: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Redis', icon: SiRedis, color: '#FF4438' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    group: 'Frontend',
    tools: [
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
]

export const marqueeTools = toolkit.flatMap((g) => g.tools).filter((t) => t.icon)
