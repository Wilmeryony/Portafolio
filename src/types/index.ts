// Así luce un proyecto en TypeScript
export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  githubUrl?: string  // el ? significa que es opcional
  demoUrl?: string
  status: 'completed' | 'in-progress' | 'planned'
}

// Así luce una habilidad
export interface Skill {
  name: string
  level: 'Intermedio' | 'Básico' | 'Explorando'
  category: 'Fundamentos' | 'Herramientas' | 'IA & Automatización'
}

// Así luce un link de contacto
export interface ContactLink {
  label: string
  value: string
  href: string
  icon: string
}