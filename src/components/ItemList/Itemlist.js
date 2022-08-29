import Item from "../Item/Item"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemList-container.scss"

const ItemList = ({producto}) =>{
    return(
        <div className="cardP-container">
            {producto.map((prod)=><Item producto={prod} key={prod.id}/>)}
        </div>
    )
}
export default ItemList