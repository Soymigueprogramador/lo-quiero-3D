import { useState, useEffect } from "react"
import { getUnProducto } from "../../asyncmock.js"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import { useParams } from "react-router-dom"

const ItemDetailConteiner = () => {
  const [productos, setProductos] = useState(null); 
  const {idItem} = useParams(); 
  
  useEffect( () => {
    .then(res => setProductos(res))
  }, [idItem])

    return (
    <div>
        <ItemDetail {...productos} />
    </div>
  )
}

export default ItemDetailConteiner