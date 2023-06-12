
import NavBar from './COMPONENTES/Navbar/NavBar'
import CartWidget from './COMPONENTES/CartWidget/CartWidget'
import ItemListConteiner from './COMPONENTES/ItemListConteiner/ItemListConteiner'

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListConteiner greeting={"hola a todos!! les damos la bienvenida a nuestro sitio web"} />
    </>
  )
}

export default App