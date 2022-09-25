import React from 'react'
import { Link } from 'react-router-dom'
import './ItemCount.scss'

const ItemCount = ({ stock, cantidad, setCantidad, handleAgregar }) => {

    const handleSumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }

    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }
    if (stock === 0) {
        return (
            <div className="container">
                <Link to="/" className='btn1'>Ir a comprar</Link>
            </div>

        )
    }
    return (
        <div className='ItemCount-container'>
            <div>
                <button className='btn1 btn-contador' onClick={handleRestar} disabled={cantidad === 1}>-</button>
                <span className='contador'>{cantidad}</span>
                <button className='btn1 btn-contador' onClick={handleSumar} disabled={cantidad === stock}>+</button>
            </div>
            <button className='btn1 btn-agregar' onClick={handleAgregar}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount