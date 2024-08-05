//import { useEffect, useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom"
import Skills from './components/pages/Skills'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'

function App() {
  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes> */}
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
