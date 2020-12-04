import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import "./all-time-topfans-list.component.scss";

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

function createData(ranking, username, total) {
  return { ranking, username, total };
}

const rows = [
  createData(1, "Hilman", 159),
  createData(2, "Adrian", 237),
  createData(3, "Darian", 262),
  createData(4, "Sam", 305),
  createData(5, "Douglas", 356),
];

const TopFanList = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ranking</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell>Total Point</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.username}>
              <TableCell component="th" scope="row">
                {row.ranking}
              </TableCell>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TopFanList;
