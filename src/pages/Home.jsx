import React from "react";

function Home() {
  return (
    <div className="home-container">
      <img
        src="/React.png" 
        alt="Curso de Usabilidad"
        className="home-image"
      />
      <h1 className="home-title">Bienvenido al Curso de Usabilidad</h1>
      <p className="home-text">Selecciona un tema en el menú lateral para comenzar.</p>
    </div>
  );
}

export default Home;
