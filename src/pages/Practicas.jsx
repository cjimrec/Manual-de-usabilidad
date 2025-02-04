import React from 'react'

function Practicas() {
  return (
    <div>
      <h2>5. Buenas Prácticas en Desarrollo de Apps Usables</h2>
      <ul>
        <li><strong>Evitar sobrecarga cognitiva:</strong> Mantén la interfaz limpia y simple,
         evitando demasiada información o opciones en pantalla a la vez. Presenta la información de manera clara
          y organizada para facilitar la toma de decisiones del usuario.</li>
        <li><strong>Minimizar tiempo de espera:</strong> Los tiempos de carga deben ser lo más rápidos posible.
         Si es necesario, utiliza indicadores de carga para que el usuario sepa que la app está procesando la solicitud.</li>
        <li><strong>Uso eficiente de notificaciones y alertas:</strong> Las notificaciones deben ser claras y útiles.
         No envíes notificaciones excesivas que puedan molestar al usuario. Las alertas deben ser utilizadas con moderación y solo para eventos importantes.</li>
      </ul>
    </div>
  )
}

export default Practicas
