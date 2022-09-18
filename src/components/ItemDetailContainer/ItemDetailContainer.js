import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { pedirDatos } from '../../helpers/pedirDatos'
import { doc, getDoc } from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail'
import React from 'react'
import { db } from '../../firebase/config'

const ItemDetailContainer = () => {
    const [item,setItem]=useState(null)
    const [loading,setLoading]=useState(true)
    const {itemId}=useParams()

    useEffect(()=>{
        setLoading(true)
        const itemRef= doc(db,'productos', itemId)
        getDoc(itemRef)
            .then((resp)=>{
                setItem({id: resp.id, ...resp.data() })
            })
            .finally(()=>{
                setLoading(false)
            })

        // pedirDatos()
        // .then((res)=>{
        //     setItem(res.find((prod)=>prod.id===Number(itemId)))
        // })
        // .finally(()=>{
        //     setLoading(false)
        // })

    },[itemId])

  return (
    <div>
        {
            loading
            ?<h2>Cargando...</h2>
            :<ItemDetail item={item}/>
        }
    </div>
  )
}

export default ItemDetailContainer
