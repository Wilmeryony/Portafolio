import { useTheme } from '../hooks/useTheme'
import logo from '../assets/logo.png'
import { styles } from '../styles/common'

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const navStyle = isDark ? styles.navDark : styles.nav
  const navInnerStyle = isDark ? styles.navInnerDark : styles.navInnerLight
  const navLinkStyle = isDark ? styles.navLinkDark : styles.navLinkLight
  const logoStyle = isDark ? styles.navLogoImageDark : styles.navLogoImageLight

  return (
    <nav style={navStyle}>
      <div style={navInnerStyle}>
        <a href="#inicio" style={styles.navBrand}>
          <img
            src={logo}
            alt="Wilmer Izquierdo"
            style={logoStyle}
          />
        </a>
        <div style={styles.navActions}>
          <a href="#contacto" style={styles.navContactBadge}>
            Disponible
          </a>

          <ul style={styles.navList}>
            {(['inicio', 'servicios', 'proyectos', 'habilidades', 'contacto'] as const).map(section => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  style={navLinkStyle}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.color = 'var(--color-text)'
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.color = navLinkStyle.color as string
                  }}
                >
                  {section.replace('-', ' ')}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            style={styles.navThemeButton}
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  )
}