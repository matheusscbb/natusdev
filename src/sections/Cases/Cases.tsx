import type { CasesContent } from '../../data/content'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Image from 'next/image'

type CasesProps = {
  content: CasesContent
}

function Cases({ content }: CasesProps) {
  return (
    <section id="cases" className="cases-section">
      <div className="cases-inner">
        <SectionHeader title={content.title} subtitle={content.subtitle} />

        <div className="cases-categories">
          {content.categories.map((cat, i) => (
            <span key={cat}>
              {cat.toUpperCase()}
              {i < content.categories.length - 1 && (
                <span className="cases-category-separator">|</span>
              )}
            </span>
          ))}
        </div>

        <div className="cases-grid">
          {content.items.map((item, i) => (
            <article className="case-card" key={i}>
              <div className="case-card-header">
                {item.icon ? (
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={36}
                    height={36}
                    className="case-card-icon"
                  />
                ) : (
                  <div className="case-card-icon" />
                )}
                <h3 className="case-card-name">{item.name}</h3>
              </div>
              <p className="case-card-desc">{item.description}</p>
              <div className="case-card-image">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={350}
                    height={200}
                    className="case-card-image-img"
                  />
                ) : (
                  <div className="case-card-image-placeholder" />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cases
