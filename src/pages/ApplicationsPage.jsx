import ApplicationsGrid from '../components/ApplicationsGrid'
import './ApplicationsPage.css'

const ApplicationsPage = () => {
  const applications = [
    {
      id: 1,
      title: "Intranet - RRHH",
      description: "Sistema Intranet - Recursos Humanos",
      icon: "bi-people-fill",
      cornerIcon: "bi-building"
    },
    {
      id: 2,
      title: "APP Enatrel",
      description: "Sistema de Reportes",
      icon: "bi-phone-fill",
      cornerIcon: "bi-lightning-fill"
    },
    {
      id: 3,
      title: "Control de Inventario",
      description: "Control de Inventario",
      icon: "bi-box-seam-fill",
      cornerIcon: "bi-graph-up"
    },
    {
      id: 4,
      title: "Mapa Interactivo",
      description: "Mapa Interactivo del Sector Energético",
      icon: "bi-geo-alt-fill",
      cornerIcon: "bi-globe"
    },
    {
      id: 5,
      title: "Página Web Enatrel",
      description: "Página Web de Enatrel",
      icon: "bi-globe2",
      cornerIcon: "bi-link-45deg",
      url: "https://www.enatrel.gob.ni/"
    },
    {
      id: 6,
      title: "SISPOA",
      description: "Sistema Plan Operativo Anual",
      icon: "bi-clipboard-data-fill",
      cornerIcon: "bi-calendar3"
    },
    {
      id: 7,
      title: "SISRAC",
      description: "Sistema de Registro de Actividades",
      icon: "bi-journal-text",
      cornerIcon: "bi-bar-chart-fill"
    },
    {
      id: 8,
      title: "Seguridad Interna",
      description: "Sistema de Seguridad Interna",
      icon: "bi-shield-fill-check",
      cornerIcon: "bi-lock-fill"
    },
    {
      id: 9,
      title: "Sector Eléctrico",
      description: "Sistema de Inventario Sector Eléctrico",
      icon: "bi-lightning-charge-fill",
      cornerIcon: "bi-plug-fill"
    },
    {
      id: 10,
      title: "Sistema de Mantenimiento Técnico",
      description: "Sistema de Mantenimiento Técnico",
      icon: "bi-tools",
      cornerIcon: "bi-gear-fill"
    },
    {
      id: 11,
      title: "HELPDESK",
      description: "Mesa de Ayuda para brindar soporte a los usuarios",
      icon: "bi-headset",
      cornerIcon: "bi-chat-dots-fill"
    }
  ]

  return (
    <div className="applications-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Sistemas Disponibles</h1>
          <p className="page-subtitle">
            Accede a todos los sistemas de información corporativa de ENATREL
          </p>
        </div>
      </div>
      
      <div className="page-content">
        <div className="container">
          <ApplicationsGrid applications={applications} />
        </div>
      </div>
    </div>
  )
}

export default ApplicationsPage
