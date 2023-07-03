//import ItemCount from "./componentes/ItemCount/ItemCount"
import NavBar from "./componentes/NavBar/NavBar"
import ItemListConteiner from "./componentes/ItemListConteiner/ItemListConteiner"
import ItemDetailConteiner from "./componentes/ItemDetailConteiner/ItemDetailConteiner"
import {BrowserRouter, Routes, route} from "react-router-dom"
const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <routes>
        <route path="/" element= { <ItemListConteiner/>  } />
        <route path="/categorias/:idCategorias" element= { <ItemListConteiner/>  }   />
        <route path="/item/:idItem" element={ <ItemDetailConteiner/> } />
        <route path="*" element={ <h2>up, este sitio todavia esta en construccion, por favor pegate una vuelta mas tarde</h2> } />
      </routes>
      </BrowserRouter>
      <ItenListenConteiner greeting="{hola a todos, les damos la bienvenida a nuestra tienda de productos impresos en 3D}" /> 
    </>
  )
}
export default App