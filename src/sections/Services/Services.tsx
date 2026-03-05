import type { ServicesContent } from '../../data/content'
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import Section from '../../components/Section/Section'

type ServicesProps = {
  content: ServicesContent
}

function Services({ content }: ServicesProps) {
  return (
    <Section id="services" title={content.title} subtitle={content.subtitle}>
      <div className="services-grid">
        {content.items.map((item) => (
          <div className="services-item" key={item.title}>
            <FeatureCard {...item} />
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Services
