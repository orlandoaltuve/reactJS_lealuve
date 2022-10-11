import React, { useState } from 'react'
import Ubicacion from '../Ubicacion/Ubicacion'
import "./Contacto.scss"


const Contacto = () => {
  const [values, setValues] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: ""
  })

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <h2 className='titulo'>Contacto</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <input
          name='nombre'
          onChange={handleInputChange}
          type={"text"}
          value={values.nombre}
          placeholder="Nombre"></input>
        <input
          name='email'
          onChange={handleInputChange}
          type={"email"}
          value={values.email}
          placeholder="Email"></input>
        <input
          name='telefono'
          onChange={handleInputChange}
          type={"text"}
          value={values.telefono}
          placeholder="Teléfono"></input>
        <textarea
          name='mensaje'
          onChange={handleInputChange}
          type={"text"}
          value={values.mensaje}
          placeholder="Escriba aca su mensaje"></textarea>
        <button type='submit' className='btn1'>Enviar</button>
      </form>
      <Ubicacion />
    </div>
  )
}

export default Contacto