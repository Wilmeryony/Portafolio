import type { CSSProperties } from 'react'

type AuroraProps = {
  colorStops?: string[]
  blend?: number
  amplitude?: number
  speed?: number
}

export default function Aurora({
  colorStops = ['#7cff67', '#B497CF', '#5227FF'],
  blend = 0.5,
  amplitude = 1.0,
  speed = 1,
}: AuroraProps) {
  const style: CSSProperties = {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    zIndex: 0,
    background: `
      radial-gradient(circle at 20% 20%, ${colorStops[0]}33 0%, transparent 35%),
      radial-gradient(circle at 80% 30%, ${colorStops[1]}33 0%, transparent 35%),
      radial-gradient(circle at 50% 80%, ${colorStops[2]}33 0%, transparent 35%)
    `,
    filter: `blur(${24 + amplitude * 12}px)`,
    opacity: 0.65 + blend * 0.25,
    transform: `scale(${1 + speed * 0.04})`,
  }

  return <div aria-hidden="true" style={style} />
}
