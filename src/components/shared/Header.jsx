import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

import React, { useContext } from "react";
// import { Link } from 'react-router-dom'
import { UserContext } from "../context/userContext";

const Header = (
) => {
  const ctx = useContext(UserContext);

  const { logout, authStatus } = ctx;

  return (
      <Navbar bg="dark" variant="dark">
        <Container className="pokemon">
          <LinkContainer to="/">
              <Navbar.Brand className="poketitulo">Pokeshop</Navbar.Brand>
          </LinkContainer>

          <Nav className="me-auto">
            <LinkContainer to="/catalogoproductos">
              <Nav.Link>Catalago de Productos</Nav.Link>
            </LinkContainer>
          </Nav>

          <Nav className="me-auto">
            {authStatus ? (
              <>
                <LinkContainer to="/" onClick={logout}>
                  <Nav.Link>Cerrar sesión</Nav.Link>
                </LinkContainer>
              </>
            ) : (
              <>
                <LinkContainer to="/crearusuario">
                  <Nav.Link>Registro</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/iniciarsesion">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              </>
            )}

                <LinkContainer to="/carrito">
                  <Nav.Link>
                  Carrrito
                  </Nav.Link>
                </LinkContainer>

          </Nav>
        </Container>
      </Navbar>
  );
};

export default Header;
