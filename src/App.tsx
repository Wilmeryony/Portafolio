import { useState, useEffect } from 'react'
import { Navbar } from './sections/Navbar'
import { Inicio } from './sections/Inicio'
import { Services } from './sections/Services'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { Plasma } from './components/Plasma'

function App() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>

      {!isMobile && (
        <Plasma
          color="#2326d0"
          speed={0.6}
          direction="forward"
          scale={1}
          opacity={0.4}
          mouseInteractive={false}
          renderScale={0.55}
          maxDpr={1.5}
          targetFps={30}
          iterations={40}
        />
      )}

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Inicio />
          <Services />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>

    </div>
  )
}

export default App