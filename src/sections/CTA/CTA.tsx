import type { CtaContent } from '../../data/content'
import Section from '../../components/Section/Section'

type CTAProps = {
  content: CtaContent
}

function CTA({ content }: CTAProps) {
  return (
    <Section id="cta" title={content.title} subtitle={content.subtitle}>
      <div className="cta-card">
        <p>{content.description}</p>
        <div className="cta-actions">
          <a className="primary-btn" href={content.primary.href}>
            {content.primary.label}
          </a>
          <a className="secondary-btn" href={content.secondary.href}>
            {content.secondary.label}
          </a>
        </div>
      </div>
    </Section>
  )
}

export default CTA
