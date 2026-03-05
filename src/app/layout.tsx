import type { Metadata } from 'next'
import './globals.scss'
import '../App.scss'
import '../components/Section/Section.scss'
import '../components/FeatureCard/FeatureCard.scss'
import '../sections/Header/Header.scss'
import '../sections/Hero/Hero.scss'
import '../sections/Services/Services.scss'
import '../sections/Process/Process.scss'
import '../sections/Cases/Cases.scss'
import '../sections/Stack/Stack.scss'
import '../sections/Testimonials/Testimonials.scss'
import '../sections/CTA/CTA.scss'
import '../sections/LogoCloud/LogoCloud.scss'
import '../sections/DiamondServices/DiamondServices.scss'
import '../components/SectionHeader/SectionHeader.scss'
import '../sections/Features/Features.scss'
import '../sections/Stats/Stats.scss'
import '../styles/_buttons.scss'
import '../styles/_cards.scss'

export const metadata: Metadata = {
  title: 'Natus Dev — Software sob medida',
  description:
    'A Natus Dev cria software personalizado com times seniores, foco em resultado e entrega rápida.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
