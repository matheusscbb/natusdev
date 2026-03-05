type SectionHeaderProps = {
  title: string
  subtitle?: string
}

function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="section-header-textarea">
      <span className="section-header-title">{title}</span>
      {subtitle ? (
        <span className="section-header-subtitle">{subtitle}</span>
      ) : null}
    </div>
  )
}

export default SectionHeader
