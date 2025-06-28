import React from 'react';

// Note: The import for '../style.css' has been commented out.
// If you have specific global styles, you may need to manually
// include them in your project's main CSS file or apply them
// using inline styles or Tailwind CSS classes.

const Artistas = () => {
  // Basic CSS-based rain effect placeholder
  // This is a visual placeholder and is not controllable by a knob.
  return (
    <>
      <div className="rain-container" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none', // Allows interaction with elements behind it
        zIndex: -1, // Ensures it stays in the background
        backgroundColor: 'rgba(26, 24, 24, 0.86)', // Light background to enhance visibility of raindrops
      }}>
        {/* Generate multiple raindrop elements */}
        {Array.from({ length: 150 }).map((_, i) => (
          <div
            key={i}
            className="raindrop"
            style={{
              position: 'absolute',
              background: 'linear-gradient(to bottom, rgba(224, 137, 5, 0.99), rgb(241, 240, 125))', // Blueish gradient for raindrops
              width: '2px', // Thin drops
              height: `${Math.random() * 10 + 20}px`, // Random height for variety
              left: `${Math.random() * 100}vw`, // Random horizontal position
              top: `${Math.random() * -100}px`, // Start above the viewport
              animation: `fall ${Math.random() * 2 + 1}s linear infinite`, // Random fall duration
              opacity: `${Math.random() * 0.8 + 0.2}`, // Random opacity
              borderRadius: '2px', // Rounded edges for drops
              transformOrigin: 'bottom', // For potential future transformations
            }}
          ></div>
        ))}
        {/* CSS for the rain animation */}
        <style>
          {`
            @keyframes fall {
              to {
                transform: translateY(100vh); /* Make drops fall down the screen */
              }
            }
          `}
        </style>
      </div>

      <header>
        <img src="/img/fav.png" alt="Logo Festival" className="logo-flotante" />
        <h1>Festival Sonidos de la Ciudad</h1>
        <nav className="sticky-nav">
          <ul>
            {/* Replaced Link with a for direct navigation */}
            <li><a href="/">Inicio</a></li>
            <li><a href="/artistas">Artistas</a></li>
            <li><a href="/cronograma">Cronograma</a></li>
            <li><a href="/entradas">Entradas</a></li>
            <li><a href="/ubicacion">Ubicación</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h2>Artistas que se presentarán</h2>
          <div className="artistas-grid">
            <article classname="artistas-grid-article">
              <h3>🎶 Jorge Véliz</h3>
              <img classname="artistas-grid-img" src="/img/jorge-veliz.jpg" alt="Jorge Véliz" width="300" />
              <p>Cantautor folclórico con un estilo moderno y auténtico. Jorge representa la esencia musical del norte argentino y ha conquistado escenarios de todo el país.</p>
            </article>

            <article>
              <h3>🎧 Skrillex</h3>
              <img src="/img/skrillex.jpg" alt="Skrillex" width="300" />
              <p>Uno de los referentes globales de la música electrónica y el dubstep. Con su energía desbordante y sets visuales, Skrillex ofrecerá un espectáculo vibrante y único.</p>
            </article>

            <article>
              <h3>🌿 Dread Mar-I</h3>
              <img src="/img/dreadmar.jpg" alt="Dread Mar-I" width="300" />
              <p>Emblema del reggae latinoamericano. Su mensaje positivo y su estilo inconfundible llegan al corazón de miles de fans. Un show para vibrar en paz y armonía.</p>
            </article>

            <article>
              <h3>🎸 Andrés Calamaro</h3>
              <img src="/img/calamaro.jpg" alt="Andrés Calamaro" width="300" />
              <p>Ícono del rock en español, Calamaro nos deleitará con sus clásicos y su inconfundible presencia escénica. Una leyenda viva que no necesita presentación.</p>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Sonidos de la Ciudad | <a href="mailto:info@sonidosdelaciudad.com">Contacto por correo</a></p>
      </footer>
    </>
  );
};

export default Artistas;
