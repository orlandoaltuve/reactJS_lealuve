import React from 'react'
import "./Ubicacion.scss"
const Ubicacion = () => {
  return (
    <div className='contenedorMapa'>

<iframe 
          title="mapas" className='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.146787217545!2d-58.41143943519621!3d-34.57515221349328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb57a4147c5c7%3A0xfc930bf72fdf871f!2zSmFyZMOtbiBKYXBvbsOpcw!5e0!3m2!1ses!2sar!4v1648865082078!5m2!1ses!2sar"
            width="400" height="300" style={{border:0}}  loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>


    </div>
  )
}

export default Ubicacion