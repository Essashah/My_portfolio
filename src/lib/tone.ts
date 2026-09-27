const THEME_COLOR: Record<string, string> = { dark: '#14110f', light: '#ebe5da', accent: '#ff5a1f' }

/**
 * Sets the page palette from whichever `[data-tone]` section crosses the
 * middle of the viewport. The registered CSS vars in index.css animate the swap.
 */
export const initTones = (): (() => void) => {
  const root = document.documentElement
  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const tone = (entry.target as HTMLElement).dataset.tone ?? 'dark'
        root.dataset.tone = tone
        meta?.setAttribute('content', THEME_COLOR[tone] ?? THEME_COLOR.dark)
      }
    },
    { rootMargin: '-50% 0px -50% 0px' },
  )

  document.querySelectorAll('[data-tone]').forEach((el) => observer.observe(el))
  return () => observer.disconnect()
}
