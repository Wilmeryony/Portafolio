import { Navbar } from './sections/Navbar'
import { Inicio } from './sections/Inicio'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { Services } from './sections/Services'
import { Skills } from './sections/Skills'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Inicio />
        <Services />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App