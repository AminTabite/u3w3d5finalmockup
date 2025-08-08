import { Col, Row, Container } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import Img1a from "../assets2/images/1a.png?url";
import Img1b from "../assets2/images/1b.png?url";
const News = () => {
  return (
    <Container>
      <Row>
        <Col xs={6} lg={4} className="g-2">
          <Card>
            <Card.Body>
              <Card.Title>
                Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
              </Card.Title>
              <Card.Text>Nuova stazione radio</Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={Img1a} />
          </Card>
        </Col>

        <Col xs={6} lg={8} className="g-2">
          <Card>
            <Card.Body>
              <Card.Title>Ecco la nuova casa della musica latina</Card.Title>
              <Card.Text>Nuova stazione radio</Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={Img1b} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default News;
