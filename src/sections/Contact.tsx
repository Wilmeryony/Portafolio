import { useState } from 'react'
import { contactLinks } from '../data/contact'
import { SectionTitle } from '../components/SectionTitle'
import { styles } from '../styles/common'

const WHATSAPP_NUMBER = '51910057446'

export function Contact() {
  const [nombre, setNombre] = useState('')
  const [mensaje, setMensaje] = useState('')

  const listo = nombre.trim() && mensaje.trim()

  const handleEnviar = () => {
    if (!listo) return
    const texto = `Hola Wilmer, soy *${nombre}*.\n\n${mensaje}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`, '_blank')
  }

  return (
    <section id="contacto" style={styles.sectionAlt}>
      <div style={{ ...styles.container, ...styles.sectionShell }}>
        <SectionTitle title="Hablemos" subtitle="Si hay un problema, hay una solución" />

        <p style={{ ...styles.textMuted, textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.03rem', maxWidth: 720, marginInline: 'auto' }}>
          Si buscas una solución digital bien pensada, clara y ejecutada con criterio, podemos hablar.
        </p>

        <div style={{ ...styles.contactGrid, alignItems: 'stretch' }}>

          {/* Links */}
          <div style={{ ...styles.flexColumn, gap: '0.9rem' }}>
            {contactLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                style={{ ...styles.card, display: 'flex', alignItems: 'center', gap: '0.85rem', padding: '0.9rem 1rem' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{link.icon}</span>
                <div style={{ ...styles.flexColumn, gap: 2, minWidth: 0, flex: 1 }}>
                  <span style={styles.contactLabel}>{link.label}</span>
                  <span style={{ ...styles.textSm, wordBreak: 'break-word' }}>{link.value}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Formulario */}
          <div style={{ ...styles.contactFormCard, justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Cuéntame qué necesitas</h3>

            <div style={{ ...styles.flexColumn, gap: '1rem', flex: 1, marginTop: '1rem' }}>

              {/* Nombre */}
              <div style={styles.flexColumn}>
                <label style={styles.contactLabel}>Tu nombre</label>
                <input
                  type="text"
                  placeholder="¿Cómo te llamas?"
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                  style={styles.contactInput as React.CSSProperties}
                  onFocus={e => { e.currentTarget.style.borderColor = 'var(--color-accent)' }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'var(--color-border)' }}
                />
              </div>

              {/* Mensaje */}
              <div style={{ ...styles.flexColumn, flex: 1 }}>
                <label style={styles.contactLabel}>Tu mensaje</label>
                <textarea
                  placeholder="Cuéntame brevemente tu proyecto o idea..."
                  value={mensaje}
                  onChange={e => setMensaje(e.target.value)}
                  style={{ ...styles.contactInput as React.CSSProperties, resize: 'none', flex: 1, minHeight: 120 }}
                  onFocus={e => { e.currentTarget.style.borderColor = 'var(--color-accent)' }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'var(--color-border)' }}
                />
              </div>

            </div>

            {/* Botón */}
            <button
              onClick={handleEnviar}
              disabled={!listo}
              style={{
                ...styles.contactSendBtn as React.CSSProperties,
                marginTop: '1rem',
                background: listo ? 'linear-gradient(135deg, #25D366, #128C7E)' : 'var(--color-border)',
                color: listo ? '#fff' : 'var(--color-text-muted)',
                cursor: listo ? 'pointer' : 'not-allowed',
              }}
              onMouseEnter={e => { if (listo) e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Enviar por WhatsApp →
            </button>

            <p style={{ ...styles.textXs, color: 'var(--color-text-muted)', textAlign: 'center', marginTop: '0.5rem' }}>
              Te respondo en menos de 24 horas
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}