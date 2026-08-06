import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface Props {
  children: React.ReactNode
  delay?: number
  style?: React.CSSProperties
  className?: string
}

export function AnimatedSection({ children, delay = 0, style, className }: Props) {
  const ref = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`animate-target ${className ?? ''}`}
      style={{ ...style, transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}