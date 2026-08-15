import logo from '../assets/logo.png'
import { styles } from '../styles/common'

export function Footer() {
  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Contacto', href: '#contacto' }
  ]

  const contact = [
    { label: 'WhatsApp', href: 'https://wa.me/51910057446', value: '+51 910057446' },
    { label: 'Email', href: 'https://mail.google.com/mail/?view=cm&to=wilmerizquierdohuaripata@gmail.com', value: 'wilmerizquierdohuaripata@gmail.com' },
    { label: 'Ubicación', href: '#', value: 'Cajamarca, Perú' },
  ]

  return (
    <footer style={styles.footer}>
      <div style={{ ...styles.container, ...styles.flexColumn, gap: '2.2rem' }}>
        <div style={styles.footerGrid}>
          <div style={styles.footerLogo}>
            <img src={logo} alt="Wilmer Izquierdo" style={{ height: 58, width: 58, objectFit: 'contain' }} />
            <p style={{ ...styles.textSm, color: 'var(--color-accent)', fontWeight: 700, textAlign: 'center' }}>
              Ingeniero de Software con IA
            </p>
            <p style={{ ...styles.textXs, ...styles.textMuted, textAlign: 'center', maxWidth: 180 }}>
              Construyendo soluciones inteligentes y escalables.
            </p>
          </div>

          <div style={{ ...styles.flexColumn, gap: '0.75rem' }}>
            <h4 style={styles.footerTitle}>Navegación</h4>
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                style={{ ...styles.textSm, color: 'var(--color-text-muted)', transition: 'color 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-text)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-muted)' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div style={{ ...styles.flexColumn, gap: '0.75rem' }}>
            <h4 style={styles.footerTitle}>Contacto directo</h4>
            {contact.map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                style={{ ...styles.flexColumn, gap: 2 }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.8' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
              >
                <span style={styles.footerTitle}>{item.label}</span>
                <span style={{ ...styles.textSm, color: 'var(--color-text-muted)' }}>{item.value}</span>
              </a>
            ))}
          </div>
        </div>

        <div style={styles.footerDivider} />

        <div style={styles.footerBottom}>
          <p style={{ ...styles.textXs, color: 'var(--color-text-muted)' }}>
            © 2026 <span style={{ color: 'var(--color-accent)' }}>Wilmer Izquierdo</span>. Todos los derechos reservados.
          </p>
          <p style={{ ...styles.textXs, color: 'var(--color-text-muted)', fontFamily: 'monospace' }}>
            Hecho con React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  )
}