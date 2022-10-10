import ItemList from "../ItemList/Itemlist"
import { collection,getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../Loader/Loader"

const ItemListContainer = () => {
    const [loading, setLoading]=useState(true)
    const {categoryID}= useParams()
    const [productos, setProductos] = useState([])
    useEffect(() => {
        setLoading(true)

        const productosRef=collection(db,'productos')
        const q= categoryID
                 ? query(productosRef, where("category","==",categoryID))
                 : query(productosRef, where("destacado","==",true))

        getDocs(q)
            .then((snapshot)=> {
                const productosDB=snapshot.docs.map( (doc)=>({id: doc.id, ...doc.data()}))
                setProductos(productosDB)
            })
            .finally(()=>{
                setLoading(false)
            })

    }, [categoryID])

    return (
        <div>
            {
                categoryID
                ?<h2>{categoryID[0].toUpperCase()+categoryID.substring(1)}</h2>
                :<h2>Productos Destacados</h2>
            } 
            {
                loading 
                ?<Loader/>
                :<ItemList producto={productos} /> 
            }
            
        </div>
    )
}
export default ItemListContainer