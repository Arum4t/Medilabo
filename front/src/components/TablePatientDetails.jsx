import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { grey } from "@mui/material/colors";

export default function TablePatientDetails({ risksDatas, notesDatas }) {
  useEffect(() => {}, [risksDatas, notesDatas]);

  return (
    risksDatas[0] &&
    notesDatas && (
      <TableContainer component={Paper}>
        <div className="patientDetails">Patient details</div>
        <Table
          sx={{ minWidth: 300, width: "50%", mx: "auto" }}
          aria-label="simple table"
          title="Patient Details"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">Risk</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key={risksDatas[0].patId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {risksDatas[0].age}
              </TableCell>
              <TableCell align="center">{risksDatas[0].risk}</TableCell>
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
