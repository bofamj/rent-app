import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import spinner from "../assets/Spinner-1s-200px.svg";

const Loading = () => {
  return (
    <Container>
      <img src={spinner} />
    </Container>
  );
};

export default Loading;
