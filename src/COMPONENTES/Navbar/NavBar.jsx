import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navBar.css'
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  return (
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='item' href="#home">Lo quiero 3D</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <li>
              <NavLink to="../NavBar/pages/Inicio/Inicio.jsx">inicio</NavLink>
            </li>
            <li>
              <NavLink to="../NavBar/pages/Productos/Productos.jsx">productos</NavLink>
            </li>
            <li>
              <NavLink to="../NavBar/Pages/Contacto/Contacto.jsx">contacto</NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>
  )
}

export default NavBar