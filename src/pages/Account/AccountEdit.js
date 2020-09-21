import React, { useState } from "react";
import {
  Paper,
  TextField,
  makeStyles,
  Grid,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import { Save } from "@material-ui/icons";

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
  const [data, setData] = useState({
    userName: "",
    Email: "",
    Address: "",
    Phone: "",
    newPassword: "",
  });

  function HandleChange(e) {
    data[e.target.getAttribute("id")] = e.target.value;
    setData({ ...data });
  }

  function HandleSubmit(e) {
    e.preventDefault();
    if (data.userName !== "" && data.userName.length < 11)
      localStorage.setItem("userName", data.userName);
    else if (data.userName.length > 10) {
      alert("username is too long");
    }
    if (data.Phone !== "") localStorage.setItem("Phone", data.Phone);

    if (data.Address !== "") localStorage.setItem("Address", data.Address);

    if (data.Email !== "") localStorage.setItem("Email", data.Email);

    if (
      data.newPassword !== "" &&
      data.newPassword !== localStorage.getItem("Password")
    )
      localStorage.setItem("Password", data.newPassword);
    window.location.reload();
  }

  return (
    <form onSubmit={HandleSubmit}>
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
                label="Name: max length 20 charachters"
                variant="filled"
                defaultValue={localStorage.getItem("userName")}
                id="userName"
                onChange={HandleChange}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                className={classes.txtField}
                label="Email"
                variant="filled"
                defaultValue={localStorage.getItem("Email")}
                id="Email"
                onChange={HandleChange}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                className={classes.txtField}
                label="Address"
                variant="filled"
                defaultValue={localStorage.getItem("Address")}
                id="Address"
                onChange={HandleChange}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                className={classes.txtField}
                label="Phone"
                variant="filled"
                defaultValue={localStorage.getItem("Phone")}
                id="Phone"
                onChange={HandleChange}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                className={classes.txtField}
                label="Old Password"
                variant="filled"
                defaultValue={localStorage.getItem("Password")}
                InputProps={{
                  readOnly: true,
                }}
                onChange={HandleChange}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                className={classes.txtField}
                label="New Password"
                variant="filled"
                defaultValue=""
                id="newPassword"
                onChange={HandleChange}
              />
            </Grid>
            <Grid item xs={11}>
              <ButtonGroup variant="contained" color="secondary">
                <Button type="submit">
                  <Save />
                  save
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </form>
  );
}
