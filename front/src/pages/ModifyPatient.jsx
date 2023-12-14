import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Header from "../components/Header";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ButtonBack from "../components/ButtonBack";
import { useParams } from "react-router-dom";

const ModifyPatient = () => {
  const location = useLocation();
  const { state } = location;
  const patId = useParams();

  const [stateDatas, setStateDatas] = useState({
    firstName: state.row.firstName,
    lastName: state.row.lastName,
    birthdate: state.row.birthdate,
    gender: state.row.gender,
    address: state.row.address,
    phoneNumber: state.row.phoneNumber,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setStateDatas({
      // Copie de stateDatas
      ...stateDatas,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("/patients/" + patId.id, stateDatas);
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
            value={stateDatas.firstName}
            onChange={handleChange}
          />
          LastName
          <input
            type="text"
            name="lastName"
            value={stateDatas.lastName}
            onChange={handleChange}
          />
          birthdate
          <input
            type="date"
            name="birthdate"
            value={stateDatas.birthdate}
            onChange={handleChange}
          />
          gender
          <input
            type="text"
            name="gender"
            value={stateDatas.gender}
            onChange={handleChange}
          />
          address
          <input
            type="text"
            name="address"
            value={stateDatas.address}
            onChange={handleChange}
          />
          phoneNumber
          <input
            type="text"
            name="phoneNumber"
            value={stateDatas.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Modify</button>
        <ButtonBack id="" route="/" text="back" />
      </form>
    </div>
  );
};

export default ModifyPatient;
