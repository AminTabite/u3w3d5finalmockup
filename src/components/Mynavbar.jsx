import { Container, Navbar, Nav } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import logomusic from "../assets2/logos/download.svg";
import { BsSearch, BsHouseDoor, BsRadar, BsSquare } from "react-icons/bs";
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

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-flex d-none flex-lg-column">
          <Form.Control
            type="text"
            placeholder="Cerca"
            className="m-3 bg-dark text-danger"
          />

          <div className="d-flex justify-content-between align-items-center">
            <span className="d-flex align-items-center">
              <BsHouseDoor className="text-danger me-2" />
              <span>Home</span>
            </span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span className="d-flex align-items-center">
              <BsSquare className="text-danger me-2" />
              <span>Novitá</span>
            </span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span className="d-flex align-items-center">
              <BsRadar className="text-danger me-2" />
              <span>Radio</span>
            </span>
          </div>
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
