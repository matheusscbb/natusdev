import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title?: string
  subtitle?: string
  children: ReactNode
}

function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="section-inner">
        {title ? <h2>{title}</h2> : null}
        {subtitle ? (
          <p className="section-subtitle">{subtitle}</p>
        ) : null}
        {children}
      </div>
    </section>
  )
}

export default Section
