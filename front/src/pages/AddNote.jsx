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
      <div className="headerBlock">
        <Header />
      </div>
      <div className="inputPage">
        <form onSubmit={handleSubmit}>
          <label>
            <p>Notes</p>
            <textarea
              className="inputNote"
              type="text"
              name="note"
              value={state.note}
              onChange={handleChange}
            />
          </label>
          <button className="buttonGreen inputAddButton" type="submit">
            Add
          </button>
        </form>
      </div>
      <div className="footer">
        <ButtonBack
          id={patientId.id}
          route="/details/"
          text="Back to details"
        />
      </div>
    </div>
  );
};

export default AddNote;
