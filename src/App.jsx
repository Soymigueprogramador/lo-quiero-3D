//import ItemCount from "./componentes/ItemCount/ItemCount"
import NavBar from "./componentes/NavBar/NavBar"
import ItemListConteiner from "./componentes/ItemListConteiner/ItemListConteiner"
import ItenListenConteiner from "./componentes/ItenListenConteiner/ItenListenConteiner"
import ItemDetailConteiner from "./componentes/ItemDetailConteiner/ItemDetailConteiner"
import {BrowserRouter, Routes, Route} from "react-router-dom"
const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={ <ItemListConteiner/> } /> 
          <Route path="categorias/:idCategorias" element={ <ItemListConteiner/> } />
          <Route path="/item:idItem" element={ <ItemDetailConteiner/> } />
          <Route path="*" element={ <h2> Ups, banca amigo que todavia no terminamos de construir el sitio!! falta poco!! :D </h2> } />
        </Routes>
      </BrowserRouter>
      <ItenListenConteiner greeting="{hola a todos, les damos la bienvenida a nuestra tienda de productos impresos en 3D}" />
    </>
  )
}
export default App