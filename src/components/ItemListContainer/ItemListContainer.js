import ItemList from "../ItemList/Itemlist"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useEffect, useState } from "react"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res)
            })

    }, [])

    return (
        <div>
            <ItemList producto={productos} />
        </div>
    )
}
export default ItemListContainer