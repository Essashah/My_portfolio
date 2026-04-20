export interface TechIcon {
  name: string
  iconPath: string
  category: 'ai-ml' | 'frontend' | 'backend' | 'cloud-devops' | 'database'
  level: number
  note: string
}

export const techIcons: TechIcon[] = [
  { name: 'Python', iconPath: '/icons/Python.svg', category: 'ai-ml', level: 95, note: 'Modeling and data pipelines' },
  { name: 'TensorFlow', iconPath: '/icons/TensorFlow.svg', category: 'ai-ml', level: 90, note: 'Production model training' },
  { name: 'PyTorch', iconPath: '/icons/PyTorch.svg', category: 'ai-ml', level: 92, note: 'Research and experimentation' },
  { name: 'OpenCV', iconPath: '/icons/OpenCV.svg', category: 'ai-ml', level: 95, note: 'Real-time computer vision' },
  { name: 'Deep Learning', iconPath: '/icons/deep-learning-svgrepo-com.svg', category: 'ai-ml', level: 88, note: 'Neural network system design' },
  { name: 'NLP', iconPath: '/icons/nlp_10328667.png', category: 'ai-ml', level: 85, note: 'Text intelligence workflows' },
  { name: 'scikit-learn', iconPath: '/icons/scikit-learn.svg', category: 'ai-ml', level: 90, note: 'Classical ML foundations' },
  { name: 'Matplotlib', iconPath: '/icons/Matplotlib.svg', category: 'ai-ml', level: 90, note: 'Model diagnostics and insights' },
  { name: 'React', iconPath: '/icons/React.svg', category: 'frontend', level: 85, note: 'Interactive product interfaces' },
  { name: 'Next.js', iconPath: '/icons/Next.js.svg', category: 'frontend', level: 84, note: 'Server-rendered web applications' },
  { name: 'TypeScript', iconPath: '/icons/TypeScript.svg', category: 'frontend', level: 85, note: 'Type-safe frontend architecture' },
  { name: 'JavaScript', iconPath: '/icons/JavaScript.svg', category: 'frontend', level: 88, note: 'Core web engineering' },
  { name: 'Tailwind CSS', iconPath: '/icons/Tailwind CSS.svg', category: 'frontend', level: 90, note: 'Scalable design systems' },
  { name: 'Node.js', iconPath: '/icons/Node.js.svg', category: 'backend', level: 85, note: 'API and service backends' },
  { name: 'FastAPI', iconPath: '/icons/FastAPI.svg', category: 'backend', level: 90, note: 'High-throughput Python APIs' },
  { name: 'Django', iconPath: '/icons/Django.svg', category: 'backend', level: 86, note: 'Python web framework architecture' },
  { name: 'Flask', iconPath: '/icons/Flask.svg', category: 'backend', level: 88, note: 'Lightweight service delivery' },
  { name: 'Express.js', iconPath: '/icons/png-clipart-mean-solution-stack-express-js-node-js-javascript-github-text-trademark-thumbnail.png', category: 'backend', level: 85, note: 'REST backend implementation' },
  { name: 'NestJS', iconPath: '/icons/NestJS.svg.png', category: 'backend', level: 85, note: 'Structured backend systems' },
  { name: 'Docker', iconPath: '/icons/Docker.svg', category: 'cloud-devops', level: 80, note: 'Containerized deployments' },
  { name: 'Kubernetes', iconPath: '/icons/Kubernetes_logo_without_workmark.svg.png', category: 'cloud-devops', level: 78, note: 'Cluster orchestration' },
  { name: 'AWS', iconPath: '/icons/AWS.svg', category: 'cloud-devops', level: 75, note: 'Cloud-native AI infrastructure' },
  { name: 'Google Cloud', iconPath: '/icons/Google Cloud.svg', category: 'cloud-devops', level: 75, note: 'Managed cloud architecture' },
  { name: 'PostgreSQL', iconPath: '/icons/Postgresql_elephant.svg.png', category: 'database', level: 82, note: 'Relational data integrity' },
  { name: 'MongoDB', iconPath: '/icons/mongodb-logo-png_seeklogo-481256.png', category: 'database', level: 80, note: 'Document-oriented scale' },
  { name: 'Redis', iconPath: '/icons/Redis-Logo.wine.png', category: 'database', level: 78, note: 'Cache and low-latency state' },
]

export const iconCoverageList = [
  ...techIcons.map((item) => item.iconPath),
  '/icons/my emoji.png',
]
