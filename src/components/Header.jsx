import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import enatrelLogo from '../logo/Sin-título-1.png'
import './Header.css'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogoClick = () => {
    navigate('/')
    setIsMenuOpen(false)
  }

  const isHomePage = location.pathname === '/'

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="portal-header">
      <div className="header-container">
        {/* Overlay para cerrar el menú */}
        <div 
          className={`menu-overlay ${isMenuOpen ? 'show' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        <div className="header-content">
          <div className="logo-section" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <img src={enatrelLogo} alt="ENATREL Logo" className="logo" />
            <div className="logo-text">
              <h1 className="portal-title">Portal Sistemas</h1>
              <p className="portal-subtitle">Sistemas de Información Corporativa</p>
            </div>
          </div>
          
          {/* Menú hamburguesa para móviles */}
          <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          </button>
          
          <div className={`header-actions ${isMenuOpen ? 'mobile-open' : ''}`}>
            <div className="action-buttons">
              {!isHomePage && (
                <button className="action-btn home-btn" onClick={handleLogoClick}>
                  <i className="bi bi-house"></i>
                  <span>Inicio</span>
                </button>
              )}
              <button className="action-btn primary-btn">
                <i className="bi bi-exclamation-triangle"></i>
                <span>Reportar Incidencia</span>
              </button>
              <button className="action-btn secondary-btn">
                <i className="bi bi-key"></i>
                <span>Recuperar Contraseña</span>
              </button>
            </div>
            
            <div className="views-counter">
              <i className="bi bi-eye-fill"></i>
              <span className="views-number">55,238</span>
            </div>
          </div>
        </div>
        
        <div className="header-decoration">
          <div className="decoration-line"></div>
          <div className="decoration-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
