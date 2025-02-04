import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./pages/Intro";
import Accesibilidad from "./pages/Accesibilidad";
import Interfaces from "./pages/Interfaces";
import Testing from "./pages/Testing";
import Practicas from "./pages/Practicas";
import Navegacion from "./pages/Navegacion";

function App() {
  const [activeRoute, setActiveRoute] = useState(null); // Estado para guardar la ruta activa

  // Función para manejar el clic en los enlaces del menú
  const handleLinkClick = (route) => {
    if (activeRoute === route) {
      setActiveRoute(null); // Si el enlace está activo, lo desactivamos (ocultamos la ruta)
    } else {
      setActiveRoute(route); // Si el enlace no está activo, lo activamos (mostramos la ruta)
    }
  };

  return (
    <>
      <Header />
      <Router>
      <section className="w-full md:w-3/4 bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">📖 Curso de Usabilidad</h1>
            <p className="text-gray-600 mb-6">
              Explora los siguientes temas seleccionando una opción en el menú lateral.
            </p>
      </section>
        <main className="flex flex-col md:flex-row mt-8 p-6 min-h-screen bg-gradient-to-br from-gray-200 to-gray-400 font-sans">
          {/* Sidebar de navegación */}
          <aside className="w-full md:w-1/4 bg-gradient-to-b from-blue-700 to-blue-900 text-white p-6 rounded-lg shadow-xl">
            <nav>
              <h2 className="text-xl font-semibold mb-4">📌 Temas</h2>
              <ul className="space-y-3">
                {[{ path: "/intro", label: "1️⃣ Introducción a la Usabilidad" },
                  { path: "/accesibilidad", label: "2️⃣ Accesibilidad y Diseño Inclusivo" },
                  { path: "/interfaces", label: "3️⃣ Diseño de Interfaces" },
                  { path: "/navegacion", label: "4️⃣ Navegación y Flujo de Usuario" },
                  { path: "/practicas", label: "5️⃣ Buenas Prácticas en Desarrollo" },
                  { path: "/testing", label: "6️⃣ Testing de Usabilidad en React.js" }]
                  .map((item) => (
                    <li key={item.path}>
                      <NavLink
                        to={item.path}
                        onClick={() => handleLinkClick(item.path)} 
                        className={({ isActive }) =>
                          `block p-3 rounded-md transition duration-300 ${
                            isActive ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
              </ul>
            </nav>
          </aside>

          {/* Contenido principal */}
          

            <div className="border-t border-gray-300 my-4"></div>

            <Routes>
              <Route
                path="/intro"
                element={activeRoute === "/intro" ? <Intro /> : null}
              />
              <Route
                path="/accesibilidad"
                element={activeRoute === "/accesibilidad" ? <Accesibilidad /> : null}
              />
              <Route
                path="/interfaces"
                element={activeRoute === "/interfaces" ? <Interfaces /> : null}
              />
              <Route
                path="/navegacion"
                element={activeRoute === "/navegacion" ? <Navegacion /> : null}
              />
              <Route
                path="/practicas"
                element={activeRoute === "/practicas" ? <Practicas /> : null}
              />
              <Route
                path="/testing"
                element={activeRoute === "/testing" ? <Testing /> : null}
              />
            </Routes>
          
        </main>
      </Router>
      <Footer />
    </>
  );
}

export default App;
