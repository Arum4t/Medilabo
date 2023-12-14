import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Header from "../components/Header";
import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ButtonBack from "../components/ButtonBack";

const AddNote = () => {
  const patientId = useParams();

  const navigate = useNavigate();

  const [patientDatas, setPatientDatas] = useState([]);

  useEffect(() => {
    getPatients();
  }, []);

  const getPatients = async () => {
    const todo = await axios.get("/patients/" + patientId.id);
    setPatientDatas(todo.data);
  };

  const [state, setState] = useState({
    patId: "",
    patient: "",
    note: "",
  });

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
      patient: patientDatas.firstName,
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
        <ButtonBack
          id={patientId.id}
          route="/details/"
          text="back to details"
        />
      </form>
    </div>
  );
};

export default AddNote;
