import './ApplicationCard.css'

const ApplicationCard = ({ application }) => {
  const { id, title, description, icon, cornerIcon } = application

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div 
        className="modern-card"
        style={{ animationDelay: `${id * 0.15}s` }}
      >
        <div className="card-header">
          <div className="card-icon">
            <i className={`bi ${icon}`}></i>
          </div>
          <div className="card-badge">
            <i className={`bi ${cornerIcon}`}></i>
          </div>
        </div>
        
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
        
        <div className="card-footer">
          <a href={application.url || "#"} className="access-btn" target="_blank" rel="noopener noreferrer">
            <span>Acceder</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
        
        <div className="card-glow"></div>
      </div>
    </div>
  )
}

export default ApplicationCard
