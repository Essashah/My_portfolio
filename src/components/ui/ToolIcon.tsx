import type { Tool } from '../../data/content'

/** Renders a tool's logo: a full-colour file when available, else its tinted glyph. */
const ToolIcon = ({ tool, className = '' }: { tool: Tool; className?: string }) => {
  if (tool.src) return <img src={tool.src} alt="" aria-hidden className={`object-contain ${className}`} />
  if (tool.icon) return <tool.icon aria-hidden className={className} style={{ color: tool.color }} />
  return null
}

export default ToolIcon
