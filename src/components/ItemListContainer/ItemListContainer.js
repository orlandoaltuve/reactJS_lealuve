import ItemList from "../ItemList/Itemlist"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [loading, setLoading]=useState(true)
    const {categoryID}= useParams()
    const [productos, setProductos] = useState([])
    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((res) => {
                if(!categoryID){
                    setProductos(res)
                }else{
                    setProductos(res.filter((prod)=>prod.category===categoryID))
                }
            })
            .finally(()=>{
                setLoading(false)
            })

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