import { Card } from "react-bootstrap";
import ItemCount from "../Item/ItemCount/ItemCount"
import { useState } from "react"; 
import { Link } from "react-router-dom";

const ItemDetail = ({id, nombre, precio, img, stock}) => {
  
  const {agregarCantidad, setAgregarCantidad} = useState(0); 
  
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("productos agregados:" + cantidad);
    const  item = {id, nombre, precio};
    agregarProductos(item, cantidad);
  } 
    
    return (
    <div>
        <h2> nombre: {nombre} </h2>
        <h3> precio: {precio} </h3>
        <h3> id: {id} </h3>
        <p> no se que va aca </p>
        <img src={img} alt="{nombre}" />
        {
          agregarCantidad > 0 ? ( <link to="cart"> terminar pedido </link> ) : ( <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
        <p> unidades disponibles: {stock} </p>
     </div>
  )
}

export default ItemDetail