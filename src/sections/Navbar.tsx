import { useEffect, useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import logo from '../assets/logo.png'
import { styles } from '../styles/common'

const sections = ['inicio', 'servicios', 'proyectos', 'habilidades', 'contacto'] as const

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const isDark = theme === 'dark'
  const navStyle = isDark ? styles.navDark : styles.nav
  const navInnerStyle = isDark ? styles.navInnerDark : styles.navInnerLight
  const navLinkStyle = isDark ? styles.navLinkDark : styles.navLinkLight
  const logoStyle = isDark ? styles.navLogoImageDark : styles.navLogoImageLight

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 900
      setIsMobile(mobile)
      if (!mobile) setMenuOpen(false)
    }

    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [menuOpen])

  const renderLinks = (mobile = false) => (
    <ul style={mobile ? { display: 'flex', flexDirection: 'column', gap: '0.35rem' } : styles.navList}>
      {sections.map(section => (
        <li key={section}>
          <a
            href={`#${section}`}
            style={mobile ? { display: 'block', padding: '0.72rem 0.8rem', borderRadius: 12, background: 'rgba(124, 144, 255, 0.08)', fontWeight: 600 } : navLinkStyle}
            onClick={() => setMenuOpen(false)}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              if (!mobile) e.currentTarget.style.color = 'var(--color-text)'
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              if (!mobile) e.currentTarget.style.color = navLinkStyle.color as string
            }}
          >
            {section.replace('-', ' ')}
          </a>
        </li>
      ))}
    </ul>
  )

  return (
    <nav style={navStyle}>
      <div style={navInnerStyle}>
        <a href="#inicio" style={styles.navBrand}>
          <img src={logo} alt="Wilmer Izquierdo" style={logoStyle} />
        </a>

        {isMobile ? (
          <div className="nav-mobile-shell">
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-expanded={menuOpen}
              aria-label="Abrir menú"
            >
              <span />
              <span />
              <span />
            </button>

            {menuOpen && (
              <div className={`mobile-menu ${isDark ? 'mobile-menu-dark' : 'mobile-menu-light'}`}>
                <a href="#contacto" style={styles.navContactBadge} onClick={() => setMenuOpen(false)}>
                  Disponible
                </a>
                {renderLinks(true)}
                <button onClick={toggleTheme} style={styles.navThemeButton} aria-label="Cambiar tema">
                  {theme === 'dark' ? '🌙' : '☀️'}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div style={styles.navActions}>
            <a href="#contacto" style={styles.navContactBadge}>
              Disponible
            </a>
            {renderLinks(false)}
            <button onClick={toggleTheme} style={styles.navThemeButton} aria-label="Cambiar tema">
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}