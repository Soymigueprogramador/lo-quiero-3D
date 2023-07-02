import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./inicio.css"
import {Link, NavLink} from "react-router-dom"

import "./inicio.css"

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='item' href="#home">Lo quiero 3D</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./inicio.jsx">inicio</Nav.Link>
            <Nav.Link href="../pages/inicio.jsx">productos</Nav.Link>
            <Nav.Link href="#link">contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
    <>
        <h1>pagina de inicio</h1>
    </>

export default BasicExample;