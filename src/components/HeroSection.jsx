import { useNavigate } from 'react-router-dom'
import enatrelLogo from '../logo/Sin-título-1.png'
import './HeroSection.css'

const HeroSection = () => {
  const navigate = useNavigate()

  const handleAccessPortal = () => {
    navigate('/aplicaciones')
  }

  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-content">
            <h1 className="hero-title">
              Portal sistemas <span className="highlight">ENATREL</span>
            </h1>
            <p className="hero-description">
              Sistema de gestión de sistemas para la empresa ENATREL.
            </p>
            <button className="hero-button" onClick={handleAccessPortal}>
              <i className="bi bi-download"></i>
              <span>Acceder al Portal</span>
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
          
        </div>
        
        <div className="hero-right">
          <div className="logo-container">
            <div className="window-header">
              <div className="window-controls">
                <div className="control-dot red"></div>
                <div className="control-dot yellow"></div>
                <div className="control-dot green"></div>
              </div>
            </div>
            <div className="logo-content">
              <img src={enatrelLogo} alt="ENATREL Logo" className="main-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
