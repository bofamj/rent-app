import { Row, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../App.css";
import house from "../assets/26801-6-house-transparent.png";
import blob from "../assets/blob-4.svg";
const Home = () => {
  return (
    <div className="heder">
      <Container className="h-100  d-flex align-items-center justify-content-center ">
        <Row xs={1} md={2} className=" h-75 w-100  align-items-center">
          <Col xs={{ order: "last" }}>
            <h1 className="text-uppercase fs-1 hero-text">
              rel estate home page
            </h1>
          </Col>
          <Col xs={{ order: "last" }} className="hero">
            <img src={blob} className="blob " />
            <img src={house} className="image" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
