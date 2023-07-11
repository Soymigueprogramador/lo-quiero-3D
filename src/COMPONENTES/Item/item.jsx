import "./Item.css"
import { Link } from "react-router-dom"
import Card from "react-bootstrap"
import Button from "react-bootstrap"

const Item = ({id, nombre, precio, img, stock}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="{img}" alt="{nombre}" />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          precio: $ {precio}
        </Card.Text>
        <Card.text>
          Codigo: {id}
        </Card.text>
        <Button variant="primary">ver detalle</Button>
        <link to={"/item/${id}"} >ver detalles</link>
        <p> cantidad disponible: {stock} </p>
      </Card.Body>
    </Card>
  )
}

export default Item