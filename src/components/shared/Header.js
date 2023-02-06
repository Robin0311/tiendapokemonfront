import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
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
          <LinkContainer to="/iniciarsesion">
            <Nav.Link>Iniciar Sesion</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/crearusuario">
            <Nav.Link >Crear Usuario</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/cerrarsesion">
            <Nav.Link>Cerrar Sesion</Nav.Link>
          </LinkContainer>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  );
};

export default Header;
