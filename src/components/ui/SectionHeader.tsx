import { Fade } from './Reveal'

interface SectionHeaderProps {
  index: string
  label: string
  aside?: string
}

/** Thin ruled header that opens every section: "(02) Experience ········ aside". */
const SectionHeader = ({ index, label, aside }: SectionHeaderProps) => (
  <Fade y={10}>
    <div className="flex items-center justify-between border-t hairline pt-5">
      <p className="label">
        <span className="text-accent">({index})</span>&nbsp;&nbsp;{label}
      </p>
      {aside && <p className="label hidden md:block">{aside}</p>}
    </div>
  </Fade>
)

export default SectionHeader
