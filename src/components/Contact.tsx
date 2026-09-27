import { useState } from 'react'
import { profile } from '../data/content'
import { scrollToId } from '../lib/scroll'
import LocalTime from './ui/LocalTime'
import Magnetic from './ui/Magnetic'
import { Fade, RevealLines } from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'

const Contact = () => {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const links = [
    { label: 'LinkedIn', href: profile.linkedin, external: true },
    { label: 'GitHub', href: profile.github, external: true },
    { label: profile.phone, href: profile.phoneHref, external: false },
  ]

  return (
    <section id="contact" data-tone="accent" className="relative overflow-hidden pt-28 md:pt-40">
      <div className="shell">
        <SectionHeader index="05" label="Contact" aside="Say hello" />

        <h2 className="display mt-14 text-[clamp(3rem,11vw,11rem)] md:mt-20">
          <RevealLines
            lines={[
              'Let’s build',
              <>
                something <span className="serif italic tracking-[-0.02em] text-accent">real.</span>
              </>,
            ]}
          />
        </h2>

        <div className="mt-16 grid gap-10 border-t hairline pt-8 md:mt-24 md:grid-cols-12">
          <Fade className="md:col-span-7">
            <p className="label">Email</p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="link-underline text-[clamp(1.5rem,3.4vw,2.75rem)] font-medium tracking-tight"
              >
                {profile.email}
              </a>
              <button onClick={copyEmail} className="pill mono text-[11px] uppercase tracking-[0.12em]" aria-live="polite">
                {copied ? 'Copied ✓' : 'Copy'}
              </button>
            </div>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
              Open to roles and projects in AI product engineering, platform work and production ML.
              The more specific the problem, the better.
            </p>
          </Fade>

          <Fade className="md:col-span-5" delay={0.08}>
            <p className="label">Elsewhere</p>
            <ul className="mt-4 border-b hairline">
              {links.map((l) => (
                <li key={l.label} className="border-t hairline">
                  <a
                    href={l.href}
                    {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="group flex items-center justify-between py-4 text-lg"
                  >
                    {l.label}
                    <span className="text-muted transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Fade>
        </div>
      </div>

      <footer className="shell mt-28 flex flex-col gap-4 border-t hairline py-8 md:mt-40 md:flex-row md:items-center md:justify-between">
        <p className="label">© {new Date().getFullYear()} {profile.fullName}</p>
        <p className="label">
          {profile.location} · <LocalTime />
        </p>
        <Magnetic>
          <button onClick={() => scrollToId('top')} className="label transition-colors hover:text-paper">
            Back to top ↑
          </button>
        </Magnetic>
      </footer>
    </section>
  )
}

export default Contact
