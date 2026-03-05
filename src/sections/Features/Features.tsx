import type { FeaturesContent } from '../../data/content'
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import Section from '../../components/Section/Section'

type FeaturesProps = {
  content: FeaturesContent
}

function Features({ content }: FeaturesProps) {
  return (
    <Section id="features" title={content.title} subtitle={content.subtitle}>
      <div className="features-grid">
        {content.items.map((item) => (
          <div className="features-item" key={item.title}>
            <FeatureCard {...item} />
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Features
