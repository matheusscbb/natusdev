import Image from 'next/image'
import type { HeroContent } from '../../data/content'

type HeroProps = {
  content: HeroContent
}

function Hero({ content }: HeroProps) {
  return (
    <section id="inicio" className="hero-section">
      <div
        className="hero-mask"
        style={{ backgroundImage: `url(/assets/natus_background_mask.png)` }}
        aria-hidden="true"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="hero-shiny" src="/assets/hero_shiny.svg" alt="" aria-hidden="true" />
      <div className="hero-content">
        <p className="hero-kicker">{content.badge}</p>
        <Image className="hero-logo" src="/assets/natus_union.png" alt="Natus" width={1060} height={200} priority />
        <div className="hero-support-container">
          <p className="hero-support">{content.subtitle}</p>
          <div className="hero-services">Aplicativos | Sites | Sistemas</div>
        </div>
        <div className="hero-actions">
          <a className="primary-btn btn-large" href={content.primary.href}>
            {content.primary.label}
          </a>
          <a className="outlined-btn btn-medium" href={content.secondary.href}>
            {content.secondary.label}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
