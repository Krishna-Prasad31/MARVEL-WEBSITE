import { useState, useEffect } from 'react'
import './navbar.css'
import logo from '../../assets/White New.svg'

function Navbar() {

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 60)
      window.addEventListener('scroll', handleScroll)
    }
     return () => window.addEventListener('scroll', handleScroll)
  }, [])
  
  return(
    <nav className={`navbar ${scroll ? 'scrolled': ''}`}>
      <a href="#" className='marvel-logo'>
        <img src={logo} alt="marvel-logo" height="36" />
      </a>
      <ul className='nav-links'>
        <li><a href="#about">About</a></li>
        <li><a href="#domains">Domains</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#achievements">Achievements</a></li>
      </ul>
      <a href="https://hub.uvcemarvel.in/" className='nav-cta' target='blank'>Join MARVEL</a>
    </nav>
  )
}

export default Navbar