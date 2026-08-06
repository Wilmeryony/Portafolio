import type { CSSProperties, ReactNode } from 'react'

interface Props {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline'
}

export function Button({ children, href, onClick, variant = 'primary' }: Props) {
  const base: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '0.85rem 1.35rem',
    borderRadius: 9999,
    fontSize: '0.92rem',
    fontWeight: 600,
    transition: 'all 0.25s ease',
    cursor: 'pointer',
    boxShadow: '0 10px 25px rgba(15, 23, 42, 0.08)',
  }

  const styles: Record<string, CSSProperties> = {
    primary: {
      ...base,
      background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent2))',
      color: '#ffffff',
      border: 'none',
    },
    outline: {
      ...base,
      backgroundColor: 'transparent',
      color: 'var(--color-text)',
      border: '1px solid var(--color-border)',
      boxShadow: 'none',
    },
  }

  if (href) {
    return <a href={href} style={styles[variant]}>{children}</a>
  }

  return (
    <button onClick={onClick} style={styles[variant]}>
      {children}
    </button>
  )
}