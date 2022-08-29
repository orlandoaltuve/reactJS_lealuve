import ItemCount from "../ItemCount/ItemCount"
import "./ItemList-container.scss"

const ItemList = ({producto}) =>{
    const {nombre,precio}=producto
    return(
        <div className="ItemList-container">
            <h4>Nombre: {nombre}</h4>
            <p>Precio: {precio}</p>
            {/* <p>Stock: {stock}</p> */}
            <ItemCount stock={5} initial ={1}/>
        </div>
    )
}
export default ItemList