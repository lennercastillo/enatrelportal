import ApplicationCard from './ApplicationCard'

const ApplicationsGrid = ({ applications }) => {
  return (
    <div className="container-fluid">
      <div className="row g-4">
        {applications.map((app) => (
          <ApplicationCard key={app.id} application={app} />
        ))}
      </div>
    </div>
  )
}

export default ApplicationsGrid
