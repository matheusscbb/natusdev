import type { ProcessContent } from '../../data/content'
import SectionHeader from '../../components/SectionHeader/SectionHeader'

type ProcessProps = {
  content: ProcessContent
}

function Process({ content }: ProcessProps) {
  const topSteps = content.steps.filter((_, i) => i % 2 === 0)
  const bottomSteps = content.steps.filter((_, i) => i % 2 === 1)

  return (
    <section id="process" className="process-section">
      <div className="process-inner">
        <SectionHeader title={content.title} subtitle={content.subtitle} />

        {/* Desktop: horizontal timeline */}
        <div className="process-timeline-desktop">
          <div className="process-row process-row-top">
            {content.steps.map((step, i) => (
              <div className="process-cell" key={step.title}>
                {i % 2 === 0 ? (
                  <div className="process-step-content">
                    <strong className="process-step-title">{step.title}</strong>
                    <p className="process-step-desc">{step.description}</p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="process-line">
            {content.steps.map((step, i) => (
              <div className="process-diamond-cell" key={step.title}>
                <div className="process-diamond" />
              </div>
            ))}
          </div>

          <div className="process-row process-row-bottom">
            {content.steps.map((step, i) => (
              <div className="process-cell" key={step.title}>
                {i % 2 === 1 ? (
                  <div className="process-step-content">
                    <strong className="process-step-title">{step.title}</strong>
                    <p className="process-step-desc">{step.description}</p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="process-timeline-mobile">
          {content.steps.map((step) => (
            <div className="process-step-vertical" key={step.title}>
              <div className="process-diamond-col">
                <div className="process-diamond" />
                <div className="process-vertical-line" />
              </div>
              <div className="process-step-content">
                <strong className="process-step-title">{step.title}</strong>
                <p className="process-step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
