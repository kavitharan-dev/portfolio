import BackgroundAnimation from './components/BackgroundAnimation'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import { Contact, Footer } from './components/Contact'

function App() {
  return (
    <>
      <BackgroundAnimation />
      <Navbar />
      <div className="page-shell">
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
