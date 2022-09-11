import React, { useContext } from 'react'
import { CartContex } from '../CartContext/CartContex'
import CartItem from '../CartItem/CartItem'


const Cart = () => {
    const {cart,cartTotal,emptyCart}=useContext(CartContex)
  return (
    <div>
        <h2>Tu carrito</h2>
        {cart.map((item)=><CartItem key={item.id} producto={item}/>)}
        <p>TOTAL: ${cartTotal()}</p>
        <button onClick={emptyCart}>Vaciarr Carrito</button>
    </div>
  )
}

export default Cart