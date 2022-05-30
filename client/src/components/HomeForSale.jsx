import { Row, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import froSalImg from "../assets/House_sale-min.jpg";

const HomeForSale = () => {
  return (
    <Container className="h-75 text-dark d-flex container-md">
      <Row className="  d-flex align-items-center mb-5">
        <Col>
          <h2>Need To Buy a Home?</h2>
          <p>
            Find a lender who can offer competitive mortgage rates and help you
            with pre-approval.
          </p>
          <Link to="/property-sale" className="link p-2">
            <button type="button" className="btn btn-danger px-5">
              Find your New Home
            </button>
          </Link>
        </Col>
        <Col>
          <img src={froSalImg} className="img-fluid rounded-3 " alt="..." />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeForSale;
