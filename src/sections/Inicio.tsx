import { Button } from '../components/Button'
import { useTheme } from '../hooks/useTheme'
import { styles } from '../styles/common'

export function Inicio() {
  const { theme } = useTheme()

  return (
    <section id="inicio" className="hero-bg" style={styles.hero}>
      <div style={styles.heroGrid}>
        <div style={{ ...styles.flexColumn, gap: '1.15rem', zIndex: 1 }}>
          <div className="fade-1" style={styles.pill}>Software Engineer Junior · 2026</div>

          <h1 className="fade-2" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.05, maxWidth: 700 }}>
            Construyo productos digitales{' '}
            <span style={{ color: 'var(--color-accent)', textShadow: theme === 'dark' ? '0 0 30px rgba(124,58,237,0.25)' : 'none' }}>
              simples, útiles y bien ejecutados.
            </span>
          </h1>

          <p className="fade-3" style={styles.heroSubtitle}>
            Trabajo en la intersección entre tecnología, experiencia de usuario y resultados reales para que los productos sean claros, rápidos y confiables.
          </p>

          <p className="fade-4" style={styles.heroDesc}>
            Me enfoco en resolver problemas concretos con sistemas web, automatizaciones y experiencias digitales que ayudan a vender, enseñar y operar mejor.
          </p>

          <div className="fade-5" style={styles.heroBtns}>
            <Button href="#proyectos" variant="primary">Ver proyectos</Button>
            <Button href="#contacto" variant="outline">Hablemos</Button>
          </div>

          <div className="fade-6" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.2rem' }}>
            <div style={styles.metricCard}>
              <strong style={{ fontSize: '1rem' }}>PHP · Laravel</strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Stack principal</span>
            </div>
            <div style={styles.metricCard}>
              <strong style={{ fontSize: '1rem' }}>IA aplicada</strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Automatización</span>
            </div>
          </div>
        </div>

        <div className="fade-4" style={{ ...styles.heroCard, zIndex: 1, background: 'linear-gradient(135deg, var(--color-card), rgba(124, 58, 237, 0.08))', border: '1px solid rgba(124, 144, 255, 0.16)' }}>
          <div className="hero-avatar-pulse" style={styles.heroAvatar}>WI</div>
          <p style={{ ...styles.heroTag, marginBottom: '0.3rem' }}>Perfil actual</p>
          <h2 style={{ fontSize: '1.28rem', fontWeight: 700, marginBottom: '0.7rem' }}>Diseño y desarrollo con criterio técnico</h2>
          <p style={{ ...styles.heroSubtitle, marginBottom: '1rem' }}>
            Enfoque en productos digitales útiles, bien pensados y listos para crecer.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {['Laravel', 'PHP', 'React', 'IA'].map(item => (
              <span key={item} style={{ ...styles.badge, background: 'rgba(255,255,255,0.08)' }}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      <p className="bounce" style={{ position: 'absolute', bottom: '1rem', color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>↓</p>
    </section>
  )
}