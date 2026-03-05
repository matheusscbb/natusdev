import type { StackContent } from '../../data/content'
import Section from '../../components/Section/Section'

type StackProps = {
  content: StackContent
}

function Stack({ content }: StackProps) {
  return (
    <Section id="stack" title={content.title} subtitle={content.subtitle}>
      <div className="stack-tags">
        {content.items.map((tech) => (
          <span key={tech} className="stack-tag">
            {tech}
          </span>
        ))}
      </div>
    </Section>
  )
}

export default Stack
