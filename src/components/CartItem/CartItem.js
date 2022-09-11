import React, { useContext } from 'react'
import { Icon } from '@iconify/react';
import "./CartItem.scss"
import { CartContex } from '../CartContext/CartContex';

const CartItem = ({producto}) => {
  const {removeItem}=useContext(CartContex)
  return (
    <div>
        <h2>{producto.nombre}</h2>
        <p>{producto.cantidad}</p>
        <p>{producto.precio}</p>
        <button onClick={()=>removeItem(producto.id)} className='unStyle'><Icon icon="ci:trash-full" color="#7b3c30" height="35" /></button>
        <hr/>
    </div>
  )
}

export default CartItem