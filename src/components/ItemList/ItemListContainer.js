import ItemList from "./Itemlist"

const ItemListContainer = () => {
    const producto = [
        {
            nombre: "Cartera",
            precio: "$3500",
            stock: "6"
        },
        {
            nombre: "Mochila",
            precio: "5800",
            stock: "8"
        },
        {
            nombre: "Campera",
            precio: "7200",
            stock: "3"
        }
    ]
    return (
        <div>
            <ItemList producto={producto[0]} />
            <ItemList producto={producto[1]} />
            <ItemList producto={producto[2]} />
        </div>
    )
}
export default ItemListContainer