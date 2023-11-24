import React from "react";
import TablePatient from "./TablePatient";
import { useEffect, useState } from "react";
import axios from "axios";

function Main() {
  const [patientDatas, setPatientDatas] = useState([]);

  useEffect(() => {
    getPatients();
  }, []);

  const getPatients = async () => {
    const todo = await axios.get("http://localhost:8080/patients");
    setPatientDatas(todo.data);
  };

  const [noteDatas, setNoteDatas] = useState([]);
  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const todo2 = await axios.get("http://localhost:8081/notes/sort");
    setNoteDatas(todo2.data);
  };

  return (
    <div>
      <TablePatient patientDatas={patientDatas} noteDatas={noteDatas} />
      <div></div>
    </div>
  );
}

export default Main;
