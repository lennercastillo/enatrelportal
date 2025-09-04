import enatrelLogo from '../logo/Sin-Título-1.png'
import './Header.css'

const Header = () => {
  return (
    <header className="portal-header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo-section">
            <img src={enatrelLogo} alt="ENATREL Logo" className="logo" />
            <div className="logo-text">
              <h1 className="portal-title">Portal Sistemas</h1>
              <p className="portal-subtitle">Sistemas de Información Corporativa</p>
            </div>
          </div>
          
          <div className="header-actions">
            <div className="action-buttons">
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
