import * as React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ButtonDeletePatient from "./ButtonDeletePatient";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { TableHead } from "@mui/material";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}
TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function TablePatient({ patientDatas }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const rows = patientDatas;
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {}, [patientDatas]);
  return (
    <TableContainer className="tablePatient" component={Paper}>
      <Table
        sx={{
          minWidth: 500,
          maxWidth: 3 / 4,
          mx: "auto",
        }}
        aria-label="custom pagination table"
      >
        <TableHead>
          <TableRow>
            <TableCell> LastName</TableCell>
            <TableCell>First name</TableCell>
            <TableCell align="center">Birthdate</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Phone number</TableCell>
            <TableCell align="center">Details</TableCell>
            <TableCell align="center">Modify</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.patientListId}>
              <TableCell component="th" scope="row">
                {row.lastName}
              </TableCell>
              <TableCell style={{ width: 160 }}>{row.firstName}</TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {row.birthdate}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {row.gender}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {row.address}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {row.phoneNumber}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                <NavLink
                  className={"buttonBlue"}
                  to={"/details/" + row.patientListId}
                >
                  Details
                </NavLink>
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                <NavLink
                  className={"buttonBlue"}
                  to={{
                    pathname: "/modify/" + row.patientListId,
                  }}
                  state={{ row }}
                >
                  Modify
                </NavLink>
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                <ButtonDeletePatient id={row.patientListId} />
              </TableCell>
            </TableRow>
          ))}
          {/* {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )} */}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
