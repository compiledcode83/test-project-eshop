import React, { useEffect } from "react";
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
  // eslint-disable-next-line
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    props.rows.map((row) => (sum += row["Price"]));
    setSubTotal(sum);
  }, [subTotal, setSubTotal, props.rows]);

  return (
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
              {Object.keys(row).map((tt, idx2) => (
                <TableCell key={idx2}>{row[tt]}</TableCell>
              ))}
            </TableRow>
          ))}

          <TableRow>
            <TableCell>Subtotal</TableCell>
            <TableCell>{subTotal.toFixed(2)}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell>{(100 * props.Tax).toFixed(0)}%</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>{(subTotal * props.Tax + subTotal).toFixed(2)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
