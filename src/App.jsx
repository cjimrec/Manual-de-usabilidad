import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Accesibilidad from "./pages/Accesibilidad";
import Interfaces from "./pages/Interfaces";
import Testing from "./pages/Testing";
import Practicas from "./pages/Practicas";
import Navegacion from "./pages/Navegacion";

function App() {
  const [activeRoute, setActiveRoute] = useState(null); // Estado para la ruta activa

  return (
    <>
      <Header />
      <Router>
        <div className="app-container">
          <aside className="sidebar">
            <h2>📌 Temas</h2>
            <ul>
              {[
                { path: "/intro", label: "1️⃣ Introducción a la Usabilidad" },
                { path: "/accesibilidad", label: "2️⃣ Accesibilidad y Diseño Inclusivo" },
                { path: "/interfaces", label: "3️⃣ Diseño de Interfaces" },
                { path: "/navegacion", label: "4️⃣ Navegación y Flujo de Usuario" },
                { path: "/practicas", label: "5️⃣ Buenas Prácticas en Desarrollo" },
                { path: "/testing", label: "6️⃣ Testing de Usabilidad en React.js" }
              ].map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={activeRoute === item.path ? "/" : item.path} // Si ya está activo, vuelve a Home
                    onClick={() => setActiveRoute(activeRoute === item.path ? null : item.path)} // Cambia el estado
                    className="nav-link"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </aside>

          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/intro" element={activeRoute === "/intro" ? <Intro /> : <Home />} />
              <Route path="/accesibilidad" element={activeRoute === "/accesibilidad" ? <Accesibilidad /> : <Home />} />
              <Route path="/interfaces" element={activeRoute === "/interfaces" ? <Interfaces /> : <Home />} />
              <Route path="/navegacion" element={activeRoute === "/navegacion" ? <Navegacion /> : <Home />} />
              <Route path="/practicas" element={activeRoute === "/practicas" ? <Practicas /> : <Home />} />
              <Route path="/testing" element={activeRoute === "/testing" ? <Testing /> : <Home />} />
            </Routes>
          </main>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;