import Item from "../Item/Item"
import "./ItemList.scss"

const ItemList = ({producto}) =>{
    return(
        <div className="cardP-container">
            {producto.map((prod)=><Item producto={prod} key={prod.id}/>)}
        </div>
    )
}
export default ItemList