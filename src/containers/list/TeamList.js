import React from "react";
import Header from "../../components/Layout/Header";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {
  tableCellClasses,
} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
function TeamList() {
  const StyledTableCell = styled(TableCell)(
    ({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor:
          theme.palette.common.black,
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }),
  );

  const StyledTableRow = styled(TableRow)(
    ({ theme }) => ({
      "&:nth-of-type(odd)": {
        backgroundColor:
          theme.palette.action.hover,
      },
      // hide last border
      "&:last-child td, &:last-child th": {
        border: 0,
      },
    }),
  );

  function createData(name, calories, fat) {
    return {
      name,
      calories,
      fat,
    };
  }

  const rows = [
    createData(
      "Lý Minh Trí",
      4501104255,
      "laptopdienthoai1@gmail.com",
    ),
    createData(
      "Nguyễn Tiến Vương",
      4301104209,
      "NaN",
    ),
    createData("Tiêu Hoàng Tuấn", 4501104268, "tieuhoangtuan822001@gmail.com"),
    createData("Cupcake", 305, 3.7),
    createData("Gingerbread", 356, 16.0),
  ];
  return (
    <>
      <Header type="list" />
      <div
        style={{
          width: "100%",
          marginTop: "100px",
        }}
      >
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 700 }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  Name
                </StyledTableCell>
                <StyledTableCell align="right">
                  Student ID
                </StyledTableCell>
                <StyledTableCell align="right">
                  Email
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                  >
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.fat}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default TeamList;
