const ItemList = ({producto}) =>{
    const {nombre,precio,stock}=producto
    return(
        <div>
            <h4>Nombre: {nombre}</h4>
            <p>Precio: {precio}</p>
            <p>Stock: {stock}</p>
        </div>
    )
}
export default ItemList