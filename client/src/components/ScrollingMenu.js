import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ImageSrollbar({ data }) {
  return (
    <ScrollMenu LeftArrow="" RightArrow="" style={{ overflow: "hidden" }}>
      {data.map((item) => (
        <Container width="910px" itemId={item.id} overflow="hidden" p="1">
          <img
            placeholder="blur"
            blurDataURL={item.url}
            src={item.url}
            width={1000}
            height={500}
            sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
          />
        </Container>
      ))}
    </ScrollMenu>
  );
}
