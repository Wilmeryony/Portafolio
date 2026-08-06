import { services } from '../data/services'
import { SectionTitle } from '../components/SectionTitle'
import { styles } from '../styles/common'
import { AnimatedSection } from '../components/AnimatedSection'

export function Services() {
  return (
    <section id="servicios" style={styles.section}>
      <div style={{ ...styles.container, ...styles.sectionShell }}>
        <SectionTitle title="Lo que construyo" subtitle="Más que páginas" />

        <div style={styles.gridServices}>
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.1}>
              <div
                style={{ ...styles.serviceCard, position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, var(--color-card), rgba(45, 212, 191, 0.04))' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(124, 58, 237, 0.14)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'var(--shadow)'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 4, background: 'linear-gradient(90deg, var(--color-accent), var(--color-accent2))' }} />
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.25rem' }}>
                  <span style={{ ...styles.serviceIcon, opacity: 0.95 }}>{service.icon}</span>
                </div>
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={{ ...styles.textMuted, ...styles.textSm }}>
                  {service.description}
                </p>
                <div style={{ borderTop: '1px solid var(--color-border)' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {service.features.map(feature => (
                    <div key={feature} style={styles.serviceFeature}>
                      <span style={{ color: 'var(--color-accent2)', fontSize: '0.8rem' }}>✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ ...styles.textMuted, marginBottom: '1rem' }}>
              ¿Necesitas algo específico? Conversamos y lo diseñamos a medida.
            </p>
            <a
              href="#contacto"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.45rem',
                background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent2))',
                color: '#fff',
                borderRadius: 9999,
                fontSize: '0.92rem',
                fontWeight: 600,
                transition: 'transform 0.25s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Contáctame →
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}