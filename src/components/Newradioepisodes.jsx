import { Container, Row, Col, Image } from "react-bootstrap";
import img2a from "../assets2/images/2a.png?url";
import img2b from "../assets2/images/2b.png?url";
import img2c from "../assets2/images/2c.png?url";
import img2d from "../assets2/images/2d.png?url";
import img2e from "../assets2/images/2e.png?url";
import img2f from "../assets2/images/2f.png?url";

const Newradioepisodes = () => {
  return (
    <Container>
      <h1>
        Nuovi episodi radio <span>{">"}</span>
      </h1>
      <Row className="justify-content-around">
        <Col xs={4} lg={2}>
          <div className="text-center">
            <Image
              src={img2a}
              alt="Prólogo con Abuelo"
              fluid
              style={{ height: "200px", width: "200px", objectFit: "cover" }}
            />
            <h5 className="mt-2">Prólogo con Abuelo</h5>
          </div>
        </Col>

        <Col xs={4} lg={2}>
          <div className="text-center">
            <Image
              src={img2b}
              alt="Prólogo con Abuelo"
              fluid
              style={{ height: "200px", width: "200px", objectFit: "cover" }}
            />
            <h5 className="mt-2">The Wanderer</h5>
          </div>
        </Col>

        <Col xs={4} lg={2}>
          <div className="text-center">
            <Image
              src={img2c}
              alt="Prólogo con Abuelo"
              fluid
              style={{ height: "200px", width: "200px", objectFit: "cover" }}
            />
            <h5 className="mt-2">Michael Bublé & Carly Pearce</h5>
          </div>
        </Col>

        <Col xs={4} lg={2}>
          <div className="text-center">
            <Image
              src={img2d}
              alt="Prólogo con Abuelo"
              fluid
              style={{ height: "200px", width: "200px", objectFit: "cover" }}
            />
            <h5 className="mt-2">Stephan Moccio: The Zane Lowe Interview</h5>
          </div>
        </Col>

        <Col xs={4} lg={2}>
          <div className="text-center">
            <Image
              src={img2e}
              alt="Prólogo con Abuelo"
              fluid
              style={{ height: "200px", width: "200px", objectFit: "cover" }}
            />
            <h5 className="mt-2">Chart Spotlight: Julia Michaels</h5>
          </div>
        </Col>

        <Col xs={4} lg={2}>
          <div className="text-center">
            <Image
              src={img2f}
              alt="Prólogo con Abuelo"
              fluid
              style={{ height: "200px", width: "200px", objectFit: "cover" }}
            />
            <h5 className="mt-2">Idk</h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Newradioepisodes;
