import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components from the 'components' directory
import Index from './components/index.jsx';
import Artistas from './components/artistas.jsx';
import Cronograma from './components/cronograma.jsx';
import Entradas from './components/entradas.jsx';
import Ubicacion from './components/ubicacion.jsx';
import Contacto from './components/contacto.jsx';



// Import your main CSS file
import './style.css'; // Assuming style.css is in src/style folder

function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<Index />} />
        <Route path="/artistas" element={<Artistas />} />
        <Route path="/cronograma" element={<Cronograma />} />
        <Route path="/entradas" element={<Entradas />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
        <Route path="/contacto" element={<Contacto />} />

        {/* Optional: Add a catch-all route for 404 Not Found */}
        {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
      </Routes>
    </Router>
  );
}


export default App;