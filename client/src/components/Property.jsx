import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { generalUrl, queryData } from "../utils/queryApi";
import PropertyLayout from "./../page/PropertyLayout";

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
      <Container lg={3} className="mt-2 d-flex flex-wrap">
        {" "}
        {forSale.map((prosel) => (
          <PropertyLayout key={prosel.id} prosel={prosel} />
        ))}{" "}
      </Container>
    </>
  );
};

export default Property;
