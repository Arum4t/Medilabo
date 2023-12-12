import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Header from "../components/Header";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ButtonBackHome from "../components/ButtonBackHome";
import { useParams } from "react-router-dom";

const ModifyPatient = () => {
  const location = useLocation();
  const { state } = location;

  const [states, setStates] = useState({
    firstName: "",
    lastName: "",
    birthdate: "",
    gender: "",
    address: "",
    phoneNumber: "",
  });

  const patId = useParams();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setStates({
      ...states,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      firstName: states.firstName,
      lastName: states.lastName,
      birthdate: states.birthdate,
      gender: states.gender,
      address: states.address,
      phoneNumber: states.phoneNumber,
    };
    axios.put("/patients/" + patId.id, userData);
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
            defaultValue={state.firstName}
            onChange={handleChange}
          />
          LastName
          <input
            type="text"
            name="lastName"
            value={states.lastName}
            onChange={handleChange}
          />
          birthdate
          <input
            type="date"
            name="birthdate"
            value={states.birthdate}
            onChange={handleChange}
          />
          gender
          <input
            type="text"
            name="gender"
            value={states.gender}
            onChange={handleChange}
          />
          address
          <input
            type="text"
            name="address"
            value={states.address}
            onChange={handleChange}
          />
          phoneNumber
          <input
            type="text"
            name="phoneNumber"
            value={states.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add</button>
        <ButtonBackHome />
      </form>
    </div>
  );
};

export default ModifyPatient;
