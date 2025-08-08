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
    <>
      <Container>
        {/* */}
        <Row className="d-flex flex-column d-lg-flex flex-row">
          <Col xs={12} lg={2}>
            <Mynavbar />
          </Col>
          <Col xs={12} lg={10}>
            <Col>
              <h2>Novitá</h2>
              <News />
            </Col>
            <Col>
              <h2>
                Nuovi Episodi Radio <span>{">"}</span>
              </h2>
              <Newradioepisodes />
            </Col>
            <Col>
              <h2>
                Nuove Canzoni <span>{">"}</span>
              </h2>
              <Newsongs />
            </Col>
            <Col>
              <h2>Altro da esplorare</h2>
              <Explore />
            </Col>
            <Col>
              <Footer />
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
