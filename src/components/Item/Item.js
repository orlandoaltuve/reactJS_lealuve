import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./Item.scss"

function Item({producto}) {
  return (
    <div className='cardP'>
            <img src={producto.img} alt={" "}/>
            <p>{producto.nombre}</p>
            <p>Precio: {producto.precio}</p>
            <button className='btn1'>Ver más</button>
            <ItemCount stock={5} initial={1}/>
    </div>
  )
}

export default Item