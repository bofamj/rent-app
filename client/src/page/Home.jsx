import { Row, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import HomeForSale from "../components/HomeForSale";

import "../App.css";
import house from "../assets/26801-6-house-transparent.png";
import blob from "../assets/blob-4.svg";
import HomeForRent from "../components/HomeForRent";
const Home = () => {
  return (
    <>
      <div className=" heder w-100">
        <Container className="h-100  d-flex align-items-center justify-content-center hero heder">
          <Row xs={1} md={2} className=" h-75 w-100  align-items-center">
            <Col xs={{ order: "last" }}>
              <h1 className="text-uppercase fs-1 hero-text">
                rel estate home page
              </h1>
            </Col>
            <Col xs={{ order: "last" }} className="hero-img-container">
              <img src={blob} className="blob " />
              <img src={house} className="image rounded-3" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className=" w-100">
        <div className="sale-hero-cont container-lg">
          <HomeForSale />
        </div>
        <div className="sale-hero-cont  w-100">
          <HomeForRent />
        </div>
      </div>
    </>
  );
};

export default Home;
