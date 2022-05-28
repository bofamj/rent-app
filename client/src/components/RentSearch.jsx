import React, { useState, useEffect } from "react";
import { Form, option, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { filterData } from "../utils/data";

const RentSearch = ({ forRent, forRentSort, forRentCopy }) => {
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
    sort: "",
  });
  const [sortName, setSortName] = useState(sort.map((item) => item.name));
  const [name, setName] = useState([]);

  //console.log(sortName);
  const handelChange = (e) => {
    // console.log(e.target);
    setSearch((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handelSubmit = () => {
    let updatedList = forRentCopy;

    //*sort by lowest  price

    if (search.sort == "Highest Price") {
      updatedList.sort(function (a, b) {
        return a.price - b.price;
      });
    }
    //*filter by max price

    if (search.minPrice !== "") {
      updatedList = updatedList.filter(
        (items) => items.price < search.minPrice
      );
      forRentSort(updatedList);
    }

    //*filter by roms
    if (search.roomsMin == "") {
      forRentSort(updatedList);
    } else {
      updatedList = updatedList.filter(
        (items) => items.rooms == search.roomsMin
      );
      forRentSort(updatedList);
    }

    //*filter by bath rome
    if (search.bathsMin == "") {
      forRentSort(updatedList);
    } else {
      updatedList = updatedList.filter(
        (items) => items.baths == search.bathsMin
      );
      forRentSort(updatedList);
    }

    /* if (updatedList.length > 0) {
          /* forSaleSort(updatedList);
        } else {
          return;
        }  
      }*/
    //forSaleSort(updatedList);
  };

  const handelReset = () => {
    forRentSort(forRentCopy);
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
        name={filterData[2].queryName}
        onChange={handelChange}
      >
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
      <Button type="button" className="btn p-2" onClick={handelReset}>
        Reset
      </Button>
    </Container>
  );
};

export default RentSearch;
