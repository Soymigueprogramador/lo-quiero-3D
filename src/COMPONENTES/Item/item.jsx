import "./Item.css"
import { Link } from "react-router-dom"

const item = ({id, nombre, precio, img}) => {
  return (
    <div className="cardProductos">
        <img className="imgProductos" src="{img}" alt="{nombre}" />
        <h2> nombre: {nombre} </h2>
        <p> precio: {precio} </p>
        <p> id: {id} </p> 
        <link className="btnProductos" to={"/item${id}"} >ver detalle</link> 
    </div>
  )
}

export default item