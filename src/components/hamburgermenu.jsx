// Ejemplo para App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="portal">
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        <span />
        <span />
        <span />
      </div>
      <nav className={`menu${menuOpen ? ' open' : ''}`}>
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <main className="portal-main">
        {/* ...contenido de tu portal... */}
      </main>
    </div>
  );
}

export default App;