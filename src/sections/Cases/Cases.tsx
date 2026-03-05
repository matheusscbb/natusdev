import type { CasesContent } from '../../data/content'
import Section from '../../components/Section/Section'

type CasesProps = {
  content: CasesContent
}

function Cases({ content }: CasesProps) {
  return (
    <Section id="cases" title={content.title} subtitle={content.subtitle}>
      <div className="cases-grid">
        {content.items.map((item) => (
          <article className="case-card" key={item.client}>
            <span className="case-client">{item.client}</span>
            <p>{item.goal}</p>
            <p className="case-result">{item.result}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Cases
