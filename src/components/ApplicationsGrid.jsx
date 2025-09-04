import ApplicationCard from './ApplicationCard'
import './ApplicationsGrid.css'

const ApplicationsGrid = ({ applications }) => {
  return (
    <div className="container-fluid px-4">
      <div className="row g-4">
        {applications.map((app) => (
          <ApplicationCard key={app.id} application={app} />
        ))}
      </div>
    </div>
  )
}

export default ApplicationsGrid
