import './App.css';
import Navbar from './components/Navbar';
import Skills from './components/pages/Skills'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import Intro from './components/pages/Intro'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Analytics />
    </>
  )
}

export default App
