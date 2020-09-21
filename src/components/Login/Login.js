import React from "react";
import { Paper, TextField, makeStyles, Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";

// styling material-ui elements
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "120px 50px 50px 50px",
    padding: "20px",
  },
  inputField: {
    width: "60%",
    marginBottom: "60px",
  },
}));

export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const [data, setData] = useState({ Email: "", Password: "" });

  function HandleChange(e) {
    data[e.target.getAttribute("id")] = e.target.value;
    setData({ ...data });
  }

  function HandleSubmit(e) {
    e.preventDefault();
    if (
      localStorage.getItem("Email") === data.Email &&
      localStorage.getItem("Password") === data.Password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      alert("success!");
      history.push("/");
      window.location.reload(true);
    } else {
      alert("invalid email or password or this email isn't registered yet");
    }
  }

  return (
    <form onSubmit={HandleSubmit}>
      <Paper elevation={3} className={classes.root}>
        <TextField
          className={classes.inputField}
          label="Email"
          required
          type="email"
          id="Email"
          variant="filled"
          onChange={HandleChange}
        />
        <TextField
          className={classes.inputField}
          label="Password"
          required
          type="password"
          id="Password"
          variant="filled"
          onChange={HandleChange}
        />
        <Button
          type="submit"
          className={classes.inputField}
          variant="contained"
          color="primary">
          Login
        </Button>
      </Paper>
    </form>
  );
}
