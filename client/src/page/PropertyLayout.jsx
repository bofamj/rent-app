import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { generalUrl, queryData } from "../utils/queryApi";

const PropertyLayout = ({ prosel }) => {
  const [forRent, setForRent] = useState([]);
  const {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  } = prosel;
  //console.log(coverPhoto.url);

  //*fetching ret  form the raped api
  const fetchRentProperty = async () => {
    const forRent = await queryData(
      `${generalUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
    );
    setForRent(forRent.hits);
  };

  useEffect(() => {
    fetchRentProperty();
  }, []);

  return (
    <>
      <Row className=" p-2 ">
        <Col className="mt-2">
          <img src={coverPhoto.url} width={350} height={260} />
          <dev className="d-flex justify-content-between align-items-center  ">
            <p>
              USD {price}
              {rentFrequency && `/${rentFrequency}`}
            </p>
            <img src={agency.logo.url} width={20} height={20} />
          </dev>
          <dev className="d-flex justify-content-between align-items-center pe-2 ">
            <p>
              {rooms} |{baths} | {Math.floor(area)}sqft
            </p>
          </dev>
          <p>{title.substring(0, 30) + "..."}</p>
        </Col>
      </Row>
    </>
  );
};

export default PropertyLayout;
