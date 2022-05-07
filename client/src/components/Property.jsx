import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { generalUrl, queryData } from "../utils/queryApi";
import PropertyLayout from "./../page/PropertyLayout";
import { Link } from "react-router-dom";
import Serch from "./Serch";

const Property = () => {
  const [forSale, setForSale] = useState([]);

  //*fetching ret and sale propertiess form the raped api
  const fetchEaleProperty = async () => {
    const forSale = await queryData(`${generalUrl}/sale`);
    setForSale(forSale);
  };
  console.log(forSale);
  useEffect(() => {
    fetchEaleProperty();
  }, []);

  return (
    <>
      {" "}
      <h1 className="m-2 d-flex justify-content-center page-text">
        PROPERTY FOR <span className="page-text-span ">SALE</span>
      </h1>
      <Container>
        <Serch forSale={forSale} forSaleSort={setForSale} />
      </Container>
      <Container lg={3} className="mt-2 d-flex flex-wrap">
        {" "}
        {forSale.map((prosel) => (
          <Link className="red-mor-link" to={`/${prosel.externalID}`}>
            <PropertyLayout key={prosel.id} prosel={prosel} />
          </Link>
        ))}{" "}
      </Container>
    </>
  );
};

export default Property;
