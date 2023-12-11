import React from "react";
import TablePatient from "../components/TablePatient";
import { useEffect, useState } from "react";
import axios from "axios";
import ButtonAddPatient from "../components/ButtonAddPatient";
import Header from "../components/Header";

function Main() {
  const [patientDatas, setPatientDatas] = useState([]);

  useEffect(() => {
    getPatients();
  }, []);

  const getPatients = async () => {
    const todo = await axios.get("/patients");
    setPatientDatas(todo.data);
  };

  return (
    <div>
      <Header />
      <ButtonAddPatient />
      <TablePatient patientDatas={patientDatas} />
      <div></div>
    </div>
  );
}

export default Main;
