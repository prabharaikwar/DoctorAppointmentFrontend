import React, { useState } from "react";
// import { Form, Row, Col,Button } from "react-bootstrap";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa"; 

const DoctorSearch = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <Form inline={"true"}>
    <InputGroup>
      <Button onClick={handleSearch} variant="bg-light text-secondary">
        <FaSearch /> 
      </Button>
      <FormControl
        type="text"
        placeholder="Search doctor"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </InputGroup>
  </Form>
  );
};

export default DoctorSearch;
