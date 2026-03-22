import Navbar from './components/navbar/navbar'
import Hero from './components/navbar/hero/hero'
import Marquee from './components/navbar/marquee/marquee'
import About from './components/about/about'
import Domains from './components/Domains/domain'
import Projects from './components/Projects/projects'
import Achievements from './components/Achievements/achievements'
import JoinCTA from './components/JoinCTA/JoinCTA'
import Footer from './components/Footer/footer'

import './App.css'


function App () {
  return(
    <>
    <Navbar/>
    <Hero/>
    <Marquee />
    <About/>
    <Domains/>
    <Projects/>
    <Achievements/>
    <JoinCTA/>
    <Footer/>
    </>
    
  )
}

export default App