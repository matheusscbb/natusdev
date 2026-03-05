import type { LogoCloudContent } from '../../data/content'
import Section from '../../components/Section/Section'

type LogoCloudProps = {
  content: LogoCloudContent
}

function LogoCloud({ content }: LogoCloudProps) {
  return (
    <Section id="logos" title={undefined} subtitle={undefined}>
      <p className="logo-cloud-title">{content.title}</p>
      <div className="logo-cloud-list">
        {content.logos.map((logo) => (
          <span key={logo} className="logo-cloud-item">
            {logo}
          </span>
        ))}
      </div>
    </Section>
  )
}

export default LogoCloud
