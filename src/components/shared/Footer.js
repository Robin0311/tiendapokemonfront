
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark" className="footernav pokemon" >
        <Container className="pokemon">
          <Navbar.Brand href=""></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.facebook.com/pokemongoappla" target={"_blank"}>Facebook</Nav.Link>
            <Nav.Link href="https://www.instagram.com/pokemongoappla/" target={"_blank"}>Instagram</Nav.Link>
            <LinkContainer to="/address">
              <Nav.Link>Address</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>

      );
}

export default Footer
