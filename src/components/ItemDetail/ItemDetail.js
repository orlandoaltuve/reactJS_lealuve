import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContex } from '../CartContext/CartContex'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.scss"


const ItemDetail = ({ item }) => {
    const { cart, addToCart, isInCart } = useContext(CartContex)
    console.log(cart)
    const [cantidad, setCantidad] = useState(1)
    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            img: item.img,
            nombre: item.nombre,
            precio: item.precio,
            cantidad

        }

        addToCart(itemToCart)
        

    }
    return (
        <div className='detail-container'>
            <div className='detailImage-container'>
                <img src={item.img} alt={item.nombre} />
            </div>
            <div className='detaiDescription-container'>
                <h2> {item.nombre}</h2>
                <h3>${item.precio}</h3>
                <p><span className='resaltar'>12</span> cuotas sin interes de <span className='resaltar'>${Number(item.precio / 12).toFixed(2)}</span></p>
                <p>Stock disponible: {item.stock}</p>
                <p className='itemDescription'>{item.description}</p>
                

                {
                    isInCart(item.id) 
                    ?<Link to= '/cart' className='btn1'> Terminar mi compra</Link>
                    :<ItemCount stock={item.stock} cantidad={cantidad} setCantidad={setCantidad} handleAgregar={handleAgregar}/>
                }

            </div>

        </div>
    )
}

export default ItemDetail

