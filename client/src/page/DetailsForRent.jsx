import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { generaIdlUrl, queryIdData } from "../utils/queryApi";

const DetailsForRent = () => {
  const [details, setDetails] = useState([]);

  const { id } = useParams();
  const fetchPropertyDetails = async () => {
    const details = await queryIdData(
      `${generaIdlUrl}/properties/detail?externalID=${id}`
    );
    setDetails(details);
  };
  useEffect(() => {
    fetchPropertyDetails();
  }, []);

  console.log(id);
  return <h1>hy</h1>;
};

export default DetailsForRent;
