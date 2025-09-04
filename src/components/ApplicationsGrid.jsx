import ApplicationCard from './ApplicationCard'
import './ApplicationsGrid.css'

const ApplicationsGrid = ({ applications }) => {
  return (
    <div className="container-fluid px-4 applications-grid pb-5 pt-5 mb-5">
      <div className="row g-4">
        {applications.map((app) => (
          <ApplicationCard key={app.id} application={app} />
        ))}
      </div>
    </div>
  )
}

export default ApplicationsGrid
