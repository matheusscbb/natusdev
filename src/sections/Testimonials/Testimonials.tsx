import type { TestimonialsContent } from '../../data/content'
import Section from '../../components/Section/Section'

type TestimonialsProps = {
  content: TestimonialsContent
}

function Testimonials({ content }: TestimonialsProps) {
  return (
    <Section id="testimonials" title={content.title} subtitle={content.subtitle}>
      <div className="testimonials-grid">
        {content.items.map((item) => (
          <article className="testimonial-card" key={item.name}>
            <p className="testimonial-quote">“{item.quote}”</p>
            <p className="testimonial-author">{item.name}</p>
            <p className="testimonial-role">{item.role}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Testimonials
