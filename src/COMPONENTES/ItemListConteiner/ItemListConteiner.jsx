import { useState, useEffect } from "react";
import { getProductos, getProductosPorCategorias } from "../../asyncmock"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
//import { useParams } from "react-router-dom";

const ItemListConteiner = (props) => {
  const [productos, setProductos] = useState([]);
  const { idCategorias } = useParams(); 

  useEffect(() => {
    const funcion = idCategorias ? getProductosPorCategorias : getProductos;
    funcion(idCategorias)
      .then(res => setProductos(res))
  }, [idCategorias])
  
    return (
    <>
        <h2> {props.greeting} </h2>
        <ItemList productos={productos} />
    </>
  )
}

export default ItemListConteiner