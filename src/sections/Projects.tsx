import { projects } from '../data/projects'
import { Tag } from '../components/Tag'
import { SectionTitle } from '../components/SectionTitle'
import { AnimatedSection } from '../components/AnimatedSection'
import { styles } from '../styles/common'

export function Projects() {
  return (
    <section id="proyectos" style={styles.sectionAlt}>
      <div style={{ ...styles.container, ...styles.sectionShell }}>
        <SectionTitle title="Proyectos con propósito" subtitle="Casos destacados" />

        <div style={styles.gridProjects}>
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.15}>
              <article
                style={{ ...styles.card, display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, var(--color-card), rgba(124, 58, 237, 0.04))' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(124, 58, 237, 0.16)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'var(--shadow)'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 4, background: 'linear-gradient(90deg, var(--color-accent), var(--color-accent2))' }} />
                <div style={styles.flexBetween}>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-accent)' }}>
                    {project.status === 'completed' ? 'Proyecto activo' : 'En desarrollo'}
                  </span>
                  <span style={{
                    ...styles.badge,
                    backgroundColor: project.status === 'completed'
                      ? 'rgba(45, 212, 191, 0.12)' : 'rgba(124, 58, 237, 0.12)',
                    color: project.status === 'completed'
                      ? 'var(--color-accent2)' : 'var(--color-accent)',
                  }}>
                    {project.status === 'completed' ? 'Completado' : 'En progreso'}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.08rem', fontWeight: 700, lineHeight: 1.4 }}>
                  {project.title}
                </h3>

                <p style={{ ...styles.textMuted, ...styles.textSm, flex: 1 }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.tags.map(tag => <Tag key={tag} text={tag} />)}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ ...styles.textSm, color: 'var(--color-accent)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                  >
                    Ver código <span aria-hidden="true">↗</span>
                  </a>
                )}
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}