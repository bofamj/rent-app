import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { generaIdlUrl, queryIdData } from "../utils/queryApi";
import ImageSrollbar from "../components/ScrollingMenu";
import { RiHotelBedLine, RiRuler2Line } from "react-icons/ri";
import { MdBathtub, MdVerified } from "react-icons/md";

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
  //console.log(photos);
  useEffect(() => {
    fetchPropertyDetails();
  }, []);

  //console.log(amenities);
  return (
    <Container className="mt-5 w-75 mb-5">
      <Row>
        <Col>
          {photos && <ImageSrollbar data={photos} />}
          <div className="d-flex justify-content-between align-items-center  ">
            <h5 className=" p-1 d-flex align-items-center ">
              {isVerified && <MdVerified className=" text-success" />}
              USD{" "}
              {price /* .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") */}
              {rentFrequency && `/${rentFrequency}`}
            </h5>
            {/* {agency.logo && (
              <img
                src={agency.logo.url}
                width={50}
                height={50}
                className="mt-2"
              />
            )} */}
          </div>
          <div className="d-flex justify-content-between align-items-center pe-2  w-50">
            <p className=" ps-2 text-info w-50 d-flex justify-content-between align-items-center ">
              {rooms} <RiHotelBedLine className="text-info ms-1" /> |{baths}{" "}
              <MdBathtub className="text-info " /> | {Math.floor(area)} sqft{" "}
              <RiRuler2Line className="text-info " />
            </p>
          </div>
          <div className="d-flex justify-content-center  flex-column  ">
            <h2 className="d-flex align-items-start mb-4">{title}</h2>
            <p className="description text-secondary"> {description}</p>
          </div>
          <div className="d-flex justify-content-start align-items-center pe-5  w-100 mb-3">
            <div className="d-flex justify-content-spaceAround align-items-center pe-5">
              <h4 className="text-dark">Type :</h4>
              <h5 className=" text-secondary px-2 mt-1">{type}</h5>
            </div>
            <div className="d-flex justify-content-center align-items-center  ">
              <h4 className="text-dark">Purpose :</h4>
              <h5 className="  text-secondary px-2  mt-1">{purpose}</h5>
            </div>
            <div className="d-flex justify-content-center align-items-center ps-5 ">
              {furnishingStatus && (
                <h5 className=" ps-2 text-secondary w-50 d-flex justify-content-between align-items-center ">
                  {furnishingStatus}
                </h5>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-start pe-2  w-100 ">
            <h4 className="text-dark ">Amenities:</h4>
            <div className="d-flex justify-content-start ms-2 mt-1  w-100 flex-wrap">
              {amenities.map((amenitie) => (
                <h5 className="pe-5  text-secondary">{amenitie.text}</h5>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailsForRent;
