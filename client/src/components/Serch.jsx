import React, { useState, useEffect } from "react";
import { Form, option, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { filterData } from "../utils/data";

const Serch = ({ forSale, forSaleSort, test }) => {
  const [minPrice, setMinPrice] = useState(filterData[0].items);
  const [maxPrice, setMaxPrice] = useState(filterData[1].items);
  const [sort, setSort] = useState(filterData[2].items);
  const [roomsMin, setRoomsMin] = useState(filterData[3].items);
  const [bathsMin, setBathsMin] = useState(filterData[4].items);
  const [search, setSearch] = useState({
    minPrice: "",
    maxPrice: "",
    roomsMin: "",
    bathsMin: "",
  });
  const [sortName, setSortName] = useState(sort.map((item) => item.name));
  const [name, setName] = useState([]);

  //console.log(sortName);
  const handelChange = (e) => {
    console.log(e.target);
    setSearch((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handelSubmit = () => {
    let updatedList = test;

    //*filter by max price
    if (search.maxPrice == "all") {
      updatedList = test;
      //forSaleSort(updatedList);
      console.log(updatedList);
    }
    if (search.maxPrice !== "") {
      updatedList = updatedList.filter(
        (items) => items.price < search.maxPrice
      );
      forSaleSort(updatedList);
    }

    //*filter by roms
    if (search.roomsMin == "") {
      forSaleSort(updatedList);
    } else {
      updatedList = updatedList.filter(
        (items) => items.rooms == search.roomsMin
      );
      forSaleSort(updatedList);
    }

    //*filter by bath rome
    if (search.bathsMin == "") {
      forSaleSort(updatedList);
    } else {
      updatedList = updatedList.filter(
        (items) => items.baths == search.bathsMin
      );
      forSaleSort(updatedList);
      console.log(updatedList);
    }
    //console.log(updatedList);
    /* if (sortName[0]) {
      updatedList = updatedList.sort(function (a, b) {
        return b.price - a.price;
      });
    } */
    /* if (updatedList.length > 0) {
        forSaleSort(updatedList);
      } else {
        return;
      } 
    }*/
    //forSaleSort(updatedList);
  };

  const handelReset = () => {
    forSaleSort(test);
    setSearch({
      minPrice: "",
      maxPrice: "",
      roomsMin: "",
      bathsMin: "",
    });
  };
  useEffect(() => {
    handelSubmit();
  }, [search]);

  return (
    <Container className="d-flex ">
      <Form.Select
        className="me-1"
        aria-label="Default select example"
        name={filterData[0].queryName}
        onChange={handelChange}
      >
        <option>Min Price(USD)</option>
        {minPrice.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </Form.Select>
      <Form.Select
        className="me-1"
        aria-label="Default select example"
        name={filterData[1].queryName}
        onChange={handelChange}
      >
        <option>Max Price(USD)</option>
        {maxPrice.map((item, index) => (
          <option key={index} value={item.value} name={item.name}>
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
      <Form.Select
        className="me-1"
        aria-label="Default select example"
        name={filterData[3].queryName}
        onChange={handelChange}
      >
        <option>Rooms</option>
        {roomsMin.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </Form.Select>
      <Form.Select
        aria-label="Default select example"
        name={filterData[4].queryName}
        onChange={handelChange}
      >
        <option>Baths</option>
        {bathsMin.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </Form.Select>
      <Button type="button" className="btn" onClick={handelReset}>
        reset
      </Button>
    </Container>
  );
};

export default Serch;
