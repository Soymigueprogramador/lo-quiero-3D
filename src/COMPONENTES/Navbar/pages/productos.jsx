import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./productos.css"
import {Link, NavLink} from "react-router-dom"

const productos = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='item' href="#home">Lo quiero 3D</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./inicio.jsx">inicio</Nav.Link>
            <Nav.Link href="../pages/productos.jsx">productos</Nav.Link>
            <Nav.Link href="#link">contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
    <>
      <h1>paginas de productos 3D</h1>
    </>

export default productos