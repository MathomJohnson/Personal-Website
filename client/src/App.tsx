//import { useEffect, useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom"
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
    </Routes>

    </>
  )
}

export default App
