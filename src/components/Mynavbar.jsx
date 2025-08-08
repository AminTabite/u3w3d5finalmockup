import { Container, Navbar, Nav } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import logomusic from "../assets2/logos/download.svg";
import { BsSearch, BsHouseDoor, BsMic } from "react-icons/bs";
import { Form } from "react-bootstrap";

const Mynavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="d-flex flex-lg-column">
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <GiHamburgerMenu color="red" size={30} />
        </Navbar.Toggle>

        <div>
          <Navbar.Brand className="mx-auto">
            <img src={logomusic} alt="Apple Music Logo" height="30" />
          </Navbar.Brand>
        </div>

        <Navbar.Collapse id="basic-navbar-nav d-flex flex-lg-column">
          <Form.Control
            type="text"
            placeholder="Cerca"
            className="m-3 bg-dark text-danger"
          />

          <div>
            <BsSearch className="text-danger" />
          </div>
          <div>
            <BsHouseDoor className="text-danger" />{" "}
          </div>
          <div>
            <BsMic className="text-danger" />{" "}
          </div>

          <Nav className="ms-auto"></Nav>
        </Navbar.Collapse>
        <div className="text-primary d-lg-none">
          <Nav.Link href="#" className="red">
            Accedi
          </Nav.Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default Mynavbar;
