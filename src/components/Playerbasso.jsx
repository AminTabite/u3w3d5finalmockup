import { Container, Row, Col } from "react-bootstrap";
import { BsFillPlayFill, BsFillSkipEndFill } from "react-icons/bs";
import "./Playerbasso.css";

const Playerbasso = () => {
  return (
    <Container fluid className="playerbasso rounded-top-4">
      <Row>
        <Col className="d-flex justify-content-between align-items-center">
          <div>
            <img
              className="ps-5"
              src="https://placehold.co/50x50"
              alt="cover"
            />
          </div>
          <div className="d-flex align-items-center">
            <BsFillPlayFill size={35} className="me-3" color="#85898cff" />
            <BsFillSkipEndFill size={35} color="#85898cff" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Playerbasso;
