import "./CartWidget.css"

const CartWidget = () => {
  const imgCarrito = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.es%2Ficono-gratis%2Fcarrito-de-compras_5087847&psig=AOvVaw0gjl4YO_2H7-4pXcej6IdR&ust=1686613287242000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNiGrsW3vP8CFQAAAAAdAAAAABAE";
    return (
    <div>
        <img className="carrito" src={imgCarrito} alt="este es un icono de un carrito de compras" />
        <strong> 5 </strong>
    </div>
  )
}

export default CartWidget