type FeatureCardProps = {
  title: string
  description: string
  tag?: string
}

function FeatureCard({ title, description, tag }: FeatureCardProps) {
  return (
    <article className="feature-card">
      {tag ? <span className="feature-tag">{tag}</span> : null}
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export default FeatureCard
