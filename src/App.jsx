import Navbar from './components/navbar/navbar'
import Hero from './components/navbar/hero/hero'
import Marquee from './components/navbar/marquee/marquee'
import About from './components/about/about'

import './App.css'

function App () {
  return(
    <>
    <Navbar/>
    <Hero/>
    <Marquee />
    <About/>
    </>
    
  )
}

export default App