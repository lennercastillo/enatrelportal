import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ApplicationsPage from './pages/ApplicationsPage'

function App() {
  return (
    <Router>
      <div className="portal">
        <Header />
        <main className="portal-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aplicaciones" element={<ApplicationsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
