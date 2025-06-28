import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../style.css';
const Entradas = () => {
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

      <main>
        <div classname="Fondo">
        <section>
          <h2>Información sobre entradas</h2>
          <p>El festival ofrece diferentes tipos de entradas para que elijas la experiencia que mejor se adapte a vos. ¡Asegurá tu lugar cuanto antes!</p>

          <table>
            <caption>Tipos de Entradas y Beneficios</caption>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Precio</th>
                <th>Beneficios</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Entrada General</td>
                <td>$5.000</td>
                <td>Acceso a un solo día del festival</td>
              </tr>
              <tr>
                <td>Abono 3 Días</td>
                <td>$12.000</td>
                <td>Acceso a los tres días del festival</td>
              </tr>
              <tr>
                <td>VIP</td>
                <td>$20.000</td>
                <td>Acceso a los tres días + zona exclusiva y bebida de cortesía</td>
              </tr>
            </tbody>
          </table>

          <p>
            Podés adquirir tus entradas de forma online a través de nuestra{' '}
            <a href="https://www.entradaweb.com/" target="_blank" rel="noopener noreferrer">
              plataforma de ventas
            </a>{' '}
            o consultar los <Link to="/ubicacion">puntos físicos de venta</Link>.
          </p>

          <p>
            Para consultas relacionadas a entradas, escribinos a{' '}
            <a href="mailto:entradas@sonidosdelaciudad.com">entradas@sonidosdelaciudad.com</a>.
          </p>
        </section>
        </div>
      </main>

      <footer>
        <p>&copy; 2025 Sonidos de la Ciudad | <a href="mailto:info@sonidosdelaciudad.com">Contacto por correo</a></p>
      </footer>
    </>
  );
};

export default Entradas;