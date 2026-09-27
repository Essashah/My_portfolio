import { useEffect, useState } from 'react'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Loader from './components/Loader'
import Nav from './components/Nav'
import Toolkit from './components/Toolkit'
import { initSmoothScroll, setScrollLocked } from './lib/scroll'

const INTRO_KEY = 'intro-seen'

const readIntroSeen = () => {
  try {
    return sessionStorage.getItem(INTRO_KEY) === '1'
  } catch {
    return false
  }
}

function App() {
  // The intro plays once per browser session.
  const [ready, setReady] = useState(readIntroSeen)

  useEffect(() => initSmoothScroll(), [])

  useEffect(() => {
    if (ready) return
    window.scrollTo(0, 0)
    setScrollLocked(true)
    return () => setScrollLocked(false)
  }, [ready])

  const finishIntro = () => {
    try {
      sessionStorage.setItem(INTRO_KEY, '1')
    } catch {
      /* storage unavailable: intro simply replays next visit */
    }
    setReady(true)
  }

  return (
    <div className="grain relative">
      {!ready && <Loader onDone={finishIntro} />}
      <Nav />
      <main>
        <Hero ready={ready} />
        <About />
        <Capabilities />
        <Experience />
        <Toolkit />
        <Contact />
      </main>
    </div>
  )
}

export default App
