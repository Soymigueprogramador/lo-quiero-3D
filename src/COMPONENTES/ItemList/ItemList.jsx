import item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({productos}) => {
  return (
    <div className="contenedorProductos">
        {productos.map(prod => <item key={prod.id} {...prod}/>)}
    </div>
  )
}

export default ItemList