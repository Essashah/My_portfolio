import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      {/* Subtle animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-blue-950/10 to-gray-950 pointer-events-none"></div>
      
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative z-10">
        <Hero setActiveSection={setActiveSection} />
        <About setActiveSection={setActiveSection} />
        <Experience setActiveSection={setActiveSection} />
        <Skills setActiveSection={setActiveSection} />
        <Contact setActiveSection={setActiveSection} />
      </main>
    </div>
  )
}

export default App

