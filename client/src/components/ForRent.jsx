import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { generalUrl, queryData } from "../utils/queryApi";
import ForRentLayout from "../page/forRentLayout";

const ForRent = () => {
  const [forRent, setForRent] = useState([]);

  //*fetching ret  form the raped api
  const fetchRentProperty = async () => {
    const forRent = await queryData(`${generalUrl}/rent`);
    setForRent(forRent);
  };

  useEffect(() => {
    fetchRentProperty();
  }, []);
  return (
    <>
      <h1 className="m-2 d-flex justify-content-center page-text">
        PROPERTY FOR <span className="page-text-span ">RENT</span>
      </h1>

      <Container lg={3} className="mt-2 d-flex flex-wrap">
        {forRent.map((prosel) => (
          <Link className="red-mor-link" to={`/${prosel.externalID}`}>
            <ForRentLayout key={prosel.id} prosel={prosel} />
          </Link>
        ))}
      </Container>
    </>
  );
};

export default ForRent;
