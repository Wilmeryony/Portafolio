import type { CSSProperties } from 'react'

export const styles = {

  // ── Secciones ────────────────────────────
  section: {
    padding: '5.8rem 1.5rem',
    position: 'relative',
  } as CSSProperties,

  sectionAlt: {
    padding: '5.8rem 1.5rem',
    background: 'linear-gradient(180deg, rgba(124, 58, 237, 0.04), transparent)',
    position: 'relative',
  } as CSSProperties,

  container: {
    maxWidth: 1180,
    margin: '0 auto',
    position: 'relative',
  } as CSSProperties,

  sectionShell: {
    background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.05), rgba(45, 212, 191, 0.04))',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 30,
    padding: '1.2rem',
    boxShadow: '0 18px 50px rgba(15, 23, 42, 0.08)',
  } as CSSProperties,

  // ── Navbar ───────────────────────────────
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    padding: '0.9rem 1.1rem',
    backdropFilter: 'blur(18px)',
    WebkitBackdropFilter: 'blur(18px)',
    backgroundColor: 'var(--color-surface)',
    borderBottom: '1px solid var(--color-border)',
  } as CSSProperties,

  navInner: {
    maxWidth: 1180,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.8rem 1rem',
    borderRadius: 9999,
    border: '1px solid var(--color-border)',
    boxShadow: '0 10px 35px rgba(15, 23, 42, 0.08)',
  } as CSSProperties,

  navBrand: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.7rem',
  } as CSSProperties,

  navBrandText: {
    fontWeight: 700,
    fontSize: '0.95rem',
  } as CSSProperties,

  navList: {
    display: 'flex',
    gap: '1.1rem',
    flexWrap: 'wrap',
  } as CSSProperties,

  navLink: {
    fontSize: '0.85rem',
    textTransform: 'capitalize',
    transition: 'color 0.3s ease',
    fontWeight: 600,
    color: 'var(--color-text-muted)',
  } as CSSProperties,

  navActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
  } as CSSProperties,

  navContactBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.35rem 0.7rem',
    borderRadius: 9999,
    background: 'rgba(124, 58, 237, 0.12)',
    color: 'var(--color-accent)',
    fontSize: '0.78rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  } as CSSProperties,

  navThemeButton: {
    fontSize: '1rem',
    padding: '0.6rem 0.8rem',
    borderRadius: 9999,
    backgroundColor: 'var(--color-card)',
    border: '1px solid var(--color-border)',
    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.06)',
  } as CSSProperties,

  navLogoImage: {
    height: 42,
    width: 42,
    objectFit: 'contain',
    borderRadius: 12,
    transition: 'filter 0.3s ease',
  } as CSSProperties,

  // ── Tarjetas ─────────────────────────────
  card: {
    background: 'var(--color-card)',
    border: '1px solid var(--color-border)',
    borderRadius: 24,
    padding: '1.5rem',
    boxShadow: 'var(--shadow)',
    backdropFilter: 'blur(18px)',
    WebkitBackdropFilter: 'blur(18px)',
    transition: 'all 0.3s ease',
  } as CSSProperties,

  // ── Texto ────────────────────────────────
  textMuted: {
    color: 'var(--color-text-muted)',
    lineHeight: 1.75,
  } as CSSProperties,

  textSm: {
    fontSize: '0.95rem',
  } as CSSProperties,

  textXs: {
    fontSize: '0.78rem',
  } as CSSProperties,

  // ── Layouts ──────────────────────────────
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  } as CSSProperties,

  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as CSSProperties,

  flexBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as CSSProperties,

  // ── Badges ───────────────────────────────
  badge: {
    fontSize: '0.72rem',
    padding: '0.35rem 0.7rem',
    borderRadius: 9999,
    backgroundColor: 'rgba(124, 58, 237, 0.12)',
    color: 'var(--color-accent)',
    fontWeight: 600,
  } as CSSProperties,

  pill: {
    display: 'inline-flex',
    alignItems: 'center',
    width: 'fit-content',
    padding: '0.45rem 0.8rem',
    borderRadius: 9999,
    border: '1px solid rgba(124, 58, 237, 0.22)',
    background: 'rgba(124, 58, 237, 0.08)',
    color: 'var(--color-accent)',
    fontSize: '0.8rem',
    fontWeight: 600,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  } as CSSProperties,

  // ── Grids ────────────────────────────────
  gridProjects: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  } as CSSProperties,

  gridSkills: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
  } as CSSProperties,

  gridServices: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
  } as CSSProperties,

  // ── Hero ─────────────────────────────────
  hero: {
    minHeight: 'calc(100vh - 70px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 1.1rem 3rem',
    position: 'relative',
    overflow: 'hidden',
  } as CSSProperties,

  heroGrid: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: '2.2rem',
    width: '100%',
    maxWidth: 1180,
    alignItems: 'center',
  } as CSSProperties,

  heroCard: {
    background: 'linear-gradient(135deg, rgba(255,255,255,0.16), rgba(124,58,237,0.06))',
    border: '1px solid rgba(255,255,255,0.16)',
    borderRadius: 24,
    padding: '1.25rem',
    boxShadow: 'var(--shadow)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
  } as CSSProperties,

  heroAvatar: {
    width: 92,
    height: 92,
    borderRadius: '50%',
    background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent2))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.6rem',
    fontWeight: 700,
    color: '#fff',
    marginBottom: '1rem',
  } as CSSProperties,

  heroTag: {
    fontSize: '0.82rem',
    color: 'var(--color-accent2)',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    fontWeight: 700,
  } as CSSProperties,

  heroSubtitle: {
    fontSize: '1rem',
    color: 'var(--color-text-muted)',
    lineHeight: 1.7,
  } as CSSProperties,

  heroBtns: {
    display: 'flex',
    gap: '1rem',
    marginTop: '0.5rem',
    flexWrap: 'wrap',
  } as CSSProperties,

  // ── Servicios ────────────────────────────
  serviceCard: {
    background: 'var(--color-card)',
    border: '1px solid var(--color-border)',
    borderRadius: 24,
    padding: '1.6rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    boxShadow: 'var(--shadow)',
    transition: 'all 0.3s ease',
    cursor: 'default',
  } as CSSProperties,

  serviceTitle: {
    fontSize: '1.1rem',
    fontWeight: 700,
  } as CSSProperties,

  serviceFeature: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.55rem',
    fontSize: '0.88rem',
    color: 'var(--color-text-muted)',
  } as CSSProperties,

  // ── Contacto ─────────────────────────────
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    alignItems: 'stretch',
  } as CSSProperties,

  contactFormCard: {
    borderRadius: 24,
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.08), rgba(45, 212, 191, 0.06))',
    border: '1px solid rgba(124, 144, 255, 0.16)',
    boxShadow: 'var(--shadow)',
    backdropFilter: 'blur(18px)',
    WebkitBackdropFilter: 'blur(18px)',
  } as CSSProperties,

  contactInput: {
    width: '100%',
    padding: '0.8rem 1rem',
    borderRadius: 12,
    border: '1px solid var(--color-border)',
    background: 'var(--color-card)',
    color: 'var(--color-text)',
    fontSize: '0.9rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  } as CSSProperties,

  contactLabel: {
    fontSize: '0.78rem',
    color: 'var(--color-text-muted)',
    marginBottom: '0.4rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  } as CSSProperties,

  contactSendBtn: {
    padding: '0.85rem',
    borderRadius: 12,
    fontWeight: 700,
    fontSize: '0.95rem',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    width: '100%',
  } as CSSProperties,

  // ── Footer ───────────────────────────────
  footer: {
    backgroundColor: 'var(--color-surface)',
    borderTop: '1px solid var(--color-border)',
    padding: '3.5rem 1.5rem 1.5rem',
  } as CSSProperties,

  footerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '2rem',
    alignItems: 'start',
  } as CSSProperties,

  footerLogo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
  } as CSSProperties,

  footerTitle: {
    fontSize: '0.76rem',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    fontWeight: 700,
    color: 'var(--color-accent)',
  } as CSSProperties,

  footerDivider: {
    borderTop: '1px solid var(--color-border)',
  } as CSSProperties,

  footerBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '0.5rem',
  } as CSSProperties,

} as const