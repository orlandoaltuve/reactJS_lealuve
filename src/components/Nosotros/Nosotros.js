import React from 'react'
import "./Nosotros.scss"

const Nosotros = () => {
  return (
  <>
    <h2 className='titulo'>Nosotros</h2>
    <div className='contenedor'>
      <div className="contenedorImagenTexto">
        <div className="contenedorImagen">
          <img src="../assets/mujer 3.png" alt="mujer compras" />
        </div>
        <div className="contenedorParrafo">
          <h4 className="tituloSecundario">¡Hola!</h4>
          <p>Somos una marca de <span className="resaltar"> accesorios de moda </span> que nació en capital federal en
            2021.</p>
          <p>Diseñamos, fabricamos y comercializamos accesorios para mujeres con espíritu joven, creativo y
            curioso.</p>
          <p>Nuestras clientas adoran compartir momentos y conocen las últimas tendencias en moda. No importa su
            edad, ellas son <span className="resaltar"> libres, divertidas y cancheras. </span> Les encanta la moda
            y la usan para mostrarle al
            mundo quiénes son y cómo se sienten.</p>
          <p> <span className="resaltar"> Todo el tiempo estamos creando productos nuevos. </span></p>
          <p>Nuestra línea de mochilas, riñoneras, bandoleras y billeteras son elaboradas con <span
            className="resaltar"> materiales de alta
            calidad,</span> que nosotros mismos desarrollamos o importamos. Están pensadas para acompañar a
            las chicas
            a lo largo de su día y dar el toque final a cualquier outfit. Sus colores, estampas y bordados son
            únicos, desarrollados en forma exclusiva por nosotros.</p>
          <p> <span className="resaltar"> ¡Somos un gran equipo de trabajo que hacemos Lealuve con mucho entusiasmo y
            compromiso!</span></p>

        </div>
      </div>
    </div>
  </>
  )
}

export default Nosotros