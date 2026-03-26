import { useState, useEffect } from 'react'
import CustomCursor from './components/CustomCursor'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Achievements from './pages/Achievements'
import AchievementsPage from './pages/AchievementsPage'
import EducationPage from './pages/EducationPage'
import Contact from './pages/Contact'
import About from './pages/About'

export default function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
  }, [])

  const toggleTheme = () => {
    const newDark = !dark
    setDark(newDark)
    document.documentElement.setAttribute('data-theme', newDark ? 'dark' : 'light')
  }

  return (
    <HashRouter>
      <CustomCursor />
      <Navbar dark={dark} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/*" element={<SinglePage />} />
      </Routes>
    </HashRouter>
  )
}

function SinglePage() {
  return (
    <>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="training"><Education /></section>
      <section id="certificates"><Achievements /></section>
      <section id="achievements"><AchievementsPage /></section>
      <section id="education"><EducationPage /></section>
      <section id="contact"><Contact /></section>
    </>
  )
}
