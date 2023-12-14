import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TablePatientDetails from "../components/TablePatientDetails";
import ButtonAdd from "../components/ButtonAdd";
import ButtonBack from "../components/ButtonBack";

const Details = () => {
  const [risksDatas, setRisksDatas] = useState([]);
  const [notesDatas, setNotesDatas] = useState([]);

  const patId = useParams();

  const getRisks = async () => {
    const todo = await axios.get("/risks/" + patId.id);
    setRisksDatas(todo.data);
  };

  const getNotes = async () => {
    const todo = await axios.get("/notes/" + patId.id);
    setNotesDatas(todo.data);
  };

  useEffect(() => {
    getRisks();
    getNotes();
  }, []);

  useEffect(() => {}, [risksDatas, notesDatas]);
  return (
    <div>
      <ButtonAdd id={patId.id} route="/addNote/" text="Add a note" />
      <TablePatientDetails risksDatas={risksDatas} notesDatas={notesDatas} />
      <ButtonBack id="" route="/" text="Back" />
    </div>
  );
};

export default Details;
