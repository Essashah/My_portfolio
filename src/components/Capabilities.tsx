import { capabilities } from '../data/content'
import { Fade, RevealLines } from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'

const Capabilities = () => (
  <section id="work" className="shell py-28 md:py-40">
    <SectionHeader index="02" label="Capabilities" aside="What I build" />

    <h2 className="display mt-14 max-w-5xl text-[clamp(2.5rem,6vw,5.5rem)] md:mt-20">
      <RevealLines
        lines={[
          'End-to-end, from',
          <>
            model <span className="serif italic tracking-[-0.02em] text-muted">to</span> production.
          </>,
        ]}
      />
    </h2>

    <ul className="mt-16 border-b hairline md:mt-24">
      {capabilities.map((c, i) => (
        <li key={c.title}>
          <Fade y={16} delay={i * 0.04}>
            <div className="group relative grid gap-4 overflow-hidden border-t hairline py-8 md:grid-cols-12 md:gap-8 md:py-12">
              {/* Fill wipes up from the baseline on hover */}
              <span className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-ink-2 transition-transform duration-700 ease-out-expo group-hover:scale-y-100" />
              <span className="mono relative text-[11px] text-faint transition-colors duration-500 group-hover:text-accent md:col-span-1 md:pt-3">
                0{i + 1}
              </span>
              <h3 className="display relative text-[clamp(2rem,3.6vw,3.5rem)] transition-transform duration-700 ease-out-expo md:col-span-6 md:group-hover:translate-x-3">
                {c.title}
              </h3>
              <div className="relative md:col-span-5 md:pt-3">
                <p className="text-[15px] leading-relaxed text-muted">{c.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="mono rounded-full border hairline px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Fade>
        </li>
      ))}
    </ul>
  </section>
)

export default Capabilities
