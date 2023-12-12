import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Header from "../components/Header";
import { NavLink, useNavigate } from "react-router-dom";
import ButtonBackHome from "../components/ButtonBackHome";

const AddPatient = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    birthdate: "",
    gender: "",
    address: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      firstName: state.firstName,
      lastName: state.lastName,
      birthdate: state.birthdate,
      gender: state.gender,
      address: state.address,
      phoneNumber: state.phoneNumber,
    };
    axios.post("/patients", userData).then((response) => {
      console.log(response.status, response.data);
    });
    navigate("/");
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <label>
          firstName
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
          />
          LastName
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
          />
          birthdate
          <input
            type="date"
            name="birthdate"
            value={state.birthdate}
            onChange={handleChange}
          />
          gender
          <input
            type="text"
            name="gender"
            value={state.gender}
            onChange={handleChange}
          />
          address
          <input
            type="text"
            name="address"
            value={state.address}
            onChange={handleChange}
          />
          phoneNumber
          <input
            type="text"
            name="phoneNumber"
            value={state.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add</button>
        <ButtonBackHome />
      </form>
    </div>
  );
};

export default AddPatient;
