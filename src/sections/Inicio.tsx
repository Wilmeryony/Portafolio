import { Button } from '../components/Button'
import { useTheme } from '../hooks/useTheme'
import { styles } from '../styles/common'

export function Inicio() {
  const { theme } = useTheme()

  return (
    <section id="inicio" className="hero-bg" style={styles.hero}>
      <div style={{ ...styles.heroGrid, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }} className="hero-grid-mobile">
        <div style={{ ...styles.flexColumn, gap: '1rem', zIndex: 1 }}>
          <div className="fade-1" style={styles.pill}>Software Engineer Junior · 2026</div>

          <h1 className="fade-2" style={{ fontSize: 'clamp(2rem, 5vw, 3.3rem)', fontWeight: 800, lineHeight: 1.05, maxWidth: 720 }}>
            Construyo experiencias digitales{' '}
            <span style={{ color: 'var(--color-accent)', textShadow: theme === 'dark' ? '0 0 24px rgba(124,58,237,0.2)' : 'none' }}>
              claras, rápidas y bien pensadas.
            </span>
          </h1>

          <p className="fade-3" style={styles.heroSubtitle}>
            Desarrollo productos web con enfoque técnico, diseño limpio y resultados reales para negocios y usuarios.
          </p>

          <div className="fade-5" style={styles.heroBtns}>
            <Button href="#proyectos" variant="primary">Ver proyectos</Button>
            <Button href="#contacto" variant="outline">Hablemos</Button>
          </div>

          <div className="fade-6" style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap', marginTop: '0.2rem' }}>
            <div style={{ ...styles.metricCard, padding: '0.8rem 0.95rem' }}>
              <strong style={{ fontSize: '0.95rem' }}>PHP · Laravel</strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Stack principal</span>
            </div>
            <div style={{ ...styles.metricCard, padding: '0.8rem 0.95rem' }}>
              <strong style={{ fontSize: '0.95rem' }}>IA aplicada</strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Automatización</span>
            </div>
          </div>
        </div>

        <div className="fade-4" style={{ ...styles.heroCard, zIndex: 1, padding: '1.25rem', background: 'linear-gradient(135deg, var(--color-card), rgba(124, 58, 237, 0.06))', border: '1px solid rgba(124, 144, 255, 0.14)' }}>
          <div className="hero-avatar-pulse" style={{ ...styles.heroAvatar, width: 78, height: 78, fontSize: '1.3rem', marginBottom: '0.85rem' }}>WI</div>
          <p style={{ ...styles.heroTag, marginBottom: '0.3rem' }}>Perfil actual</p>
          <h2 style={{ fontSize: '1.12rem', fontWeight: 700, marginBottom: '0.6rem' }}>Desarrollo con criterio técnico y enfoque de negocio</h2>
          <p style={{ ...styles.heroSubtitle, marginBottom: '0.9rem' }}>
            Diseño y desarrollo pensando en producto, usabilidad y escalabilidad.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['Laravel', 'PHP', 'React', 'IA'].map(item => (
              <span key={item} style={{ ...styles.badge, background: 'rgba(255,255,255,0.07)' }}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      <p className="bounce" style={{ position: 'absolute', bottom: '1rem', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>↓</p>
    </section>
  )
}