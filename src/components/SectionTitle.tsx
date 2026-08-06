interface Props {
  title: string
  subtitle?: string
}

export function SectionTitle({ title, subtitle }: Props) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '2.6rem', maxWidth: 760, marginInline: 'auto' }}>
      <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
        {subtitle ?? 'Portafolio'}
      </p>
      <h2 style={{ fontSize: 'clamp(1.55rem, 2.8vw, 2.1rem)', fontWeight: 700, marginTop: '0.4rem', lineHeight: 1.2 }}>{title}</h2>
      <div style={{
        width: 72,
        height: 4,
        background: 'linear-gradient(90deg, var(--color-accent), var(--color-accent2))',
        borderRadius: 9999,
        margin: '0.8rem auto 0',
        opacity: 0.95,
      }} />
    </div>
  )
}