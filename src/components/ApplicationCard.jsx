import './ApplicationCard.css'

const ApplicationCard = ({ application }) => {
  const { id, title, description, icon, cornerIcon } = application

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="simple-card">
        <div className="card-icon">
          <i className={`bi ${icon}`}></i>
        </div>
        
        <div className="card-info">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
        
        <div className="card-footer">
          <a href={application.url || "#"} className="card-button" target="_blank" rel="noopener noreferrer">
            <i className={`bi ${cornerIcon}`}></i>
            <span>Acceder</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ApplicationCard
