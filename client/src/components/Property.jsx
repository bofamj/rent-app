import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { generalUrl, queryData } from "../utils/queryApi";
import PropertyLayout from "./../page/PropertyLayout";

const Property = () => {
  const [forSale, setForSale] = useState([]);

  //*fetching ret and sale propertiess form the raped api
  const fetchEaleProperty = async () => {
    const forSale = await queryData(
      `${generalUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
    );
    setForSale(forSale.hits);
  };

  useEffect(() => {
    fetchEaleProperty();
  }, []);

  return (
    <Container lg={3} className="mt-2 d-flex flex-wrap">
      {forSale.map((prosel) => (
        <PropertyLayout key={prosel.id} prosel={prosel} />
      ))}
    </Container>
  );
};

export default Property;
