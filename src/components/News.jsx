import { Col, Row, Container } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import Img1a from "../assets2/images/1a.png?url";
import Img1b from "../assets2/images/1b.png?url";
const News = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center align-content-center g-2">
          <h1>Novitá</h1>
          <Col xs={6} lg={4} className="d-flex flex-grow-1">
            <div className="h-100 d-flex flex-column">
              <div>
                <h6>Nuova stazione radio</h6>
              </div>
              <div>
                <h4>
                  Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
                </h4>
              </div>
              <div>
                <img className="imgcard2" variant="top" src={Img1a} />
              </div>
            </div>
          </Col>

          <Col xs={6} lg={4} className="d-flex flex-grow-1">
            <div className="h-100 d-flex flex-column">
              <div>
                <h6>Nuova stazione radio</h6>
              </div>
              <div>
                <h4>Ecco la nuova casa della musica latina</h4>
              </div>
              <div>
                <img className="imgcard2" variant="top" src={Img1b} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default News;
