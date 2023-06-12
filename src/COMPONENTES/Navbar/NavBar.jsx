import CartWidget from "./CartWidget/CartWidget"
import "./Navbar.css"

const navbar = () => {
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
    <CartWidget />
    </header>
  )
}

export default navbar