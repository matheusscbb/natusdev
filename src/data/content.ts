const year = new Date().getFullYear()

export type NavItem = {
  label: string
  href: string
}

export type ButtonLink = {
  label: string
  href: string
}

export type HeroContent = {
  badge: string
  title: string
  subtitle: string
  primary: ButtonLink
  secondary: ButtonLink
  visualTitle: string
  visualSubtitle: string
}

export type LogoCloudContent = {
  title: string
  logos: string[]
}

export type ServiceItem = {
  title: string
  description: string
  tag?: string
}

export type ServicesContent = {
  title: string
  subtitle: string
  items: ServiceItem[]
}

export type FeaturesContent = {
  title: string
  subtitle: string
  items: ServiceItem[]
}

export type ProcessStep = {
  title: string
  description: string
}

export type ProcessContent = {
  title: string
  subtitle: string
  steps: ProcessStep[]
}

export type CaseItem = {
  name: string
  description: string
  icon?: string
  image?: string
}

export type CasesContent = {
  title: string
  subtitle: string
  categories: string[]
  items: CaseItem[]
}

export type StackContent = {
  title: string
  subtitle: string
  items: string[]
}

export type TestimonialItem = {
  quote: string
  name: string
  role: string
}

export type TestimonialsContent = {
  title: string
  subtitle: string
  items: TestimonialItem[]
}

export type CtaContent = {
  title: string
  subtitle: string
  description: string
  primary: ButtonLink
  secondary: ButtonLink
}

export type StatItem = {
  title: string
  value: string
  suffix?: string
}

export type StatsContent = {
  title: string
  subtitle: string
  items: StatItem[]
}

export const navItems: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Serviços', href: '#services' },
  { label: 'Processo', href: '#process' },
  { label: 'Cases', href: '#cases' },
  { label: 'Contato', href: '#cta' },
]

export const hero: HeroContent = {
  badge: 'Software sob medida',
  title: 'Produtos digitais que aceleram seu negócio',
  subtitle:
    'A Natus Dev cria software personalizado com times seniores, foco em resultado e entrega rápida.',
  primary: { label: 'Agendar conversa', href: '#cta' },
  secondary: { label: 'Ver cases', href: '#cases' },
  visualTitle: 'Natus Dev',
  visualSubtitle: 'Design + Engenharia para escalar produtos digitais.',
}

export const logoCloud: LogoCloudContent = {
  title: 'Confiada por equipes em crescimento',
  logos: ['Lumen', 'Atlas', 'Orion', 'Solis', 'Aurora', 'Vertex'],
}

export const services: ServicesContent = {
  title: 'Serviços sob medida',
  subtitle:
    'Times dedicados e processos claros para transformar sua visão em produto.',
  items: [
    {
      title: 'Desenvolvimento sob medida',
      description:
        'Projetos ponta a ponta com arquitetura escalável e UX alinhada ao negócio.',
      tag: 'Produto',
    },
    {
      title: 'Squads dedicados',
      description:
        'Profissionais sêniores integrados ao seu time, com acompanhamento contínuo.',
      tag: 'Time',
    },
    {
      title: 'Discovery & estratégia',
      description:
        'Workshops e planejamento para validar hipótese, roadmap e prioridades.',
      tag: 'Estratégia',
    },
  ],
}

export const process: ProcessContent = {
  title: 'Juntos com você em todas as etapas',
  subtitle: '',
  steps: [
    {
      title: 'Descoberta',
      description: 'Texto de exemplo com mais ou menos 2 linhas',
    },
    {
      title: 'Planejamento',
      description: 'Texto de exemplo com mais ou menos 2 linhas',
    },
    {
      title: 'Desenvolvimento',
      description: 'Texto de exemplo com mais ou menos 2 linhas',
    },
    {
      title: 'Lançamento',
      description: 'Texto de exemplo com mais ou menos 2 linhas',
    },
    {
      title: 'Evolução',
      description: 'Texto de exemplo com mais ou menos 2 linhas',
    },
  ],
}

export const cases: CasesContent = {
  title: 'Cases',
  subtitle: 'Entregas desenvolvidas com nossos clientes',
  categories: ['Fintech', 'Logística', 'Educação', 'Varejo', 'Saúde'],
  items: [
    {
      name: 'Better Habbit',
      description:
        'Plataforma de ensino de inglês EAD. Voltada para a conexão de alunos e professores do mundo todo de forma simplificada.',
      icon: '/assets/logo-habbit.svg',
      image: '/assets/mac-better-habbit.png',
    },
    {
      name: 'Better Habbit',
      description:
        'Plataforma de ensino de inglês EAD. Voltada para a conexão de alunos e professores do mundo todo de forma simplificada.',
    },
    {
      name: 'Better Habbit',
      description:
        'Plataforma de ensino de inglês EAD. Voltada para a conexão de alunos e professores do mundo todo de forma simplificada.',
    },
  ],
}

export const stack: StackContent = {
  title: 'Stack moderna e confiável',
  subtitle: 'Tecnologias atuais para garantir performance e segurança.',
  items: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker'],
}

export const testimonials: TestimonialsContent = {
  title: 'O que dizem sobre a Natus Dev',
  subtitle: 'Feedback de clientes que evoluíram com nossos times.',
  items: [
    {
      quote:
        'Time extremamente alinhado com nossos objetivos. Entregaram acima do esperado.',
      name: 'Fernanda Lima',
      role: 'Head de Produto',
    },
    {
      quote:
        'Processo claro e comunicação eficiente. Evoluímos o produto rapidamente.',
      name: 'Marcos Ribeiro',
      role: 'CTO',
    },
    {
      quote:
        'A Natus Dev se integrou ao time como parceiro estratégico de longo prazo.',
      name: 'Juliana Costa',
      role: 'CEO',
    },
  ],
}

export const cta: CtaContent = {
  title: 'Vamos construir seu próximo produto?',
  subtitle: 'Resposta em até 24h com proposta inicial.',
  description:
    'Conte sua necessidade e receba um plano claro de execução com time sênior.',
  primary: { label: 'Agendar conversa', href: 'mailto:contato@natus.dev' },
  secondary: { label: 'Ver cases', href: '#cases' },
}

export const footer = `© ${year} Natus Dev. Todos os direitos reservados.`
