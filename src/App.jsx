import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Mynavbar from "./components/Mynavbar.jsx";
import News from "./components/News.jsx";
import Newradioepisodes from "./components/Newradioepisodes.jsx";
import Newsongs from "./components/Newsongs.jsx";
import Explore from "./components/explore.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col xs={12} lg={2} className="greybg d-flex flex-column">
          <Mynavbar />
        </Col>

        <Col xs={12} lg={10} className="d-flex flex-column">
          <div className="flex-grow-1 overflow-auto">
            <Row>
              <Col xs={12}>
                <News />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Newradioepisodes />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Newsongs />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Explore />
              </Col>
            </Row>
          </div>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
