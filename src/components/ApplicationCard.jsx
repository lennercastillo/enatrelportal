import './ApplicationCard.css'

const ApplicationCard = ({ application }) => {
  const { id, title, description, icon, cornerIcon } = application

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div 
        className="app-card card h-100 border-0 shadow-lg"
        style={{ animationDelay: `${id * 0.2}s` }}
      >
        <div className="corner-icon">
          <i className={`bi ${cornerIcon}`}></i>
        </div>
        <div className="card-body text-center d-flex flex-column">
          <div className="app-icon mb-4">
            <i className={`bi ${icon}`}></i>
          </div>
          <h5 className="card-title fw-bold text-dark mb-3">{title}</h5>
          <p className="card-text text-muted flex-grow-1 mb-4">{description}</p>
          <button className="btn btn-primary btn-lg rounded-pill px-4 mt-auto">
            Acceder
            <i className="bi bi-arrow-right ms-2"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ApplicationCard
