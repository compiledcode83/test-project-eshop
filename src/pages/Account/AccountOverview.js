import React from "react";
import {
  Paper,
  TextField,
  makeStyles,
  Grid,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Edit } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    margin: "100px auto",
    padding: "30px",
  },
  txtField: {
    width: "100%",
    margin: "20px 10px",
  },
}));

export default function AccountOverview() {
  const classes = useStyles();

  return (
    <div className="container">
      <Paper elevation={10} className={classes.paper}>
        <Grid
          container
          alignContent="center"
          alignItems="center"
          direction="row"
          justify="space-evenly">
          <Grid item xs={5}>
            <TextField
              className={classes.txtField}
              label="Name"
              variant="filled"
              InputProps={{
                readOnly: true,
              }}
              defaultValue={localStorage.getItem("userName")}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              className={classes.txtField}
              label="Email"
              variant="filled"
              InputProps={{
                readOnly: true,
              }}
              defaultValue={localStorage.getItem("Email")}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.txtField}
              label="Address"
              variant="filled"
              InputProps={{
                readOnly: true,
              }}
              defaultValue={localStorage.getItem("Address")}
            />
          </Grid>
          <Grid item xs={"auto"}>
            <Link to="/account/edit" className="nav-link">
              <ButtonGroup variant="contained" color="secondary">
                <Button>
                  <Edit />
                  Change Password
                </Button>
              </ButtonGroup>
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.txtField}
            label="Number of orders"
            variant="filled"
            InputProps={{
              readOnly: true,
            }}
            defaultValue={localStorage.getItem("numberOfOrders")}
          />
        </Grid>
      </Paper>
    </div>
  );
}
