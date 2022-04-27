import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { generalUrl, queryData } from "../utils/queryApi";
import forRentLayout from "../page/forRentLayout";

const ForRent = () => {
  const [forRent, setForRent] = useState([]);

  //*fetching ret  form the raped api
  const fetchRentProperty = async () => {
    const forRent = await queryData(
      `${generalUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=20`
    );
    setForRent(forRent.hits);
  };

  useEffect(() => {
    fetchRentProperty();
  }, []);
  return (
    <Container lg={3} className="mt-2 d-flex flex-wrap">
      {forRent.map((prosel) => (
        <forRentLayout key={prosel.id} prosel={prosel} />
      ))}
    </Container>
  );
};

export default ForRent;
