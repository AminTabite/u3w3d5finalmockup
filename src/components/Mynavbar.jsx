import { Container, Navbar, Nav } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi"; // import icona
import logomusic from "../assets2/logos/music.svg";

const Mynavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Toggle con icona personalizzata */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <GiHamburgerMenu color="red" size={30} />
        </Navbar.Toggle>

        <Navbar.Brand className="mx-auto">
          <img src={logomusic} alt="Apple Music Logo" height="30" />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"></Nav>
        </Navbar.Collapse>
        <Nav.Link href="#" className="red">
          Accedi
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default Mynavbar;
