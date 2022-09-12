import React, { useContext } from 'react'
import { CartContex } from '../CartContext/CartContex'
import CartItem from '../CartItem/CartItem'
import "./Cart.scss"


const Cart = () => {
  const { cart, cartTotal, emptyCart } = useContext(CartContex)
  return (
    <div className='cartContainer'>
      <h2>Tu carrito</h2>
      {cart.map((item) => <CartItem key={item.id} producto={item} />)}
      <div className="cart-Info">
        <button className='btn1' onClick={emptyCart}>Vaciar Carrito</button>
        <p className='resaltar'>TOTAL: ${cartTotal()}</p>
      </div>
    </div>
  )
}

export default Cart