import "./Item.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"

const item = ({id, nombre, precio, img, stock}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="{img}" alt="{nombre}" />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          precio: $ {precio}
        </Card.Text>
        <card.text>
          codigo: {id}
        </card.text>
        <Button variant="primary">ver detalle</Button>
        <p> cantidad disponible: {stock} </p>
      </Card.Body>
    </Card>
  )
}

export default item