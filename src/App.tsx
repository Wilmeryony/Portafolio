import { Navbar } from './sections/Navbar'
import { Inicio } from './sections/Inicio'
import { Services } from './sections/Services'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { Plasma } from './components/Plasma'

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>

      {/* Fondo global — detrás de todo */}
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

      {/* Contenido encima del fondo */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Inicio />
          <Services />
          {/* <Projects /> */}
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>

    </div>
  )
}

export default App