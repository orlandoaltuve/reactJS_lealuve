import ItemList from "../ItemList/Itemlist"
// import { pedirDatos } from "../../helpers/pedirDatos"
import { collection,getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [loading, setLoading]=useState(true)
    const {categoryID}= useParams()
    const [productos, setProductos] = useState([])
    useEffect(() => {
        setLoading(true)

        const productosRef=collection(db,'productos')
        const q= categoryID
                 ? query(productosRef, where("category","==",categoryID))
                 :productosRef

        getDocs(q)
            .then((snapshot)=> {
                const productosDB=snapshot.docs.map( (doc)=>({id: doc.id, ...doc.data()}))
                setProductos(productosDB)
            })
            .finally(()=>{
                setLoading(false)
            })
        // pedirDatos()
        //     .then((res) => {
        //         if(!categoryID){
        //             setProductos(res)
        //         }else{
        //             setProductos(res.filter((prod)=>prod.category===categoryID))
        //         }
        //     })
        //     .finally(()=>{
        //         setLoading(false)
        //     })

    }, [categoryID])

    return (
        <div>
            {
                loading 
                ?<h2>Cargando</h2>
                :<ItemList producto={productos} />
            }
            
        </div>
    )
}
export default ItemListContainer