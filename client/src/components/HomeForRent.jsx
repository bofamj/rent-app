import { Row, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../App.css";
import forRentImg from "../assets/haus_real_estate_rent.jpg";

const HomeForRent = () => {
  return (
    <div className="for-rent-cont pt-5 ">
      <Container className="h-75  d-flex  ">
        <Row className="  d-flex align-items-center mb-5 ">
          <Col>
            <img src={forRentImg} className="img-fluid rounded-3" alt="..." />
          </Col>
          <Col>
            <h2>Need To Rent a Home?</h2>
            <p>
              Find a lender who can offer competitive mortgage rates and help
              you with pre-approval.
            </p>
            <Link to="/property-rent" className="link p-2">
              <button type="button" className="btn btn-danger px-5">
                Find A Home To Rent
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeForRent;
