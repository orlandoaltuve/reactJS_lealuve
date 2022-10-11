import React from 'react'
import "./PreguntasFrecuentes.scss"


const PreguntasFrecuentes = () => {
  return (
    <>
    <h2 className='titulo'>PreguntasFrecuentes</h2>
    <div className='contenedor'>
      <div className="contenedorImagenTexto">
            <div className="contenedorImagen imagenFaq">
                <img src="../assets/interrogacion.jpg" alt="preguntas"/>
            </div>
            <div className="contenedorParrafo">
                <p className="pregunta">¿Qué formas de pago puedo aprovechar para realizar mi compra?</p>
                <p>Puedes abonar por transferencia, tarjeta de débito o crédito.</p>
                <p className="pregunta">¿Cuál es el costo de envío?</p>
                <p>El costo de envío será mostrado en base al total de la compra y ubicación, en el checkout, en el
                    momento previo a la compra.</p>
                <p className="pregunta">¿Dónde puedo recibir mi pedido?</p>
                <p>Realizamos envíos a todo el país.</p>
                <p className="pregunta">¿Cuánto tarda en llegar el pedido?</p>
                <p>El tiempo de entrega dependerá del tipo de envío seleccionado. En general la demora se encuentra
                    entre 3 y 7 días hábiles luego de acreditado el pago.</p>
                <p className="pregunta">¿Cuál es el plazo para realizar un cambio?</p>
                <p>Puedes solicitar un cambio hasta 15 días luego de realizada la compra.</p>
                <p className="pregunta">¿Qué debo hacer si el producto no llega en buen estado?</p>
                <p>Ponte en contacto con nosotros a lealuve@gmail.com y te enviaremos uno nuevo.</p>
            </div>

        </div>
    </div>
    </>
  )
}

export default PreguntasFrecuentes