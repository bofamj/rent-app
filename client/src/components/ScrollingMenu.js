import React from "react";

/* import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi"; */
import { Container, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ImageSrollbar({ data }) {
  return (
    <>
      <Carousel className="mw-75 mh-75">
        {data.map((item) => (
          <Carousel.Item className="mw-75 mh-75 ">
            <img
              className="d-block w-100 image-responsive"
              src={item.url}
              alt="First slide"
              width={750}
              height={500}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

{
  /* <ScrollMenu style={{ overflow: "hidden" }}>
      {data.map((item) => (
        <Container width="60%" itemId={item.id} overflow="hidden" p="1">
          <img
            placeholder="blur"
            blurDataURL={item.url}
            src={item.url}
            width={700}
            height={300}
            sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
          />
        </Container>
      ))}
    </ScrollMenu> */
}
