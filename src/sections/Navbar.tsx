import { useEffect, useState } from 'react'
import React from 'react'
import logo from '../assets/logo.png'
import { styles } from '../styles/common'

const sections = ['inicio', 'servicios', 'habilidades', 'contacto'] as const

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 900
      setIsMobile(mobile)
      if (!mobile) setMenuOpen(false)
    }

    const handleScroll = () => {
      setMenuOpen(false)
      setScrolled(window.scrollY > 80)
    }

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
    <nav style={{
      ...styles.nav,
      backgroundColor: scrolled ? 'transparent' : 'var(--color-surface)',
      borderBottom: scrolled ? '1px solid transparent' : '1px solid var(--color-border)',
      backdropFilter: scrolled ? 'blur(6px)' : 'blur(18px)',
      WebkitBackdropFilter: scrolled ? 'blur(6px)' : 'blur(18px)',
      transition: 'all 0.4s ease',
    }}>
      <div style={{
        ...styles.navInner as React.CSSProperties,
        background: scrolled ? 'rgba(255,255,255,0.03)' : undefined,
        boxShadow: scrolled ? 'none' : undefined,
        border: scrolled ? '1px solid rgba(255,255,255,0.06)' : undefined,
      }}>

        {/* Logo */}
        <a href="#inicio" style={styles.navBrand as React.CSSProperties}>
          <img
            src={logo}
            alt="Wilmer Izquierdo"
            style={styles.navLogoImage as React.CSSProperties}
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
              <div className="mobile-menu mobile-menu-dark">
                <a
                  href="#contacto"
                  style={styles.navContactBadge as React.CSSProperties}
                  onClick={() => setMenuOpen(false)}
                >
                  Disponible
                </a>
                {renderLinks(true)}
              </div>
            )}
          </div>
        ) : (
          <div style={styles.navActions as React.CSSProperties}>
            <a href="#contacto" style={styles.navContactBadge as React.CSSProperties}>
              Disponible
            </a>
            {renderLinks(false)}
          </div>
        )}

      </div>
    </nav>
  )
}