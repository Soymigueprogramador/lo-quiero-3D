
import ItenListenConteiner from "./componentes/ItenListenConteiner/ItenListenConteiner"
import NavBar from "./componentes/NavBar/NavBar"
const App = () => {
  return (
    <>
      <NavBar/>
      <ItenListenConteiner greeting="{hola a todos, les damos la bienvenida a nuestra tienda de productos impresos en 3D}" /> 
    </>
  )
}
export default App