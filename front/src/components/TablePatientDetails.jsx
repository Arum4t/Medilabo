import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";

export default function TablePatientDetails({ risksDatas, notesDatas }) {
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
}
