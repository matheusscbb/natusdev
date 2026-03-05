import type { StatsContent } from '../../data/content'
import Section from '../../components/Section/Section'

type StatsProps = {
  content: StatsContent
}

function Stats({ content }: StatsProps) {
  return (
    <Section id="stats" title={content.title} subtitle={content.subtitle}>
      <div className="stats-grid">
        {content.items.map((item) => (
          <div className="stat-card" key={item.title}>
            <span className="stat-title">{item.title}</span>
            <strong className="stat-value">
              {item.value}
              {item.suffix ?? ''}
            </strong>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Stats
