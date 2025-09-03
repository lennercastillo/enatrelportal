import enatrelLogo from '../logo/Sin-Título-1.png'
import './Header.css'

const Header = () => {
  return (
    <header className="portal-header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-3 text-center text-md-start">
            <img src={enatrelLogo} alt="ENATREL Logo" className="logo" />
          </div>
          <div className="col-md-6 text-center">
            <h1 className="display-4 fw-bold text-white mb-0">Portal Sistemas</h1>
          </div>
          <div className="col-md-3 text-center text-md-end">
            <div className="d-flex flex-column flex-md-row gap-2 justify-content-center justify-content-md-end align-items-center">
              <button className="btn btn-outline-light btn-sm rounded-pill px-3">
                <i className="bi bi-exclamation-triangle me-2"></i>
                Reportar Incidencia
              </button>
              <button className="btn btn-outline-light btn-sm rounded-pill px-3">
                <i className="bi bi-key me-2"></i>
                Recuperar Contraseña
              </button>
              <div className="badge bg-light text-dark fs-6 px-3 py-2 rounded-pill">
                <i className="bi bi-people me-1"></i>
                55,238
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
