import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
import { UserContext } from '../context/userContext'

const Header = () => {

  const ctx = useContext(UserContext)

  const { logout, authStatus } = ctx

  return (

  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container className="pokemon">

      <LinkContainer to="/">
        <Navbar.Brand className="poketitulo">Pokeshop</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="me-auto">
          <LinkContainer to="/catalogoproductos">
            <Nav.Link>Catalago de Productos</Nav.Link>
          </LinkContainer>
        </Nav>
        
        <Nav>


        {authStatus ? (
        <>
          <LinkContainer to='/' onClick={logout}>
          <Nav.Link>Cerrar sesión</Nav.Link>
          </LinkContainer>
        </>
      ) : (
        <>
          <LinkContainer to='/crearusuario'>
          <Nav.Link>Registro</Nav.Link>
            </LinkContainer>

          <LinkContainer to='/iniciarsesion'>
          <Nav.Link>Iniciar Sesion</Nav.Link>
            </LinkContainer>
        </>
      )}
   
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  );
};

export default Header;
