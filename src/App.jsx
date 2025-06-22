import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import SocialStrip from './components/SocialStrip'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import CertificationsSection from './components/CertificationsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode === 'enabled') {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode')
      localStorage.setItem('darkMode', 'enabled')
    } else {
      document.body.classList.remove('dark-mode')
      localStorage.setItem('darkMode', 'disabled')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="App">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <SocialStrip />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App