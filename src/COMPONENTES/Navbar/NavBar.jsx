import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navBar.css'
import {Link, NavLink} from "react-router-dom"

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='item' href="#home">Lo quiero 3D</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="../NavBar/pages/inicio.jsx">inicio</Nav.Link>
            <Nav.Link href="../NavBar/pages/productos.jsx">productos</Nav.Link>
            <Nav.Link href="../NavBar/pages/">contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>
  )
}

export default NavBar