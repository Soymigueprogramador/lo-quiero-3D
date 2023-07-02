import "./CartWidget.css"

const CartWidget = () => {
  const carrito = "../assets/iconos/carrito-de-compras";
    return (
    <div>
        <img className="carrito" src="{carrito}" alt="este es un carrito de compras con 5 productos" />
        <strong> 5 </strong> 
    </div>
  )
}

export default CartWidget