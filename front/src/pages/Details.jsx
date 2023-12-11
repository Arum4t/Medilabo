import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Details = () => {
  const [risksDatas, setRisksDatas] = useState([]);
  const [notesDatas, setNotesDatas] = useState([]);

  const patId = useParams();
  console.log(patId);
  console.log(risksDatas);

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
    risksDatas[0] &&
    notesDatas && (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Age</TableCell>
              <TableCell>Risk</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key={risksDatas[0].patId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {risksDatas[0].age}
              </TableCell>
              <TableCell>{risksDatas[0].risk}</TableCell>
              <TableCell>
                {notesDatas.map((n, index) => (
                  <p key={index}>- {n}</p>
                ))}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
};

export default Details;
