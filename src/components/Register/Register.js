import React from "react";
import { Paper, TextField, makeStyles, Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

// styling material-ui elements
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "40px 50px 10px 50px",
    padding: "20px",
  },
  inputField: {
    width: "100%",
    marginBottom: "60px",
  },
}));

export default function Register() {
  const classes = useStyles();
  const history = useHistory();
  const [data, setData] = useState({
    userName: "",
    Email: "",
    Password: "",
    Phone: "",
    Address: "",
  });

  function HandleChange(e) {
    data[e.target.getAttribute("id")] = e.target.value;
    setData({ ...data });
  }

  function HandleSubmit(e) {
    e.preventDefault();
    console.log(data);
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("userName", data.userName);
    localStorage.setItem("Password", data.Password);
    localStorage.setItem("Phone", data.Phone);
    localStorage.setItem("Address", data.Address);
    localStorage.setItem("Email", data.Email);
    history.push("/login");
  }

  return (
    <form onSubmit={HandleSubmit}>
      <Paper elevation={3} className={classes.root}>
        <div className="row">
          <div className="col-6">
            <TextField
              className={classes.inputField}
              label="User Name"
              id="userName"
              required
              type="text"
              variant="filled"
              onChange={HandleChange}
            />
          </div>
          <div className="col-6">
            <TextField
              className={classes.inputField}
              label="Phone Number"
              id="Phone"
              required
              type="text"
              variant="filled"
              onChange={HandleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <TextField
              className={classes.inputField}
              label="Email"
              id="Email"
              required
              type="email"
              variant="filled"
              onChange={HandleChange}
            />
          </div>
          <div className="col-6">
            <TextField
              className={classes.inputField}
              label="Password"
              id="Password"
              required
              type="password"
              variant="filled"
              onChange={HandleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <TextField
              className={classes.inputField}
              label="Home Address"
              id="Address"
              required
              type="address"
              variant="filled"
              onChange={HandleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4" />
          <div className="col-4">
            <Button
              type="submit"
              className={classes.inputField}
              variant="contained"
              color="primary">
              Register
            </Button>
          </div>
        </div>
      </Paper>
    </form>
  );
}
