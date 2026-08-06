interface Props {
  text: string
}

export function Tag({ text }: Props) {
  return (
    <span style={{
      fontSize: '0.72rem',
      fontWeight: 600,
      padding: '0.32rem 0.7rem',
      borderRadius: '9999px',
      backgroundColor: 'rgba(255,255,255,0.05)',
      color: 'var(--color-text-muted)',
      border: '1px solid var(--color-border)',
      letterSpacing: '0.02em',
    }}>
      {text}
    </span>
  )
}