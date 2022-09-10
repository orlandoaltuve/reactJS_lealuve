import React from 'react'
import './ItemCount.scss'

const ItemCount = ({stock,cantidad,setCantidad,handleAgregar}) => {
    
    const handleSumar=()=>{
        if(cantidad<stock){
            setCantidad(cantidad +1)
        }
    }

    const handleRestar= () =>{
        if(cantidad>1){
            setCantidad(cantidad -1)
        }
    }

    return (
        <div className='ItemCount-container'>
            <div>  
            <button className='btn1 btn-contador' onClick={handleRestar}>-</button>
            <span className='contador'>{cantidad}</span>
            <button className='btn1 btn-contador' onClick={handleSumar}>+</button>
            </div>  
            <button className='btn1 btn-agregar' disabled={stock===0} onClick={handleAgregar}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount