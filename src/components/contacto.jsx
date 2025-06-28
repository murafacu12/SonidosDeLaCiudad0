import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';


const Contacto = () => {
  // State for the form inputs (updates as user types)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  // State for the data that gets displayed/saved (only updates on submit)
  const [displayedData, setDisplayedData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  // Load *submitted* data from localStorage on component mount
  useEffect(() => {
    const savedFormData = localStorage.getItem('contactFormSubmitted'); // Using a different key
    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData);
      setDisplayedData(parsedData); // Set the display state
      // Optionally, pre-fill the form with the last submitted data as well
      setFormData(parsedData);
    }
  }, []);

  // Handle input changes (only updates formData)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Update the displayedData state with the current formData
    setDisplayedData(formData);

    // 2. Save the current formData to localStorage
    localStorage.setItem('contactFormSubmitted', JSON.stringify(formData)); // Save to a specific key

    console.log('Formulario enviado y datos guardados:', formData);
    alert('¡Mensaje enviado con éxito y datos guardados!');

    // 3. Optionally, clear the form fields after submission
    setFormData({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    });
  };

  return (
    <>
      <header>
        <img src="/img/fav.png" alt="Logo Festival" className="logo-flotante" />
        <h1>Festival Sonidos de la Ciudad</h1>
        <nav className="sticky-nav">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/artistas">Artistas</Link></li>
            <li><Link to="/cronograma">Cronograma</Link></li>
            <li><Link to="/entradas">Entradas</Link></li>
            <li><Link to="/ubicacion">Ubicación</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </header>
      <main className="contact-page-content">
        <div className="Fondo">
          <h2>Contacto</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Nombre:
              <input
                type="text"
                name="nombre"
                required
                placeholder="escribe tu nombre"
                value={formData.nombre} // Still controlled by formData
                onChange={handleChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                required
                placeholder="ingresa tu email@"
                value={formData.email} // Still controlled by formData
                onChange={handleChange}
              />
            </label>
            <label>
              Asunto:
              <input
                type="text"
                name="asunto"
                placeholder="tema"
                value={formData.asunto} // Still controlled by formData
                onChange={handleChange}
              />
            </label>
            <label>
              Mensaje:
              <textarea
                name="mensaje"
                rows="5"
                placeholder="deja un mensaje"
                value={formData.mensaje} // Still controlled by formData
                onChange={handleChange}
              ></textarea>
            </label>
            <input type="submit" value="Enviar" />
          </form>
        </div>

        {/* Section to display localStorage data (now uses displayedData) */}
        <div className="localStorage-display">
          <h3>Datos guardados (último envío):</h3>
          {Object.values(displayedData).some(value => value !== '') ? (
            <ul>
              {Object.entries(displayedData).map(([key, value]) => (
                <li key={key}>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value || '(Vacío)'}
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay datos de envíos anteriores.</p>
          )}
           <button onClick={() => {
            localStorage.removeItem('contactFormSubmitted'); // Clear specific key
            setDisplayedData({ nombre: '', email: '', asunto: '', mensaje: '' }); // Clear display
            // Optionally, also clear the form fields if they weren't cleared on submit
            setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
          }} className="clear-localStorage-btn">Limpiar Datos Guardados</button>
        </div>
      </main>
      <footer>
        <p>&copy; 2025 Sonidos de la Ciudad | <a href="mailto:info@sonidosdelaciudad.com">Contacto por correo</a></p>
      </footer>
    </>
  );
};

export default Contacto;