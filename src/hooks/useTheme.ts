import { useEffect } from 'react'

export function useTheme() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  }, [])

  return { theme: 'dark' as const }
}