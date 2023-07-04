import ItemCount from "../Item/ItemCount/ItemCount" 

const ItemDetail = ({id, nombre, precio, img, stock}) => {
  
  const {agregarCantidad, setAgregarCantidad} = useState(0); 
  
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("productos agregados:" + cantidad);
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
     </div>
  )
}

export default ItemDetail