import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Header from "../components/Header";
import { NavLink, useNavigate } from "react-router-dom";
import ButtonBackHome from "../components/ButtonBackHome";
import { useParams } from "react-router-dom";

const AddNote = () => {
  const [state, setState] = useState({
    note: "",
  });

  const patId = useParams();

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
      note: state.note,
    };
    axios.post("/notes/" + patId.id, noteData).then((response) => {
      console.log(response.status, response.data);
    });
    navigate("/details/" + patId.id);
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
        <ButtonBackHome />
      </form>
    </div>
  );
};

export default AddNote;
