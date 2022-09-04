import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemDetail from '../ItemDetail/ItemDetail'
import React from 'react'

const ItemDetailContainer = () => {
    const [item,setItem]=useState(null)
    const [loading,setLoading]=useState(true)
    const {itemId}=useParams()

    useEffect(()=>{
        setLoading(true)
        pedirDatos()
        .then((res)=>{
            setItem(res.find((prod)=>prod.id===Number(itemId)))
        })
        .finally(()=>{
            setLoading(false)
        })

    }, [])

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



//  ItemDetailContainer() {
//     const [loading, setLoading]=useState(true)
//     const {itemID}=useParams
//     const[item,setItem]=useState(null)
//     useEffect(()=>{
//         setLoading(true)
//         pedirDatos()
//         .then((res)=>{
//             setItem(res.find((prod)=>prod.id===Number(itemID)))
//         })
//         .finally(()=>{
//             setLoading(false)
//         })

//     })
//   return (
//     <div>
//         {
//             loading
//             ?<h2>Cargando...</h2>
//             :<ItemDetail item={item}/>
//         }

//     </div>
//   )
// }

// export default ItemDetailContainer