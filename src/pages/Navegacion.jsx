import React from 'react'

function Navegacion() {
  return (
    <div>
      <h3>4. Navegación y Flujo de Usuario</h3>
      <ul>
        <li><strong>Implementación de React Navigation:</strong> Para gestionar la navegación en tu aplicación,
         React Navigation es una de las bibliotecas más populares. Permite crear un flujo de usuario consistente y fácil de usar.</li>
        <li><strong>Tipos de navegación (Stack, Tabs, Drawer):</strong>
          <ul>
            <li><strong>Stack Navigation:</strong> Utiliza una pila de pantallas donde las nuevas pantallas se apilan encima de las anteriores.</li>
            <li><strong>Tab Navigation:</strong> Muestra una barra de navegación con pestañas, permitiendo al usuario cambiar entre diferentes vistas rápidamente.</li>
            <li><strong>Drawer Navigation:</strong> Presenta un menú lateral que se desliza desde el borde de la pantalla,
             proporcionando un acceso rápido a las secciones principales de la aplicación.</li>
          </ul>
        </li>
        <li><strong>Buenas prácticas en navegación:</strong> Es importante mantener la navegación simple y clara. Evita que los usuarios se pierdan en la aplicación y proporciona una estructura intuitiva. Utiliza transiciones suaves y asegúrate de que el regreso a la pantalla anterior sea fácil de encontrar.</li>
      </ul>
    </div>
  )
}

export default Navegacion
