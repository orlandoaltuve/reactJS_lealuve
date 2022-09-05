import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.scss"


const ItemDetail = ({ item }) => {
    return (
        <div className='detail-container'>
            <div className='detailImage-container'>
                <img src={item.img} alt={item.nombre} />
            </div>
            <div className='detaiDescription-container'>
                <h2> {item.nombre}</h2>
                <h3>${item.precio}</h3>
                <p><span className='resaltar'>12</span> cuotas sin interes de <span className='resaltar'>${Number(item.precio/12).toFixed(2)}</span></p>
                <p>Stock disponible: {item.stock}</p>
                <ItemCount stock={item.stock} initial={1} />
                <p className='itemDescription'>{item.description}</p>
            </div>

            
        </div>
    )
}

export default ItemDetail

