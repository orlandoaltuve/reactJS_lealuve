import React from 'react'
import { useState } from 'react'
import './ItemCount.scss'

const ItemCount = ({stock, initial}) => {
    const [contador,setContador]= useState(initial)
    const handleSumar=()=>{
        if(contador<stock){
            setContador(contador +1)
        }
    }

    const handleRestar= () =>{
        if(contador>1){
            setContador(contador -1)
        }
    }

    return (
        <div className='ItemCount-container'>
            <div>  
            <button className='btn1' onClick={handleRestar}>-</button>
            <span>{contador}</span>
            <button className='btn1' onClick={handleSumar}>+</button>
            </div>  
            <button className='btn1 btn-agregar' disabled={stock===0}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount