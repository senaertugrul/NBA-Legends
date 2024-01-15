import React from "react";
import Form from "react-bootstrap/Form";

const FormComp = ({ handleChange }) => {
  return (
    <Form.Control
      placeholder="Search a player"
      className="w-50 m-auto"
      onChange={handleChange}
      type="search"
    
    />
  );
};

export default FormComp;
