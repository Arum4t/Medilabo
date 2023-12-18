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
              value={stateDatas.firstName}
              onChange={handleChange}
            />
            Last name
            <input
              type="text"
              name="lastName"
              value={stateDatas.lastName}
              onChange={handleChange}
            />
            Birthdate
            <input
              type="date"
              name="birthdate"
              value={stateDatas.birthdate}
              onChange={handleChange}
            />
            Gender
            <input
              type="text"
              name="gender"
              value={stateDatas.gender}
              onChange={handleChange}
            />
            Address
            <input
              type="text"
              name="address"
              value={stateDatas.address}
              onChange={handleChange}
            />
            Phone number
            <input
              type="text"
              name="phoneNumber"
              value={stateDatas.phoneNumber}
              onChange={handleChange}
            />
          </label>
          <button className="buttonGreen inputAddButton" type="submit">
            Modify
          </button>
        </form>
      </div>
      <div className="footer">
        <ButtonBack id="" route="/" text="back" />
      </div>
    </div>
  );
};

export default ModifyPatient;
