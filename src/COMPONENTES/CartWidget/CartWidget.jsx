import "./CartWidget.css"

const CartWidget = () => {
  const carrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png";
    return (
    <div>
        <img className="carrito" src="{carrito}" alt="este es un carrito de compras con 5 productos" />
        <strong> 5 </strong> 
    </div>
  )
}

export default CartWidget