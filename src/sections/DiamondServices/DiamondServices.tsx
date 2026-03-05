import SectionHeader from '../../components/SectionHeader/SectionHeader'

function DiamondServices() {
  return (
    <section id="diamond-services" className="diamond-services-section">
      <div className="diamond-services-inner">
        <SectionHeader
          title="Serviços"
          subtitle="Todas as ferramentas necessárias para potencializar o sucesso do seu projeto."
        />
        
        <div className="diamond-grid">
          <div className="diamond-item diamond-left">
            <div className="diamond-shape">
              <span className="diamond-label">Squads<br /> dedicados</span>
            </div>
          </div>
          <div className="diamond-item diamond-right">
            <div className="diamond-shape">
              <span className="diamond-label">Discovery & Estratégia</span>
            </div>
          </div>
          <div className="diamond-item diamond-bottom">
            <div className="diamond-shape">
              <span className="diamond-label">Desenvolvimento sob medida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiamondServices
