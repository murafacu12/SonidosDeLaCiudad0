import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../style.css';
const Cronograma = () => {
  return (
    <div className="cronograma-container">
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

      <main>
        <div classname="Fondo">
        <section>
          <h2>Cronograma de actuaciones</h2>

          <h3>Lista por día y horario</h3>
          <ol>
            <li>Viernes 8 - 18:00 - Jorge Véliz</li>
            <li>Viernes 8 - 21:00 - Dread Mar-I</li>
            <li>Sábado 9 - 20:00 - Andrés Calamaro</li>
            <li>Domingo 10 - 22:00 - Skrillex</li>
          </ol>

          <h3>Cronograma por escenario</h3>
          <table>
            <caption>Escenarios y horarios</caption>
            <thead>
              <tr>
                <th>Día</th>
                <th>Escenario</th>
                <th>Hora</th>
                <th>Artista</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Viernes</td>
                <td>Escenario Norte</td>
                <td>18:00</td>
                <td>Jorge Véliz</td>
              </tr>
              <tr>
                <td>Viernes</td>
                <td>Escenario Sur</td>
                <td>21:00</td>
                <td>Dread Mar-I</td>
              </tr>
              <tr>
                <td>Sábado</td>
                <td>Escenario Central</td>
                <td>20:00</td>
                <td>Andrés Calamaro</td>
              </tr>
              <tr>
                <td>Domingo</td>
                <td>Escenario Electrónico</td>
                <td>22:00</td>
                <td>Skrillex</td>
              </tr>
            </tbody>
          </table>
        </section>
        </div>
      </main>

      <footer>
        <p>&copy; 2025 Sonidos de la Ciudad | <a href="mailto:info@sonidosdelaciudad.com">Contacto por correo</a></p>
      </footer>
    </div>
  );
};

export default Cronograma;