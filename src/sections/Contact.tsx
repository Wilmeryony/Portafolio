import { contactLinks } from '../data/contact'
import { SectionTitle } from '../components/SectionTitle'
import { Button } from '../components/Button'
import { styles } from '../styles/common'

export function Contact() {
  return (
    <section id="contacto" style={styles.sectionAlt}>
      <div style={{ ...styles.container, ...styles.sectionShell }}>
        <SectionTitle title="Hablemos" subtitle="Si hay un problema, hay una solución" />

        <p style={{ ...styles.textMuted, textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.03rem', maxWidth: 720, marginInline: 'auto' }}>
          Si buscas una solución digital bien pensada, clara y ejecutada con criterio, podemos hablar.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', alignItems: 'start' }}>
          <div style={{ ...styles.flexColumn, gap: '0.9rem' }}>
            {contactLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                style={{
                  ...styles.card,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.95rem 1.05rem',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{link.icon}</span>
                <div style={{ ...styles.flexColumn, gap: 2 }}>
                  <span style={{ ...styles.textXs, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                    {link.label}
                  </span>
                  <span style={styles.textSm}>{link.value}</span>
                </div>
              </a>
            ))}
          </div>

          <div style={{ ...styles.card, ...styles.flexColumn, gap: '1rem', background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(45, 212, 191, 0.08))', border: '1px solid rgba(124, 144, 255, 0.16)' }}>
            <p style={styles.textMuted}>
              Estoy disponible para proyectos freelance, colaboraciones y oportunidades laborales.
            </p>
            <p style={styles.textMuted}>
              Tiempo de respuesta: menos de 24 horas.
            </p>
            <Button href="https://mail.google.com/mail/?view=cm&to=wilmerizquierdohuaripata@gmail.com" variant="primary">
              Enviar mensaje
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}