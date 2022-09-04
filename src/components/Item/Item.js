import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.scss"

function Item({producto}) {
  return (
    <div className='cardP'>
            <img src={producto.img} alt={producto.nombre}/>
            <p>{producto.nombre}</p>
            <p>Precio: {producto.precio}</p>
            <Link to={`/item/${producto.id}`} className='btn1'>Ver más</Link>
    </div>
  )
}

export default Item