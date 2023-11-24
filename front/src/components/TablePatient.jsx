import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

export default function TablePatient({ patientDatas, noteDatas }) {
  useEffect(() => {}, [patientDatas]);
  useEffect(() => {}, [noteDatas]);

  const addPatientNotes = (data) => {
    const noteContainer = data.map((patient) => {
      return { ...patient, note: [] };
    });
    return noteContainer;
  };

  const setPatientNotes = (pDatas, nDatas) => {
    if (pDatas) {
      const newPatientDatas = addPatientNotes(pDatas);

      newPatientDatas.map((patient) => {
        for (let note in nDatas) {
          if (Number(note) === patient.patientListId) {
            patient.note = nDatas[note];
          }
        }
      });
      return newPatientDatas;
    }
  };

  const rows = setPatientNotes(patientDatas, noteDatas);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>LastName</TableCell>
            <TableCell>FirstName</TableCell>
            <TableCell>birthdate</TableCell>
            <TableCell>gender</TableCell>
            <TableCell>address</TableCell>
            <TableCell>phoneNumber</TableCell>
            <TableCell>note</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.lastName}
              </TableCell>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.birthdate}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
              <TableCell>
                {row.note.map((n) => (
                  <p>- {n}</p>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
