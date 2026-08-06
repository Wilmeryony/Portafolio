export interface Service {
  id: number
  icon: string
  title: string
  description: string
  features: string[]
}

export const services: Service[] = [
  {
    id: 1,
    icon: '🛒',
    title: 'Tiendas que convierten',
    description: 'No solo vender, sino guiar al usuario con una experiencia clara, rápida y confiable hasta la compra.',
    features: ['Flujos de compra simples', 'Pagos seguros', 'Catálogo claro', 'Experiencia móvil'],
  },
  {
    id: 2,
    icon: '🎓',
    title: 'Aulas que acompañan',
    description: 'Plataformas educativas pensadas para que aprender se sienta ordenado, claro y fácil de seguir.',
    features: ['Cursos bien organizados', 'Seguimiento de progreso', 'Usuarios claros', 'Acceso simple'],
  },
  {
    id: 3,
    icon: '⚙️',
    title: 'Sistemas que alivian el caos',
    description: 'Automatizo procesos y elimino tareas repetitivas para que tu equipo trabaje con menos ruido.',
    features: ['Procesos a medida', 'Gestión de datos', 'Roles y permisos', 'Reportes útiles'],
  },
  {
    id: 4,
    icon: '🌐',
    title: 'Páginas con intención',
    description: 'Sitios que explican bien, generan confianza y ayudan a que el visitante tome acción.',
    features: ['Diseño pensado en usuarios', 'Contenido claro', 'SEO', 'Rendimiento'],
  },
  {
    id: 5,
    icon: '🤖',
    title: 'Asistentes e IA aplicada',
    description: 'Integro asistentes y automatizaciones que responden rápido, ahorran tiempo y mejoran la atención.',
    features: ['Chatbots', 'Flujos automáticos', 'Integraciones', 'Mejora continua'],
  },
  {
    id: 6,
    icon: '💳',
    title: 'Pagos que no rompen la experiencia',
    description: 'Integro pagos de forma segura y sin fricción para que la transacción se sienta simple.',
    features: ['Yape / Plin', 'Tarjetas', 'Transferencias', 'Seguridad'],
  },
]