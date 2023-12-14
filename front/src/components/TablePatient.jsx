import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ButtonDeletePatient from "./ButtonDeletePatient";

export default function TablePatient({ patientDatas }) {
  useEffect(() => {}, [patientDatas]);

  const rows = patientDatas;

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
            <TableCell>Details</TableCell>
            <TableCell>Modify</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.patientListId}
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
                <NavLink to={"/details/" + row.patientListId}>Details</NavLink>
              </TableCell>
              <TableCell>
                <NavLink
                  to={{
                    pathname: "/modify/" + row.patientListId,
                  }}
                  state={{ row }}
                >
                  Modify
                </NavLink>
              </TableCell>
              <TableCell>
                <ButtonDeletePatient id={row.patientListId} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
