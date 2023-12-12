import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Header from "../components/Header";
import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ButtonBackDetails from "../components/ButtonBackDetails";

const AddNote = () => {
  const [state, setState] = useState({
    patId: "",
    patient: "",
    note: "",
  });

  const patientId = useParams();

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
    const noteData = {
      patId: patientId.id,
      patient: "",
      note: state.note,
    };
    axios.post("/notes", noteData).then((response) => {
      console.log(response.status, response.data);
    });
    navigate("/details/" + patientId.id);
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <label>
          Notes
          <input
            type="text"
            name="note"
            value={state.note}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add</button>
        <ButtonBackDetails id={patientId.id} />
      </form>
    </div>
  );
};

export default AddNote;
