import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function ItemsTable(props) {
  const classes = useStyles();
  const [total, setTotal] = useState(0);

  return (
    <div className="container">
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {props.headers.map((txt, idx) => (
                <TableCell key={idx}>{txt}</TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {props.rows.map((row, idx) => (
              <TableRow key={idx}>
                {props.headers.map((txt, idx2) => (
                  <TableCell key={idx2}>{row.txt}</TableCell>
                ))}
              </TableRow>
            ))}

            <TableRow>
              <TableCell>Subtotal</TableCell>
              <TableCell>{10}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Tax</TableCell>
              <TableCell>{props.Tax * 100}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell>{10}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
