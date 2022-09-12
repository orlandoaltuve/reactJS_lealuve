import React, { useContext } from 'react'
import { Icon } from '@iconify/react';
import "./CartItem.scss"
import { CartContex } from '../CartContext/CartContex';

const CartItem = ({producto}) => {
  const {removeItem}=useContext(CartContex)
  return (
    <div className='cartItemContainer'>
        <img className='cartImage' src={producto.img} alt={producto.nombre}/>
        <h2>{producto.nombre}</h2>
        <p>Cantidad: {producto.cantidad}</p>
        <p>Precio: ${producto.precio}</p>
        <button onClick={()=>removeItem(producto.id)} className='unStyle'><Icon icon="ci:trash-full" color="#7b3c30" height="25" /></button>

    </div>
  )
}

export default CartItem