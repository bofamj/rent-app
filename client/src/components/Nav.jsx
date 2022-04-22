import { Navbar, Container, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../App.css";

const Nav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand={false}>
      <Container>
        <Navbar.Brand href="#">
          <h3 className="logo">Rent</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <h3 className="logo">Rent</h3>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body
            bg="dark"
            variant="dark"
            className="justify-content-end flex-grow-1 pe-3"
          >
            <Link to="/">Home</Link>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Nav;
