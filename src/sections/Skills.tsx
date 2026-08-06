import { skills } from '../data/skills'
import { AnimatedSection } from '../components/AnimatedSection'
import { styles } from '../styles/common'

const categories = ['Fundamentos', 'Herramientas', 'IA & Automatización'] as const

export function Skills() {
  return (
    <section id="habilidades" style={styles.section}>
      <div style={{ ...styles.container, ...styles.sectionShell }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
            Stack técnico
          </p>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, marginTop: '0.35rem' }}>
            Enfoque práctico y moderno
          </h2>
        </div>

        <div style={styles.gridSkills}>
          {categories.map((category, index) => (
            <AnimatedSection key={category} delay={index * 0.12}>
              <div style={{ ...styles.card, padding: '1.25rem', background: 'linear-gradient(135deg, var(--color-card), rgba(124, 58, 237, 0.03))' }}>
                <h3 style={{
                  ...styles.textXs,
                  fontWeight: 700,
                  color: 'var(--color-accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  marginBottom: '1rem',
                }}>
                  {category}
                </h3>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                  {skills
                    .filter(s => s.category === category)
                    .map(skill => (
                      <span
                        key={skill.name}
                        style={{
                          padding: '0.5rem 0.75rem',
                          borderRadius: 9999,
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid var(--color-border)',
                          fontSize: '0.84rem',
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        {skill.name}
                      </span>
                    ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}