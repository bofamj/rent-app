import React, { useState } from "react";
import { Form, option, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { filterData } from "../utils/data";

const Serch = ({ forSale, forSaleSort }) => {
  const [minPrice, setMinPrice] = useState(filterData[0].items);
  const [maxPrice, setMaxPrice] = useState(filterData[1].items);
  const [sort, setSort] = useState(filterData[2].items);
  const [roomsMin, setRoomsMin] = useState(filterData[3].items);
  const [bathsMin, setBathsMin] = useState(filterData[4].items);
  const [search, setSearch] = useState("");
  console.log(minPrice);

  const handelSubmit = () => {
    console.log(search);

    const sort = forSale.filter((items) => items.price < search);
    console.log(forSale);
    forSaleSort(sort);
  };

  return (
    <Container className="d-flex ">
      <Form.Select className="me-1" aria-label="Default select example">
        <option>Min Price(USD)</option>
        {minPrice.map((item, index) => (
          <option key={index} value={item.value}>
            {item.value}
          </option>
        ))}
      </Form.Select>
      <Form.Select
        className="me-1"
        aria-label="Default select example"
        onChange={(e) => setSearch(e.target.value)}
      >
        <option>Max Price(USD)</option>
        {maxPrice.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </Form.Select>
      <Form.Select className="me-1" aria-label="Default select example">
        <option>Sort</option>
        {sort.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </Form.Select>
      <Form.Select className="me-1" aria-label="Default select example">
        <option>Rooms</option>
        {roomsMin.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </Form.Select>
      <Form.Select aria-label="Default select example">
        <option>Baths</option>
        {bathsMin.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </Form.Select>
      <Button type="button" className="btn" onClick={handelSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default Serch;
