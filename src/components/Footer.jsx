import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={6}>
          <Col className="my-3">
            <div>
              <p>Italia | English(UK)</p>
            </div>
          </Col>
          <Col>
            <div>
              <p>Copyright @ 2024 Apple Inc. Tutti i diritti riservati.</p>
            </div>
          </Col>
          <Col>
            <div>
              <p>
                Condizioni dei servizi internet | Apple music e Privacy | Avviso
                sui cookies | Supporto | Feedback{" "}
              </p>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
