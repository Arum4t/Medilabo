import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Header from "../components/Header";
import { NavLink, useNavigate } from "react-router-dom";
import ButtonBack from "../components/ButtonBack";

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
      <div className="headerBlock">
        <Header />
      </div>
      <div className="inputPage">
        <form onSubmit={handleSubmit}>
          <label>
            First name
            <input
              type="text"
              name="firstName"
              value={state.firstName}
              onChange={handleChange}
            />
            Last name
            <input
              type="text"
              name="lastName"
              value={state.lastName}
              onChange={handleChange}
            />
            Birthdate
            <input
              type="date"
              name="birthdate"
              value={state.birthdate}
              onChange={handleChange}
            />
            Gender
            <input
              type="text"
              name="gender"
              value={state.gender}
              onChange={handleChange}
            />
            Address
            <input
              type="text"
              name="address"
              value={state.address}
              onChange={handleChange}
            />
            Phone number
            <input
              type="text"
              name="phoneNumber"
              value={state.phoneNumber}
              onChange={handleChange}
            />
          </label>
          <button className="buttonGreen inputAddButton" type="submit">
            Add
          </button>
        </form>
      </div>
      <div className="footer">
        <ButtonBack id="" route="/" text="Back" />
      </div>
    </div>
  );
};

export default AddPatient;
