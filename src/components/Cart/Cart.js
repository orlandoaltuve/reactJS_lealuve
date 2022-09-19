import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContex } from '../CartContext/CartContex'
import CartItem from '../CartItem/CartItem'
import "./Cart.scss"


const Cart = () => {
  const { cart, cartTotal, emptyCart } = useContext(CartContex)

  if(cart.length===0){
    return(
      <div className='cartEmptyContainer'>
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className='btn1'>Ir a comprar</Link>
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
    </div>
  )
}

export default Cart