import { marqueeTools, toolkit } from '../data/content'
import { Fade, RevealLines } from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'

const Toolkit = () => (
  <section id="toolkit" className="py-28 md:py-40">
    <div className="shell">
      <SectionHeader index="04" label="Toolkit" aside="Tools of the trade" />
      <h2 className="display mt-14 text-[clamp(2.5rem,6vw,5.5rem)] md:mt-20">
        <RevealLines lines={['The stack I', <span className="serif italic tracking-[-0.02em] text-muted">reach for.</span>]} />
      </h2>
    </div>

    <Fade className="marquee mt-16 overflow-hidden border-y hairline py-8 md:mt-24" y={0}>
      <div className="marquee-track flex w-max items-center">
        {[...marqueeTools, ...marqueeTools].map((tool, i) => {
          const Icon = tool.icon!
          return (
            <span
              key={i}
              aria-hidden={i >= marqueeTools.length}
              className="group flex items-center gap-3 px-8 text-muted transition-colors duration-300 hover:text-paper md:px-12"
            >
              <Icon className="h-7 w-7 md:h-8 md:w-8" />
              <span className="whitespace-nowrap text-xl tracking-tight md:text-2xl">{tool.name}</span>
            </span>
          )
        })}
      </div>
    </Fade>

    <div className="shell mt-16 grid grid-cols-2 gap-x-6 gap-y-12 md:mt-24 md:grid-cols-5">
      {toolkit.map((g, i) => (
        <Fade key={g.group} delay={i * 0.06}>
          <p className="label">{g.group}</p>
          <ul className="mt-5 space-y-2.5">
            {g.tools.map((t) => (
              <li key={t.name} className="flex items-center gap-2.5 text-[15px] text-paper/85">
                {t.icon ? <t.icon className="h-3.5 w-3.5 text-faint" /> : <span className="h-3.5 w-3.5 text-center text-[10px] leading-[14px] text-faint">◦</span>}
                {t.name}
              </li>
            ))}
          </ul>
        </Fade>
      ))}
    </div>
  </section>
)

export default Toolkit
