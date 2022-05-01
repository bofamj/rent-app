import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { generaIdlUrl, queryIdData } from "../utils/queryApi";
import ImageSrollbar from "../components/ScrollingMenu";

const DetailsForRent = () => {
  const [details, setDetails] = useState([]);
  const {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  } = details;
  const { id } = useParams();
  const fetchPropertyDetails = async () => {
    const details = await queryIdData(
      `${generaIdlUrl}/properties/detail?externalID=${id}`
    );
    setDetails(details);
  };
  console.log(photos);
  useEffect(() => {
    fetchPropertyDetails();
  }, []);

  console.log(photos);
  return (
    <Container className="mt-5 h-75 ">
      <Row>
        <Col>{photos && <ImageSrollbar data={photos} />}</Col>
      </Row>
    </Container>
  );
};

export default DetailsForRent;
