import { useState } from 'react'

interface TechLogoProps {
  name: string
  src: string
  className?: string
}

/**
 * Derive a compact 2-char lettermark from a technology name.
 * Used as a graceful fallback when the brand asset is missing so the
 * skills grid never renders broken images.
 */
const monogram = (name: string): string => {
  const words = name.replace(/[^a-zA-Z]+/g, ' ').trim().split(/\s+/).filter(Boolean)
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase()
  }
  return (words[0] ?? name).slice(0, 2)
}

/**
 * Renders a brand icon, falling back to a styled monogram tile if the
 * asset fails to load. Keeps the visual language consistent across the
 * stack regardless of which SVGs are present on disk.
 */
const TechLogo = ({ name, src, className = '' }: TechLogoProps) => {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span
        className={`gradient-text select-none text-sm font-bold tracking-tight ${className}`}
        aria-hidden="true"
      >
        {monogram(name)}
      </span>
    )
  }

  return (
    <img
      src={src}
      alt={name}
      className={`tech-logo object-contain ${className}`}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}

export default TechLogo
