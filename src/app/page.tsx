import Image from 'next/image'
import Header from '../sections/Header/Header'
import Hero from '../sections/Hero/Hero'
import LogoCloud from '../sections/LogoCloud/LogoCloud'
import Services from '../sections/Services/Services'
import Process from '../sections/Process/Process'
import Cases from '../sections/Cases/Cases'
import Stack from '../sections/Stack/Stack'
import Testimonials from '../sections/Testimonials/Testimonials'
import CTA from '../sections/CTA/CTA'
import DiamondServices from '../sections/DiamondServices/DiamondServices'
import {
  hero,
  logoCloud,
  services,
  process,
  cases,
  stack,
  testimonials,
  cta,
  footer,
} from '../data/content'

export default function Home() {
  return (
    <div className="app-layout">
      <Header />

      <main className="app-content">
        <Hero content={hero} />
        <DiamondServices />
        <Process content={process} />
        <Cases content={cases} />
        {/* <Testimonials content={testimonials} />
        <LogoCloud content={logoCloud} />
        <Services content={services} />
        <Stack content={stack} /> */}
        {/* <CTA content={cta} /> */}
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <Image src="/assets/natus_lettering_white_bg.svg" alt="Natus Dev" width={120} height={40} />
            <p>Software sob medida para empresas que precisam escalar.</p>
          </div>
          <div className="footer-links">
            <a href="#hero">Início</a>
            <a href="#services">Serviços</a>
            <a href="#process">Processo</a>
            <a href="#cases">Cases</a>
            <a href="#cta">Contato</a>
          </div>
          <div className="footer-contact">
            <span>contato@natus.dev</span>
            <span>+55 (11) 99999-0000</span>
          </div>
        </div>
        <span className="footer-bottom">{footer}</span>
      </footer>
    </div>
  )
}
