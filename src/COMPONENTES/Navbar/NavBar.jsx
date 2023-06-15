import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
const NavBar = () => {
  return (
    <header>
        <h1>
            lo quiero 3D
        </h1>
        <nav>
            <ul>
                <li>
                    productos impresos
                </li>
                <li>
                    productos con diseño
                </li>
                <li>
                    contacto
                </li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}
export default NavBar