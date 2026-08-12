import type { MouseEvent } from 'react'

/**
 * Tracks the pointer position relative to the target element and exposes it as
 * CSS custom properties (`--spot-x` / `--spot-y`). Pair with the `.spotlight-card`
 * class to render a cursor-following glow. Uses `currentTarget` so no ref or
 * wrapper element is required.
 */
export const handleSpotlight = (event: MouseEvent<HTMLElement>): void => {
  const target = event.currentTarget
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
  target.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
}
