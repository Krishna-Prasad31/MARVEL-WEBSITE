import { useState, useEffect } from 'react'
import './navbar.css'
import logo from '../../assets/White New.svg'

function Navbar() {

  const [scroll, setScroll] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => { 
    const handleScroll = () => {
      setScroll(window.scrollY > 60)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return(
    <nav className={`navbar ${scroll ? 'scrolled': ''}`}>
      
      <a href="#" className='marvel-logo'>
        <img src={logo} alt="marvel-logo" height="50" />
      </a>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#domains">Domains</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#achievements">Achievements</a></li>
      </ul>

      <a 
        href="https://hub.uvcemarvel.in/" 
        className='nav-cta' 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Join MARVEL
      </a>

    </nav>
  )
}

export default Navbar