import { useState, useEffect } from 'react'

const Header = ({ darkMode, toggleDarkMode }) => {
  const [hideOnScroll, setHideOnScroll] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let headerTimeout

    const handleScroll = () => {
      // Don't hide header while navigating
      if (!hovered && !isNavigating) {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setHideOnScroll(true)
        } else {
          setHideOnScroll(false)
        }
      }
      lastScrollY = window.scrollY

      clearTimeout(headerTimeout)
      headerTimeout = setTimeout(() => {
        if (!hovered && !isNavigating && window.scrollY > 100) {
          setHideOnScroll(true)
        }
      }, 800) // Reduced timeout
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(headerTimeout)
    }
  }, [hovered, isNavigating])

  const navItems = [
    { href: '#pg1', icon: 'fas fa-home', text: 'Home' },
    { href: '#pg2', icon: 'fas fa-user', text: 'About' },
    { href: '#pg3', icon: 'fas fa-list-check', text: 'Projects' },
    { href: '#pg4', icon: 'fas fa-award', text: 'Certifications' },
    { href: '#pg5', icon: 'fas fa-envelope', text: 'Contact' }
  ]

  const handleNavClick = (e) => {
    setIsNavigating(true)
    
    // Reset navigation state and allow header to hide after scroll completes
    setTimeout(() => {
      setIsNavigating(false)
    }, 1200) // Slightly longer than smooth scroll duration
  }

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) { // Only on desktop
      setHovered(true)
    }
  }

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) { // Only on desktop
      setHovered(false)
    }
  }

  return (
    <header 
      className={hideOnScroll ? 'hide-on-scroll' : ''}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="nav-links">
        {navItems.map((item, index) => (
          <div key={index} className="nav-item">
            <a href={item.href} className="hide-link" onClick={handleNavClick}>
              <i className={item.icon}></i>
              <span>{item.text}</span>
            </a>
          </div>
        ))}
      </div>
      <div className="dark-toggle">
        <i 
          id="darkModeToggle" 
          className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}
          onClick={toggleDarkMode}
        ></i>
      </div>
    </header>
  )
}

export default Header