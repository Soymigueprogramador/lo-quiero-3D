import "./CartWidget.css"

const CartWidget = () => {
  const carrito = "C:\Users\yobeb\OneDrive\Escritorio\lo-quiero-3d-2\lo-quiero-3d-2\src\assets\img";
    return (
    <div>
        <img className="carrito" src="{carrito}" alt="este es un carrito de compras con 5 productos" />
        <strong> 5 </strong> 
    </div>
  )
}

export default CartWidget