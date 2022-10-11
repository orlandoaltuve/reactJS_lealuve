import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'
import CartItem from '../CartItem/CartItem'
import "./Cart.scss"


const Cart = () => {
  const { cart, cartTotal, emptyCart } = useContext(CartContext)

  if(cart.length===0){
    return(
      <div className='cartEmptyContainer'>
        <Navigate to="/"/>
      </div>
    )

  }
  return (
    <div className='cartContainer'>
      <h2>Tu carrito</h2>
      {cart.map((item) => <CartItem key={item.id} producto={item} />)}
      <div className="cart-Info">
        <button className='btn1' onClick={emptyCart}>Vaciar Carrito</button>
        <p className='resaltar'>TOTAL: ${cartTotal()}</p>
      </div>
      <div className='terminarCompraContainer'>
      <Link  to= '/checkout' className='btn1'> Terminar mi compra</Link>
      </div>
      
    </div>
  )
}

export default Cart