import { useEffect, useState } from 'react'
import React from 'react'
import { useTheme } from '../hooks/useTheme'
import logo from '../assets/logo.png'
import { styles } from '../styles/common'

const sections = ['inicio', 'servicios', 'proyectos', 'habilidades', 'contacto',] as const

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 900
      setIsMobile(mobile)
      if (!mobile) setMenuOpen(false)
    }

    const handleScroll = () => setMenuOpen(false)

    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const listStyleMobile: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem',
  }

  const linkStyleMobile: React.CSSProperties = {
    display: 'block',
    padding: '0.72rem 0.8rem',
    borderRadius: 12,
    background: 'rgba(124, 144, 255, 0.08)',
    fontWeight: 600,
    color: 'var(--color-text)',
  }

  const renderLinks = (mobile = false) => {
    const listStyle = mobile ? listStyleMobile : (styles.navList as React.CSSProperties)
    const linkStyle = mobile ? linkStyleMobile : (styles.navLink as React.CSSProperties)

    return (
      <ul style={listStyle}>
        {sections.map(section => (
          <li key={section}>
            <a
              href={`#${section}`}
              style={linkStyle}
              onClick={() => setMenuOpen(false)}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                if (!mobile) e.currentTarget.style.color = 'var(--color-text)'
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                if (!mobile) e.currentTarget.style.color = 'var(--color-text-muted)'
              }}
            >
              {section.replace('-', ' ')}
            </a>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <nav style={styles.nav}>
      <div style={styles.navInner as React.CSSProperties}>

        {/* Logo */}
        <a href="#inicio" style={styles.navBrand as React.CSSProperties}>
          <img
            src={logo}
            alt="Wilmer Izquierdo"
            style={{
              ...(styles.navLogoImage as React.CSSProperties),
              filter: theme === 'light' ? 'invert(1)' : 'none',
            }}
          />
        </a>

        {/* Mobile */}
        {isMobile ? (
          <div className="nav-mobile-shell">
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-expanded={menuOpen}
              aria-label="Abrir menú"
            >
              <span /><span /><span />
            </button>

            {menuOpen && (
              <div className={`mobile-menu ${theme === 'dark' ? 'mobile-menu-dark' : 'mobile-menu-light'}`}>
                <a
                  href="#contacto"
                  style={styles.navContactBadge as React.CSSProperties}
                  onClick={() => setMenuOpen(false)}
                >
                  Disponible
                </a>
                {renderLinks(true)}
                <button
                  onClick={toggleTheme}
                  style={styles.navThemeButton as React.CSSProperties}
                  aria-label="Cambiar tema"
                >
                  {theme === 'dark' ? '🌙' : '☀️'}
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Desktop */
          <div style={styles.navActions as React.CSSProperties}>
            <a href="#contacto" style={styles.navContactBadge as React.CSSProperties}>
              Disponible
            </a>
            {renderLinks(false)}
            <button
              onClick={toggleTheme}
              style={styles.navThemeButton as React.CSSProperties}
              aria-label="Cambiar tema"
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
          </div>
        )}

      </div>
    </nav>
  )
}