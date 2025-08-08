import { Container, Row, Col } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

const Explore = () => {
  return (
    <Container>
      <h1>Altro da esplorare</h1>
      <Row>
        <Col xs={12} lg={4}>
          {" "}
          {["danger"].map((variant) => (
            <Alert
              key={variant}
              variant={variant}
              className="d-flex justify-content-between align-content-center border-red-bg-transparent">
              <div>
                <p>Esplora per genere</p>
              </div>
              <div>{">"}</div>
            </Alert>
          ))}
        </Col>

        <Col xs={12} lg={4}>
          {" "}
          {["danger"].map((variant) => (
            <Alert
              key={variant}
              variant={variant}
              className="d-flex justify-content-between align-content-center border-red-bg-transparent">
              <div>
                <p>Esplora per genere</p>
              </div>
              <div>{">"}</div>
            </Alert>
          ))}
        </Col>

        <Col xs={12} lg={4}>
          {" "}
          {["danger"].map((variant) => (
            <Alert
              key={variant}
              variant={variant}
              className="d-flex justify-content-between align-content-center border-red-bg-transparent">
              <div>
                <p>Esplora per genere</p>
              </div>
              <div>{">"}</div>
            </Alert>
          ))}
        </Col>

        <Col xs={12} lg={4}>
          {" "}
          {["danger"].map((variant) => (
            <Alert
              key={variant}
              variant={variant}
              className="d-flex justify-content-between align-content-center border-red-bg-transparent">
              <div>
                <p>Esplora per genere</p>
              </div>
              <div>{">"}</div>
            </Alert>
          ))}
        </Col>

        <Col xs={12} lg={4}>
          {" "}
          {["danger"].map((variant) => (
            <Alert
              key={variant}
              variant={variant}
              className="d-flex justify-content-between align-content-center border-red-bg-transparent">
              <div>
                <p>Esplora per genere</p>
              </div>
              <div>{">"}</div>
            </Alert>
          ))}
        </Col>

        <Col xs={12} lg={4}>
          {" "}
          {["danger"].map((variant) => (
            <Alert
              key={variant}
              variant={variant}
              className="d-flex justify-content-between align-content-center border-red-bg-transparent">
              <div>
                <p>Esplora per genere</p>
              </div>
              <div>{">"}</div>
            </Alert>
          ))}
        </Col>

        <Col xs={12} lg={4}>
          {" "}
          {["danger"].map((variant) => (
            <Alert
              key={variant}
              variant={variant}
              className="d-flex justify-content-between align-content-center border-red-bg-transparent">
              <div>
                <p>Esplora per genere</p>
              </div>
              <div>{">"}</div>
            </Alert>
          ))}
        </Col>

        <Col xs={12} lg={4}>
          {" "}
          {["danger"].map((variant) => (
            <Alert
              key={variant}
              variant={variant}
              className="d-flex justify-content-between align-content-center border-red-bg-transparent">
              <div>
                <p>Esplora per genere</p>
              </div>
              <div>{">"}</div>
            </Alert>
          ))}
        </Col>

        <Col xs={12} lg={4}>
          {" "}
          {["danger"].map((variant) => (
            <Alert
              key={variant}
              variant={variant}
              className="d-flex justify-content-between align-content-center border-red-bg-transparent">
              <div>
                <p>Esplora per genere</p>
              </div>
              <div>{">"}</div>
            </Alert>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Explore;
