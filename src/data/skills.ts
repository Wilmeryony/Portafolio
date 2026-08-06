import type { Skill } from '../types'

export const skills: Skill[] = [
  // Fundamentos
  { name: 'PHP',                    level: 'Intermedio',  category: 'Fundamentos' },
  { name: 'Python',                 level: 'Básico',      category: 'Fundamentos' },
  { name: 'JavaScript',             level: 'Básico',      category: 'Fundamentos' },
  { name: 'TypeScript',             level: 'Básico',      category: 'Fundamentos' },
  { name: 'HTML / CSS',             level: 'Intermedio',  category: 'Fundamentos' },
  { name: 'SQL',                    level: 'Básico',      category: 'Fundamentos' },
  { name: 'Arquitectura de software', level: 'Intermedio', category: 'Fundamentos' },

  // Herramientas
  { name: 'Laravel',                level: 'Intermedio',  category: 'Herramientas' },
  { name: 'React',                  level: 'Básico',      category: 'Herramientas' },
  { name: 'Vue.js',                 level: 'Básico',      category: 'Herramientas' },
  { name: 'FastAPI',                level: 'Básico',      category: 'Herramientas' },
  { name: 'MySQL',                  level: 'Intermedio',  category: 'Herramientas' },
  { name: 'PostgreSQL',             level: 'Básico',      category: 'Herramientas' },
  { name: 'Git & GitHub',           level: 'Básico',      category: 'Herramientas' },
  { name: 'Pasarelas de pago',      level: 'Básico',      category: 'Herramientas' },

  // IA & Automatización
  { name: 'Machine Learning',       level: 'Explorando', category: 'IA & Automatización' },
  { name: 'LLMs / APIs IA',         level: 'Explorando', category: 'IA & Automatización' },
  { name: 'Pandas / NumPy',         level: 'Explorando', category: 'IA & Automatización' },
  { name: 'Automatización de procesos', level: 'Explorando', category: 'IA & Automatización' },
]