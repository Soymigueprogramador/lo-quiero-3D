import item from "../Item/item"
import "./ItemList.css"

const ItemList = ({productos}) => {
  return (
    <div className="contenedorProductos">
        {productos.map(prod => <item key={prod.id} {...prod}/>)}
    </div>
  )
}

export default ItemList